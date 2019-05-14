import React from "react";
import ReactDOM from "react-dom";

import style from "./sass/main.scss";

import ExampleContainer from "./containers/example-container/example-container.js";
import ExampleComponent from "./components/example-component/example-component.js";

const Index = () => {
  return (
    <div>
      Hello React!
      <ExampleContainer title="I like apples">
        <ExampleComponent />
      </ExampleContainer>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
