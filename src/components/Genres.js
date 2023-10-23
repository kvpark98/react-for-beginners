import { Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

function Genres({movies, selectGenre}) {
    const genres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Musical", "Mystery", "Reality-TV", "Romance", "Sci-Fi", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    return (
        <Container>
            <h1 className="mb-0 mt-5">
                <span>
                    <em id="moviesLength" className="pe-2">{movies.length}</em>
                    Movies
                </span>
            </h1>
            <Nav 
                justify 
                variant="pills" 
                className="mt-4 mb-4 border border-2 rounded-3"
                id="genreTab">
                {genres.map((genre)=>
                    <Nav.Item key={genre}>
                        <Nav.Link 
                            eventKey={genre} 
                            onClick={selectGenre} 
                            className="navLink">
                                {genre}
                        </Nav.Link>
                    </Nav.Item>)}
            </Nav>
        </Container>
    );
};

Genres.propTypes = {
    movies: PropTypes.array.isRequired,
    selectGenre: PropTypes.func.isRequired
};

export default Genres;













