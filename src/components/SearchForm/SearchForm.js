import React from 'react'
import { useLocation } from 'wouter'
import './styles.css'
import useForm from './useForm';
import { fetchTrendingGifs } from '../../services/gifs'
import useGlobalGifs from '../../hooks/useGlobalGifs';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = 'g' }) => {

    const [, pushLocation] = useLocation();
    const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating });
    const { setGifs } = useGlobalGifs()
    const handleTrending = async () => {
        localStorage.removeItem('lastSearched');
        const fetchedGifs = await fetchTrendingGifs();
        setGifs(fetchedGifs);
        pushLocation('/')
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!keyword.replace(/\s/g, '').length) {   //if only whitespaces
            updateKeyword('');
            return;
        }
        pushLocation(`/search/${keyword}/${rating}`);
    }

    const handleKeyword = e => {
        updateKeyword(e.target.value);
    }

    const handleRating = e => {
        updateRating(e.target.value);
    }

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search gifs..." onChange={handleKeyword} />
                <div>
                    <div className="buttons">
                        <button type="button" className="trending-btn" onClick={handleTrending}>Trending 🔥</button>
                        <button type="submit" className="search-form-btn">Search <i className="fa fa-search"></i></button>
                    </div>
                    <select value={rating} onChange={handleRating}>
                        <option disabled>Ratings</option>
                        {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
                    </select>
                </div>
            </form>
        </>
    )
}

export default React.memo(SearchForm);