// import React from 'react';
import React, { Component } from "react";
import './search-box.styles.css';

// function SearchBox({onChange}){
// class SearchBox extends Component {
//   render() {
//     // const { onChangeHandler } = this.props;
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       ></input>
//     );
//   }
// }

const SearchBox = ({placeholder, className, onChangeHandler}) => {
  return(
    <input
         className={`search-box ${className}`}
         type="search"
         placeholder={placeholder}
         onChange={onChangeHandler}
       ></input>
  );
}

export default SearchBox;
