import DetailSectionTitle from "../atomics/detailSectionTitle";
import DetailPageSectionWrapper from "../molecules/detailPageSectionWrapper";
import DetailPageImage from "../atomics/detailPageImage";
import NormalUrl from "../atomics/normalUrl";

export default function GallerlyDetail(content: Content) {
  return (
    <main className="min-h-screen xl:py-32 xl:px-16 sm:py-16 sm:px-8 py-8 px-4">
      <DetailPageSectionWrapper
        title={content.title}
        version={content.versions[0]}
      />
      <DetailPageImage title={content.title} url={content.imageUrl} />
      <DetailSectionTitle idName="summary" title="GitHub URL" />
      <div className="bg-white w-full p-6">
        <NormalUrl url={content.giturl} />
      </div>
      <DetailSectionTitle idName="summary" title="どんな作品か？" />
      <div className="bg-white w-full p-6">
        {content.versionDetails[0].details}
      </div>
      <DetailSectionTitle idName="used-tech" title="使用技術" />
      <div className="bg-white w-full p-6">
        {content.versionDetails[0].usedTech}
      </div>
      <DetailSectionTitle idName="used-tech" title="システムデザイン" />
      <DetailPageImage
        title="{content.title} システムデザイン"
        url={content.systemDesignUrl}
      />
    </main>
  );
}
