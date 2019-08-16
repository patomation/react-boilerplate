import React, {useState} from "react";
import PropTypes from 'prop-types';

export default (props) => {

  const [myValue, setMyValue] = useState(false);

  const { children, title } = props;

  const childrenWithProps = React.Children.map( children, child =>
    React.cloneElement(child, {
      title: `${title} ${myValue}`
     })
  );

  return(
    <div
      className="example-container"
      onClick={()=>{
        setMyValue(!myValue);
      }}>

      { childrenWithProps }

    </div>
  )
}
