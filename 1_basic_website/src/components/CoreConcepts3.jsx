  // third way to call a prop
  
  export default function CoreConcept3({image, title, description}) {
    return(
      <li>
        <img src={image} />
        <h2>{title}</h2>
        <p>{props.description}</p>
      </li>
    );
  }
  