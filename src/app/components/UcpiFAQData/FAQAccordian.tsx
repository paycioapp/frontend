'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../merchantqa/Faqdata';


interface FAQAccordionProps {
    faqs: FAQItem[];
    openIndex: number | null; 
    setOpenIndex: (openIndex: number | null) => void;
    type: string
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, openIndex, setOpenIndex, type }) => {

    return (
        <div className={`${type == 'seapen' ? 'site-width' : ""} relative`}>
            <div className={`${type == 'ucpi' ? 'bg-white px-4 sm:px-10 py-8 ' : type == 'merchant' ? 'py-8  px-4 sm:px-10' : ''} `}>
                <div className="space-y-4 max-w-[100%] mx-auto">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-xl shadow-[-1px_3px_8px_-7px_#dadfe3] transition hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null  : idx)}
                                className="w-full text-left px-6 py-5 flex justify-between items-center"
                            >
                                <span className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </span>
                                
                                    <ChevronDown className={`text-[#180CB2] bg-white rounded-full w-8 h-8 p-1 transition-all duration-500 ${openIndex === idx ? 'rotate-180': 'rotate-0'}`} />
                                
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        key={`faq-content-${idx}`}
                                        initial="collapsed"
                                        animate="expanded"
                                        exit="collapsed"
                                        variants={{
                                            expanded: { opacity: 1, height: 'auto' },
                                            collapsed: { opacity: 0, height: 0 },
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="px-6 pb-5 overflow-hidden"
                                    >
                                        {faq.answer.map((section, i) => {
                                            if (
                                                typeof section === 'object' &&
                                                section !== null &&
                                                'type' in section
                                            ) {
                                                const typedSection = section;

                                                switch (typedSection.type) {
                                                    case 'paragraph':
                                                        return (
                                                            <p key={i} className="mb-3">
                                                                {typedSection.content}
                                                            </p>
                                                        );

                                                    case 'list':
                                                        return (
                                                            <div key={i} className="mb-3">
                                                                <strong>{typedSection.title}</strong>
                                                                <ul className="list-disc pl-6">
                                                                    {typedSection.items?.map((item, j) => (
                                                                        <li key={j}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        );

                                                    case 'info':
                                                        return (
                                                            <ul key={i} className="mt-4 list-disc pl-5">
                                                                {typedSection.list?.map((info, id) => (
                                                                    <li key={`${info}-${id}`}>{info}</li>
                                                                ))}
                                                            </ul>
                                                        );

                                                    case 'table':
                                                        return (
                                                            <div key={i} className="overflow-x-auto mt-4">
                                                                <table className="table-auto w-full border text-left">
                                                                    <thead>
                                                                        <tr>
                                                                            {typedSection.headers?.map((header, j) => (
                                                                                <th
                                                                                    key={j}
                                                                                    className="border px-3 py-2 font-semibold bg-gray-100"
                                                                                >
                                                                                    {header}
                                                                                </th>
                                                                            ))}
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {typedSection.rows?.map((row, rowIndex) => (
                                                                            <tr key={rowIndex}>
                                                                                {row.map((cell, cellIndex) => (
                                                                                    <td
                                                                                        key={cellIndex}
                                                                                        className="border px-3 py-2"
                                                                                    >
                                                                                        {cell}
                                                                                    </td>
                                                                                ))}
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        );

                                                    case 'highlight':
                                                        return (
                                                            <div key={i} className="mb-3 mt-6">
                                                                <strong>{typedSection.title}</strong>
                                                                <p>{typedSection.content}</p>
                                                                <ul className="list-disc pl-6">
                                                                    {typedSection.list?.map((item, j) => (
                                                                        <li key={j}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                                <ul className="list-disc pl-6">
                                                                    {typedSection.items?.map((item, j) => (
                                                                        <li key={j}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        );

                                                    case 'code-block':
                                                        return (
                                                            <div key={i} className="mb-3 mt-6">
                                                                <code className="whitespace-break-spaces">
                                                                    {typedSection.content}
                                                                </code>
                                                            </div>
                                                        );

                                                    default:
                                                        return null;
                                                }
                                            }
                                            return null;
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
