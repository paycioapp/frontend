import { UCPI_REQUEST } from "@/lib/API";
import usePost from "@/lib/useFetch";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import { CloseIcon } from "../icons/Icons";
import { useTranslations } from "next-intl";

type UCPIRequestFormProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
interface FormType {
    businessName: string;
    website: string;
    country: string;
    email: string;
    phone: string;
    telegram: string;
    description: string;
    [key: string]: string;
}

const defaultForm: FormType = {
    businessName: "",
    website: "",
    country: "",
    email: "",
    phone: "",
    telegram: "",
    description: "",
};
const UCPIRequestForm = ({ setOpen, open }: UCPIRequestFormProps) => {
    const t = useTranslations();
    const [formData, setFormData] = useState<FormType>(defaultForm);
    const [touched, setTouched] = useState<{ [K in keyof FormType]?: boolean }>({});
    const [formErrors, setFormErrors] = useState<Partial<FormType>>({});
    const { loading, postData } = usePost();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i
    const fieldLabelMap: Record<keyof FormType, string> = {
        businessName: t("ucpiprotocal_request_label1"),
        website: t("ucpiprotocal_request_label2"),
        country: t("ucpiprotocal_request_label3"),
        email: t("ucpiprotocal_request_label4"),
        phone: t("ucpiprotocal_request_label6"),
        telegram: t("ucpiprotocal_request_label5"),
        description: t("ucpiprotocal_request_label7"),
    };
    const validate = (fieldName?: keyof FormType) => {
        console.log(fieldName)
        const errors: Partial<FormType> = {};

        const checkField = (name: keyof FormType) => {
            const value = formData[name].trim();
            const label = fieldLabelMap[name];
            const isOptional = name === "telegram"; // make telegram optional

            if (!value && !isOptional) {
                errors[name] = `${label} ${t("form_error_required")}`;
            } else if (name === "email" && value && !emailRegex.test(value)) {
                errors[name] = t('form_error_invalid_email');
            }
            else if (name === "website" && value && !urlRegex.test(value)) {
                errors[name] = t('form_error_invalid_url');
            } else if (name === "description" && value && value.length > 500) {
                errors[name] = t('form_error_description_length');
            }
        };

        if (fieldName) {
            checkField(fieldName);
        } else {
            (Object.keys(formData) as (keyof FormType)[]).forEach(checkField);
        }

        return errors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
        setTouched((prev) => ({ ...prev, [name]: true }));

        const newErrors = validate(name as keyof FormType);
        setFormErrors((prev) => ({ ...prev, ...newErrors }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const newErrors = validate(name as keyof FormType);
        setFormErrors((prev) => ({ ...prev, ...newErrors }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched(
            Object.keys(formData).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {} as { [K in keyof FormType]: boolean })
        );
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const response = await postData(UCPI_REQUEST, formData);
        if (response?.responsecode === 200) {
            toast.success(response.message || "Submitted successfully!");
            setOpen(false);
            setFormData(defaultForm);
            setFormErrors({});
            setTouched({});
        } else {
            toast.error(response?.message || "Submission failed.");
        }

    };

    // Live validation effect (if needed for re-validation on touch + change)
    useEffect(() => {
        const allTouchedFields = Object.entries(touched)
            .filter(([, isTouched]) => isTouched)
            .map(([field]) => field as keyof FormType);

        const errors: Partial<FormType> = {};
        allTouchedFields.forEach((field) => {
            const fieldErrors = validate(field);
            Object.assign(errors, fieldErrors);
        });

        setFormErrors(errors);
    }, [formData, touched]);
    useEffect(() => {
        if (!open) {
            setTouched({});
            setFormData(defaultForm);
        }
    }, [open])
    return (
        <>
            {open && (
                <div className="flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9 w-full max-w-[472px]">
                    <div className="bg-white p-8 rounded-3xl shadow-xl w-full">
                        <button
                            className="absolute top-3 right-3 sm:p-2 p-1 z-1 bg-[#392CDC]/100 rounded-full"
                            onClick={() => setOpen(false)}
                        >
                            {CloseIcon.RC.path({
                                className: "text-[#180cb2] w-3 h-3 sm:w-4 sm:h-4",
                                color: "#fff",
                            })}
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t('ucpiprotocal_request')}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {[
                                { label: t('ucpiprotocal_request_label1'), name: "businessName", type: "text" },
                                { label: t('ucpiprotocal_request_label2'), name: "website", type: "text" },
                                { label: t('ucpiprotocal_request_label3'), name: "country", type: "text" },
                                { label: t('ucpiprotocal_request_label4'), name: "email", type: "email" },
                                { label: t('ucpiprotocal_request_label5'), name: "telegram", type: "text" },
                            ].map((field) => (
                                <div key={field.name}>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.label}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full border-b py-2 focus:outline-none placeholder-gray-400 ${formErrors[field.name] && touched[field.name]
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-gray-200 focus:border-[#180CB2]"
                                            }`}
                                    />
                                    {formErrors[field.name] && touched[field.name] && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {formErrors[field.name]}
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* Phone Input */}
                            <div>
                                <PhoneInput
                                    country={"us"}
                                    value={formData.phone}
                                    onChange={(phone) => {
                                        setFormData((prev) => ({ ...prev, phone }));
                                        setTouched((prev) => ({ ...prev, phone: true }));
                                        const phoneErrors = validate("phone");
                                        setFormErrors((prev) => ({ ...prev, ...phoneErrors }));
                                    }}
                                    inputProps={{
                                        name: "phone",
                                        onBlur: () =>
                                            setTouched((prev) => ({ ...prev, phone: true })),
                                    }}
                                    containerClass="w-full"
                                    inputClass={`!w-full !border-b !py-2 !pl-12 placeholder-gray-400 ${formErrors.phone && touched.phone
                                        ? "!border-red-500 focus:!border-red-500"
                                        : "!border-gray-200 focus:!border-[#180CB2]"
                                        }`}
                                    buttonClass="!border-b !border-gray-200"
                                />
                                {formErrors.phone && touched.phone && (
                                    <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <textarea
                                    name="description"
                                    placeholder={t('form_error_description_length')}
                                    value={formData.description}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    onBlur={handleBlur}
                                    rows={3}
                                    className={`w-full border-b py-2 focus:outline-none placeholder-gray-400 ${formErrors.description && touched.description
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-gray-200 focus:border-[#180CB2]"
                                        }`}
                                />
                                <div className="text-right text-sm text-gray-500 mt-1">
                                    {formData.description.length}/500 {t('form_error_description_characters')}
                                </div>
                                {formErrors.description && touched.description && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {formErrors.description}
                                    </p>
                                )}
                            </div>

                            <button disabled={loading}
                                type="submit"
                                className="w-fit bg-[#180CB2] text-white font-medium py-2 px-6 rounded-full transition duration-300"
                            >
                                {loading ? 'Submitting...' : t('contactpage_submitbtn')}
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {open && (
                <div className="overlay !z-8" onClick={() => setOpen(false)}></div>
            )}
        </>
    );
};

export default UCPIRequestForm;
