import myImage1 from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import configImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import reactCoreConcepts from "./assets/react-core-concepts.png";
import stateMgmt from "./assets/state-mgmt.png";


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
