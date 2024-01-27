  // second way to call a prop
  
  export default function CoreConcept2(props) {
    return(
      <li>
        <img src={props.image} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    );
  }