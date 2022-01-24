import { useContext } from 'react'
import gifsContext from '../context/gifsContext'

const useGlobalGifs = () => {
    const { gifs, setGifs } = useContext(gifsContext);
    return { gifs, setGifs };
}

export default useGlobalGifs
