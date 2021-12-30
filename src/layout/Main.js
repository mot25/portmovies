import React from "react";

import Preloader from "../components/Preloader";
import Movies from "../components/Movies";

import "./Main.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrMovies: [],
      loader: false,
    };
  }
  searchInput = async (e) => {
    e.preventDefault();
    let type = e.target.group1.value;
    console.log("type", type);
    await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${e.target.search.value.trim()}${
        type == "all" ? "" : type == "series" ? "&type=series" : "&type=movie"
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.Response == "False"
          ? this.setState({ arrMovies: [], loader: true })
          : this.setState({ arrMovies: data.Search });
        // this.state.arrMovies = data.Search;
      });
  
  };

  render() {
    return (
      <div className="content container">
        <form onSubmit={this.searchInput}>
          <input className="input-search" name="search" />
          <button type="submit" className="submit_btn">
            search
          </button>
          <div className="input-radio">
            <p>
              <label>
                <input value="all" name="group1" type="radio" defaultChecked />
                <span>all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="series" name="group1" type="radio" />
                <span>Serials</span>
              </label>
            </p>
            <p>
              <label>
                <input value="movie" name="group1" type="radio" />
                <span>Movies</span>
              </label>
            </p>
          </div>
        </form>
        {this.state.arrMovies.length ? (
          <Movies arrMovies={this.state.arrMovies} />
        ) : this.state.loader ? (
          <Preloader />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Main;
/* 
http://cdn.onlinewebfonts.com/svg/img_346990.png

   9822c19e
*/
