import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div
        className="header"
        style={this.props.style}>
        {this.props.children}
      </div>
    );
  },
});
