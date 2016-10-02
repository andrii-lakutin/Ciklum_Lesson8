import React, { Component, PropTypes } from 'react';

import PokemonItem from './PokemonItem.jsx';

class PokemonsPage extends Component {

    generatePokemons(){

        let pokemons = [];

        if (this.props.pokemonsArray !== undefined) {
            this.props.pokemonsArray.map((item,index) =>{
                pokemons.push(
                    <li key={index} className='itemWrap'>
                        <PokemonItem 
                            name={item.name} 
                            types={item.types} 
                            id={item.pkdx_id}
                            action={'add'}
                        />
                    </li>)
            }); 
        }     
        return pokemons;
    }

    render() {
        const {loadMoreAction,addToFavorite} = this.props;

        return (
            <div>
                <ul onClick={addToFavorite} className="pokemonsWrap">
                    {this.generatePokemons()}
                </ul>
                <div className="loadMore" onClick={loadMoreAction}>Load More</div>
            </div>
        );
    }
}

PokemonsPage.propTypes = {
    loadMoreAction: PropTypes.func,
    addToFavorite : PropTypes.func,
};

export default PokemonsPage;