//Modules
import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './main.scss'

//Components
import Layout from './components/layout/layout'

//IMAGES
import image from '../images/CHAT2.gif'

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

        </Layout>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('App')
);
