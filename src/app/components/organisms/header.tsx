import Link from "next/link";
export default function Header() {
  return (
    <nav className="md:flex justify-between align-middle w-full bg-black p-6">
      <Link
        href="/"
        className="block lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4"
      >
        <div className="text-white">
          <span className="font-semibold text-xl tracking-tight">
            tomoya.mori
          </span>
        </div>
      </Link>
      <div className="flex">
        <Link
          href="/#app-gallery"
          className="block lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4"
        >
          App Gallery
        </Link>
        <Link
          href="/#about-me"
          className="block lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4"
        >
          About Me
        </Link>
        <Link
          href="/#contact"
          className="block lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
