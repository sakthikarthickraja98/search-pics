import React from 'react';
import "../imagelist.css";
import Imagecard from "./imagecard";

const Imagelist = (props) => {
    const images = props.Image.map((image) =>{
       return <Imagecard key={image.id} image={image} />
    });

    return(
    <div className="image-list">{images}</div>
    );
};

export default Imagelist;