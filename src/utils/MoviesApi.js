class MoviesApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    getMovies() {
        return fetch(`${this._url}beatfilm-movies`, {
            method: 'GET',
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

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/',
    headers: {
        'content-type': 'application/json',
    }
});