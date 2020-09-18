import {combineReducers} from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonDetailReducer from './PokemonDetailReducer'

const RootReducer =  combineReducers({
    pokemonName : PokemonListReducer,
    pokemonDetail : PokemonDetailReducer
  });

  export default RootReducer;