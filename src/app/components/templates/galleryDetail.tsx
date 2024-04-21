import Link from "next/link";
import Image from "next/image";
import DetailSectionTitle from "../atomics/detailSectionTitle";

export default function GallerlyDetail(content: Content) {
  return (
    <main className="min-h-screen xl:py-32 xl:px-16 sm:py-16 sm:px-8 py-8 px-4">
      <div className="flex my-8">
        <h1 className="text-4xl mr-8 my-auto">{content.title}</h1>
        <Link
          href={content.giturl}
          className="border-solid bg-blue-600 px-8 text-lg rounded-md shadow-md text-white mr-8 my-auto"
        >
          {content.versions[0]}
        </Link>
        <Link
          href={content.giturl}
          className="border-solid border-black border-2 px-8 text-lg rounded-md shadow-md my-auto"
        >
          Version History
        </Link>
      </div>
      <div className="relative w-full h-[500px] m-auto">
        <Image
          src={"/appImage.png"}
          alt={content.title}
          fill
          objectFit="cover"
        />
      </div>
      <DetailSectionTitle idName="summary" title="GitHub URL" />
      <div className="bg-white w-full p-6">
        <Link href={content.giturl} className="text-blue-400 underline">{content.giturl}</Link>
      </div>
      <DetailSectionTitle idName="summary" title="どんな作品か？" />
      <div className="bg-white w-full p-6">xxxxx</div>
      <DetailSectionTitle idName="used-tech" title="使用技術" />
      <div className="bg-white w-full p-6">xxxxx</div>
      <DetailSectionTitle idName="used-tech" title="システムデザイン" />
      <div className="relative w-full h-[500px]">
        <Image
          src={"/appImage.png"}
          alt={content.title}
          fill
          objectFit="cover"
        />
      </div>
    </main>
  );
}
