import { Metadata } from "next";
import { pageMetadata } from "@/lib/MetaTagsData";

interface PageMeta {
  url: string;
  title?: string;
  description?: string;
  keywords?: string;
}

export function getMetadata(pathname: string): Metadata {
  // Ensure TypeScript knows the structure
  const meta: PageMeta | undefined = pageMetadata.find((page) => page.url === pathname);

  return {
    title: meta?.title || "Paycio | Home",
    description: meta?.description || "Best Crypto Payment Gateway for Businesses | Paycio",
    keywords: meta?.keywords || "Paycio, crypto, payment gateway",
  };
}
