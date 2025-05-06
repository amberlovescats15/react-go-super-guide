import React from 'react';
import { useSelector } from 'react-redux';

export const MovieList = () => {
    const {movies} = useSelector(state => state.movies);
    return (
        <div>
            movie list
            {movies.map(data => (
                <div key={data.id}>
                    {data.name}
                </div>
            ))}
        </div>
    )
}