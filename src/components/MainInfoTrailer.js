import { Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

function MainInfoTrailer({trailer_code, isActive, active}) {
    return (
        <Container>
            <Nav fill
                 variant="tabs" 
                 className="mt-4 mb-4 pt-3">
                <Nav.Item>
                    <Nav.Link 
                        eventKey="Main Information" 
                        onClick={active} 
                        className={isActive ? "navLink" : "active navLink"}
                        {...(isActive ? {} : {disabled:true})}>
                            Main Information
                    </Nav.Link>
                </Nav.Item>
                {trailer_code ? 
                    <Nav.Item>
                        <Nav.Link 
                            eventKey="Trailer" 
                            onClick={active} 
                            className={isActive ? "active navLink" : "navLink"}
                            {...(isActive ? {disabled:true} : {})}>
                                Trailer
                        </Nav.Link>
                    </Nav.Item>
                    :
                    null}
            </Nav>
        </Container>
    );
};

MainInfoTrailer.propTypes = {
    trailer_code: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    active: PropTypes.func.isRequired
};

export default MainInfoTrailer;