import React from "react";

import Movie from "./Movie";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div  className='main-content'>
        {this.props.arrMovies.map(item  => {
          return <Movie key={item.imdbID} arr={item} />
        })}
      </div>
    );
  }
}

export default Movies;
