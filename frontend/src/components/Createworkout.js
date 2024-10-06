import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Createworkout = () => {

    const {dispatch} = useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [image,setImage] = useState('')
    const [error,setError] = useState(null)
    

    const AddWorkout = async (e)=>{
        e.preventDefault()

        const workout = {title,load,reps,image}

        const response = await fetch('/api/workouts/',{
            method:'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'Application/json'
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
            alert('New workout added Succesfully !')
            console.log('its working')
            dispatch({type:'CREATE_WORKOUT',payload:data})
        }
    }

  return (
    <div className='create-workout-div'>
      <form className='create-workout' onSubmit={AddWorkout}>
        <h2>Add a New Workout</h2>

        <div>
            <label>Excerise Title:</label>
            <input
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
        </div>

        <div>
            <label>Excerise Load (Kg):</label>
            <input
            type='number'
            min={0}
            max={200}
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
            />
        </div>

        <div>
            <label>Excerise Reps:</label>
            <input
            type='number'
            min={0}
            max={200}
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
            />
        </div>

        <div>
            <label>Excercise Image:</label>
            <input
            type='text'
            onChange={(e)=>setImage(e.target.value)}
            value={image}
            />
        </div>

        <button type='submit'>Add Workout</button>
      </form>
    </div>
  )
}

export default Createworkout
