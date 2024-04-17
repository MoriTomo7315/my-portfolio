import Link from "next/link";
export default function ContactIconButton() {
  return (
    <div className="text-center">
      <button className="p-4 w-50 border-solid border-2 hover:border-0 border-black  hover:bg-blue-500 hover:text-white">
        <Link href="https://forms.gle/Eh9AFByKusFJqB5o9">
          問い合わせはこちらから
        </Link>
      </button>
    </div>
  );
}
