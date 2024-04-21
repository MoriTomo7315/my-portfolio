interface Props {
    idName: string;
    title: string;
  }
  
  export default function DetailAppTitle(props: Props) {
    return (
        <h1 id={props.idName} className="text-4xl mr-8 my-auto">{props.title}</h1>
    );
  }
  