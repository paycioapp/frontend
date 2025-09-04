"use client";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { FileClip } from "../icons/Icons";
import { useTranslations } from "next-intl";

export type FieldConfig = {
    name: string;
    type: "text" | "textarea" | "date" | "time" | "file" | "number" | "select";
    placeholder: string;
    options?: { label: string; value: string }[];
};

type Props<T> = {
    initialValues: T;
    validate: (values: T) => Partial<Record<keyof T, string>>;
    onSubmit: (values: T) => Promise<void>;
    fields: FieldConfig[];
    loading?: boolean;};

const ReusableForm = <T extends Record<string, unknown>>({initialValues,validate,onSubmit,fields,loading = false,}: Props<T>) => {
    const t = useTranslations();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>("");

    const formik = useFormik<T>({
        initialValues,
        validate,
        onSubmit: async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
            setFileName("");
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileSizeInMB = file.size / (1024 * 1024);
            if (fileSizeInMB < 0.5 || fileSizeInMB > 2) {
                formik.setFieldError("resume", "File size must be between 512 KB and 2 MB");
                setFileName("");
            } else {
                formik.setFieldValue("resume", file);
                setFileName(file.name);
                formik.setFieldError("resume", ""); // clear error
            }
        }
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {fields.map(({options, name, type, placeholder }) => {
                if (type === "file") {
                    const error = formik.errors[name];
                    const touched = formik.touched[name];
                    const errorMessage = typeof error === "string" ? error : undefined;

                    return (
                        <div key={name} className="mb-6 md:mb-10">
                            <div className="flex items-center justify-between space-x-4 mt-1 block w-full px-3 py-2 border-b bg-transparent placeholder-gray-400 focus:outline-none focus:border-[#180cb2] sm:text-sm md:text-lg !font-noto">
                                <input
                                    ref={fileInputRef}
                                    id={name}
                                    name={name}
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                />
                                <div
                                    className="flex items-center self-center gap-5 justify-between"
                                    onClick={handleFileClick}
                                >
                                    <div
                                        style={{ color: "#9DA5B2" }}
                                        className="flex justify-center text-sm font-medium !font-noto"
                                    >
                                        Upload Resume
                                    </div>
                                    <span
                                        className="text-sm truncate max-w-[300px]"
                                        style={{ color: "#9DA5B2" }}
                                    >
                                        {fileName || "No file selected"}
                                    </span>
                                </div>
                                <button type="button" onClick={handleFileClick}>
                                    <FileClip />
                                </button>
                            </div>
                            {touched && errorMessage && (
                                <p className="text-red-500 text-sm">{errorMessage}</p>
                            )}
                        </div>
                    );
                }
                if (type === "select") {
                    const error = formik.errors[name];
                    const touched = formik.touched[name];
                    const errorMessage = typeof error === "string" ? error : undefined;
                
                    return (
                        <div key={name} className="mb-10">
                            <select
                                id={name}
                                name={name}
                                value={formik.values[name] as string | number | readonly string[] | undefined}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-[#180cb2] sm:text-sm md:text-lg font-outfit"
                            >
                                <option value="" disabled>{placeholder}</option>
                                {options?.map((option,index) => (
                                    <option key={index+1} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            {touched && errorMessage && (
                                <p className="text-red-500 text-sm">{errorMessage}</p>
                            )}
                        </div>
                    );
                }
                
                const Component = type === "textarea" ? "textarea" : "input";
                const error = formik.errors[name];
                const touched = formik.touched[name];
                const errorMessage = typeof error === "string" ? error : undefined;

                return (
                    <div key={name} className="mb-10">
                        <Component
                            id={name}
                            name={name}
                            type={type}
                            value={formik.values[name] as string | number | readonly string[] | undefined}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder={placeholder}
                            className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-[#180cb2] sm:text-sm md:text-lg font-outfit"
                            rows={type === "textarea" ? 4 : undefined}
                            inputMode={type === "number" ? "numeric" : undefined}
                            pattern={type === "number" ? "\\d*" : undefined}
                            onKeyDown={(e) => {
                                if (
                                    type === "number" &&
                                    !/[0-9]/.test(e.key) &&
                                    e.key !== "Backspace" &&
                                    e.key !== "Tab" &&
                                    e.key !== "ArrowLeft" &&
                                    e.key !== "ArrowRight"
                                ) {
                                    e.preventDefault();
                                }
                            }}
                        />
                        {touched && errorMessage && (
                            <p className="text-red-500 text-sm">{errorMessage}</p>
                        )}
                    </div>
                );
            })}

            <button
                type="submit"
                disabled={loading}
                className="bg-[#180CB2] text-white py-3 px-10 rounded-4xl font-outfit transition-all"
            >
                {loading ? t('form_submiting') : t('form_submit')}
            </button>
        </form>
    );
};

export default ReusableForm;
