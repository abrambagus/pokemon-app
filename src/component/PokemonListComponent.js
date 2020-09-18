import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PokemonListComponent extends Component {

    render(){
            return(
            <Link to={`/pokemon-detail/${this.props.pokemonName.name}`}>
                <div class="list-pokemon-wrapper" >
                        <p className = "pokemonName">{this.props.pokemonName.name}</p>
                </div>
            </Link>
        )
    }
}


export default PokemonListComponent;