import { favs } from '../config/users.js'

export function addFavorite(req, res) {
    const { id } = req.params;
    const username = res.locals.username;

    const alreadyFav = favs[username].some(fav => fav === id);
    if (alreadyFav) return res.json(favs[username]);

    favs[username].push(id);
    res.status(200).json(favs[username]);
}

export function getFavorite(req, res) {
    const username = res.locals.username;
    res.status(200).json(favs[username]);
}

export function deleteFavorite(req, res) {
    const { id } = req.params;
    const username = res.locals.username;
    const newFavorites = favs[username].filter(favId => favId !== id);
    favs[username] = newFavorites;
    res.status(200).json(newFavorites);
}