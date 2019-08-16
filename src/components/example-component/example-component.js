import React from "react";

export default (props) => {

  const { title } = props;

  return (
    <div
      className="component-example">
        {title}
    </div>
  );
  
}
