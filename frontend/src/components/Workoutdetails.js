import React from 'react'

const Workoutdetails = ({workout}) => {
  return (
    <div className='workout-details'>
        <img src={workout.image}></img> 
        <h4>{workout.title}</h4>
        <p><strong>Load (Kg): </strong>{workout.load}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default Workoutdetails
