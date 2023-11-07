import { Button, Container, Dropdown, DropdownButton, Form } from "react-bootstrap";
import PropTypes from "prop-types";

function RankSort({searchedMovies, rank, sortSelected, sortSelect, sorted, sort, isRanked}) {
    return (
        <Container>
            <Form className="d-flex justify-content-between">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Rank"
                    onClick={rank}
                    {...(isRanked === "yes" ? {defaultChecked:true} : {defaultChecked:false})}/>
                <div className="d-flex">
                    <DropdownButton 
                        {...((isRanked === "yes") || (searchedMovies.length === 0) ? {disabled : true} : {})}
                        id="dropdown-basic-button"
                        title={sortSelected ? sortSelected : "Sort"} 
                        variant="dark">
                        <Dropdown.Item 
                            eventKey="Title" 
                            onClick={sortSelect}>
                                Title
                        </Dropdown.Item>
                        <Dropdown.Item 
                            eventKey="Year" 
                            onClick={sortSelect}>
                                Year
                        </Dropdown.Item>
                        <Dropdown.Item 
                            eventKey="Upload Date" 
                            onClick={sortSelect}>
                                Upload Date
                        </Dropdown.Item>
                        <Dropdown.Item 
                            eventKey="Runtime" 
                            onClick={sortSelect}>
                                Runtime
                        </Dropdown.Item>
                    </DropdownButton>
                    <Button 
                        {...((isRanked === "yes") || (searchedMovies.length === 0) ? {disabled : true} : {})}
                        id="dropdown-basic-button"
                        className="ms-2"
                        variant="dark"
                        onClick={sort}
                        title={(sorted === "descending") ? "Descending order" : "Ascending order"}
                        {...(sortSelected ? {} : {disabled:true})}>
                            {(sorted === "descending") ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                                : 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>}
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

RankSort.propTypes = {
    searchedMovies: PropTypes.array,
    rank: PropTypes.func.isRequired,
    sortSelected: PropTypes.string,
    sortSelect: PropTypes.func.isRequired,
    sorted: PropTypes.string,
    sort: PropTypes.func.isRequired,
    isRanked: PropTypes.string.isRequired
};

export default RankSort;