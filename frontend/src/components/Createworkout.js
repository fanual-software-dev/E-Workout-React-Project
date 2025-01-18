import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Createworkout = () => {

    const {dispatch} = useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)
    const user = JSON.parse(localStorage.getItem('UserData'))
    

    const AddWorkout = async (e)=>{
        e.preventDefault()

        const workout = {title,load,reps}

        const response = await fetch('/api/workouts/',{
            method:'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'Application/json',
                "Authorization":`Bearer ${user.token}`
            }
        })

        const data = await response.json()

        if(!response.ok){
            setError(data.error)
            alert(error)
        }

        if (response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('its working')
            dispatch({type:'CREATE_WORKOUT',payload:data})
        }
    }

  return (
    <div className='create-workout-div'>
      <form className='form' onSubmit={AddWorkout}>
        <h2>Add a New Workout</h2>

        <div className='divs'>
            <label>Title :</label>
            <input
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
        </div>

        <div className='divs'>
            <label>Load (Kg) :</label>
            <input
            type='number'
            min={0}
            max={200}
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
            />
        </div>

        <div className='divs'>
            <label>Reps :</label>
            <input
            type='number'
            min={0}
            max={200}
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
            />
        </div>

        <div className='btn-div'>
            <button type='submit'>ADD WORKOUT</button>
        </div>
      </form>
    </div>
  )
}

export default Createworkout
