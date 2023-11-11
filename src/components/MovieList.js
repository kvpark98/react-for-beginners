import MovieElement from "./MovieElement";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import styles from "../App.module.css";
import NoResult from "./NoResult";

function MovieList({movies, userInput, genreSelected, searchedMovies, isRanked, handleMediumCoverImgError}) {
    const elementFour = useMediaQuery({
        query : "(min-width : 1400px)"
    });
    const elementThree = useMediaQuery({
        query : "(min-width : 1200px) and (max-width : 1399.9px)"
    });
    const elementTwo = useMediaQuery({
        query : "(min-width : 768px) and (max-width : 1199.9px)"
    });
    const elementOne = useMediaQuery({
        query : "(max-width : 767.9px)"
    });

    return (
        <div className="list-unstyled overflow-hidden">
            <div className="m-auto" 
                    {...(elementFour && {style:{maxWidth: 1240}})}
                    {...(elementThree && {style:{maxWidth: 930}})}
                    {...(elementTwo && {style:{maxWidth: 620}})}
                    {...(elementOne && {style:{maxWidth: 310}})}>
                {genreSelected ? 
                    (userInput ? 
                        (searchedMovies.length === 0 ? 
                            <NoResult
                                userInput={userInput}/>
                            :
                            searchedMovies.map((movie) => 
                                <div {...(elementOne ? {className:`${styles.movieListElementOne}`} : {className:`${styles.movieList}`})}
                                    key={movie.id}>
                                    <MovieElement 
                                        id={movie.id}
                                        title={movie.title}
                                        year={movie.year}
                                        rating={movie.rating}
                                        date={movie.date_uploaded}
                                        runtime={movie.runtime}
                                        medium_cover_image={movie.medium_cover_image}
                                        description_full={movie.description_full}
                                        rank={movie.rank}
                                        isRanked={isRanked}
                                        handleMediumCoverImgError={handleMediumCoverImgError}/>
                                </div>))
                        :
                        movies.map((movie) => 
                            <div {...(elementOne ? {className:`${styles.movieListElementOne}`} : {className:`${styles.movieList}`})}
                                key={movie.id}>
                                <MovieElement 
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    rating={movie.rating}
                                    date={movie.date_uploaded}
                                    runtime={movie.runtime}
                                    medium_cover_image={movie.medium_cover_image}
                                    description_full={movie.description_full}
                                    rank={movie.rank}
                                    isRanked={isRanked}
                                    handleMediumCoverImgError={handleMediumCoverImgError}/>
                            </div>))
                    : 
                    (userInput ? 
                        (searchedMovies.length === 0 ? 
                            <NoResult
                                userInput={userInput}/>
                            :
                            searchedMovies.map((movie) => 
                                <div {...(elementOne ? {className:`${styles.movieListElementOne}`} : {className:`${styles.movieList}`})}
                                    key={movie.id}>
                                    <MovieElement 
                                        id={movie.id}
                                        title={movie.title}
                                        year={movie.year}
                                        rating={movie.rating}
                                        date={movie.date_uploaded}
                                        runtime={movie.runtime}
                                        medium_cover_image={movie.medium_cover_image}
                                        description_full={movie.description_full}
                                        rank={movie.rank}
                                        isRanked={isRanked}
                                        handleMediumCoverImgError={handleMediumCoverImgError}/>
                                </div>))
                        :
                        movies.map((movie) => 
                            <div {...(elementOne ? {className:`${styles.movieListElementOne}`} : {className:`${styles.movieList}`})}
                                key={movie.id}>
                                <MovieElement 
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    rating={movie.rating}
                                    date={movie.date_uploaded}
                                    runtime={movie.runtime}
                                    medium_cover_image={movie.medium_cover_image}
                                    description_full={movie.description_full}
                                    rank={movie.rank}
                                    isRanked={isRanked}
                                    handleMediumCoverImgError={handleMediumCoverImgError}/>
                            </div>))}
            </div>
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    userInput: PropTypes.string,
    genreSelected: PropTypes.string,
    searchedMovies: PropTypes.array,
    isRanked: PropTypes.string.isRequired,
    handleMediumCoverImgError: PropTypes.func.isRequired
};

export default MovieList;