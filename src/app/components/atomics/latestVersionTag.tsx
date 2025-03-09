import Link from "next/link"

interface Props {
    version: string
}

export default function LatestVersionTag(props: Props) {
    return (
        <div className="flex-shrink-0">
            <Link
                href={`https://github.com/MoriTomo7315/my-portfolio/tree/${props.version}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-sky-500/10 to-blue-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 hover:from-sky-500/20 hover:to-blue-500/20 transition-all duration-200"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2"></span>
                v{props.version}
            </Link>
        </div>
    )
}