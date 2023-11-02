import PropTypes from "prop-types";
import SynopsisImg from "./SynopsisImg";

function MovieElement({id, title, year, rating, date, runtime, medium_cover_image, description_full, rank, isRanked, handleMediumCoverImgError}) {
    return (
        <div>
            <SynopsisImg
                id={id}
                title={title}
                year={year}
                rating={rating}
                medium_cover_image={medium_cover_image}
                description_full={description_full}
                rank={rank}
                isRanked={isRanked}
                handleMediumCoverImgError={handleMediumCoverImgError}/>
            <div className="d-flex">
                {(runtime || runtime === 0) ?
                    <p className="m-0 pe-3">
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
                    <p className="m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        <span className="ps-2 align-middle">{date.slice(0, 10)}</span>
                    </p>
                    :
                    null}
            </div>
        </div>
    );
};

MovieElement.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string,
    runtime: PropTypes.number,
    medium_cover_image: PropTypes.string,
    description_full: PropTypes.string,
    rank: PropTypes.number.isRequired,
    isRanked: PropTypes.string.isRequired,
    handleMediumCoverImgError: PropTypes.func.isRequired
};

export default MovieElement;