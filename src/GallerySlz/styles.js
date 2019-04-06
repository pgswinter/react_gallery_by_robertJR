import { dataGallery } from './data';

export const closeButton = {
    'width': '50px',
    'height': '50px',
    'display': 'block',
    'cursor': 'pointer',
    'position': 'fixed',
    zIndex: 99999999999,
    right: '0',
    top: '0',
    color: '#fff',
    'borderStyle': 'none',
    backgroundColor: '#005E95'
}

export const perfectCenter = {
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
}

export const commonUlOl = {
    paddingLeft: 0,
}

export const styleGallery = {
    'position': 'fixed',
    'width': '100%',
    zIndex: 99999,
    'top': 0,
    'left': 0,
    backgroundColor: '#000',
}

export const styleGalleryUl = {
    ...{
        'width': `${100 * dataGallery.length}%`,
        'listStyleType': 'none',
        margin: 0,
    },
    ...commonUlOl
}

export const styleItemGalleryLi = {
    'float': 'left',
    'width': '100vw',
    'height': '100vh',
    'position': 'relative',
    'fontWeight': 'bold',
}

export const styleBullerOl = {
    'width': `45vw`,
    'listStyleType': 'none',
    paddingLeft: 0,
    top: 'unset',
    bottom: 0,
    position: 'absolute',
    left: '5px',
    margin: '0'
}

export const styleBullet = {
    'float': 'left',
    // 'width': `calc(45vw / ${dataGallery.length})`,
    'width': '100px',
    'height': '80px',
    'marginRight': '5px',
    'position': 'relative',
    'cursor': 'pointer',
    'boxSizing': 'border-box',
}

export const styleBulletImg = {
    'width': '100%',
    'border': '2px solid #0081CC',
    'borderRadius': '4px',
}

export const styleBulletImgActive = {
    'border': '2px solid #fff',
}

export const styleItemGallery = {
    ...{
        'width': '45%',
    },
    ...perfectCenter
}

export const styleItemGallerySpan = {
    'position':'absolute',
    'left': '30px',
    'letterSpacing': '15px'
}

export const styleItemGalleryImg = {
    'width': '100%',
}

export const styleItemGalleryParagraph = {
    'position': 'absolute',
    'top': '0',
    backgroundColor: '#0081CC',
    'display': 'block',
    'width': '100vw',
    'textAlign': 'center',
    'margin': '0',
    'color': '#fff',
    'height': '50px',
    'lineHeight': '2.8'
}

export const styleNext = {
    backgroundColor: 'red',
    cursor: 'pointer',
    'position': 'absolute',
    'width': '100px',
    'height': '100px',
    'right': '10%',
    'top': 'calc(50% - 50px)',
    content: "\E91A",
    fontFamily: 'iconstay !important',
}

export const styleNextBefore = {
    content: "\E91A",
    fontFamily: 'iconstay !important',
}

export const stylePrev = {
    'position': 'absolute',
    'width': '100px',
    'height': '100px',
    'left': '10%',
    'top': 'calc(50% - 50px)',
    backgroundColor: 'red',
    cursor: 'pointer',
}