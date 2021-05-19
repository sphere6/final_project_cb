import React from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';
import Project from './Project';
import './App.css';
import data from './db_rec.json';


const movies = data.map(movie => ({
    id: movie.id_mvdb,
    title: movie.nflix_title,
    release_year: movie.nflix_release_year,
    genres: movie.genre_ids_mvdb,
    vote_avg: movie.vote_average_mvdb,
    vote_count: movie.vote_count_mvdb,
    overview: movie.overview_mvdb,
    poster_path: movie.poster_path_mvdb,
    recommendations: movie.recommendations
}))


const App = () =>{
        return (
            <div className = "App">
                <SearchBar />
                <Project />
                {movies
                    .map((movie,i) => {
                        const movieRecommendations = movies.filter(({id}) => movie.recommendations.includes(id))
                        return (
                            <Movie
                                key={i} 
                                id={movie.id}
                                title ={movie.title}
                                release_year = {movie.release_year}
                                genres = {movie.genres}
                                vote_avg = {movie.vote_avg}
                                vote_count = {movie.vote_count}
                                overview ={movie.overview}
                                poster_path={movie.poster_path}
                                recommendations = {movieRecommendations}
                            />
                        )
                    })
                }
            </div>
    );
}

export default App;