import { useTranslations } from "next-intl";
import { downloadLogoZip } from "../mediautils";

interface DownloadButtonProps {
    type?: string;
    setLoading: (loading: boolean) => void;
  }
  
  const DownloadButton: React.FC<DownloadButtonProps> = ({ type = "", setLoading }) => {
    const t = useTranslations();
    return (
      <button className="mt-4 bg-thm text-white px-4 py-2 rounded-full" onClick={() => downloadLogoZip(type, setLoading)}>
        {t('mediakit_line15')}
      </button>
    );
  };
  
  export default DownloadButton;
  