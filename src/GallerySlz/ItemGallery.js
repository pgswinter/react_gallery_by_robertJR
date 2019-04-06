import React from 'react';
import {
    styleItemGalleryLi,
    styleItemGallery,
    styleItemGalleryImg,
    styleItemGalleryParagraph,
    styleItemGallerySpan
} from './styles';

class ItemGallery extends React.Component {
    
    // GO TO CURRENT INDEX
    movingCurrentLiCss = (index) => ({
        marginLeft: `-${100*index}vw`,
    })
    // GO NEXT TO END OF LENGTH
    movingNextEndLiCss = () => ({
        marginLeft: 0,
    })
    // GO PREVIOUS FROM START OF LENGTH
    movingPrevStartLiCss = () => ({
        marginLeft: `-${100*this.props.data.length}vw`,
    })

    render() {
        let movingCss = {};
        const lengthData = this.props.data.length;
        let {activeIndex, goNext, goPrev} = this.props;
        return this.props.data.map((item, i) => {
            console.log(`activeIndex: `,activeIndex)
            let activeIndexStr = '';
            
            if(activeIndex === i) {
                // NEXT BUTTON
                if(goNext) {
                    if(activeIndex === lengthData) {
                        movingCss =  {...styleItemGalleryLi, ...this.movingNextEndLiCss()};
                    }
                    movingCss = {...styleItemGalleryLi, ...this.movingCurrentLiCss(activeIndex)}
                }
                // PREV BUTTON 
                else {
                    if(activeIndex === 0) {
                        movingCss =  {...styleItemGalleryLi, ...this.movingPrevStartLiCss()};
                    }
                    movingCss = {...styleItemGalleryLi, ...this.movingCurrentLiCss(activeIndex)}
                }
                activeIndexStr = 'activeIndex';
                item.isActive = true;
            } else {
                activeIndexStr = '';
                item.isActive = false;
            }
            return <li
                className={`${activeIndexStr}`}
                style={activeIndex === i ? movingCss : styleItemGalleryLi}
                key={item.id}
            >   
                <p style={styleItemGalleryParagraph}>
                    <span style={styleItemGallerySpan}>{`${i+1}/${lengthData}`}</span>
                    {item.desc}
                </p>
                <div className="itemGallery" style={styleItemGallery}>
                    <img style={styleItemGalleryImg} src={item.img} />
                </div>
            </li>
        })
    }
}

export default ItemGallery;