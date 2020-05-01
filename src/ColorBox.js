import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
    
    ]
  }

  render() {
    const currentOpacity = this.props.opacity
    const newOpacity = currentOpacity - 0.1
    console.log(currentOpacity)
    console.log(newOpacity)
    return currentOpacity >= 0.2 ? (
        <div className="color-box" style={{ opacity: currentOpacity }}>
          <ColorBox opacity={newOpacity} />
        </div>
      ) : null
  }

}

