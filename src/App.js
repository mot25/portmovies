import React from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
