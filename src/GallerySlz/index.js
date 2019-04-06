import React from 'react';

import ItemGallery from './ItemGallery';
import NavigationBullet from './NavigationBullet';

import {
    styleGallery,
    styleGalleryUl,
    styleBullerOl,
    styleNext,
    stylePrev,
} from './styles';

import { dataGallery } from './data';

class GallerySlz extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            goNext: false,
            goPrev: false,
        }
    }

    handleBulletClick = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    onNextClick = () => {
        let updateCurrentIndex = ''
        if(this.state.activeIndex === dataGallery.length - 1) {
            updateCurrentIndex = 0;
        } else {
            updateCurrentIndex = this.state.activeIndex + 1;
        }
        this.setState({
            activeIndex: updateCurrentIndex,
            goNext: true,
        })
    }

    onPrevClick = () => {
        let updateCurrentIndex = ''
        if(this.state.activeIndex === 0) {
            updateCurrentIndex = dataGallery.length - 1;
        } else {
            updateCurrentIndex = this.state.activeIndex - 1;
        }
        this.setState({
            activeIndex: updateCurrentIndex,
            goNext: false,
        })
    }

    render() {
        const {activeIndex, goNext} = this.state;
        const {isCarousel} = this.props;
        dataGallery.map(item => item.isActive = false);
        return <React.Fragment>
            <div className="gallery_wrapper" style={styleGallery}>
                <ul style={styleGalleryUl}>
                    <ItemGallery
                        data={dataGallery}
                        activeIndex={activeIndex}
                        goNext={goNext}
                    />
                </ul>
                <ol style={styleBullerOl}>
                    <NavigationBullet 
                        data={dataGallery}
                        activeIndex={activeIndex}
                        handleBulletClick={this.handleBulletClick}
                    />
                </ol>
                <button style={styleNext} onClick={this.onNextClick} className="nextButton">Next</button>
                <button style={stylePrev} onClick={this.onPrevClick} className="prevButton">Previous</button>
            </div>
        </React.Fragment>
    }
}

export default GallerySlz