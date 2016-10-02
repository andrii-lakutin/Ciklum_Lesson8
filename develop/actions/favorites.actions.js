import favoritesTypes from './types/favorites.types';

export const addFavorite = (target) => ({
    type: favoritesTypes.ADD_FAVORITE,
    target,
});

export const removeFavorite = (target) => ({
    type: favoritesTypes.REMOVE_FAVORITE,
    target,
});

export const getFromStorage = () => ({
    type: favoritesTypes.GET_FROM_STORAGE,
});

