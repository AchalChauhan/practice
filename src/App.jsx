import { Component } from 'react'
import './App.css'
import CardListComponent from './components/cardList/CardListComponent'
import SearchBoxComponet from './components/seachBox/SearchBoxComponet';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField : '',
    };
  }

  async componentDidMount(){
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    let jsonData = await data.json();
    try {
      if(!jsonData){
        throw error;
      }else{
        this.setState(()=>{
          return {monsters: jsonData}
        })
        
      }
    } catch (error) {
      alert("No users found");
    }
  }

  onSearchChange = (event)=>{ 
    let searchField = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchField}
    })
  }

  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = this.state.monsters.filter((element)=>{
      return element.name.toLowerCase().includes(this.state.searchField);
    })

    return (
      <div className='app'>
      <SearchBoxComponet onChangeHandler={onSearchChange} placeholder={'search monsters'} className={`search-box ${'monsters-search-box'}`}/>
      <CardListComponent monsters={filteredMonsters} />

      </div>
    )
  }
}

export default App
