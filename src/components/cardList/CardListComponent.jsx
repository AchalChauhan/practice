import React, { Component } from "react";
import "./carList.styles.css";
import CardComponent from "../card/CardComponent";
export default class CardListComponent extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <>
        {
          <div className="card-list">
            {monsters.map((element) => {
              return (
                <CardComponent key={element.id} monsters={element} className="card-container"/>
              );
            })}
          </div>
        }
      </>
    );
  }
}
