import React, { Component } from "react";
import "../cardList/carList.styles.css";
export default class CardComponent extends Component {
  render() {
    const {name, email, id} = this.props.monsters;
    return (
      <>
        <div className="card-container" key={id}>
          <img
            src={`https://robohash.org/${id}?sets=set2&size=180x180`}
            alt={email}
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </>
    );
  }
}
