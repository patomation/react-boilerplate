//Modules
import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './main.scss'

//Components
import Layout from './components/layout'
import image from '../images/CHAT2.gif'

var App = React.createClass({
  render: function() {
    return(
      <div className='app'>
        <Layout>
          Hello World
          <br/>
          <img src={image} />
        </Layout>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('App')
);
