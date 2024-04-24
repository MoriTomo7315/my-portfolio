import VersionHistory from "@/app/components/templates/versionHistory";
import { GetUpdateInfos } from "@/app/domains/repositories/contentRepository";

export default function VersionHistoryPage({
  params,
}: {
  params: { contentId: string };
}) {
  const updateInfos: UpdateInfos = GetUpdateInfos(params.contentId);
  return <VersionHistory updateInfos={updateInfos} />;
}
