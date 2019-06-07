import React from 'react';
import ImageCard from './ImageCard'
import '../style/ImageList.css';
import background from '../style/background.png';

const ImageList = (props) => {
    const images = props.images.map((image)=> {
        return <ImageCard key={image.id} image={image}/>;
    });
    
    if(props.images.length === 0){
        return <img src={background}  alt="background" 
        style={{backgroundPosition: 'center',
        backgroundSize: 'cover',
        }}></img>
    } 
    return <div className="image-list">{images}</div>
};

export default ImageList; 