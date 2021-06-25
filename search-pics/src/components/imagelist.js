import React from 'react';

const Imagelist = (props) => {
    const images = props.Image.map(({id,urls,description}) =>{
       return <img key={id} src={urls.regular} alt={description} />
    });

    return(
    <div>{images}</div>
    );
};

export default Imagelist;