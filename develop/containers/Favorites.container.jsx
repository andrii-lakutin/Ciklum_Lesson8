import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { asyncGetFavorite } from '../actions/api.actions';
import { removeFavorite } from '../actions/favorites.actions';

import FavoritesPage from '../components/Favorites.page.jsx';

class Favorites extends Component {


	render() {
		const {removePokemon} = this.props;

        return (
        	<FavoritesPage removePokemon={removePokemon} items={this.props.items}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
	items: state.favorites.items,
});

function mapDispatchToProps (dispatch){
    return {
    	removePokemon: (e) => {
    		if (e.target.classList.contains('removeFavorite')) {
    			//в каком месте правильно работать с localStorage?
            	for (let key in localStorage){
            		let item = JSON.parse(localStorage[key]);
                    if (item.name === e.target.closest('.pokemonItem').childNodes[1].innerHTML) {
                        localStorage.removeItem(item.name);
                        return dispatch(removeFavorite(item));
                    }
                };
                return
            } else return 
    	}
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);