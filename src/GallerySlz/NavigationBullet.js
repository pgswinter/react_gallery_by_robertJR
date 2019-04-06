import React from 'react';
import {
    styleBullet,
    styleBulletImg,
    styleBulletImgActive
} from './styles';

class NavigationBullet extends React.Component {

    bulletClick = (index) => {
        this.props.handleBulletClick(index)
    }

    render() {
        let {activeIndex} = this.props;
        return this.props.data.map((item, i) => {
            let activeIndexStr = '';
            
            if(activeIndex === i) {
                activeIndexStr = 'activeIndex';
                item.isActive = true;
            } else {
                activeIndexStr = '';
                item.isActive = false;
            }
            return <li
                onClick={() => this.bulletClick(i)}
                className={`${activeIndexStr}`}
                style={styleBullet}
                key={item.id}
            >
                <img style={item.isActive ? {...styleBulletImg, ...styleBulletImgActive} : styleBulletImg} src={item.img} />
            </li>
        })
    }
}

export default NavigationBullet;