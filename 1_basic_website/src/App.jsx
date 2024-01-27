import myImage1 from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import configImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import reactCoreConcepts from "./assets/react-core-concepts.png";
import stateMgmt from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundeamental", "Crucial", "core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const randText = reactDescriptions[genRandomInt(2)];
const randInd = reactDescriptions[randText];
console.log("Random Index:", randText);
// I wrote this code above to get the output of Math Number

function CoreConcept(props) {
  return(
    <li>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}
// second way to call a prop
function CoreConcept2(props) {
  return(
    <li>
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
// third way to call a prop
function CoreConcept3({image, title, description}) {
  return(
    <li>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function NewFunction() {
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={myImage1} alt="Stylized atom" />{" "}
      {/* This is more optimized way of loading images */}
      <h1>React Essentials</h1>
      <p>
        {randText} React concepts you will need for almost any app you are going
        to build!
      </p>
      <br />

      {/* Using props with components */}
      <p>{randInd}</p>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title="Components 1"
            desc="The Core UI 974"
            img={componentsImg}
          />
          <CoreConcept
            title="Components 2"
            desc="The Core UI 567"
            img={configImg}
          />
          <CoreConcept
            title="Components 3"
            desc="The Core UI 789"
            img={jsxImg}
          />
          <CoreConcept
            title="Components 4"
            desc="The Core UI 123"
            img={stateMgmt}
          />
        </ul>
      </section>



{/* In this section I am using another way to call props */}
      <section id="core-concepts">
        <h2>Core Concepts 2</h2>
        <ul>
          <CoreConcept2
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept2 {...CORE_CONCEPTS[1]} />
          {/* SECOND WAY TO CALL A PROP ABOVE */}
          <CoreConcept3
            title="Components 3"
            description="The Core UI 789"
            image={jsxImg}
          />
          <CoreConcept3
            title="Components 4"
            description="The Core UI 123"
            image={stateMgmt}
          />
        </ul>
      </section>
      {/* This line is to understand code */}
    </header>
  );
}

function App() {
  return (
    <div>
      <NewFunction></NewFunction>
      <genRandomInt />
      <main>
        <h2>Time to get started! </h2>
      </main>
    </div>
  );
}
// Hello
export default App;
