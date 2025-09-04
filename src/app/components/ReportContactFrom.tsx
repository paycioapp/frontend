"use client"
import { CONTACT_US } from "@/lib/API";
import usePost from "@/lib/useFetch";
import toast from "react-hot-toast";
import ReusableForm, { FieldConfig } from "./utils/ReUsableForm";
import React from "react";
import { useTranslations } from "next-intl";
interface ReportContactFormProps {
  formtype: string;
}

const ReportContactForm = ({ formtype }: ReportContactFormProps) => {
  const t = useTranslations();
  const { loading, postData } = usePost();

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    subject: "",
    content: "",
    type: formtype == 'contact' ? "Contact" : "FraudReport",
  };

  const fields: FieldConfig[] = [
    { name: "fname", type: "text", placeholder: t("placeholder_fname") },
    { name: "lname", type: "text", placeholder: t("placeholder_lname") },
    { name: "email", type: "text", placeholder: t("placeholder_email") },
    { name: "subject", type: "text", placeholder: t("placeholder_subject") },
    { name: "content", type: "textarea", placeholder: t("placeholder_content") },
  ];
  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};
    if (!values.fname?.trim()) errors.fname = t("error_fname_required");
    if (!values.lname?.trim()) errors.lname = t("error_lname_required");
    if (!values.email?.trim()) {
      errors.email = t("error_email_required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = t("error_email_invalid");
    }
    if (!values.subject?.trim()) errors.subject = t("error_subject_required");
    else if (values.subject?.length < 5) errors.subject = t("error_subject_min");
    if (!values.content?.trim()) errors.content = t("error_content_required");
    else if (values.content?.length < 10) errors.content = t("error_content_min");
    return errors;
  }
  const handleSubmit = async (data: typeof initialValues) => {
    const response = await postData(CONTACT_US, data);
    if (response?.responsecode === 200) {
      toast.success(response.message || "Submitted successfully!");
    } else {
      toast.error(response?.message || "Submission failed.");
    }
  };
  return (
    <ReusableForm
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      fields={fields}
      loading={loading}
    />
  );
};

export default ReportContactForm