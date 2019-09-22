import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ExampleContainer = ({
  children, title
}) => {
  const [myValue, setMyValue] = useState(false)

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      title: `${title} ${myValue}`
    })
  )

  return (
    <div
      className="example-container"
      onClick={() => {
        setMyValue(!myValue)
      }}>

      { childrenWithProps }

    </div>
  )
}

ExampleContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string
}

export default ExampleContainer
