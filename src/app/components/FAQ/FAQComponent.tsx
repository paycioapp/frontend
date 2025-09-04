import { appstore, playstore } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface FaqItem {
  questionKey: string;
  answerKey?: string[];
  answertitle?: string[];
  answerKeyli?: { key: string; value: string }[];
  table?: { left: string; right: string ,extra:string }[];
  linetext?: string;
  mail?: string;
}

// Updated Faq interface
interface Faq {
  openFaq: number | string | null;
  setOpenFaq: (value: number | null) => void;
  FAQ: FaqItem[];
  type: number;
}
const FAQAccordian: React.FC<Faq> = ({ openFaq, setOpenFaq, FAQ ,type }) => {
  return (
    <div>
      {FAQ.map((faq, index) => (
        <div
          key={index}
          className="py-6 border-b border-[#dadfe3] last:border-none font-outfit"
        >
          {/* Accordion Header */}
          <div
            onClick={() => setOpenFaq(index)}
            className="cursor-pointer w-full flex justify-between items-center   transition-all font-outfit"
            style={{
              borderBottomLeftRadius: openFaq === index ? 0 : "",
              borderBottomRightRadius: openFaq === index ? 0 : "",
            }}
          >
            <div className="text-[22px] text-[#1f1f1f] font-[500]">
              {faq.questionKey}
            </div>

            <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: openFaq === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
          </div>

          {/* Accordion Content */}
          <AnimatePresence>
            {openFaq === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden "
              >
                <div className="">
                  <p>{faq.answertitle}</p>
                  <ul>
                    {faq?.answerKey?.map((list,i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                  <ul>
                    {faq?.answerKeyli?.map((list, index) => (
                      <li key={index}>
                        <b>{list.key}</b> {list.value}
                      </li>
                    ))}
                  </ul>
                  <p>{faq.linetext}</p>
                  { type == 1 && index == 1 &&
                    <table className="table mt-6">
                    <tbody>
                      {faq?.table?.map((item,i)=> (
                        <tr key={i}>
                        <td style={{ border: "solid #000000 1pt", padding: "12px 24px" }} className={`${i == 0 ? 'font-bold':''}`}>
                          <p>{item.right} {item.extra && <Link href={appstore} target="_blank" className="text-[#180cb2] font-semibold underline">Click Here</Link>} {item.extra}</p>
                        </td>
                        <td style={{ border: "solid #000000 1pt", padding: "12px 24px" }} className={`${i == 0 ? 'font-bold':''}`}>
                          <p>{item.left} {item.extra && <Link href={playstore} target="_blank" className="text-[#180cb2] font-semibold underline">Click Here</Link>} {item.extra}</p>
                        </td>
                      </tr>
                      ))
                        }
                    </tbody>
                  </table>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
export default FAQAccordian;
