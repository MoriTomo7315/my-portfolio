import GallerlyDetail from "@/app/components/templates/galleryDetail";
import { GetContent } from "@/app/domains/repositories/contentRepository";

export default function GallerlyDetailPage({
  params,
}: {
  params: { contentId: string };
}) {
  const content = GetContent(params.contentId);
  return <GallerlyDetail {...content} />;
}
