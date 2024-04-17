import Link from "next/link";
import AppGalleryCard from "../molecules/appGalleryCard";

export default function AppGallery() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-16">
      <Link href="#">
        <AppGalleryCard
          imgPath="/thumbnail.png"
          alt="アプリ１のイメージです"
          title="アプリ1"
        />
      </Link>
      <Link href="#">
        <AppGalleryCard
          imgPath="/thumbnail.png"
          alt="アプリ１のイメージです"
          title="アプリ1"
        />
      </Link>
      <Link href="#">
        <AppGalleryCard
          imgPath="/thumbnail.png"
          alt="アプリ１のイメージです"
          title="アプリ1"
        />
      </Link>
    </div>
  );
}
