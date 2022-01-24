import { useCallback, useContext, useState } from 'react'
import Context from '../context/userContext'
import * as authService from '../services/auth'
import * as userService from '../services/user'
import { useLocation } from "wouter";

const useUser = () => {
    const { jwt, setJWT, favs, setFavs } = useContext(Context);
    const [, pushLocation] = useLocation();
    const [error, setError] = useState(false);

    const login = useCallback(async ({ username, password }) => {
        try {
            const token = await authService.login({ username, password });
            setJWT(token);
            sessionStorage.setItem('jwt', token);
        } catch (error) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }, [setJWT]);

    const logout = useCallback(() => {
        setJWT(null);
        sessionStorage.clear();
    }, [setJWT]);

    const registerUser = useCallback(async ({ username, password }) => {
        try {
            await authService.registerUser({ username, password });
            pushLocation('/login');
        } catch (error) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }, [pushLocation]);

    const addFavorite = async (id) => {
        try {
            const favorites = await userService.addFav({ id, jwt });
            setFavs(favorites);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFavorite = async (id) => {
        try {
            const favorites = await userService.deleteFav({ id, jwt });
            setFavs(favorites);
        } catch (error) {
            console.log(error)
        }
    }

    return {
        login,
        logout,
        registerUser,
        addFavorite,
        deleteFavorite,
        favs,
        isLogged: Boolean(jwt),
        error,
        setError,
    }
}

export default useUser
