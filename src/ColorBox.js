import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity;
    console.log(opacity);
    return ( 
      <div className="color-box" style={{opacity: opacity}}>
      {opacity >= 0.2 ? <div><CoorBox opacity={opacity - 0.1} /></div> : null}
      </div>
    )
  }
  // render() {
  //   const opacity = this.props.opacity;
  //   console.log(opacity);
  //   <div className="color-box" style={{ opacity: opacity-0.1 }}>
  //   </div>
  //   if(opacity >= 0.02) {
  //     return (<div><ColorBox opacity={opacity - 0.1} /></div>);
  //   }
  // }

}