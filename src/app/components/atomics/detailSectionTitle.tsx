interface Props {
  idName: string;
  title: string;
}

export default function DetailSectionTitle(props: Props) {
  return (
    <h2 
      id={props.idName} 
      className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500 mb-4"
    >
      {props.title}
    </h2>
  );
}
