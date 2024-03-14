// import { Component } from 'react'

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField : '',
//     };
//   }

//   async componentDidMount(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/users');
//     let jsonData = await data.json();
//     try {
//       if(!jsonData){
//         throw error;
//       }else{
//         this.setState(()=>{
//           return {monsters: jsonData}
//         })

//       }
//     } catch (error) {
//       alert("No users found");
//     }
//   }

//   onSearchChange = (event)=>{
//     let searchField = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return {searchField}
//     })
//   }

//   render(){

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = this.state.monsters.filter((element)=>{
//       return element.name.toLowerCase().includes(this.state.searchField);
//     })

//     return (
//       <div className='app'>
//       <SearchBoxComponet onChangeHandler={onSearchChange} placeholder={'search monsters'} className={`search-box ${'monsters-search-box'}`}/>
//       <CardListComponent monsters={filteredMonsters} />

//       </div>
//     )
//   }
// }

// export default App

import React, { useState, useEffect } from "react";
import "./App.css";
import CardListComponent from "./components/cardList/CardListComponent";
import SearchBoxComponet from "./components/seachBox/SearchBoxComponet";
export default function App() {
  // Setting states
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    async function getData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let jsonData = await data.json();
      try {
        if (!jsonData) {
          throw error;
        } else {
          console.log(jsonData);
          setMonsters(jsonData);
        }
      } catch (error) {
        alert("No users found");
      }
    }
    getData();
  }, []);

  const filteredMonsters = monsters.filter((element) => {
    return element.name.toLowerCase().includes(searchField);
  });

  const onSearchChange = (event) => {
    let searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <div className="app">
        <h1 className="heading">Monsters Roladex</h1>
        <SearchBoxComponet
          onChangeHandler={onSearchChange}
          placeholder={"search monsters"}
          className={`search-box ${"monsters-search-box"}`}
        />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    </>
  );
}
