import React, { Component } from 'react'

export default class Listex extends Component {
  render() {
    const cars = ["alto", "brezza", "i20"];
    const listcar = cars.map((i)=>i);
    return (
      <div>{listcar}</div>
    )
  }
}
