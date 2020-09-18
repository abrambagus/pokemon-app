import React, {Component} from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PokemonDetailComponent from '../component/PokemonDetailComponent';
import _ from 'lodash';

class PokemonDetailContainer extends Component{

    componentDidMount(){
        let name = this.props.match.params.name
         Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((result)=>{
            let pokemonDetail = result.data
            this.props.handleGetPokemonDetail(pokemonDetail, name);
        })
    }

    render(){
        const pokemonDetail = this.props.pokemonDetail.data;
        let name = this.props.match.params.name;
        console.log(pokemonDetail.moves)
        if(_.isEqual(name, pokemonDetail.name)){
            return(
                <PokemonDetailComponent
                pokemonName = {pokemonDetail.name} 
                pokemonImg = {pokemonDetail.sprites}
                pokemonTypes = {pokemonDetail.types}
                pokemonHeight = {pokemonDetail.height}
                pokemonWeight = {pokemonDetail.weight}
                pokemonStats = {pokemonDetail.stats}
                pokemonAbilities = {pokemonDetail.abilities}
                pokemonMoves = {pokemonDetail.moves}/>
            )
        }
        else {
            return <p>LOADING</p>
        }
    }
}


const mapStateToProps = (state)=>{
    return{
        pokemonDetail : state.pokemonDetail
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleGetPokemonDetail : (pokemonDetail) =>dispatch({type : "GET_POKEMON_DETAIL", pokemonDetail : pokemonDetail})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailContainer);