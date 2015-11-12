//Modules
import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './main.scss'

//Components
import Layout from './components/layout'

var App = React.createClass({
  render: function() {
    return(
      <div className='app'>
        <Layout>
          Hello World
        </Layout>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('App')
);
