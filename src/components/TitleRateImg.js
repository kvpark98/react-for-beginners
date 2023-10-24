import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "../App.module.css";

function TitleRateImg({title, year, genres, rating, medium_cover_image, like, count, quality, url, handleMediumCoverImgError, isPc, isTablet, isMobile}) {
    return (
        <Container 
            className={styles.titleRateImgContainer}>
                {isMobile ?
                    <div className="d-flex justify-content-center">
                        <div className={styles.titleRateImgElementsMobile}>
                            {title ?
                                <div className={styles.titleRateImgTitleMobile}>
                                     {title}
                                    <span> ({year ? year : null})</span>
                                </div>
                                :
                                null}
                            {genres ?
                                <div>
                                    <p className={styles.titleRateImgGenreMobile}> 
                                        {genres.map((genre) => 
                                            <span key={genre}>
                                                {genre}{(genres.length > 1 && genre !== genres[genres.length - 1]) ? " / " : ""} 
                                            </span>)}
                                    </p>
                                </div>
                                : 
                                null}
                            <div className="d-flex justify-content-center mt-4">
                                <div>
                                    {(count || count === 0) ? 
                                        <div className="mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-download text-primary" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                            </svg>
                                            <span className="ps-2 align-middle fs-5">
                                                {count.toLocaleString()}
                                            </span>
                                        </div> 
                                        :
                                        null}
                                    {(like || like === 0) ? 
                                        <div className="mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg>
                                            <span className="ps-2 align-middle fs-5">
                                                {like.toLocaleString()}
                                            </span> 
                                        </div> 
                                        :
                                        null}
                                    {rating ? 
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-star-fill text-info" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <span className="ps-2 align-middle fs-5">
                                                {Number.isInteger(rating) ? rating + ".0" : rating}
                                            </span>
                                        </div>
                                        :
                                        null}
                                </div>
                            </div>
                            {quality ? 
                                <div>
                                    <a className="btn btn-primary mt-4 w-100" 
                                       href={url}
                                       target="_blank"
                                       rel="noreferrer">
                                        Download
                                    </a>
                                </div>
                                :
                                null}
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-between mt-5 mb-5">  
                        <div {...(isPc && {className:`${styles.titleRateImgElementsPc}`})}
                             {...(isTablet && {className:`${styles.titleRateImgElementsTablet}`})}>
                            {title ? 
                                <div {...(isPc && {className:`${styles.titleRateImgTitlePc}`})}
                                     {...(isTablet && {className:`${styles.titleRateImgTitleTablet}`})}>
                                     {title}
                                    <span> ({year ? year : null})</span> 
                                </div>
                                :
                                null}
                            {genres ?
                                <div>
                                    <p {...(isPc && {className:`${styles.titleRateImgGenrePc}`})}
                                       {...(isTablet && {className:`${styles.titleRateImgGenreTablet}`})}> 
                                       {genres.map((genre) => 
                                            <span key={genre}>
                                                {genre}{(genres.length > 1 && genre !== genres[genres.length - 1]) ? " / " : ""} 
                                            </span>)}
                                    </p>
                                </div>
                                :
                                null}
                            <div className={styles.titleRateImgDownloadLikeRating}>
                                {(count || count === 0) ? 
                                    <div className="mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" {...(isPc && {width: 25, height: 25})} {...(isTablet && {width: 21, height: 21})} fill="currentColor" className="bi bi-download text-primary" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
                                        <span {...(isPc && {className: "ps-3 align-middle fs-3"})} 
                                              {...(isTablet && {className: "ps-3 align-middle fs-4"})}>
                                              {count.toLocaleString()}
                                        </span>
                                    </div>  
                                    :
                                    null}
                                {(like || like === 0) ? 
                                    <div className="mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" {...(isPc && {width: 25, height: 25})} {...(isTablet && {width: 21, height: 21})} fill="currentColor" className="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg>
                                        <span {...(isPc && {className: "ps-3 align-middle fs-3"})} 
                                              {...(isTablet && {className: "ps-3 align-middle fs-4"})}>
                                              {like.toLocaleString()}
                                        </span> 
                                    </div> 
                                    :
                                    null}
                                {rating ? 
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" {...(isPc && {width: 25, height: 25})} {...(isTablet && {width: 21, height: 21})} fill="currentColor" className="bi bi-star-fill text-info" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <span {...(isPc && {className: "ps-3 align-middle fs-3"})} 
                                              {...(isTablet && {className: "ps-3 align-middle fs-4"})}>
                                              {Number.isInteger(rating) ? rating + ".0" : rating}
                                        </span>
                                    </div>
                                    :
                                    null}
                            </div>
                        </div>
                        <div>
                            <img 
                                src={medium_cover_image} 
                                onError={handleMediumCoverImgError}
                                alt="medium_cover_image"
                                {...(isPc && {width: 240, height: 355})} 
                                {...(isTablet && {width: 230, height: 345})}
                                className="rounded-2"></img>
                            <div className="d-flex btn-group">
                                {quality ? 
                                    <a className="btn btn-primary mt-2" 
                                       href={url}
                                       target="_blank"
                                       rel="noreferrer">
                                        Download
                                    </a>
                                    :
                                    null}
                            </div>
                        </div>
                    </div>}
        </Container>
    );
};

TitleRateImg.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    genres: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string,
    like: PropTypes.number,
    count: PropTypes.number,
    quality: PropTypes.string,
    url: PropTypes.string,
    handleMediumCoverImgError: PropTypes.func.isRequired,
    isPc: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
};

export default TitleRateImg;