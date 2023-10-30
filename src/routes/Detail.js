import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../App.module.css";
import BackgroundImage from "../components/BackgroundImage";
import TitleRateImg from "../components/TitleRateImg";
import MainInformation from "../components/MainInformation";
import TrailerVideo from "../components/TrailerVideo";
import MainInfoTrailer from "../components/MainInfoTrailer";
import Loading from "../components/Loading";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "../components/ScrollToTop";
import PropTypes from "prop-types";

function Detail({checked, toggleTheme}) {
    const isPc = useMediaQuery({
        query : "(min-width : 1200px)"
    });
    const isTablet = useMediaQuery({
        query : "(min-width : 768px) and (max-width : 1199.9px)"
    });
    const isMobile = useMediaQuery({
        query : "(max-width : 767.9px)"
    });
    
    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    const [movie, setmovie] = useState({});

    const [isActive, setIsActive] = useState(false);

    const active = () => {
        setIsActive(current => !current);
    };

    const handleMediumCoverImgError = (event) => {
        event.target.src = "https://t3.ftcdn.net/jpg/00/62/26/78/360_F_62267871_t1n8LSkrFSL2t1aQSyilyfVpC21wQx59.jpg";
    };

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(response => response.json()).then(json => {
            setLoading(false);
            setmovie(json.data.movie);
        });
    }, [id]);

    console.log(movie);

    return (
        <div>
            <Header
                checked={checked}
                toggleTheme={toggleTheme}/>
            {loading ? 
                <Loading/>
                : 
                <div className={styles.wrap}>
                    <div>
                        <div className={styles.backGroundTitleRateImg}>
                            <BackgroundImage 
                                background_image={movie.background_image}
                                medium_cover_image={movie.medium_cover_image}
                                isMobile={isMobile}/>
                            <TitleRateImg 
                                title={movie.title}
                                year={movie.year}
                                genres={movie.genres}
                                rating={movie.rating}
                                medium_cover_image={movie.medium_cover_image}
                                like={movie.like_count}
                                count={movie.download_count}
                                quality={movie.torrents[movie.torrents.length - 1].quality}
                                url={movie.torrents[movie.torrents.length - 1].url}
                                handleMediumCoverImgError={handleMediumCoverImgError}
                                isPc={isPc}
                                isTablet={isTablet}
                                isMobile={isMobile}/>
                        </div>
                        <div>
                            <MainInfoTrailer
                                trailer_code={movie.yt_trailer_code}
                                isActive={isActive}
                                active={active}/>
                            {isActive ? 
                                <TrailerVideo
                                    trailer_code={movie.yt_trailer_code}/>
                                : 
                                <MainInformation
                                    isMobile={isMobile}
                                    runtime={movie.runtime}
                                    date={movie.date_uploaded}
                                    description_full={movie.description_full}/>}
                        </div>
                        <ScrollToTop/>
                    </div>
                    <Footer/>
                </div>}
        </div>
    );
};

Detail.propTypes = {
    checked: PropTypes.string,
    toggleTheme: PropTypes.func.isRequired
};

export default Detail;