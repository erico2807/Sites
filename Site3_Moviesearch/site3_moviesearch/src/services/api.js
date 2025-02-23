const API_KEY = "f06e78aa75432d0e9c8546eae0ad0c9f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularmovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;

}; export const searchmovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}& query = ${encodeURIComponent( query )}`);
    const data = await response.json();
    return data.results;
};