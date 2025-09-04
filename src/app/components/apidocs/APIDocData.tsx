"use client"
import { useState } from "react";
import { useApidata } from "./apidoclist"
import { motion } from "framer-motion"; // Import framer-motion
import ApiDocSection from "./APIDoc";
import { useTranslations } from "next-intl";
const APIDocData =()=> {
  const apiTabs = useApidata();
     const [selected, setSelected] = useState(1);
     const t = useTranslations();
    return(
        <div className="mt-12">
            <div
              className="flex md:flex-row flex-col lg:gap-24 gap-6"
              style={{ alignItems: "start" }}
            >
              <div className="mt-5 mb-5">
                <ol className="apilist lg:max-w-[100%] sm:w-[395px] w-full">
                  {/* Loop through the apiTabs array to render the tab list */}
                  {apiTabs.map((tab) => (
                    <motion.li
                      key={tab.id}
                      onClick={() => setSelected(tab.id)}
                      className={`cursor-pointer md:text-xl text-lg mb-4 ${
                        selected === tab.id && "activeapi"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.id}. {tab.label}
                    </motion.li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 mb-5">
                <div className="api-docs">
                  {/* Render the selected tab's component */}
                  {apiTabs.map(
                    (tab) =>
                      selected === tab.id && (
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ApiDocSection
                            title={tab.title}
                            description={tab.description}
                            endpoint={tab.endpoint}
                            requestExample={tab.requestExample}
                            responseExample={tab.responseExample}
                          />
                        </motion.div>
                      )
                  )}

                  <p className="mt-4">
                    {t('apidoc_furtherinfo')} {''}
                    <a href="mailto:support@paycio.com">support@paycio.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default APIDocData