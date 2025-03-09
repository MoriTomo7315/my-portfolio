import Link from "next/link";

export default function VersionHistoryLinkButton() {
  return (
    <div className="flex-shrink-0">
      <Link
        href="/gallery/1/versionhistory"
        className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:from-sky-600 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
        </svg>
        履歴を見る
      </Link>
    </div>
  );
}
