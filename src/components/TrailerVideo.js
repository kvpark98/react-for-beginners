import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

function TrailerVideo({trailer_code}) {
    return (
        <Container>
            <div>
                <h2 className="mb-4 pt-3 pb-3 border-bottom">Trailer</h2>
                <div className="ratio ratio-16x9 m-auto" 
                     style={{maxWidth: 800}}>
                    <iframe 
                        src={`https://www.youtube.com/embed/${trailer_code}?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3`}
                        allowFullScreen>    
                    </iframe>
                </div>
            </div> 
        </Container>
    );
};

TrailerVideo.propTypes = {
    trailer_code: PropTypes.string
};

export default TrailerVideo;