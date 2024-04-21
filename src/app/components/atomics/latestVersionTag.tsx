import Link from "next/link"

interface Props {
    version: string
}


export default function LatestVersionTag(props: Props) {
    return (
        <Link
          href={'https://github.com/MoriTomo7315/my-portfolio/tree/' + props.version}
          className="border-solid bg-blue-600 px-8 text-lg rounded-md shadow-md text-white mr-8 my-auto"
        >
          {props.version}
        </Link>
    )
}