import React, { Component } from 'react';
import 'bootstrap';
import MenuBar from './MenuBar';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
      return (this.props.location.pathname !== nextProps.location.pathname);
  }

  render() {
      return (
          <div className="App">
              <MenuBar/>
              {this.props.children}
              <Footer/>
          </div>
      );
  }
}

export default App;
