import { ADD_MOVIE, REMOVE_MOVIE } from "./";

export function addMovie(movie){
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}

export function removeMovie(movie) {
    return {
        type: REMOVE_MOVIE,
        payload: movie
    }
}
