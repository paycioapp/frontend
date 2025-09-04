import { useTranslations } from "next-intl";
import Image from "../utils/Image";




const PaymentWorkflow = () => {
  const t = useTranslations();
  const paymentFlow = [
    {
      title: t('merchantworkflow_title1'),
      description: t('merchantworkflow_description1')
    },
    {
      title: t('merchantworkflow_title2'),
      description: t('merchantworkflow_description2')
    },
    {
      title: t('merchantworkflow_title3'),
      description: t('merchantworkflow_description3')
    },
    {
      title: t('merchantworkflow_title4'),
      description: t('merchantworkflow_description4')
    },
    {
      title: t('merchantworkflow_title5'),
      description: t('merchantworkflow_description5')
    }
  ];
  return (
    <section className="py-24">
      <div className="site-width">
        <div className="max-w-[980px] w-full mx-auto">
          <h2 className="xl:text-[38px] text-[32px] font-semibold text-center">
            {t('merchantworkflow_header')}
          </h2>

          <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.5fr] gap-12 items-center mt-16">

            <div className="flex gap-12">

              <ul>
                {paymentFlow.map((item, index) => (
                  <>
                    <li key={index} className={`mb-10 ${index % 2 == 0 ? 'bg-[#F5F4FF]' : 'bg-[#F8FFD5]'} p-6 rounded-2xl`}>
                      <div className="text-center">

                        <h3 className="font-semibold h4-tag mb-0">{item.title}</h3>
                        <p
                          className="text-xl text-[#1F1F1F]/80"
                          style={{ fontWeight: "500" }}
                        >
                          {item.description}
                        </p>
                      </div>

                    </li>
                    {index !== paymentFlow.length - 1 && <Image src={'/images/down-arrow.png'} alt="arrow" wrapperClassName="w-4 mx-auto relative -top-4" />}
                  </>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <Image src="/images/payment-workflow.png" alt="kyb" wrapperClassName="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentWorkflow;


