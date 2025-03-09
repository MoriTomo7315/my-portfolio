import GalleryDetail from "@/app/components/templates/galleryDetail";
import { GetContent } from "@/app/domains/repositories/contentRepository";

export default function GalleryDetailPage({
  params,
}: {
  params: { contentId: string };
}) {
  const content = GetContent(params.contentId);
  return <GalleryDetail {...content} />;
}
