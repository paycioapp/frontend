"use client";
import React, { useEffect, useState } from "react";
import Image from "./utils/Image";
import Link from "next/link";
import toast from "react-hot-toast";
import { SUBSCRIBE } from "@/lib/API";
import usePost from "@/lib/useFetch";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { ExternalLink } from "./icons/Icons";
import UCPIRequestForm from "./UcpiFAQData/UcpiRequesstForm";
import { usePathname } from "next/navigation";
const Footer = () => {
  return (
    <div
      className="mt-25 relative"
      style={{ boxShadow: "rgb(24 12 178 / 7%) 0px -20px 13px 4px" }}
    >
      {/* Footer image */}
      <div
        className="absolute top-0 left-[50%] w-full"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <Image
          alt="Footer Image Paycio"
          src="/images/footer-strip.svg"
          className="w-full object-cover !h-[68px] !md:h-full"
        />
      </div>
      {/* footer main */}
      <div className="w-full bg-white relative z-1">
        <div className="py-8 site-width mx-auto w-full bg-white">
          <div className="grid lg:grid-cols-[1fr_1.3fr] xl:grid-cols-[1fr_2fr] gap-y-8 gap-x-4 xl:gap-x-8 border-b pb-8 md:pb-16 border-black/10">
            <SocialSection />
            <FooterLinksSection />
          </div>
          <PartnersSection />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialSection = () => {
  const t = useTranslations()
  return (
    <div className=" flex flex-col  gap-y-4">
      <Image
        src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/logo.webp"
        alt="Paycio logo"
        wrapperClassName="w-[100px] md:w-[150px] aspect-[6098/2385]"
      />

      <SubscriptionForm />



      <div className="mt-6">
        <p className="text-lg font-semibold">{t('footer_enquiries')}</p>
        <div className="flex flex-wrap gap-y-[8px] gap-6">
          <Link href="mailto:support@paycio.com" target="_blank">support@paycio.com</Link>
          <Link href="mailto:hello@paycio.com" target="_blank">hello@paycio.com</Link>
          <Link prefetch={true} href={"/contact-us"} className="flex gap-1 items-center">{t('mobile_contact_us')} {ExternalLink.RC.path({
            className: "text-[#000] w-4 h-4",
            color: '#000',
          })}</Link>
        </div>
      </div>
      <SocialMediaLinks />

    </div>
  );
};

const FooterLinksSection = () => {
  const t = useTranslations();
  const links = getFooterLinks(t);
  return (
    <div className="grid grid-cols-1 font-noto sm:grid-cols-2 md:grid-cols-4 gap-x-4  sm:text-start">
      {links.map((column, index) => (
        <FooterLinksColumn
          key={index}
          title={column.title}
          links={column.links}
          mails={column.mails}
          requestbtn={column.requestbtn}
        />
      ))}
    </div>
  );
};

type FooterLinksColumnProps = {
  title: string;
  links: {
    url: string;
    text: string;
  }[];
  mails: {
    mailto: string;
  }[];
  requestbtn?: string
};
const FooterLinksColumn = (props: FooterLinksColumnProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <h3 className="font-semibold font-outfit text-xl xl:text-2xl m-0 my-4">
        {props.title}
      </h3>
      <div className="flex flex-col gap-y-1 text-sm !font-noto">
        {props.links.map((link, index) => (
          <FooterLink key={index} url={link.url} text={link.text} />
        ))}
      </div>
      {props.requestbtn && <button className="no-underline text-gray-900 text-base md:text-sm 2xl:text-lg opacity-70 hover:text-[#180cb2] hover:opacity-100 transition-all !font-noto" onClick={() => { setOpen(true) }}>{props.requestbtn}</button>}
      {props.mails &&
        <div>
          {props.mails.map((mail, index) => (
            <div key={index}>
              <Link prefetch={true} className="no-underline text-gray-900 text-base md:text-sm 2xl:text-lg opacity-70 hover:text-[#180cb2] hover:opacity-100 transition-all !font-noto" href={`mailto:${mail.mailto}`}>{mail.mailto}</Link>
            </div>
          ))}
        </div>
      }
      <UCPIRequestForm open={open} setOpen={setOpen} />
    </div>
  );
};

type FooterLinkProps = {
  url: string;
  text: string;
};
const FooterLink = (props: FooterLinkProps) => {
  const path = usePathname();
  const pathWithoutLocale = '/' + path.split('/').slice(2).join('/');
  return (
    <Link
      className="no-underline text-gray-900 text-base md:text-sm 2xl:text-lg opacity-70 hover:text-[#180cb2] hover:opacity-100 transition-all !font-noto"
      href={props.url}
    >
      <span className={`${props.text.toLowerCase() === 'status' ? 'blinkdots relative' : '' } ${pathWithoutLocale == props.url ? 'text-[#180cb2] font-semibold': ''}`}>{props.text}</span>
    </Link>

  );
};

const SubscriptionForm = () => {
  const { postData } = usePost();
  const t = useTranslations();
  const validate = (values: { email: string }) => {

    const errors: { email?: string } = {};
    if (!values.email) {
      errors.email = t('error_email_required');
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(values.email)) {
        errors.email = t('error_email_invalid');
      }
    }
    return errors;
  };
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
    <div className="font-outfit">
      <h3 className="m-0 mt-6 mb-2 font-outfit font-semibold text-xl xl:text-2xl">
        {t('footerpage_joinprogram')}
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#F7F7F9] p-1.5 rounded-full pl-4 pr-2 w-fit flex"
      >
        <input
          type="text"
          name="email"
          placeholder={t('placeholder_email')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="pr-2 outline-none border-none w-full max-w-[290px] md:w-[unset] bg-transparent xl:text-base placeholder:text-[#C8C8D6]"
        />
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-white border-none shadow-sm px-4 py-2 rounded-full cursor-pointer text-xs md:text-sm xl:text-base disabled:opacity-50"
        >
          {formik.isSubmitting ? t('contactus_subscribing') : t('contactus_subscribe')}
        </button>
      </form>
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500 text-sm mt-2 ">{formik.errors.email}</p>
      )}
    </div>
  );
}

const SocialMediaLinks = () => {


  return (
    <ul className="flex list-none p-0 gap-1 md:gap-2.5 mt-6 xl:mt-5">
      {socialLinks.map((link, index) => (
        <li key={index} className="cursor-pointer">
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <Image
              src={link.src}
              alt={link.alt}
              wrapperClassName="w-[25px] xl:w-[30px] aspect-square"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

const PartnersSection = () => {
  const [year, setYear] = useState(0);
  const t = useTranslations();
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="md:mt-12 mt-8 grid lg:grid-cols-2 gap-y-8 gap-x-4 items-center font-outfit">
      <div className="grid grid-cols-3 lg:flex gap-x-8 2xl:gap-x-12 items-center">
        <Image
          src="/images/fau.png"
          alt="Virtual Asset Regulatory Authority"
          className="object-fit max-w-[70px] lg:max-w-[90px] xl:max-w-[120px]"
        />
        <Image
          src="/images/astra.png"
          alt="Virtual Asset Regulatory Authority"
          className="object-fit max-w-[70px] lg:max-w-[90px]  xl:max-w-[120px]"
        />
        <Image
          src="/images/bitgo-logo.svg"
          alt="BitGo"
          className="object-fit max-w-[70px] lg:max-w-[90px]  xl:max-w-[90px]"
        />

        <Image
          src="/images/kyc-chain.png"
          alt="Virtual Asset Regulatory Authority"
          className="object-fit max-w-[70px] lg:max-w-[90px] xl:max-w-[120px]"
        />
      </div>

      <div className="text-[#211f3285] flex sm:flex-row flex-col md:gap-6 gap-2 text-md md:text-md lg:text-lg 2xl:text-xl justify-between">
        <Link prefetch={true} href={"/terms-and-conditions"}>{t('footerpage_header5')}</Link>
        <Link prefetch={true} href={"/privacy-policy"}>{t('footerpage_header6')}</Link>
        <div>© {year ? year : '2025'},{t('footerpage_payltd')}.</div>
      </div>
    </div>
  );
};


const socialLinks = [
  {
    name: "Discord",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/discord.svg",
    alt: "Discord",
    title: "Discord",
    href: "https://discord.com/invite/dqRYskn6Bh",
  },
  {
    name: "Telegram ANN",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/telegram.svg",
    alt: "Telegram ANN",
    title: "Telegram ANN",
    href: "https://t.me/paycio_Announcements",
  },
  {
    name: "Twitter",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/twitter.svg",
    alt: "Twitter",
    title: "Twitter",
    href: "https://twitter.com/Paycio_Global",
  },
  {
    name: "Instagram",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/instagram.svg",
    alt: "Instagram",
    title: "Instagram",
    href: "https://www.instagram.com/paycio_app/",
  },
  {
    name: "LinkedIn",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/linkedin.svg",
    alt: "LinkedIn",
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/paycio-global/?viewAsMember=true",
  },
  {
    name: "Facebook",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/facebook.svg",
    alt: "Facebook",
    title: "Facebook",
    href: "https://www.facebook.com/Paycio.global",
  },
  {
    name: "Youtube",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/youtube.svg",
    alt: "Youtube",
    title: "Youtube",
    href: "https://www.youtube.com/@paycio_global",
  },
  {
    name: "Medium",
    src: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/social/medium.svg",
    alt: "Medium",
    title: "Medium",
    href: "https://medium.com/@paycio_app",
  },
];


export const getFooterLinks = (t: (key: string) => string) => [
  {
    title: 'Merchant',
    links: [
      { url: "/merchant-onboarding", text: t('footer_merchantonboarding') },
      { url: "/merchant-onboarding#merchantintegration", text: t('footer_merchant_integration') },
      { url: "/merchant-questions-and-answers", text: t('footer_merchantqa') },


    ],
    mails: [],
  },
  {
    title: 'UCPI',
    links: [
      { url: "/UCPI", text: t('footer_ucpi_protocal') },
      { url: "/ucpi-protocal-integration", text: t('footer_ucpi_integration') },
      // { url: "/ucpi-whitel-label", text: 'UCPI Whitel Label' },
      { url: "/ucpi-questions-and-answers", text: t('footer_ucpiqa') },
    ],
    mails: [],
    requestbtn: t('footer_ucpirequest')
  },
  {
    title: t('footerpage_header2'),
    links: [
      // { url: "/UCPI", text: "UCPI" },
      { url: "/report-fraud", text: t('footerpage_line2') },
      { url: "/api-docs", text: t('footerpage_apidocs') },
      { url: "/request-demo", text: t('footerpage_demo') },
      { url: "/media-kit", text: t('mediakit_line') },
      { url: "/ucpi-dapp", text: 'UCPI DApp' },
      // { url: "/status", text: 'Status' },
    ],
    mails: [],
  },
  {
    title: t('footerpage_header3'),
    links: [

      { url: "/AML-KYC", text: "KYC/AML" },
      { url: "/rewards-and-referral", text: t('footerpage_line3') },
      { url: "/awareness", text: t('footerpage_line4') },
      { url: "/track-a-transfer", text: t('footerpage_line5') },
      { url: "/press-release", text: t('footerpage_line6') },
      { url: "/supported-coins-and-fees", text: t('footerpage_headerlast') },
      { url: "/supported-countries", text: t('supportedcountries_headername') },
      { url: "/partners", text: t('footerpage_partnerheader') },
      { url: "https://blog.paycio.com/", text: t('footerpage_blog') },
    ],
    mails: [],
  },


];
