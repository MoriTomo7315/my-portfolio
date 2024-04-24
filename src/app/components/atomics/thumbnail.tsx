import Image from "next/image";

interface Props {
  imgPath: string;
  alt: string;
}

export default function Thumbnail(props: Props) {
  return (
    <div className="shadow-lg">
      <Image src={props.imgPath} alt={props.alt} height={300} width={500} priority={true}/>
    </div>
  );
}
