import React from "react";

import Movie from './Movie'



class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Movie arrMovies={this.props.arrSearch} />
      </div>
    );
  }
}

export default Movies;
