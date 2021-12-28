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
        {this.state.arr.map((e, i) => {
          return <div>{e.Title}</div>;
        })}
      </div>
    );
  }
}

export default Movie;
