import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity;
    return (
      <div className="color-box" style={{ opacity: opacity }}>
        {opacity >= 0.2 ? <ColorBox opacity={opacity - 0.1} /> : null}
      </div>
    )
  }

  //or
  // render() {
  //   let opacity = this.props.opacity;
  //   if(opacity >= 0.2) {
  //     return (
  //       <div className="color-box" style={{ opacity: opacity }}>
  //         <ColorBox opacity={opacity - 0.1} />
  //       </div>
  //       )
  //   }
  //   else{
  //     return null
  //   }
  // }

}

