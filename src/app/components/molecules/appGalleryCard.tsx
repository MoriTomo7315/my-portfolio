import Link from "next/link";
import Thumbnail from "../atomics/thumbnail";

interface Props {
  imgPath: string;
  alt: string;
  title: string;
}

export default function AppGalleryCard(props: Props) {
  return (
    <div className="p-4">
      <Link href="/gallery/1">
        <Thumbnail imgPath={props.imgPath} alt={props.alt} />
        <p className="font-bold text-lg text-center mt-2 mb-2">{props.title}</p>
      </Link>
    </div>
  );
}
