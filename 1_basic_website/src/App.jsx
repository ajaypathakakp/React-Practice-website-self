import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButtons from './components/TabButtons.jsx';
import { Component, useState } from "react";
import { EXAMPLES } from './data.js';
function App() {
  const [SelectedTopic, setSelectedTopic] = useState()
  let tabContent = 'Hello all';
  function handleClick(SelectedButton){
    setSelectedTopic(SelectedButton);
    tabContent = {SelectedButton};
    // console.log(SelectedButton);
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButtons isSelect={SelectedTopic === "component"} onSelect={()=> handleClick('components')}>Components</TabButtons>
          <TabButtons isSelect={SelectedTopic === "jsx"} onSelect={()=> handleClick('jsx')}>JSX</TabButtons>
          <TabButtons isSelect={SelectedTopic === "props"} onSelect={()=> handleClick('props')}>PROPS</TabButtons>
          <TabButtons isSelect={SelectedTopic === "state"} onSelect={()=> handleClick('state')}>STATE</TabButtons>
          </menu>
        </section>
        {/* {SelectedTopic} */}
        {!SelectedTopic ? <h2>Select a text </h2> : <div id="tab-contents">
          <h2>{EXAMPLES[SelectedTopic].title}</h2>
          <p>{EXAMPLES[SelectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[SelectedTopic].code}
            </code>
          </pre>
        </div>}
        
      </main>
    </div>
  );
}

export default App;