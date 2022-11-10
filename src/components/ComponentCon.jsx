import React, { Component } from 'react'

export default class ComponentCon extends Component {
  render() {
    const {item, setStateModal} = this.props
    return (
        <div className='card'>
            <img src={item.image} alt='...' />
            <div className='card-body'>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <button className='btn btn-dark' onClick={() => {setStateModal(item)}}>View detail</button>
            </div>
        </div>
    )
  }
}
