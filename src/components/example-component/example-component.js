import React from 'react'
import PropTypes from 'prop-types'

const ExampleComponent = ({
  title
}) => {
  return (
    <div
      className="component-example">
      {title}
    </div>
  )
}

ExampleComponent.propTypes = {
  title: PropTypes.string
}

export default ExampleComponent
