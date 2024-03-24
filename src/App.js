import logo from "./logo.svg";
import "./App.css";
//import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import { useEffect, useState } from "react";

// Class Component App below
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       }, () => {

//       }));
//   };

//   onSearchChange = (e) => {
//       const searchField = e.target.value.toLocaleLowerCase();

//       this.setState(
//         () => {
//           return { searchField };
//         })
//   };

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {

//       return monster.name.toLocaleLowerCase().includes(searchField); //includes is case sensitive
//     });

//     return (
//       <div className="App">

//         <h1 className="app-title">Monsters Rolodex</h1>

//         {/* <input className="serch-box" type="search" placeholder="search monsters" onChange={onSearchChange}></input> */}

//         <SearchBox className="monsters-search-box" placeholder="search monsters" onChangeHandler={onSearchChange}></SearchBox>

//         {/* <h1>{this.state.monster1.name}</h1>
//         <h1>{this.state.monster2.name}</h1>
//         <h1>{this.state.monster3.name}</h1> */}
//         {/*  use .map  */}

//         {/* {filteredMonsters.map((monster, index) => {
//           return (
//             <div key={monster.id}>
//               <CardList monsterName={monster.name}></CardList>
//             </div>
//           );
//         })} */}
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }
// }

// using function component App
function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  function onSearchChange(e) {
    const searchFieldText = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldText);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); //includes is case sensitive
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      {/* <input
        className="serch-box"
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      ></input> */}

      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      ></SearchBox>

      {/* <h1>{this.state.monster1.name}</h1>
         <h1>{this.state.monster2.name}</h1>
         <h1>{this.state.monster3.name}</h1> */}
      {/*  use .map  */}

      {/* {filteredMonsters.map((monster, index) => {
           return (
             <div key={monster.id}>
               <CardList monsterName={monster.name}></CardList>
             </div>
           );
         })} */}
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
