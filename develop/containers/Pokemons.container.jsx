import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncGet } from '../actions/api.actions';

import PokemonsPage from '../components/Pokemons.page.jsx';

class Pokemons extends Component {

    componentWillMount(){
        this.props.initialLoading();
    }

    render() {
        const {initialLoading, loadMoreAction } = this.props;

        return (
            <PokemonsPage
                initialLoading={initialLoading}
                pokemonsArray={this.props.data}
                loadMoreAction={loadMoreAction}
            />
        );
    }
}

Pokemons.propTypes = {
    initialLoading: PropTypes.func,
    loadMoreAction: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
    data : state.api.apiData
});

function mapDispatchToProps (dispatch){
    let paging = 12;
    return {
        initialLoading : () => dispatch(asyncGet('http://pokeapi.co/api/v1/pokemon/?limit=12')),
        loadMoreAction : () => dispatch(asyncGet(`http://pokeapi.co/api/v1/pokemon/?limit=12&offset=${paging += 12}`)),
        // handleCommonAction: bindActionCreators(commonAction, dispatch),   как через байнд передавать параметры?
        // initialLoading: bindActionCreators(asyncGet, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
