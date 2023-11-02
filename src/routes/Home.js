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

    const localGenre = window.sessionStorage.getItem("genre");
    const [genreSelected, setGenreSelected] = useState(localGenre || "Action");
    const selectGenre = (event) => {
      setGenreSelected(event.target.innerText);
      window.sessionStorage.setItem("genre", event.target.innerText);
    }; 

    const [sortSelected, setsortSelected] = useState("");
    const sortSelect = (event) => {
      setsortSelected(event.target.innerText);
    };

    const [sorted, setSorted] = useState(false);
    const sort = () => {
      setSorted(current => !current);
    };
    
    const localRanked = window.sessionStorage.getItem("isRanked");
    const [isRanked, setIsRanked] = useState(localRanked || "no");
    const rank = () => {
      if(isRanked === "no") {
        setIsRanked("yes");
        window.sessionStorage.setItem("isRanked", "yes");
      } else {
        setIsRanked("no");
        window.sessionStorage.setItem("isRanked", "no");
      }
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
    if(isRanked === "yes") {
      movies.sort((a, b) => {
          return b.rating - a.rating
      });
    };

    // 연도, 업로드 날짜, 상영 시간을 기준으로 정렬하는 과정
    if(sortSelected === "Year") {
      if(!sorted) {
        movies.sort((a, b) => {
          if(a.year === b.year) {
              return new Date(b.date_uploaded) - new Date(a.date_uploaded);
          } else {
            return new Date(b.year) - new Date(a.year);
          }
        });
      } else {
        movies.sort((a, b) => {
          if(a.year === b.year) {
              return new Date(a.date_uploaded) - new Date(b.date_uploaded);
          } else {
            return new Date(a.year) - new Date(b.year);
          }
        });
      }
    } else if(sortSelected === "Upload Date") {
        if(!sorted) {
          movies.sort((a, b) => {
            if(a.date_uploaded && a.date_uploaded.slice(0, 10) === b.date_uploaded.slice(0, 10)) {
              return new Date(b.year) - new Date(a.year);
            } else {
              return new Date(b.date_uploaded) - new Date(a.date_uploaded);
            }
          });
        } else {
          movies.sort((a, b) => {
            if(a.date_uploaded && a.date_uploaded.slice(0, 10) === b.date_uploaded.slice(0, 10)) {
              return new Date(a.year) - new Date(b.year);
            } else {
              return new Date(a.date_uploaded) - new Date(b.date_uploaded);
            }
          });
        }
    } else if(sortSelected === "Runtime") {
        if(!sorted) {
          movies.sort((a, b) => {
            if(a.runtime === b.runtime) {
              if(a.year === b.year) {
                return new Date(b.date_uploaded) - new Date(a.date_uploaded);
              } else {
                return new Date(b.year) - new Date(a.year);
              }
            } else {
              return b.runtime - a.runtime;
            }
          });
        } else {
          movies.sort((a, b) => {
            if(a.runtime === b.runtime) {
              if(a.year === b.year) {
                return new Date(a.date_uploaded) - new Date(b.date_uploaded);
              } else {
                return new Date(a.year) - new Date(b.year);
              }
            } else {
              return a.runtime - b.runtime;
            }
          });
        }
    } else if(sortSelected === "Title") {
      if(!sorted) {
        movies.sort((a, b) => {
          return (a.title < b.title) ? 1 : (a.title > b.title ? -1 : 0);
        });
      } else {
        movies.sort((a, b) => {
          return (a.title < b.title) ? -1 : (a.title > b.title ? 1 : 0);
        });
      }
    }

    // MediumCoverImg가 없을 때 대체 이미지를 넣는 함수
    const handleMediumCoverImgError = (event) => {
        event.target.src = "https://t3.ftcdn.net/jpg/00/62/26/78/360_F_62267871_t1n8LSkrFSL2t1aQSyilyfVpC21wQx59.jpg";
    };
    
    // console.log(isRanked);
    console.log(genreSelected);
    // console.log(sortSelected);
    // console.log(sorted);
    // console.log(movies);

    useEffect(() => {
      if(isRanked === "yes") {
        setsortSelected(null);
        if(genreSelected) { // Rank(O) + Genre(O) + Rating(O)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count&genre=${genreSelected}`).then(response => response.json()).then(json => {
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
        if(genreSelected) { // Rank(X) + Genre(O) + Rating(X)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count&genre=${genreSelected}`).then(response => response.json()).then(json => {
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
    }, [isRanked, genreSelected]);
   
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
                genreSelected={genreSelected}
                selectGenre={selectGenre}/>
              <RankSort
                rank={rank}
                sortSelected={sortSelected}
                sortSelect={sortSelect}
                sorted={sorted}
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