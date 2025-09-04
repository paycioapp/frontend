"use client";
import { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import MediaBox from "./MediaBox";
import { logos } from "@/app/components/logos";
import { logoData } from "../mediautils";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MediaPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations();
  const downloadBoxes = [
    {
      header: "",
      data: [
        {
          id: 1,
          headerline: t('mediakit_line1'),
          logo: logos.media_brandstyleguide,
          text: t('mediakit_line2'),
          backgroundcolor: "#F3F3FF",
          isDownload: true,
          type: "pdf",
        },
      ],
    },
    {
      header: t('mediakit_line3'),
      data: [
        {
          id: 2,
          headerline: t('mediakit_line4'),
          logo: logos.paycio_logo_color_rounded,
          text: t('mediakit_line5'),
          backgroundcolor: "#f7f7f7",
          isDownload: true,
          type: "paycio_logos",
        },
        {
          id: 3,
          headerline: t('mediakit_line6'),
          logo: logos.media_productimages,
          text: t('mediakit_line7'),
          backgroundcolor: "#f7f7f7",
          isDownload: true,
          type: "paycio-images",
        },
        {
          id: 4,
          headerline: t('mediakit_line8'),
          logo: logos.media_typefaces,
          text: t('mediakit_line9'),
          backgroundcolor: "#f7f7f7",
          isDownload: true,
          type: "type-faces",
        },
        {
          id: 5,
          headerline: t('mediakit_line10'),
          logo: logos.media_colors,
          text: t('mediakit_line11'),
          blue: t('mediakit_line12'),
          yellow: t('mediakit_line13'),
          parsianblue: "#190CB2",
          limeyellow: "#D7FF1D",
          backgroundcolor: "#180cb2",
          isDownload: false,
        },
      ],
    },
  ];

  return (
    <>
      <div className="main">
        <PageHeader title={t('mediakit_line')} text="Follow these guidelines for Paycio brand usage in marketing and communications." />
        <div style={{ background: "#f7f7f7" }}>
          <div className="max-w-4xl mx-auto py-24">
            {downloadBoxes.map((box, index) => (
              <MediaBox box={box} setLoading={setLoading} key={index} />
            ))}
          </div>
        </div>
      </div>
      {loading && (
              <div className="language-loading">
                <div className="download-async">
                  <Image fill
                    src={logoData[0].hdpng}
                    alt="paycio"
                    style={{ maxWidth: "80px" }} className="!relative object-contain" 
                  />
                  <br />
                  <i className="fa fa-spinner fa-spin" style={{ marginRight: "5px" }}></i>
                  Downloading
                </div>
              </div>
            )}
    </>
  );
};

export default MediaPage;
