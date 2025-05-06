import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../movieSlice';
 
export const MovieInput = () => {
    const dispatch = useDispatch();
    const [newMovie, setNewMovie] = useState("");


    const handleNewMovie = (e) => {
        e.preventDefault()
        console.log(e.target.movieName.value)
        if (newMovie) {
            dispatch(addMovie(newMovie))
        }
    }

    return (
        <form onSubmit={handleNewMovie}>
            <input name="movieName"
                   onChange={(e) => setNewMovie(e.target.value)}
            />
            <button type="submit"
                    
            >
                Add Movie
            </button>
        </form>
    )
}