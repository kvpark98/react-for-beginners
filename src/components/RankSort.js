import { Container, Dropdown, DropdownButton, Form } from "react-bootstrap";
import PropTypes from "prop-types";

function RankSort({rank, sort, isRanked}) {
    return (
        <Container>
            <Form className="d-flex justify-content-between">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Rank"
                    onClick={rank}/>
                <DropdownButton 
                    {...(isRanked ? {disabled : true} : {})} 
                    id="dropdown-basic-button" 
                    title="Sort" 
                    variant="dark">
                    <Dropdown.Item 
                        eventKey="Latest year" 
                        onClick={sort}>
                        Latest year
                    </Dropdown.Item>
                    <Dropdown.Item 
                        eventKey="Chronological year" 
                        onClick={sort}>
                            Chronological year
                    </Dropdown.Item>
                    <Dropdown.Item 
                        eventKey="Latest upload" 
                        onClick={sort}>
                            Latest upload
                    </Dropdown.Item>
                    <Dropdown.Item 
                        eventKey="Chronological upload" 
                        onClick={sort}>
                            Chronological upload
                    </Dropdown.Item>
                </DropdownButton>
            </Form>
        </Container>
    );
};

RankSort.propTypes = {
    rank: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired,
    isRanked: PropTypes.bool.isRequired
};

export default RankSort;