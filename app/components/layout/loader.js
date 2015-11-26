//Modules
import React from "react"
import $ from 'jquery'
import Utilities from '../../utilities'

//Components
import Spinner from './spinner'

export default React.createClass({
  styles:{
    container:{
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '100'
    },
    topDoor:{
      position: 'fixed',
      width: '100%',
      height: '50%',
      top: '0',
      backgroundColor: 'black',
      zIndex: '101'
    },
    bottomDoor:{
      position: 'fixed',
      width: '100%',
      height: '50%',
      bottom: '0',
      backgroundColor: 'black',
      zIndex: '101'
    },
    spinner:{
      zIndex: '200',
      top: '42.5%',
    }
  },


  animation:{
    hideSpinner:function (callback) {
      $('.spinner').animate({opacity: '0'},500,function(){
        callback ? callback() : null
      });
    },
    openDoors:function (callback) {
      $('.topDoor').animate({top: '-50%'},2000,'swing', callback ? callback() : null );
      $('.bottomDoor').animate({bottom: '-50%'},2000, callback ? callback() : null );
    },
  },

  componentDidMount:function () {
    //ANIMATION Entrance point
    setTimeout(function(){
      this.animation.hideSpinner(
        this.animation.openDoors()
      )
    }.bind(this),1000);

    //Open Door After Loading done

  },

  render: function() {
    return (
      <div
        className="loader-animation"
        style={Utilities.merge(this.styles.container, this.props.style)}>
        <Spinner style={this.styles.spinner}/>

        <div className='topDoor' style={this.styles.topDoor}></div>
        <div className='bottomDoor' style={this.styles.bottomDoor}></div>

      </div>
    );
  },
});
