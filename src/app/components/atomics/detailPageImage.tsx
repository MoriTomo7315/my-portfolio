import Image from "next/image";
interface Props {
  title: string;
  url: string;
}
export default function DetailPageImage(props: Props) {
  return (
    <div className="relative w-full h-[500px] m-auto">
      <Image
        src={props.url}
        alt={props.title}
        fill
        style={{ objectFit: "contain" }}
        priority={true}
      />
    </div>
  );
}
