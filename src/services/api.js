const APi_KEY = "a07b498c989ba4e5bfcb893d6241ad56";
const BASE_URL = "https://api.themoviedb.org/3";
export  const getMovies = async (search = "") => {
  const url = search
    ? `${BASE_URL}/search/movie?api_key=${APi_KEY}&query=${search}`
    : `${BASE_URL}/trending/movie/week?api_key=${APi_KEY}`;
    const res= await fetch(url)
    return res.json()
};

