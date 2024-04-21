interface Props {
  idName: string;
  title: string;
}

export default function DetailSectionTitle(props: Props) {
  return (
    <h2 id={props.idName} className="font-bold text-xl mt-12 mb-12 before:border-left before:border-solid before:border-8 before:mr-4 before:border-black">
      {props.title}
    </h2>
  );
}
