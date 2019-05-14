import React from "react";
import PropTypes from 'prop-types';

class ExampleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myvalue: false
    };

    //A way to do make sure links work
    this._handleClick = this._handleClick.bind(this)

  }

  componentDidMount(){}

  _handleClick(){
    this.setState(prevState => ({
      myvalue: !prevState.myvalue
    }));
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        title: this.props.title + ' ' + this.state.myvalue
       })
    );

    return(
      <div
        className="example-container"
        onClick={this._handleClick.bind(this)}
        >
        { childrenWithProps }
      </div>
    )
  }
}

ExampleContainer.propTypes = {
  title: PropTypes.string
}

export default ExampleContainer;
