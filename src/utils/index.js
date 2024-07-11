import axios from "axios";

const url = "https://dummyjson.com/products";

export const customFetch = axios.create({
    baseURL: url,
});
