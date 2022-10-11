export function filterMovies(movies, name, checkbox) {
    if (!movies) {
        return [];
    }
    console.log(movies, name, checkbox);
    let filteredMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(name.toLowerCase()))
    if (checkbox) {
        filteredMovies = filteredMovies.filter((item) => (item.duration <= 40))
    }
    return filteredMovies;
}