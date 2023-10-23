import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import BackButton from "./BackButton";

function TrailerVideo({trailer_code}) {
    return (
        <Container>
            <div>
                <h2 className="mb-4 pt-3 pb-3 border-bottom">Trailer</h2>
                <div className="ratio ratio-16x9 m-auto" 
                     style={{maxWidth: 800}}>
                    <iframe 
                        title="TrailerVideo"
                        src={`https://www.youtube.com/embed/${trailer_code}?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3`}
                        allowFullScreen>    
                    </iframe>
                </div>
            </div>
            <BackButton/> 
        </Container>
    );
};

TrailerVideo.propTypes = {
    trailer_code: PropTypes.string
};

export default TrailerVideo;