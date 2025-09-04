import JSZip from "jszip";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";
import { logos } from "./logos";

export const kitpdf: string =
  "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/mediakit/paycio-brand-style-guide.pdf";
export const ttffile: string =
  "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/mediakit/paycio-typeface-eras-bold-itc.ttf";

interface LogoData {
  svg: string;
  src: string;
  hdpng: string;
  bg: string;
  name: string;
}

export const logoData: LogoData[] = [
  {
    svg: logos.paycio_logo_color_rounded_svg,
    src: logos.paycio_logo_color_rounded,
    hdpng: logos.paycio_logo_color_rounded_hdpng,
    bg: "bg-colored",
    name: "Main Logo Type 2",
  },
  {
    svg: logos.paycio_logo_white_rounded_svg,
    src: logos.paycio_logo_white_rounded,
    hdpng: logos.paycio_logo_white_rounded_hdpng,
    bg: "bg-colored",
    name: "Main Logo Type 2",
  },
  {
    svg: logos.paycio_logo_black_svg,
    src: logos.paycio_logo_black,
    hdpng: logos.paycio_logo_black_hdpng,
    bg: "bg-colored bg-white",
    name: "Black Logo Type",
  },
  {
    svg: logos.paycio_logo_white_svg,
    src: logos.paycio_logo_white,
    hdpng: logos.paycio_logo_white_hdpng,
    bg: "bg-colored bg-dark",
    name: "White Logo Type",
  },
  {
    svg: logos.rounded_paycio_svg,
    src: logos.rounded_paycio,
    hdpng: logos.rounded_paycio_hdpng,
    bg: "bg-colored",
    name: "Main Logomark",
  },
  {
    svg: logos.rounded_paycio_black_svg,
    src: logos.rounded_paycio_black,
    hdpng: logos.rounded_paycio_black_hdpng,
    bg: "bg-colored bg-white",
    name: "Black Logomark",
  },
  {
    svg: logos.rounded_paycio_white_svg,
    src: logos.rounded_paycio_white,
    hdpng: logos.rounded_paycio_white_hdpng,
    bg: "bg-colored bg-dark",
    name: "White Logomark",
  },
];

export const productData: string[] = [
  logos.media_dashboard1,
  logos.media_dashboard2,
  logos.media_dashboard3,
  logos.media_swap,
  logos.media_wallet,
  logos.media_withdraw,
];

const fetchFile = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  return response.blob();
};

const downloadBlob = (blob: Blob, filename: string): void => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const fetchAndDownload = async (url: string, filename: string): Promise<void> => {
  try {
    const blob = await fetchFile(url);
    downloadBlob(blob, filename);
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error);
  }
};

export const downloadLogoZip = async (type: string, setLoading: (loading: boolean) => void): Promise<void> => {
  const downloadTypes: Record<string, LogoData[] | string[]> = {
    paycio_logos: logoData,
    "paycio-images": productData,
  };

  if (type === "pdf") {
    downloadPdf(setLoading);
    return;
  }

  if (type === "type-faces") {
    window.open(ttffile, "_blank");
    return;
  }

  const files = downloadTypes[type] as (string | LogoData)[];

  if (!files || files.length === 0) {
    console.error("No data found for", type);
    return;
  }

  setLoading(true);
  try {
    const zip = new JSZip();

    for (const file of files) {
      if (typeof file === "string") {
        const pngBlob = await fetchFile(file);
        zip.file(file.split("/").pop() || "unknown.png", pngBlob);
      } else {
        const pngBlob = await fetchFile(file.hdpng);
        const svgBlob = await fetchFile(file.svg);
        const pngFolder = zip.folder("png");
        const svgFolder = zip.folder("svg");
        pngFolder?.file(file.hdpng.split("/").pop() || "unknown.png", pngBlob);
        svgFolder?.file(file.svg.split("/").pop() || "unknown.svg", svgBlob);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, `${type}.zip`);
    console.info("Downloaded file successfully");
  } catch (error) {
    console.error("Error downloading zip:", error);
  } finally {
    setLoading(false);
  }
};

export const downloadPdf = async (setLoading: (loading: boolean) => void): Promise<void> => {
  setLoading(true);
  try {
    const blob = await fetchFile(kitpdf);
    downloadBlob(blob, kitpdf.split("/").pop() || "unknown.pdf");
  } catch (error: unknown) {
    let message = "Error downloading PDF:";
    if (error instanceof Error) {
      message = error.message;
    }
    toast.error(message);
  } finally {
    setLoading(false);
  }
};
