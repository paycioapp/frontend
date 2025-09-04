
import MediaPage from "@/app/components/mediakit/MediaPage";
import { getMetadata } from "@/app/components/MetaTags";
export const metadata = getMetadata('/media-kit')

const MediaKit= () => {

  return (
    <>
      <MediaPage />
    </>
  );
};
export default MediaKit

