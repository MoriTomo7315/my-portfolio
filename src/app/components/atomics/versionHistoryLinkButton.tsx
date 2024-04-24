import Link from "next/link";

export default function VersionHistoryLinkButton() {
  return (
    <Link
      href="/gallery/1/versionhistory"
      className="border-solid border-black border-2 px-8 text-lg rounded-md shadow-md my-auto"
    >
      Version History
    </Link>
  );
}
