import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {content} = this.props
    return (
        <div className='card'>
            <h3>San pham vua duoc click</h3>
            <h3>{content.name}</h3>
            <h3>{content.price}</h3>
            <img src={content.image} alt='...' />
      </div>   
    )
  }
}
