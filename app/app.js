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
  styles:{
    layout:{},
    header:{},
    content:{},
    footer:{},
  },

  render: function() {
    return(
      <div className='app'>
        <Layout
          style={{}}
          headerStyle={this.styles.header}
          contentStyle={this.styles.content}
          footerStyle={this.styles.footer}
          headerContent={'header content'}
          footerContent={'footer content'}>

          Hello World
          <br/>
          <img src={image} />

          <Svg
            style={{
              width: '30%',
              fill: 'gold',
            }}
            src={svg} />

          <img
            style={{
              width: '30%',
              fill: 'red',
            }}
            src={svg} />



        </Layout>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('App')
);
