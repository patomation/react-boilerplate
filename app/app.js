//Modules
import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './main.scss'

//Components
import Layout from './components/layout/layout'
import Svg from './components/svg/svg'

//IMAGES
import image from '../images/CHAT2.gif'
import svg from '../images/logout.svg'

var App = React.createClass({

  render: function() {
    return(
      <div className='app'>
        <Layout
          headerContent={'header content'}
          footerContent={'footer content'}>

          Hello World
          <br/>
          <img src={image} />

          <Svg src={svg} />

          <img src={svg} />



        </Layout>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('App')
);
