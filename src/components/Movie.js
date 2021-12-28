import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: this.props.arrMovies,
    };
  }

  render() {
    return (
      <div className="content container">
        {this.state.arr.map(item => {
            // return <h1>{item.Title}</h1>
        })}
      </div>
    );
  }
}

export default Movie;
