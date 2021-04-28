import React from 'react';
import Pokemon from './pokemonList'

class Pokedex extends React.Component {
    render(){ 
        return(
            <div className="pokedex">
                {this.props.pokemon.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        )
    }
}

export default Pokedex; 