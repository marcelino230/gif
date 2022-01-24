import { API, API_KEY, DEFAULTGIF, LIMIT } from '../constants'

// get specific gifs that matches the keyword. 
export const fetchGifs = async ({ keyword, rating, page = 0 }) => {
    const API_URL = `${API}/search?api_key=${API_KEY}&q=${keyword}&limit=${LIMIT}&offset=${page * LIMIT}&rating=${rating}&lang=en'`;
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        const { data } = response;
        return data.map(gif => {
            const { title, images, id } = gif;
            const { url } = images.downsized_medium;
            return { title, url, id }
        });
    } catch (error) {
        console.log(error);
    }
}

// get gif by ID, returns default gif error if id does not exist (404)
export const fetchGif = async (id) => {
    const API_URL = `${API}/${id}?api_key=8NRnNns9qM6YCtAf26w97UNi66Xef7jM`;
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        const { data, meta } = response;
        if (meta.status === 404) return DEFAULTGIF;
        const { title, images, id } = data;
        const { url } = images.downsized_medium;
        return { title, url, id }
    } catch (error) {
        console.log(error)
    }
}

//get gifs by specifying ids
export const fetchGifsByIds = async ({ favs }) => {
    const idsString = favs.slice('').join(',');
    const API_URL = `${API}?api_key=8NRnNns9qM6YCtAf26w97UNi66Xef7jM&ids=${idsString}`;
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        const { data, meta } = response;
        if (meta.status === 404) return DEFAULTGIF;
        return data.map(gif => {
            const { title, images, id } = gif;
            const { url } = images.downsized_medium;
            return { title, url, id }
        });
    } catch (error) {
        console.log(error)
    }
}

// get the Trending Gifs in the day. The content is continuously updated (API)
export const fetchTrendingGifs = async (page = 0) => {
    const API_URL = `${API}/trending?api_key=${API_KEY}&limit=${LIMIT}&offset=${page * LIMIT}`;
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        const { data } = response;
        return data.map(gif => {
            const { title, images, id } = gif;
            const { url } = images.downsized_medium;
            return { title, url, id }
        });
    } catch (error) {
        console.log(error);
    }
}