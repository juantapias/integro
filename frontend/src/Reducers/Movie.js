import { ADD_MOVIE, REMOVE_MOVIE } from "../Actions";

const initialState = { addedMovie: [] };

const movieInList = (listMovie, movieToAdd) =>
  !!listMovie.filter(
    (movieInState) => movieInState.movie.id === movieToAdd.movie.id
  ).length;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      if (movieInList(state.addedMovie)) {
        return {
          ...state,
          addedMovie: state.addedMovie.map((item) => {
            return item;
          }),
        };
      }
      return {
        ...state,
        addedMovie: [...state.addedMovie, action.payload],
      };
    case REMOVE_MOVIE:
      // Removes every itemuct that has a matching id
      return {
        ...state,
        addedMovie: state.addedMovie.filter(
          (item) => item.movie.id
        ),
      };

    default:
      return state;
  }
};
export default reducer;
