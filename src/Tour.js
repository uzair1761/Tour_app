import React, { useState } from 'react';

const Tour = ({name,id,image,info,price ,removeTour}) => {
// const {name,id,image,info,price} = data
const [readMore, setreadMore] =useState(false)
  return(
    <>
   
    <article className='single-tour'>
    <img src={image} alt={name}/>
    <div className='tour-info'> 
      <h4> {name}</h4>
      <h4 className='tour-price'>${price}</h4>
    </div>
    <p>{readMore ?info :`${info.substring(0,200)}...`}
    <button onClick={()=> setreadMore(!readMore)}>`${
      readMore ? 'show less' : 'show more'
}`
</button>
    </p>
    <button className='delete-btn' onClick={()=>removeTour(id)}>not interested</button>
    </article>
    </>
  );
};

export default Tour;
