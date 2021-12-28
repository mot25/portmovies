import React from "react";

import oneJSON from "../one.json";
import Movies from '../components/Movies'

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrMovies: [],
    };
  }
  searchInput = async () => {
    // console.dir(e.target.search.value);
    console.log(oneJSON);
    await this.setState({ arrMovies: oneJSON });
  };

  componentDidMount() {
    this.searchInput()
  }

  render() {
    return (
      <div className="content container">
        {/* <form onSubmit={this.searchInput}>
          <input
            placeholder="Input movies"
            type="text"
            name="search"
            if="search"
            defaultValue="one"
          />
          <button className="submit_btn">search</button>
        </form> */}
        <Movies arrSearch={this.state.arrMovies.Search} />
      </div>
    );
  }
}

export default Main;
/* 
http://cdn.onlinewebfonts.com/svg/img_346990.png

   <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src="http://cdn.onlinewebfonts.com/svg/img_346990.png" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
                <br/>
                <p>
                  I am a very simple card. 
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>




 await fetch(
       `http://www.omdbapi.com/?apikey=48c07f18&s=${e.target.search.value}&plot=full`
 )
       .then((data) => data.json())
      .then((data) => this.setState({ arrMovies: data }));




                  <div key={e.imdbID} className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={e.Poster} />
                  <span className="card-title">{e.Title}</span>
                </div>
                <div className="card-content">
                  <p>
                    {e.Type}
                  </p>
                  <br/>
                  <p>
                  {e.Year}
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
*/
