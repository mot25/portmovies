import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props.arr;
    return (
      <div key={imdbID} className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src={
              Poster !== "N/A" ? Poster : `https://via.placeholder.com/468x450?text=${Title}` }
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {Title}
            <i className="material-icons right">{Type}</i>
            <p>{Year}</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Movie;

// https://via.placeholder.com/468x150?text=placeholder
