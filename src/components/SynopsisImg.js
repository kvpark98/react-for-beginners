import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../App.module.css";
import { useHistory } from "react-router-dom";

function SynopsisImg({id, title, year, rating, medium_cover_image, description_full, rank, isRanked, handleMediumCoverImgError}) {
    const [onMouse, setOnMouse] = useState(false);

    const onMouseOver = () => {setOnMouse(true)};

    const onMouseOut = () => {setOnMouse(false)};

    const history = useHistory();

    return (
        <Link 
            to={{pathname: `/react-for-beginners/movie/${id}`, state: {prevPath: history.location.pathname}}} 
            className="text-decoration-none text-dark">
            {onMouse ? 
                <div onMouseOver={onMouseOver} 
                     onMouseOut={onMouseOut}>
                    <div className={styles.synopsisAll}>
                        <div className={styles.synopsis}>
                            {description_full ? description_full : "Work in progress. Check back soon!"}
                        </div>
                        <div className={styles.synopsisRating}>
                            <div className="d-flex justify-content-center">
                                <p className="m-0 d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" className="bi bi-star-fill text-info" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span className="ps-3 fs-3">
                                        {Number.isInteger(rating) ? rating + ".0" : rating}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                : 
                <div className="position-relative">
                    <img 
                        src={medium_cover_image} 
                        alt={title} 
                        onError={handleMediumCoverImgError}
                        onMouseOver={onMouseOver} 
                        onMouseOut={onMouseOut}
                        width="230"
                        height="345"
                        className={styles.img}>
                    </img>
                    {isRanked === "yes" && 
                        <div 
                            id="rank" 
                            className="position-absolute top-0 start-0 badge"
                            onMouseOver={onMouseOver} 
                            onMouseOut={onMouseOut}>
                            <em className="fs-3">{isRanked ? rank : null}</em>
                        </div>}
                    <div 
                        className="position-absolute bottom-0 end-0 badge bg-warning"
                        onMouseOver={onMouseOver} 
                        onMouseOut={onMouseOut}>
                        <span className="fs-5">{year}</span>
                    </div>
                </div>}
            <h2 className={styles.imgTitle}>
                {title}
            </h2>
        </Link>
    );
};

SynopsisImg.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string,
    description_full: PropTypes.string,
    rank: PropTypes.number.isRequired,
    isRanked: PropTypes.string.isRequired,
    handleMediumCoverImgError: PropTypes.func.isRequired
};

export default SynopsisImg;