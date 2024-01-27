import myImage1 from "./assets/react-core-concepts.png"
const reactDescriptions = ["Fundeamental", "Crucial", "core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const randText = reactDescriptions[genRandomInt(2)];
const randInd = reactDescriptions[randText];
console.log("Random Index:", randText);
// I wrote this code above to get the output of Math Number
function NewFunction() {
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={myImage1} alt="Stylized atom" /> {/* This is more optimized way of loading images */}
      
      <h1>React Essentials</h1>
      <p>
        {randText} React concepts you will need for almost any app you are
        going to build!
      </p><br/>
      <p>{randInd}</p>
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
// Hello
export default App;
