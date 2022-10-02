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

export const mainApi = new MainApi({
    url: 'http://localhost:3000/',
    headers: {
        'content-type': 'application/json',
    }
});