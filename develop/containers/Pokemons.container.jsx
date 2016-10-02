import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { asyncGet } from '../actions/api.actions';
import { addFavorite, getFromStorage } from '../actions/favorites.actions';


import PokemonsPage from '../components/Pokemons.page.jsx';
//не понял как достучатся к состоянию в mapDispatchToProps.
let store = [];

class Pokemons extends Component {

    componentWillMount(){
        this.props.initialLoading();
        this.props.getFromStorageAction();
    }

    render() {
        const {initialLoading, loadMoreAction, addToFavorite, getFromStorage} = this.props;
        store = this.props.data;
        return (
            <PokemonsPage
                initialLoading={initialLoading}
                pokemonsArray={this.props.data}
                loadMoreAction={loadMoreAction}
                addToFavorite={addToFavorite}
            />
        );
    }
}

Pokemons.propTypes = {
    initialLoading: PropTypes.func,
    loadMoreAction: PropTypes.func,
    addToFavorite : PropTypes.func,
    getFromStorageAction: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
    data : state.api.apiData
});


function mapDispatchToProps (dispatch){
    let paging = 12;
    return {
        initialLoading : () => dispatch(asyncGet('http://pokeapi.co/api/v1/pokemon/?limit=12')),
        loadMoreAction : () => dispatch(asyncGet(`http://pokeapi.co/api/v1/pokemon/?limit=12&offset=${paging += 12}`)),
        getFromStorageAction: () => dispatch(getFromStorage()),
        addToFavorite  : (e) => { 
            if (e.target.classList.contains('addFavorite')) {
                //где лучше применять стили? тоже через action?
                e.target.closest('.pokemonItem').classList.add('highlight');
                e.target.classList.add('hidden');
                
                store.map((item, index) =>{
                    if (item.name === e.target.closest('.pokemonItem').childNodes[1].innerHTML) {
                        localStorage.setItem(item.name, JSON.stringify(item));
                        //В параметр ф-ции передается имя покемона
                        //Костыль: передаю имя в виде массива, чтобы клеить в state с помощью concat.
                        //Причина: метод .push в state вытворет странные чудеса
                        return dispatch(addFavorite([item]));
                    }
                });

                return
            } else return 
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
