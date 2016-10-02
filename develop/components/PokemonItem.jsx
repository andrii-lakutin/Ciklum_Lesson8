import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class PokemonItem extends Component {

    generateTypes(){
        let types = [];
        this.props.types.map((item,index)=>{
            types.push(<li className={item.name} key={index}>{item.name}</li>);
        })
        return types;
    }

    render() {

        let classes = classNames({
            'pokemonItem' : true,
            'highlight' : localStorage.getItem(this.props.name) ? true : false
        }); 

        let btnVisibility = classNames({
            'addFavorite' : this.props.action === 'add' ? true : false,
            'removeFavorite' : localStorage.getItem(this.props.name) ? true : false,
            'addFavorite hidden' : localStorage.getItem(this.props.name) && this.props.action === 'add' ? true : false,
        })

        return (
            <div className={classes}>
                <img src={`http://pokeapi.co/media/img/${this.props.id}.png`}/>
                <h1>{this.props.name}</h1>
                <ul>{this.generateTypes()}</ul>
                <div className={btnVisibility}>{this.props.action.toUpperCase()}</div>
            </div>
        );
    }
}


export default PokemonItem;