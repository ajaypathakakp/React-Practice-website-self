import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButtons from './components/TabButtons.jsx';

function App() {

  let tabContent = 'Please selecti';
  function handleClick(SelectedButton){
    tabContent = SelectedButton;
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
          <TabButtons onSelect={()=> handleClick('comp')}>Components</TabButtons>
          <TabButtons onSelect={()=> handleClick('jsx')}>JSX</TabButtons>
          <TabButtons onSelect={()=> handleClick('props')}>PROPS</TabButtons>
          <TabButtons onSelect={()=> handleClick('state')}> STATE</TabButtons>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;