import { ENDPOINT } from '../constants'

export async function addFav({ id, jwt }) {
    const response = await fetch(`${ENDPOINT}/favorite/${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${jwt}`
        },
    });
    const data = await response.json();
    return data;
}

export async function getFavs(jwt) {
    const response = await fetch(`${ENDPOINT}/favorite`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt}`
        },
    });
    const data = await response.json();
    return data;
}

export async function deleteFav({ id, jwt }) {
    const response = await fetch(`${ENDPOINT}/favorite/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwt}`
        },
    });
    const data = await response.json();
    return data;
}