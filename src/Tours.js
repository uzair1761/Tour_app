import React from 'react';
import Tour from './Tour';
const Tours = ({tour,removeTour}) => {
  console.log(tour)
  return (
  <section>
  <div className='title'>
    <h2> our Tours</h2>
    <div className='underline'>

    </div>
  </div>
  <div>
    {tour.map((data)=>{
    return(
      <Tour  key={data.id} {... data} removeTour={removeTour}/>
    )

    })}
  </div>




</section>
  )
};

export default Tours;
