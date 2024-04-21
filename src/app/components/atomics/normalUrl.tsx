import Link from "next/link";

interface Props {
  url: string;
}
export default function NormalUrl(props: Props) {
  return (
    <Link href={props.url} className="text-blue-400 underline">
      {props.url}
    </Link>
  );
}
