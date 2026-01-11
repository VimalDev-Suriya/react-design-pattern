import Tab from "./components/CompoundComponent/Tab/Tab";
import TabContainer from "./components/CompoundComponent/Tab/TabComponent";

function App() {
  return (
    <>
      <div>
        <h1>Compound Component</h1>
        <p>Issues in the compound components are,</p>
        <ol>
          <li>Regid component structure</li>
          <li>
            Highly depend on props (prop driven), if we need to add a new field
            or feature, we should be updating the component
          </li>
          <li>The scalability of the component is highly impacted</li>
          <li>Unit testing the component</li>
        </ol>

        <p>
          Criteria's we need to think, on when we can create a Compound
          component from the normal presenttational component
        </p>
        <i>common Criterias are re-usability, complexity & state manangement</i>
        <ol>
          <li>Complexity & multiple related elements</li>
          <li>Shared context or state</li>
          <li>Encapsulation of the complex interaction (logic)</li>
        </ol>
      </div>

      {/* below componet handles both active tab index in both tabcontainer as well in tab component */}
      {/* <TabContainer>
        <Tab label="tab1">
          <h2>Tab header 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            molestias alias dolorum consectetur deleniti velit atque, voluptas
            tempore, mollitia ipsa, provident tenetur facere quos? Enim harum
            sint repellat fugit fugiat?
          </p>
        </Tab>
        <Tab active label="tab2">
          <h2>Tab header 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            molestias alias dolorum consectetur deleniti velit atque, voluptas
            tempore, mollitia ipsa, provident tenetur facere quos? Enim harum
            sint repellat fugit fugiat?
          </p>
        </Tab>
        <Tab label="tab3">
          <h2>Tab header 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            molestias alias dolorum consectetur deleniti velit atque, voluptas
            tempore, mollitia ipsa, provident tenetur facere quos? Enim harum
            sint repellat fugit fugiat?
          </p>
        </Tab>
      </TabContainer> */}
    </>
  );
}

export default App;
