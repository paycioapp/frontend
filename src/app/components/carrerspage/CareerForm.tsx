"use client"
import React, { useRef, useState } from "react"
import { FileClip } from "../icons/Icons";
interface FormData {
    fullName: string;
    email: string;
    phone: string;
    desiredRole: string;
    linkedin: string;
    portfolio: string;
    resume: File | null;
    message: string;
  }
const CareerForm =()=> {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        desiredRole: "",
        linkedin: "",
        portfolio: "",
        resume: null,
        message: "",
      });
      const fileInputRef = useRef<HTMLInputElement>(null);
      const [fileName, setFileName] = useState<string>("");
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFormData((prev) => ({ ...prev, resume: file }));
          setFileName(file.name);
        }
      };
    
      const handleFileClick = () => {
        fileInputRef.current?.click();
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., API call)
      };
    return(
        <React.Fragment>
             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className="mb-6 md:mb-10">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit"
                        placeholder="Full Name"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="mb-6 md:mb-10">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit"
                        placeholder="Email Address"
                      />
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-6 md:mb-10">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit"
                        placeholder="Phone Number"
                      />
                    </div>

                    {/* Desired Role Field */}
                    <div className="mb-6 md:mb-10">
                      <input
                        id="desiredRole"
                        name="desiredRole"
                        type="text"
                        value={formData.desiredRole}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit"
                        placeholder="Desired Role"
                      />
                    </div>

                    {/* LinkedIn Profile Field */}
                    <div className="mb-6 md:mb-10">
                      <input
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit"
                        placeholder="LinkedIn Profile (Optional)"
                      />
                    </div>

                    {/* Portfolio Website Field */}
                    <div className="mb-6 md:mb-10">
                      <input
                        id="portfolio"
                        name="portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit"
                        placeholder="Portfolio Website (Optional)"
                      />
                    </div>

                    {/* Custom File Upload Field */}
                    <div className="mb-6 md:mb-10">
                      <div className="flex items-center justify-between space-x-4 mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit">
                        <input
                          ref={fileInputRef}
                          id="resume"
                          name="resume"
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <div
                          className="flex items-center self-center gap-5 justify-between"
                          onClick={handleFileClick}
                        >
                          <div style={{color: "#9DA5B2"}}
                            className="flex justify-center text-sm font-medium font-outfit
                          mt-1 block bg-transparent placeholder-gray-400 sm:text-sm md:text-lg font-outfit"
                          >
                            Upload Resume
                          </div>
                          <span className="text-sm truncate max-w-[300px]" style={{color: "#9DA5B2"}}>
                            {fileName || "No file selected"}
                          </span>
                        </div>
                        <button onClick={handleFileClick}>
                          <FileClip />
                        </button>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="mb-6 md:mb-10">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm md:text-lg font-outfit"
                        placeholder="Message"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="btn"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
        </React.Fragment>
    )
}
export default CareerForm