import { useTranslations } from "next-intl";

export function usePaymentfeatures() {
  const t = useTranslations();
  const paymentFeatures = [
    {
      image: "/images/features/pay-via.png",
      header: t('feature1_title'),
      content: t('feature1_desc'),
      bgcolor: "#FFF3EF",
      link: "#payvia",
    },
    {
      image: "/images/features/offline.png",
      header: t('feature2_title'),
      content: t('feature2_desc'),
      bgcolor: "#FBF1FF",
      link: "#offline",
    },
    {
      image: "/images/features/fee.png",
      header: t('feature3_title'),
      content: t('feature3_desc'),
      bgcolor: "#FFFADE",
      link: "#gasfee",
    },
    {
      image: "/images/features/swap-to-pay.png",
      header: t('feature4_title'),
      content: t('feature4_desc'),
      bgcolor: "#D8FAFC",
      link: "#swaptopay",
    },
    {
      image: "/images/features/p2p.png",
      header: t('feature5_title'),
      content: t('feature5_desc'),
      bgcolor: "#FFF2F7",
      link: "#p2p",
    },
    {
      image: "/images/features/cross-chain.png",
      header: t('feature6_title'),
      content: t('feature6_desc'),
      bgcolor: "#FFF3EF",
      link: "#crossborder",
    },
    {
      image: "/images/features/cross-border.png",
      header: t('feature7_title'),
      content: t('feature7_desc'),
      bgcolor: "#FBF1FF",
      link: "#crossborder",
    },
    {
      image: "/images/features/merchant.png",
      header: t('feature8_title'),
      content: t('feature8_desc'),
      bgcolor: "#FFF2F7",
      link: "#merchant",
    },
  ];
  return paymentFeatures
}

