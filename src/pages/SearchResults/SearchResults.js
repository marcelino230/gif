import React from 'react'
import { Helmet } from "react-helmet-async";
import useGif from '../../hooks/useGif';
//components
import Gifs from '../../components/Gifs/Gifs'
import Spinner from '../../components/Spinner/Spinner'
import SearchForm from '../../components/SearchForm/SearchForm'

const SearchResults = ({ params }) => {
    const { keyword, rating } = params;
    const { loading, gifs } = useGif(keyword, rating);

    if (loading) return <Spinner />

    return (
        <>
            <Helmet><title>Results of {decodeURI(keyword)} | GifGif</title></Helmet>
            <h2>Results of {decodeURI(keyword)}</h2>
            <SearchForm initialKeyword={keyword} initialRating={rating} />
            {gifs.length > 0 ? <Gifs gifs={gifs} /> : `Results of "${decodeURI(keyword)}" not found`}
        </>
    )
}

export default SearchResults
