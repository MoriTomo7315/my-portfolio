interface Props {
  idName: string;
  title: string;
}

export default function SectionTitle(props: Props) {
  return (
    <h2 id={props.idName} className="font-bold text-xl text-center mt-12 mb-12">
      {props.title}
    </h2>
  );
}
