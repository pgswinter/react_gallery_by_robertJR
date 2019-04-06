import React, { Component } from 'react';
import './App.css';

import GallerySlz from './GallerySlz';
import { closeButton } from './GallerySlz/styles';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isCarousel: true,
    };
  }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClickOutside);
  // }

  removeCarousel = () => {
    const isIt = this.state.isCarousel;
    this.setState({
        isCarousel: !isIt,
    })
  }

  // setWrapperRef = (node) => {
  //   this.wrapperRef = node;
  // }

  // handleClickOutside = (event) => {
  //   if(this.wrapperRef && !this.wrapperRef.contains(event.target)) {
  //     this.removeCarousel();
  //   }
  // }

  render() {
    const {isCarousel} = this.state;
    return (
      <div className="App">
        {
          isCarousel ? 
          <React.Fragment>
            <button style={closeButton} onClick={this.removeCarousel}>
              x
            </button>
            <GallerySlz
              // ref={this.setWrapperRef}
            />
          </React.Fragment>
          :
          null
        }
      </div>
    );
  }
}

export default App;
