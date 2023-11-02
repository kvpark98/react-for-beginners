import { Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

function Genres({movies, genreSelected, selectGenre}) {
    const genres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Musical", "Mystery", "Reality-TV", "Romance", "Sci-Fi", "Sport", "Talk-Show", "Thriller", "War", "Western"];

    return (
        <Container>
            <h1 className="d-flex justify-content-between mb-0 mt-5">
                <span>Movies</span>
                <span 
                    className={(window.localStorage.getItem("theme") === "lightTheme") ? "badge bg-dark" : "badge bg-light text-dark"}>
                    <em>{movies.length}</em>
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
                            className={(genreSelected === genre) ? "navLink active" : "navLink"}>
                                {genre}
                        </Nav.Link>
                    </Nav.Item>)}
            </Nav>
        </Container>
    );
};

Genres.propTypes = {
    movies: PropTypes.array.isRequired,
    genreSelected: PropTypes.string.isRequired,
    selectGenre: PropTypes.func.isRequired
};

export default Genres;













