import React from "react";

import ExampleContainer from "./containers/example-container/example-container.js";
import ExampleComponent from "./components/example-component/example-component.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        Hello React!
        <ExampleContainer title="I like apples">
          <ExampleComponent />
        </ExampleContainer>
      </div>
    );
  }
}
