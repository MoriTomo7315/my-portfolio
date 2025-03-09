interface Props {
    idName: string;
    title: string;
  }
  
  export default function DetailAppTitle(props: Props) {
    return (
        <h1 
          id={props.idName}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500"
        >
          {props.title}
        </h1>
    );
  }
  