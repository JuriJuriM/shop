import React, { Component } from 'react'
import Itemt from './Itemt'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <Itemt onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Items