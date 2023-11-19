import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

function Genres({movies, genres, userInput, searchedMovies, genreSelected, selectGenre, getValue, preventDefault, reset, isRanked}) {
    return (
        <Container>
            <div className="d-flex justify-content-between mb-0 mt-5">
                <Form onSubmit={preventDefault}>
                    <InputGroup>
                        <Form.Control
                            id="search"
                            aria-describedby="basic-addon1" 
                            type="search"
                            placeholder="Search..."
                            value={userInput ? userInput : ""}
                            onChange={getValue}
                            {...(isRanked === "yes" ? {disabled:true} : {})}/>
                        <Button 
                            variant="secondary"
                            type="reset"
                            onClick={reset}
                            {...((isRanked === "yes") || (!userInput) ? {disabled:true} : {})}>
                                Reset
                        </Button>
                    </InputGroup>
                </Form>
                <div className={(window.localStorage.getItem("theme") === "lightTheme") ? "badge bg-dark fs-4 ms-3" : "badge bg-light text-dark fs-4 ms-3"}>
                    <em>{userInput ? searchedMovies.length : movies.length}</em>
                </div>
            </div>
            <Nav 
                justify 
                variant="pills" 
                className="my-4 border border-2 rounded-3"
                id="genreTab">
                {genres.map((genre)=>
                    <Nav.Item key={genre}>
                        <Nav.Link
                            {...(genreSelected === genre ? {active:true} : {})}
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
    genres: PropTypes.array.isRequired,
    userInput: PropTypes.string,
    searchedMovies: PropTypes.array,
    genreSelected: PropTypes.string,
    selectGenre: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    preventDefault: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    isRanked: PropTypes.string.isRequired,
};

export default Genres;













