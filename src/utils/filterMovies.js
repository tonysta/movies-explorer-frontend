export function filterMovies(movies, name, checkbox) {
    if (!movies) {
        return [];
    }

    let filteredMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(name.toLowerCase()))
    console.log(filteredMovies)
    if (checkbox) {
        filteredMovies = filteredMovies.filter((item) => (item.duration <= 40))
    }
    return filteredMovies;
}