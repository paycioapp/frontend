
import { useTranslations } from "next-intl";
import {
  CrossBorderIcon,
  CrossChainIcon,
  KeypadIcon,
  PeopleIcon,
  SwapIcon,
  TagIcon,
  WifiOffIcon,
} from "../icons/Icons";
export function useFeatures() {
  const t = useTranslations()
  const features = [
    {
      link: "/features",
      title: t("feature1_title"),
      desc: t("feature1_desc"),
      icon: <KeypadIcon />,
    },
    {
      link: "/features#offline",
      title: t("feature2_title"),
      desc: t("feature2_desc"),
      icon: <WifiOffIcon />,
    },
    {
      link: "/features#gasfee",
      title: t("feature3_title"),
      desc: t("feature3_desc"),
      icon: <TagIcon />,
    },
    {
      link: "/features#swaptopay",
      title: t("feature4_title"),
      desc: t("feature4_desc"),
      icon: <SwapIcon />,
    },
    {
      link: "/features#p2p",
      title: t("feature5_title"),
      desc: t("feature5_desc"),
      icon: <PeopleIcon />,
    },
    {
      link: "/features#crossborder",
      title: t("feature6_title"),
      desc: t("feature6_desc"),
      icon: <CrossChainIcon />,
    },
    {
      link: "/features#crossborder",
      title: t("feature7_title"),
      desc: t("feature7_desc"),
      icon: <CrossBorderIcon />,
    },
  ];

  const links = [
    {
      url: "/about-us",
      showIcon: false,
      text: t("link_about_us"),
    },
    {
      url: "/UCPI",
      showIcon: true,
      text: t("link_ucpi"),
    },
    {
      url: "https://blog.paycio.com",
      showIcon: true,
      text: t("link_blog"),
    },
    {
      url: "/contact-us",
      showIcon: false,
      text: t("link_contact_us"),
    },
  ];

  const mobileLinks = [
    { path: "/business", name: t("mobile_business") },
    { path: "/features", name: t("mobile_features") },
    { path: "/about-us", name: t("mobile_about_us") },
    { path: "/UCPI", name: t("mobile_ucpi") },
    { path: "/contact-us", name: t("mobile_contact_us") },
  ];
  return { features, links, mobileLinks }
}
