import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true);
  const [tour ,setTour] =useState([]) ;
  const removeTour =(id)=>{
    const newTour =tour.filter((tours)=> tours.id !==id)
    setTour(newTour);
  }

  const fetchTour =async () =>{
   setLoading(true);
   try{
    const response  =await fetch(url)
    const tour = await response.json()
   setLoading(false);
   setTour(tour)
 
   }
   catch (error){
    setLoading(false)
    console.log(error)

   }
   
  }
  useEffect(()=>{
    fetchTour();
  },[])
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tour.length == 0){
    return(
      <button className='btn' onClick={()=> fetchTour()}> refresh</button>
    )
  }
  return (
    <main>
      <Tours  tour={tour}  removeTour={removeTour}/>
    </main>
  )
}

export default App
