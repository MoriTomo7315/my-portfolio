import DetailAppTitle from "../atomics/detailAppTitle";
import LatestVersionTag from "../atomics/latestVersionTag";
import VersionHistoryLinkButton from "../atomics/versionHistoryLinkButton";

interface Props {
  title: string;
  version: string;
}

export default function DetailPageSectionWrapper(props : Props) {
  return (
    <div className="flex my-8">
      <DetailAppTitle idName="app-title" title={props.title} />
      <LatestVersionTag version={props.version} />
      <VersionHistoryLinkButton />
    </div>
  );
}
