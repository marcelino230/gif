import { ENDPOINT } from '../constants'

export async function login({ username, password }) {
    const response = await fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    const { token } = data;
    return token;
}

export async function registerUser({ username, password }) {
    const response = await fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
}