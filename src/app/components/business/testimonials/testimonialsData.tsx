import { useTranslations } from "next-intl";

export interface TestimonialItem {
  id: number;
  image: string;
  content: string;
  name: string;
  location: string;
}
export interface CardProps {
  testimonial: TestimonialItem[];
  current: number;
  handleNext: () => void;
  handlePrev: () => void;
}

// export const testimonial: TestimonialItem[] = [
//     {
//       id: 1,
//       image: "/images/testimonials/1.png",
//       content:
//         "Our priority at InnovoGlobal is always the customer experience. Paycio's mobile number verification is a big plus for us! It simplifies the crypto payment process, which is a crucial factor in improving our customer checkout experience.",
//       name: "Anya Sharma",
//       location: "CEO, InnovoGlobal",
//     },
//     {
//       id: 2,
//       image: "/images/testimonials/2.png",
//       content:"Paycio's alternative gas fee model is a very innovative idea. It's a smart way to address a real pain point in crypto transactions and could improve overall network efficiency. Worth keeping an eye on.",
//       name: "Kenji Tanaka",
//       location: "Co-founder & CTO, BlockWise Analytics",
//     },
//     {
//       id: 3,
//       image: "/images/testimonials/3.png",
//       content:
//         "Paycio's transparency with their 'no hidden fees' policy is a welcome change. It's a very basic feature, but it is essential as a step toward building trust in crypto payments. In my opinion, that's a key factor for wider adoption.",
//       name: "Isabelle",
//       location: "VP, GlobalTech",
//     },
//     {
//       id: 4,
//       image: "/images/testimonials/4.png",
//       content:
//         "We're finding Paycio's QR code scan functionality very useful. It makes transactions faster and easier for our users. A big thank you to Paycio for the speed and convenience we never felt before.",
//       name: "Rajesh Kumar",
//       location: "CEO, NovaWeb3 Techologies",
//     },
//     {
//       id: 5,
//       image: "/images/testimonials/5.png",
//       content:
//         "Our marketing strategies focus on building long-lasting customer relationships. Through data-driven insights, targeted campaigns, and compelling storytelling, we create brand experiences that resonate with our audience and drive engagement, loyalty, and business growth.",
//       name: "Robert Wilson",
//       location: "CMO",
//     },
//   ];

export function useTestimonials() {
  const  t  = useTranslations()
  const testimonial: TestimonialItem[] = [
    {
      id: 1,
      image: "/images/testimonials/1.png",
      content: t('testimonial_1_content'),
      name: t('testimonial_1_name'),
      location: t('testimonial_1_location'),
    },
    {
      id: 2,
      image: "/images/testimonials/2.png",
      content: t('testimonial_2_content'),
      name: t('testimonial_2_name'),
      location: t('testimonial_2_location'),
    },
    {
      id: 3,
      image: "/images/testimonials/3.png",
      content: t('testimonial_3_content'),
      name: t('testimonial_3_name'),
      location: t('testimonial_3_location'),
    },
    {
      id: 4,
      image: "/images/testimonials/4.png",
      content: t('testimonial_4_content'),
      name: t('testimonial_4_name'),
      location: t('testimonial_4_location'),
    },
    {
      id: 5,
      image: "/images/testimonials/5.png",
      content: t('testimonial_5_content'),
      name: t('testimonial_5_name'),
      location: t('testimonial_5_location'),
    },
  ];
  return testimonial
}