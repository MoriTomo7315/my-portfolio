import Link from "next/link";

export default function ContactIconButton() {
  return (
    <div className="text-center">
      <Link 
        href="https://forms.gle/Eh9AFByKusFJqB5o9"
        className="inline-block px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
      >
        問い合わせはこちらから
      </Link>
    </div>
  );
}
