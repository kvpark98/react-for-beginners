import {useState, useEffect} from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import styles from "../App.module.css";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import RankSort from "../components/RankSort";
import Genres from "../components/Genres";
import ScrollToTop from "../components/ScrollToTop";
import PropTypes from "prop-types";

function Home({checked, toggleTheme}) {
    const [loading, setLoading] = useState(true);

    const [movies, setMovies] = useState([]);

    const [isRanked, setIsRanked] = useState(false);
    
    const rank = () => {
      setIsRanked(current => !current);
    };

    const [genre, setGenre] = useState("");
    const selectGenre = (event) => {
      setGenre(event.target.innerText);
    }; 

    const [sorted, setSorted] = useState("");
    const sort = (event) => {
      setSorted(event.target.innerText);
    };

    // 중복 불가한 rank property 만들어 Object에 저장하는 과정
    let rankArray = [];
    for (let index in movies) {
      rankArray.push(movies[index]);
    };
    rankArray.sort((a, b) => {
      return b.rating - a.rating;
    });
    for (let i = 0; i < rankArray.length; i++) {
      rankArray[i].rank = i + 1;
    };

    // Rank 클릭 시 rating 순으로 정렬되지만 같은 rating일 경우 download_count가 높은 것이 앞에 오도록 설정하는 과정
    if(isRanked) {
      movies.sort((a, b) => {
          return b.rating - a.rating
      });
    };

    // 연도, 업로드 날짜 순으로 정렬하는 과정
    if(sorted === "Latest year") {
      movies.sort((a, b) => {
        return new Date(b.year) - new Date(a.year);
      });
    } else if(sorted === "Chronological year") {
      movies.sort((a, b) => {
        return new Date(a.year) - new Date(b.year);
      });
    } else if(sorted === "Latest upload") {
      movies.sort((a, b) => {
        return new Date(b.date_uploaded) - new Date(a.date_uploaded);
      });
    } else if(sorted === "Chronological upload") {
      movies.sort((a, b) => {
        return new Date(a.date_uploaded) - new Date(b.date_uploaded);
      });
    }

    // MediumCoverImg가 없을 때 대체 이미지를 넣는 함수
    const handleMediumCoverImgError = (event) => {
        event.target.src = "https://t3.ftcdn.net/jpg/00/62/26/78/360_F_62267871_t1n8LSkrFSL2t1aQSyilyfVpC21wQx59.jpg";
    };
    
    console.log(isRanked);
    console.log(genre);
    console.log(sorted);
    console.log(movies);

    useEffect(() => {
      if(isRanked) {
        setSorted(null);
        if(genre) { // Rank(O) + Genre(O) + Rating(O)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count&genre=${genre}`).then(response => response.json()).then(json => {
              setMovies(json.data.movies);
              setLoading(false);
            }  
          );
        } else { // Rank(O) + Genre(X) + Rating(O)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count`).then(response => response.json()).then(json => {
              setMovies(json.data.movies);
              setLoading(false);
            }  
          );
        }
      } else {
        if(genre) { // Rank(X) + Genre(O) + Rating(X)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count&genre=${genre}`).then(response => response.json()).then(json => {
              setMovies(json.data.movies);
              setLoading(false);
            }  
          );
        } else { // Rank(X) + Genre(X) + Rating(X)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count`).then(response => response.json()).then(json => {
              setMovies(json.data.movies);
              setLoading(false);
            }  
          );
        }  
      }
    }, [isRanked, genre]);
   
    return (
      <div className="h-100">
        <Header
          checked={checked}
          toggleTheme={toggleTheme}/>
        {loading ? 
          <Loading/>
          : 
          <div className={styles.wrap}>
            <Container fluid>
              <Genres
                movies={movies}
                selectGenre={selectGenre}/>
              <RankSort
                rank={rank}
                sort={sort}
                isRanked={isRanked}/>
              <MovieList
                movies={movies}
                isRanked={isRanked}
                handleMediumCoverImgError={handleMediumCoverImgError}/>
              <ScrollToTop/>
            </Container>
            <Footer/>
          </div>}       
      </div>
    );
};

Home.propTypes = {
  checked: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired
};

export default Home;