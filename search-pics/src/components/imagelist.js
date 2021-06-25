import React from 'react';

const Imagelist = (props) => {
    const images = props.Image.map((image) =>{
       return <img key={image.id} src={image.urls.regular} alt={image.description} />
    });

    return(
    <div>{images}</div>
    );
};

export default Imagelist;