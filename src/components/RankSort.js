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
                        eventKey="Latest order" 
                        onClick={sort}>
                            Latest order
                    </Dropdown.Item>
                    <Dropdown.Item 
                        eventKey="Chronological order" 
                        onClick={sort}>
                            Chronological order
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