import { Accordion, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "../App.module.css";

function MainInformation({isMobile, runtime, date, description_full}) {
    return (
        <Container>
            <Accordion 
                defaultActiveKey="0" 
                className="mb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span className="fs-4">Plot summary</span>
                    </Accordion.Header>
                    <Accordion.Body>
                    {description_full ? 
                        <p>{description_full}</p>
                        : 
                        <p>Work in progress. Check back soon!</p>}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div {...(isMobile ? {className:`${styles.mainInformationMobile}`} : {className:`${styles.mainInformation}`})}>
                {(runtime || runtime === 0) ?
                    <p className={isMobile ? "" : "m-0 pe-3"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        <span className="ps-2 align-middle">{runtime} min</span> 
                    </p>
                    :
                    null}
                {((runtime || runtime === 0) && date) ? 
                    <div className="border-start pe-3"></div>
                    :
                    null}
                {date ?
                    <p className={isMobile ? "" : "m-0"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        <span className="ps-2 align-middle">{date.slice(0, 10)}</span>
                    </p>
                    :
                    null}
            </div>
        </Container>
    );
};

MainInformation.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    runtime: PropTypes.number,
    date: PropTypes.string,
    description_full: PropTypes.string
};

export default MainInformation;