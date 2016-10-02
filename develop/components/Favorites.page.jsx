import React, { Component, PropTypes } from 'react';

import PokemonItem from './PokemonItem.jsx';

class FavoritesPage extends Component {

	generatePokemons(){

        let pokemons = [];

        this.props.items.map((item, index)=>{
        	pokemons.push(
            <li key={index} className='itemWrap'>
                <PokemonItem 
                    name={item.name} 
                    types={item.types} 
                    id={item.pkdx_id}
                    action={'remove'}
                />
            </li>)
		})  

        return pokemons;
    }

    render() {

    	const {removePokemon, fav} = this.props;

        return (
            <div>
            	<ul onClick={removePokemon} className="pokemonsWrap">
                    {this.generatePokemons()}
                </ul>
            </div>
        );
    }
}

export default FavoritesPage;