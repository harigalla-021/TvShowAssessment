import axios from "axios";


export function getShowsByName(name) {
    return axios.get(`http://api.tvmaze.com/search/shows?q=${name}`);
}

export function getShow(id) {
    return axios.get(`http://api.tvmaze.com/shows/${id}?embed=cast`);
}

export function getAllShows() {
    return axios.get("http://api.tvmaze.com/shows");
}

