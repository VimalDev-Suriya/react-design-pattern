function App() {
  return (
    <div>
      <h1>Compound Component</h1>
      <p>Issues in the compound components are,</p>
      <ol>
        <li>Regid component structure</li>
        <li>
          Highly depend on props (prop driven), if we need to add a new field or
          feature, we should be updating the component
        </li>
        <li>The scalability of the component is highly impacted</li>
        <li>Unit testing the component</li>
      </ol>

      <p>
        Criteria's we need to think, on when we can create a Compound component
        from the normal presenttational component
      </p>
      <i>common Criterias are re-usability, complexity & state manangement</i>
      <ol>
        <li>Complexity & multiple related elements</li>
        <li>Shared context or state</li>
        <li>Encapsulation of the complex interaction (logic)</li>
      </ol>
    </div>
  );
}

export default App;
