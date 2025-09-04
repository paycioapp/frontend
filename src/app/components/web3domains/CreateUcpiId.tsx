"use client";

import { useEffect, useState } from "react";

interface FieldConfig {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const CreateUcpiForm = ({ isOpen, setIsOpen }: FieldConfig) => {
    const [ucpiId, setUcpiId] = useState("");
    const [error, setError] = useState("");

    // simple validation: at least 4 chars, alphanumeric + underscore only
    const validateUcpiId = (value: string) => {
        if (!value) {
            return "UCPI ID is required";
        }
        if (value.length < 4) {
            return "UCPI ID must be at least 4 characters";
        }
        if (!value.includes('@')) {
            return "Invalid ID";
        }
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            return "Only letters, numbers, and underscores allowed";
        }
        return "";
    };

    const handleChange = (value: string) => {
        setUcpiId(value);
        setError(validateUcpiId(value));
    };

    const handleSubmit = () => {
        const err = validateUcpiId(ucpiId);
        if (err) {
            setError(err);
            return;
        }
        alert(`UCPI ID Created: ${ucpiId}`);
        setIsOpen(false);
    };
    useEffect(() => {
        if (!isOpen) {
            setUcpiId("");
            setError("");
        }
    }, [isOpen]);
    return (
        <>
            {isOpen && (
                <div className="fixed w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <div className="bg-white rounded-2xl shadow-2xl w-[500px] p-8 relative">


                        <h2 className="text-xl font-semibold text-center mb-6">
                            Create UCPI ID
                        </h2>
                        <div className="h-[1px] bg-[#211F32]/10 w-full block mb-12" />


                        <div className="max-w-[400px] mx-auto w-full">
                            {/* Input */}
                            <input
                                type="text"
                                value={ucpiId}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Enter UCPI ID"
                                className={`w-full px-4 py-5 rounded-[12px] border-0 focus:outline-none focus:ring-0 bg-[#F8F9FF] text-[18px]`}
                            />
                            {/* Error Message */}
                            {error && (
                                <p className="text-red-500 text-sm mt-2">{error}</p>
                            )}

                            {/* Button */}
                            <div className="text-center">
                                <button
                                    onClick={handleSubmit}
                                    disabled={!!error || !ucpiId}
                                    className={`max-w-[200px] w-full mt-6 py-4 rounded-full font-medium transition text-white text-[18px] mb-6 ${error || !ucpiId
                                        ? "bg-[#180cb2]/80 cursor-not-allowed"
                                        : "bg-[#180cb2] hover:bg-#180cb2 "
                                        }`}
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isOpen && <div className="fixed inset-0 bg-black/30 z-1" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default CreateUcpiForm;
