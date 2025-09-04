"use client"
import { CONTACT_US } from "@/lib/API";
import usePost from "@/lib/useFetch";
import toast from "react-hot-toast";
import ReusableForm, { FieldConfig } from "./utils/ReUsableForm";

interface FormData {
    username: string;
    lastname: string;
    email: string;
    projectname: string;
    category: string;
    content: string;
  }
const AdvertiseForm = () => {
  const {loading, postData} = usePost();
  const initialValues = {
      username: "",
      lastname: "",
      email: "",
      projectname: "",
      category: "",
      content: "",
    }
  const fields: FieldConfig[] = [
    { name: "username", type: "text", placeholder: "Your First Name" },
    { name: "lastname", type: "text", placeholder: "Your Last Name" },
    { name: "email", type: "text", placeholder: "Email email" },
    { name: "projectname", type: "text", placeholder: "Enter Project name" },
    { name: "category",type: "select",placeholder: "Select Category",
      options: [
          { label: "Marketing", value: "frontend" },
          { label: "Information Technology", value: "backend" },
          { label: "Designing", value: "fullstack" },
      ],
  },
    { name: "content", type: "textarea", placeholder: "Your message" },
  ];


    // Email Validation Function
    const validateEmail = (email: string): boolean => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
  
    // Validate Form Fields
    const validate = (values: FormData): Partial<Record<keyof FormData, string>> => {
      const errors: Partial<Record<keyof FormData, string>> = {};
  
      if (!values.username.trim()) errors.username = "First name is required";
      if (!values.lastname.trim()) errors.lastname = "Last name is required";
      if (!values.email.trim()) {
        errors.email = "Email is required";
      } else if (!validateEmail(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.projectname.trim()) errors.projectname = "Subject is required";
      if (values.content.length < 5)
        errors.content = "Message must be at least 5 characters";
      if (!values.content.trim()) errors.content = "Message content is required";
      if (values.content.length < 10)
        errors.content = "Message must be at least 10 characters";
  
      if (!values.category) errors.category = "Category is required"; // Validation for category
      return errors
    };
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

  export default AdvertiseForm