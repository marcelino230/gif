import React, { useState, createContext, useEffect } from 'react'
import { getFavs } from '../services/user'

const Context = createContext();

export function UserContextProvider({ children }) {
    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        if (!jwt) return setFavs([]);
        const fetchFavorites = async () => {
            const favorites = await getFavs(jwt);
            setFavs(favorites);
        }
        fetchFavorites();
    }, [jwt])

    return <Context.Provider value={{ jwt, setJWT, favs, setFavs }}>
        {children}
    </Context.Provider>
}

export default Context;



