import { downloadLogoZip } from "@/app/components/mediautils";
import ColorInfo from "./ColorInfo";
import Image from "next/image";
import { useTranslations } from "next-intl";


interface MediaData {
  id: number;
  headerline: string;
  logo: string;
  text: string;
  backgroundcolor: string;
  isDownload: boolean;
  type?: string;
  blue?: string;
  yellow?: string;
  parsianblue?: string;
  limeyellow?: string;
}

interface MediaBoxProps {
  box: {
    header: string;
    data: MediaData[];
  };
  setLoading: (loading: boolean) => void;
}

const MediaBox: React.FC<MediaBoxProps> = ({ box, setLoading }) => {
  const t = useTranslations();
  return (
    <>
      {box.header && <h3 className="text-2xl font-semibold mt-24 mb-5">{box.header}</h3>}
      {box.data.map((data) => (
        <div className="flex md:flex-row flex-col items-center gap-12 bg-white rounded-[20px] shadow-md p-6 mb-5 w-full" key={data.id}>
          <div className="flex items-center justify-center rounded-[20px] flex-[0_0_250px] h-[200px] w-[220px] p-4" style={{ background: data.backgroundcolor }}>
            <Image fill src={data.logo} alt="" className="object-contain aspect-[1/1] !relative" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl xl:text-2xl font-bold">{data.headerline}</h4>
            <p className="text-sm md:text-base mt-1">{data.text}</p>
            {data.isDownload ? (
              <button className="mt-4 bg-thm text-white px-4 py-2 rounded-full" onClick={() => downloadLogoZip(data.type ?? "", setLoading)}>
                {t('mediakit_line15')}
              </button>
            ) : (
              <ColorInfo data={data} />
            )}
          </div>
        </div>
      ))}
    </>
  )
};

export default MediaBox;
