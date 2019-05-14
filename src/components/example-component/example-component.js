import React from "react";
import PropTypes from 'prop-types';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){}

  render(){

    return(
      <div
        className="component-example">
          {this.props.title}
      </div>
    )
  }
}

ExampleComponent.propTypes = {
  title: PropTypes.string
}

export default ExampleComponent;
