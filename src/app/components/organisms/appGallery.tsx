import Link from "next/link";
import AppGalleryCard from "../molecules/appGalleryCard";

export default function AppGallery() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-16">
      <AppGalleryCard
        imgPath="/thumbnail.png"
        alt="アプリ１のイメージです"
        title="アプリ1"
      />
      <AppGalleryCard
        imgPath="/thumbnail.png"
        alt="アプリ１のイメージです"
        title="アプリ1"
      />
      <AppGalleryCard
        imgPath="/thumbnail.png"
        alt="アプリ１のイメージです"
        title="アプリ1"
      />
    </div>
  );
}
