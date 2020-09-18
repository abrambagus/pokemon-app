import React, {Component} from 'react';
import PokemonListComponent from '../component/PokemonListComponent'
import axios from 'axios';
import { connect } from 'react-redux';

class PokemonListContainer extends Component{

    componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((result)=>{
            this.props.handleGetPokemonName(result)
        }) 
    }

    render(){ 
        const pokemonName = this.props.pokemonName.data
        return(
            pokemonName.map(pokemonName => {
            return <PokemonListComponent 
                    pokemonName = {pokemonName} 
                    />
            })
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        pokemonName : state.pokemonName
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleGetPokemonName : (result) =>dispatch({type : "GET_POKEMON_NAME", payload: result.data.results})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer);
