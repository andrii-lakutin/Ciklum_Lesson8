import React, { Component, PropTypes } from 'react';

import PokemonItem from './PokemonItem.jsx';
import Filters from './Filters.jsx';

class PokemonsPage extends Component {

    generatePokemons(){

        let pokemons = [];

        if (this.props.pokemonsArray !== undefined) {

            this.props.pokemonsArray.map((item,index) =>{
                //проверка чтобы не ловить ошибку если 2-го типа покемона нет
                let check = {name: 'no value'};

                if (item.types[1]) {
                    check = item.types[1];
                } 
                //применяем фильтры
                if (this.props.currentFilter === 'all' || 
                    item.types[0].name.indexOf(this.props.currentFilter.toLowerCase()) !== -1 || 
                    check.name.indexOf(this.props.currentFilter.toLowerCase()) !== -1) {
                    pokemons.push(
                        <li key={index} className='itemWrap'>
                            <PokemonItem 
                                name={item.name} 
                                types={item.types} 
                                id={item.pkdx_id}
                                action={'add'}
                            />
                        </li>
                    )
                }
            }); 

        }    

        return pokemons;
    }

    render() {
        const {loadMoreAction,addToFavorite} = this.props;

        return (
            <div>
                <Filters />
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