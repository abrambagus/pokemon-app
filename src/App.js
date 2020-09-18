import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route as RouteTo, Link} from 'react-router-dom';
import PokemonListContainer from './container/PokemonListContainer';
import PokemonDetailContainer from './container/PokemonDetailContainer';
import Navbar from './component/Navbar';
import './App.css';

class App extends Component{

  render(){
    return(
      <Router>
        <Fragment>
          <Navbar/>
          <RouteTo path="/" exact component = {PokemonListContainer}/>
          <RouteTo path = "/pokemon-detail/:name" component ={PokemonDetailContainer}/> 
        </Fragment>

      </Router>
    )
  }
}
  export default App;

