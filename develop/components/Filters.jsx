import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { filtersGet, setFilter } from '../actions/filters.actions';

class Filters extends Component {

    componentWillMount(){
        this.props.loadFilters();
    }

    generateFilters(){
    	let filters = [<li key={999} className='all'>All</li>];

        if (this.props.filters !== undefined) {
            this.props.filters.map((item,index) =>{
                filters.push(
                    <li key={index} className={item.name.toLowerCase()}>
                    	{item.name}
                    </li>)
            }); 
        }     
        return filters;
    }

	render() {
        return (
            <div>
            	<ul className='Filters' onClick={this.props.chose}>
            		{this.generateFilters()}
            	</ul>
            </div>
        );
    }
}

Filters.propTypes = {
    chose: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
    filters : state.filters.filterItems
});

function mapDispatchToProps (dispatch){
	return{
		loadFilters: () => dispatch(filtersGet('http://pokeapi.co/api/v1/type/?limit=999')),
		chose: (e) => {
			if (e.target.tagName === "LI") {
				return dispatch(setFilter(e.target.innerHTML))
			}
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);