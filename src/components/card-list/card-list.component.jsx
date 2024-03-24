//import React from 'react';
import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component.jsx";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <Card monster={monster}></Card>
//         ))}
//       </div>
//     );
//   }
// }

const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster}></Card>
      ))}
    </div>
  );
}

export default CardList;
