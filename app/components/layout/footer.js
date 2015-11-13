import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div
        className="footer"
        style={this.props.style}>
        {this.props.children}
      </div>
    );
  },
});
