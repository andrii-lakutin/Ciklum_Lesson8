import React, { PropTypes } from 'react';

const App = (props) => (
    <div id="app-view">
    	<header>Pokedex</header>
    	<div className="route">{props.children}</div>
    </div>
);

App.propTypes = {
    children: PropTypes.element,
};

export default App;
