import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';
import Pokemons from '../containers/Pokemons.container.jsx';
import Favorites from '../containers/Favorites.container.jsx';


export default (
    <Route path="/" component={App}>
        <IndexRedirect to="pokemons" />

        <Route path="pokemons" component={Pokemons} />
        <Route path="favorites" component={Favorites} />
    </Route>
);
