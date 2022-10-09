// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://api.movie.nomorepartiesxyz.ru/';

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }).then((res) => {
        return handleError(res);
    })
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then((res) => {
        return handleError(res);
    })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }).then((res) => {
        return handleError(res);
    })
}

function handleError(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}