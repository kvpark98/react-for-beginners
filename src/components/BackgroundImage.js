import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "../App.module.css";
 
function BackgroundImage({background_image, medium_cover_image, isMobile}) {
    return (
        <Container
            className={styles.backgroundImage}
            {...(isMobile ? 
                {style: {
                    backgroundImage:`url(${medium_cover_image}), url("https://t3.ftcdn.net/jpg/00/62/26/78/360_F_62267871_t1n8LSkrFSL2t1aQSyilyfVpC21wQx59.jpg")`}} 
                : 
                {style: {
                    backgroundImage:`url(${background_image}), url("https://t4.ftcdn.net/jpg/00/38/13/73/360_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg")`}})}>
        </Container>
    );   
};

BackgroundImage.propTypes = {
    background_image: PropTypes.string,
    medium_cover_image: PropTypes.string,
    isMobile: PropTypes.bool.isRequired
};

export default BackgroundImage;