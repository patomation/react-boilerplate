//Modules
import React from "react";

//Components
import Header from './header'
import Footer from './footer'
import LoaderAnimation from './loader'

var Layout = React.createClass({
  Props:{
      style: React.PropTypes.object,
      headerStyle: React.PropTypes.object,
      contentStyle: React.PropTypes.object,
      footerStyle: React.PropTypes.object,
      headerContent: React.PropTypes.object,
      footerContent: React.PropTypes.object,
  },

  styles:{
    layout:{

    },
    header:{
      padding: '2%',
      color: '#ffffff',
      backgroundColor: 'gray',
      textAlign: 'center',
    },
    content:{
      padding: '2%',
      paddingBottom: '6%',
    },
    footer:{
      padding: '2%',
      color: '#ffffff',
      backgroundColor: 'gray',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      textAlign: 'center',
    }
  },

  merge: function(obj1,obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
  },

  render: function() {

    return (
      <div
        className='layout'
        style={this.merge(this.styles.layout,this.props.style)}>

        <LoaderAnimation />

        <Header
          style={this.merge(this.styles.header,this.props.headerStyle)} >
          {this.props.headerContent}
        </Header>

        <div
          className='content'
          style={this.merge(this.styles.content,this.props.contentStyle)}>
          {this.props.children}
        </div>

        <Footer
          style={this.merge(this.styles.footer,this.props.footerStyle)}>
          {this.props.footerContent}
        </Footer>

      </div>
    );
  },
});

export default Layout;
