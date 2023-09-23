const API_KEY = import.meta.env.VITE_API_KEY;
export default {
    apikey: API_KEY,
    Authorization:
        `Bearer ${API_KEY}`
}