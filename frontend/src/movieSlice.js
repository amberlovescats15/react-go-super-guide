import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [
        {
            id: 1,
            name: "harry potter"
        }, 
        {
            id: 2,
            name: "titanic"
        }
    ]
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push({
                id: state.movies.length + 1,
                name: action.payload
            });
        },
        removeMovie: (state, action) => {
            
        }
    }
})

export const {addMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer;