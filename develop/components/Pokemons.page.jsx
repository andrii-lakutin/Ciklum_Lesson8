import React, { Component, PropTypes } from 'react';

import PokemonItem from './PokemonItem.jsx';

class PokemonsPage extends Component {

    generatePokemons(){
        let pokemons = [];
        if (this.props.pokemonsArray !== undefined) {
            this.props.pokemonsArray.map((item,index) =>{
                pokemons.push(<li key={index}>
                                <PokemonItem name={item.name} types={item.types} id={item.pkdx_id}/>
                             </li>)
            }); 
        }     
        return pokemons;
    }

    print(){
        const pokemons = this.props.pokemonsArray;
        console.log(pokemons);
    }

    render() {
        const {initialLoading,loadMoreAction } = this.props;

        return (
            <div>
                <div onClick={initialLoading}>initialLoading</div>
                <ul>
                    {this.generatePokemons()}
                </ul>
                <div onClick={loadMoreAction}>LOAD MORE</div>
            </div>
        );
    }
}

PokemonsPage.propTypes = {
    initialLoading: PropTypes.func,
    loadMoreAction: PropTypes.func,
};

export default PokemonsPage;