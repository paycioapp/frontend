
"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { bloglink, dateFormat } from "@/lib/utils";
import { ExternalLink } from "./icons/Icons";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface newColors {
  black: string
  color: string,
  backgroundColor: string,
  boxshadow:string
}

const LatestNews:React.FC<newColors> = ({color,backgroundColor,boxshadow,black}) => {
  
    interface Blog {
      category:string;
      title: string;
      slug: string;
      sub_category:string,
      meta_desc: string;
      featured_img: string;
      createdAt: string;
    }
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const t = useTranslations();
    const getData = async () => {
      try {
        const response = await fetch(
          "https://blogapi.paycio.com/v1/featured-blogs"
        );
        const data = await response.json();
        setBlogs(data.data)
      } catch (error) {
        console.error("Error:", error);
      }
    };
    useEffect(() => {
      getData();
    }, []);
  return (
    <React.Fragment>
      <div className="py-20 mb-36" style={{backgroundColor: color}}>
        <div className="site-width-sm">
          <div className="flex justify-between mb-10">
            <h2 className="text-2xl xs:text-3xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-outfit font-bold max-w-[530px]" style={{color: black}}>
              {t('contactus_latestnews')}
            </h2>
            <Link prefetch={true} href={bloglink} target="_blank"
              className="rounded-full text-white sm:text-base text-md md:text-lg md:px-6 xl:px-8 px-4 md:py-3 py-2 flex gap-2 self-center items-center"
              style={{ color: color,backgroundColor: backgroundColor }}
            >
              {t('contactus_seeblog')}
              {ExternalLink.RC.path({
                className: "text-[#fff]",
                color: color,
              })}
            </Link>
          </div>
          <ul className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {blogs.map((blog,index) => (
              <li key={index}
                className=" bg-[#fff] rounded-3xl overflow-hidden max-w-[485px] mx-auto"
                style={{
                  boxShadow: boxshadow,
                }}
              >
                <div className="relative">
                  <Image fill src={blog.featured_img} className="w-full !relative" alt="" />
                </div>
                <div className="px-6 lg:px-10 xl:px-12 py-4 md:py-6 lg:py-8">
                  <div className="font-semibold mt-4 text-lg 2xl:text-3xl font-outfit two-line-text">
                    {blog.title}
                  </div>
                  <div className="text-[#211F32] mt-4 font-outfit">
                    {dateFormat(blog.createdAt)}
                  </div>
                  <Link
                    href={`${bloglink}/${blog.category}/${blog.sub_category}/${blog.slug}`}
                    target="_blank"
                    className="bg-[#180cb21a] w-fit whitespace-nowrap rounded-full text-white  text-base md:text-lg md:px-6 xl:px-6 px-4 md:py-2 py-2 flex md:gap-5 gap-2 self-center items-center mt-10 mb-2"
                    style={{ color: "#180cb2" }}
                  >
                    {t('contactus_readmore')}
                    {ExternalLink.RC.path({
                      className: "text-[#180cb2]",
                      color: "#180cb2",
                    })}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LatestNews;
