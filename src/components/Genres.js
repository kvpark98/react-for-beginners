import { Container, Form, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

function Genres({movies, userInput, searchedMovies, genreSelected, selectGenre, getValue, isRanked}) {
    const genres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Musical", "Mystery", "Reality-TV", "Romance", "Sci-Fi", "Sport", "Talk-Show", "Thriller", "War", "Western"];

    return (
        <Container>
            <div className="d-flex justify-content-between mb-0 mt-5">
                <Form>
                    <Form.Group>
                        <Form.Control
                            id="search" 
                            type="email" 
                            placeholder="Search..."
                            value={userInput ? userInput : ""}
                            onChange={getValue}
                            {...(isRanked === "yes" ? {disabled:true} : {})}/>
                    </Form.Group>
                </Form>
                <div 
                    className={(window.localStorage.getItem("theme") === "lightTheme") ? "badge bg-dark fs-4 ms-3" : "badge bg-light text-dark fs-4 ms-3"}>
                    <em>{userInput ? searchedMovies.length : movies.length}</em>
                </div>
            </div>
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
    userInput: PropTypes.string,
    searchedMovies: PropTypes.array,
    genreSelected: PropTypes.string.isRequired,
    selectGenre: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isRanked: PropTypes.string.isRequired,
};

export default Genres;













