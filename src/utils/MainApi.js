class MainApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    getAuthHeaders() {
        const token = localStorage.getItem('token');
        let currentHeaders = this._headers;
        if (token) {
            currentHeaders.Authorization = `Bearer ${token}`;
        }
        return currentHeaders;
    }
    getProfileInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this.getAuthHeaders()
        }).then((res) => {
            return this.handleError(res);
        })
    }
    patchProfile(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        }).then((res) => {
            return this.handleError(res);
        })
    }
    getSavedMovies() {
        return fetch(`${this._url}movies`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            return this.handleError(res);
        })
    }
    addSavedMovie(data) {
        return fetch(`${this._url}movies`, {
            method: 'POST',
            headers: this.getAuthHeaders(),
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        }).then((res) => {
            return this.handleError(res);
        })
    }
    deleteSavedMovie(movieId) {
        return fetch(`${this._url}movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers
        }).then((res) => {
            return this.handleError(res);
        })
    }
    handleError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }
}

export const mainApi = new MainApi({
    url: 'http://localhost:3000/',
    // url: 'https://api.movie.nomorepartiesxyz.ru/',
    headers: {
        'content-type': 'application/json',
    }
});