import DetailAppTitle from "../atomics/detailAppTitle";
import LatestVersionTag from "../atomics/latestVersionTag";
import VersionHistoryLinkButton from "../atomics/versionHistoryLinkButton";

interface Props {
  title: string;
  version: string;
}

export default function DetailPageSectionWrapper(props : Props) {
  return (
    <div className="bg-gradient-subtle rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <DetailAppTitle idName="app-title" title={props.title} />
        <div className="flex items-center gap-3">
          <LatestVersionTag version={props.version} />
          <VersionHistoryLinkButton />
        </div>
      </div>
    </div>
  );
}
