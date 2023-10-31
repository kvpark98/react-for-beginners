import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./App.module.css";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useState } from "react";
import sun from './image/sun.png';
import moon from './image/moon.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.mainBgColor};
    color: ${(props) => props.theme.mainTextColor};
    --bs-border-color: ${(props) => props.theme.borderColor};
  }
  h2 {
    color: ${(props) => props.theme.mainTextColor};
  }
  #moviesLength {
    background-color: ${(props) => props.theme.SortBgColor};
    color: ${(props) => props.theme.SortColor};
  }
  #genreTab {
    background-color: ${(props) => props.theme.genreTabBgColor};
  }
  #dropdown-basic-button {
    background-color: ${(props) => props.theme.SortBgColor};
    color: ${(props) => props.theme.SortColor};
  }
  #scrollToTop {
    background-color: ${(props) => props.theme.ScrollToTopBgColor};
    color: ${(props) => props.theme.ScrollToTopColor};
  }
  #scrollToBottom {
    background-color: ${(props) => props.theme.ScrollToBottomBgColor};
    color: ${(props) => props.theme.ScrollToBottomColor};
  }
  .nav {
    --bs-nav-link-hover-color: ${(props) => props.theme.mainTextColor};
  }
  .navLink {
    color: ${(props) => props.theme.linkColor};
  }
  .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: ${(props) => props.theme.linkColor};
  }
  .nav-tabs {
    --bs-nav-tabs-link-active-bg: ${(props) => props.theme.MainInfoTrailerBgColor};
    --bs-nav-tabs-link-active-color: ${(props) => props.theme.MainInfoTrailerColor};
    --bs-nav-tabs-link-active-border-color: ${(props) => props.theme.borderColor};
    --bs-nav-tabs-border-color: ${(props) => props.theme.borderColor};
    --bs-nav-tabs-link-hover-border-color: ${(props) => props.theme.MainInfoTrailerHoverBorderColor};
  }
  .accordion {
    --bs-accordion-bg: ${(props) => props.theme.mainBgColor};
    --bs-accordion-active-bg: ${(props) => props.theme.accordionBgColor};
    --bs-accordion-active-color: ${(props) => props.theme.accordionColor};
  }
  .accordion-button {
    color: ${(props) => props.theme.mainTextColor};
  }
  .accordion-item {
    color: ${(props) => props.theme.mainTextColor};
  }
  .form-check-input:checked {
    background-color: ${(props) => props.theme.linkColor};
    border-color: ${(props) => props.theme.linkColor};
  }
  #rank {
    background-color: #6610f2;
  }
  #darkLight .form-check-input {
    background-color: #F3E2A9;
    border-color: #F3E2A9;
  }
  #darkLight .form-check-input:checked {
    background-color: #A9BCF5;
    border-color: #A9BCF5;
  }
  #darkLight .form-switch .form-check-input {
    background-image: url(${sun});
  }
  #darkLight .form-switch .form-check-input:checked {
    background-image: url(${moon});
  }
`;

function App() {
  const localTheme = window.localStorage.getItem("theme");
  const [themeMode, setThemeMode] = useState(localTheme || "lightTheme");
  const theme = (themeMode === "lightTheme") ? lightTheme : darkTheme;

  const localChecked = window.localStorage.getItem("checked");
  const [checked, setChecked] = useState(localChecked || "false");

  const toggleTheme = () => {
    if(themeMode === "lightTheme") {
      setThemeMode("darkTheme");
      setChecked("true");
      window.localStorage.setItem("theme", "darkTheme");
      window.localStorage.setItem("checked", "true");
    } else {
      setThemeMode("lightTheme");
      setChecked("false");
      window.localStorage.setItem("theme", "lightTheme");
      window.localStorage.setItem("checked", "false");
    }
  };

  console.log(themeMode);
  console.log(checked);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route path="/react-for-beginners/movie/:id">
            <Detail
              checked={checked}
              toggleTheme={toggleTheme}/>
          </Route>
          <Route path="/react-for-beginners">
            <Home 
              checked={checked} 
              toggleTheme={toggleTheme}/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
