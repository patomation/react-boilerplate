//Modules
import React from "react";
import Utilities from '../../utilities'

export default React.createClass({
  style:{

  },

  render: function() {
    return (
      <div
        className="spinner verticalAlign"
        style={Utilities.merge(this.style, this.props.style)}>

      </div>
    );
  },
});
