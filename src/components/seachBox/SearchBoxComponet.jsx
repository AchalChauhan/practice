import React, { Component } from 'react'
import './searchBox.styles.css'
export default class SearchBoxComponet extends Component {
  render() {
    return (
      <>
         <input className={this.props.className} placeholder={this.props.placeholder} type="text" onChange={this.props.onChangeHandler} />
      </>
    )
  }
}
