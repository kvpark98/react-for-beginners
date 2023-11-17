import {useState, useEffect, useMemo} from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import styles from "../App.module.css";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import RankSort from "../components/RankSort";
import Genres from "../components/Genres";
import PropTypes from "prop-types";
import ScrollHome from "../components/ScrollHome";

function Home({checked, toggleTheme}) {
    const [loading, setLoading] = useState(true);

    const [movies, setMovies] = useState([]);

    // 장르 선택
    const sessionGenre = window.sessionStorage.getItem("genre");
    const [genreSelected, setGenreSelected] = useState(sessionGenre || "");
    const selectGenre = (event) => {
      if(event.target.innerText === genreSelected) {
        setGenreSelected("");
        document.querySelectorAll(".navLink").forEach((genre) => genre.classList.remove("active"));
        window.sessionStorage.removeItem("genre");
      } else {
          setGenreSelected(event.target.innerText);
          window.sessionStorage.setItem("genre", event.target.innerText);
      }
    };
    
    // 순위 매기기
    const sessionRanked = window.sessionStorage.getItem("isRanked");
    const [isRanked, setIsRanked] = useState(sessionRanked || "no");
    const rank = () => {
      if(isRanked === "no") {
        setIsRanked("yes");
        setsortSelected("");
        setSorted("descending");
        setUserInput("");
        document.getElementById("search").value = "";
        window.sessionStorage.setItem("isRanked", "yes");
        window.sessionStorage.removeItem("sortSelected");
        window.sessionStorage.removeItem("sorted");
        window.sessionStorage.removeItem("search");
      } else {
          setIsRanked("no");
          window.sessionStorage.setItem("isRanked", "no");
      }
    };

    // 중복 없는 rank property 만들어 Object에 저장
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

    // Rank 클릭 시 rating 내림차순으로 정렬되지만 rating이 같을 경우 download_count가 높은 것이 앞에 오도록 설정
    if(isRanked === "yes") {
      movies.sort((a, b) => {
          return b.rating - a.rating;
      });
    };

    // 정렬 기준 선택
    const sessionSortSelected = window.sessionStorage.getItem("sortSelected");
    const [sortSelected, setsortSelected] = useState(sessionSortSelected || "");
    const sortSelect = (event) => {
      setsortSelected(event.target.innerText);
      window.sessionStorage.setItem("sortSelected", event.target.innerText);
      window.sessionStorage.setItem("sorted", sessionSorted || "descending");
    };

    // 정렬 내림차순 오름차순
    const sessionSorted = window.sessionStorage.getItem("sorted");
    const [sorted, setSorted] = useState(sessionSorted || "descending");
    const sort = () => {
      if(sorted === "descending") {
        setSorted("ascending");
        window.sessionStorage.setItem("sorted", "ascending");
      } else {
          setSorted("descending");
          window.sessionStorage.setItem("sorted", "descending");
      }
    };

    // 연도, 업로드 날짜, 상영 시간, 제목 등을 기준으로 정렬 및 초기화
    if(sortSelected === "Year") {
      if(sorted === "descending") {
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
        if(sorted === "descending") {
          movies.sort((a, b) => {
            if(a.date_uploaded && b.date_uploaded && a.date_uploaded.slice(0, 10) === b.date_uploaded.slice(0, 10)) {
              return new Date(b.year) - new Date(a.year);
            } else {
                return new Date(b.date_uploaded) - new Date(a.date_uploaded);
            }
          });
        } else {
            movies.sort((a, b) => {
              if(a.date_uploaded && b.date_uploaded && a.date_uploaded.slice(0, 10) === b.date_uploaded.slice(0, 10)) {
                return new Date(a.year) - new Date(b.year);
              } else {
                  return new Date(a.date_uploaded) - new Date(b.date_uploaded);
              }
            });
        }
    } else if(sortSelected === "Runtime") {
        if(sorted === "descending") {
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
        if(sorted === "descending") {
          movies.sort((a, b) => {
            return (a.title < b.title) ? 1 : (a.title > b.title ? -1 : 0);
          });
        } else {
            movies.sort((a, b) => {
              return (a.title < b.title) ? -1 : (a.title > b.title ? 1 : 0);
            });
        }
    } else if(sortSelected === "Default") {
        setsortSelected("");
        setSorted("descending");
        window.sessionStorage.removeItem("sortSelected");
        window.sessionStorage.removeItem("sorted");
    }

    // 검색
    const genres = useMemo(() => {
        return ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Musical", "Mystery", "Reality-TV", "Romance", "Sci-Fi", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }, []);

    const sessionUserInput = window.sessionStorage.getItem("search");
    const [userInput, setUserInput] = useState(sessionUserInput || "");
    const getValue = (event) => {
      setUserInput(event.target.value.replace(/\s/g,'').toLowerCase());
      window.sessionStorage.setItem("search", event.target.value.replace(/\s/g,'').toLowerCase());
    };

    const preventDefault = (event) => {
      event.preventDefault();
    };

    const searchedMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(userInput);
    });
    
    if(searchedMovies.length === 0) {
      window.sessionStorage.removeItem("search");
    }

    const reset = () => {
      setUserInput("");
      setsortSelected("");
      setSorted("descending");
      window.sessionStorage.removeItem("search");
      window.sessionStorage.removeItem("sortSelected");
      window.sessionStorage.removeItem("sorted");
    };

    // MediumCoverImg가 없을 때 대체 이미지를 넣는 함수
    const handleMediumCoverImgError = (event) => {
      event.target.src = "https://t3.ftcdn.net/jpg/00/62/26/78/360_F_62267871_t1n8LSkrFSL2t1aQSyilyfVpC21wQx59.jpg";
    };
  
    useEffect(() => {
      if(isRanked === "yes") {
        if(genreSelected) { // Rank(O) + Genre(O)
          fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count&genre=${genreSelected}`).then(response => response.json()).then(json => {
            setLoading(false);
            setMovies(json.data.movies);
          });
        } else { // Rank(O) + Genre(X)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count`).then(response => response.json()).then(json => {
              setLoading(false);
              setMovies(json.data.movies);
            });
        }
      } else {
        if(genreSelected) { // Rank(X) + Genre(O)
          fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count&genre=${genreSelected}`).then(response => response.json()).then(json => {
            setLoading(false);
            setMovies(json.data.movies);
          });
        } else { // Rank(X) + Genre(X)
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count`).then(response => response.json()).then(json => {
              setLoading(false);
              setMovies(json.data.movies);
            });
        }
      }
    }, [isRanked, genreSelected, sortSelected]);

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
                genres={genres}
                userInput={userInput}
                searchedMovies={searchedMovies}
                genreSelected={genreSelected}
                selectGenre={selectGenre}
                getValue={getValue}
                preventDefault={preventDefault}
                reset={reset}
                isRanked={isRanked}/>
              <RankSort
                searchedMovies={searchedMovies}
                rank={rank}
                sortSelected={sortSelected}
                sortSelect={sortSelect}
                sorted={sorted}
                sort={sort}
                isRanked={isRanked}/>
              <MovieList
                movies={movies}
                userInput={userInput}
                searchedMovies={searchedMovies}
                isRanked={isRanked}
                handleMediumCoverImgError={handleMediumCoverImgError}/>
              <ScrollHome/>
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