import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const Workoutdetails = ({workout}) => {
  const {dispatch} =  useWorkoutsContext()

  const deleteworkout = async()=>{
    const id = workout._id
    
    console.log(id)

    const Delete = await fetch(`/api/workouts/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }

    })

    const data = await Delete.json()

    if (!Delete.ok){
      alert('opps something went wrong while deleting')
    }

    else{
      alert('workout deleted successfully!')
      dispatch({type:'DELETE_WORKOUT',payload:data})
      
    }
  }
    
  return (
    <div className='workout-details'>
        <img src={workout.image}></img> 
        <div className='main-body'>
            <h4>{workout.title}</h4>
            <p><strong>Load (Kg): </strong>{workout.load}</p>
            <p><strong>Reps : </strong>{workout.reps}</p>
            <div className='delete-div'>
              <p>{workout.createdAt}</p>
              <button type='button' onClick={deleteworkout}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Workoutdetails
