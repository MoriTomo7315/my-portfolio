import DetailSectionTitle from "../atomics/detailSectionTitle";
import DetailPageSectionWrapper from "../molecules/detailPageSectionWrapper";
import DetailPageImage from "../atomics/detailPageImage";
import NormalUrl from "../atomics/normalUrl";

export default function GalleryDetail(content: Content) {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="space-y-12">
        <DetailPageSectionWrapper
          title={content.title}
          version={content.versions[0]}
        />

        <section>
          <DetailPageImage title={content.title} url={content.imageUrl} />
        </section>

        <section>
          <DetailSectionTitle idName="github" title="GitHub URL" />
          <div className="bg-gradient-subtle rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <NormalUrl url={content.giturl} />
          </div>
        </section>

        <section>
          <DetailSectionTitle idName="summary" title="どんな作品か？" />
          <div className="bg-gradient-subtle rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.versionDetails[0].details}
            </p>
          </div>
        </section>

        <section>
          <DetailSectionTitle idName="tech" title="使用技術" />
          <div className="bg-gradient-subtle rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.versionDetails[0].usedTech}
            </p>
          </div>
        </section>

        <section>
          <DetailSectionTitle idName="system-design" title="システムデザイン" />
          <DetailPageImage
            title={`${content.title} システムデザイン`}
            url={content.systemDesignUrl}
          />
        </section>
      </div>
    </main>
  );
}
