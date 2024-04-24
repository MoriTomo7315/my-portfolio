import DetailAppTitle from "../atomics/detailAppTitle";
import DetailSectionTitle from "../atomics/detailSectionTitle";

interface Props {
  updateInfos: UpdateInfos;
}

export default function VersionHistory(props: Props) {
  return (
    <main className="min-h-screen xl:py-32 xl:px-16 sm:py-16 sm:px-8 py-8 px-4">
      {versionComponent(props.updateInfos)}
    </main>
  );
}

function versionComponent(updateInfos: UpdateInfos) {
  const versionComponents = [];
  for (let key in updateInfos) {
    versionComponents.push(
      <div key={key}>
        <DetailSectionTitle idName="summary" title={key} />
        <div className="bg-white w-full p-6">{updateInfos[key]}</div>
      </div>
    );
  }
  return versionComponents;
}
