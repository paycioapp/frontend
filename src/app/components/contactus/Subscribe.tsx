"use client";
import { SUBSCRIBE } from "@/lib/API";
import usePost from "@/lib/useFetch";
import React from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";

const validate = (values: { email: string }) => {

  const errors: { email?: string } = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }
  }
  return errors;
};

const SubscribeForm = () => {
  const { postData } = usePost();
  const t = useTranslations();
  const formik = useFormik({
    initialValues: { email: "" },
    validate,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await postData(SUBSCRIBE, { email: values.email });

        if (response?.responsecode === 200) {
          toast.success(response.message || "Submitted successfully!");
          resetForm();
        } else {
          toast.error(response.message || "Submission failed.");
        }
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Something went wrong. Please try again.";
        toast.error(message);
      }
      finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-[#180CB2] text-white py-30">
      <div className="site-width-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-24">
          <div>
            <h2 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl 3xl:text-6xl mb-5">
              {t('contactus_subscribeletter')}
            </h2>
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl">
              {t('contactus_subscribetext')}
            </p>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit} className="w-full max-w-[500px] mx-auto">
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                <div className="w-full">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder={t('placeholder_email')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full sm:flex-1 px-5 py-3 border-none bg-[#4339C1] rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#180cb2] text-sm sm:text-base font-outfit"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-2 md:hidden block">{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 text-[#180cb2] bg-white font-semibold rounded-full text-md md:text-lg hover:bg-[#f0f0f0] transition-all font-outfit disabled:opacity-50"
                  >
                    {formik.isSubmitting ? t('contactus_subscribing') : t('contactus_subscribe')}
                  </button>
                </div>
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-2 hidden md:block">{formik.errors.email}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
