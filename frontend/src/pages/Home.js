import React, { useEffect,useState } from 'react'
import Workoutdetails from '../components/Workoutdetails'
import Createworkout from '../components/Createworkout'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {
const {workouts,dispatch} = useWorkoutsContext()
    useEffect(()=>{

        const featchWorkouts = async ()=>{

            const response = await fetch('/api/workouts')
            const data = await response.json()
            if (response.ok){

              dispatch({type:'SET_WORKOUTS',payload:data})
                
            }
        }

        
        featchWorkouts()

    },[dispatch])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout)=>(
            <Workoutdetails key={workout._id} workout={workout}/>
        ))}
      </div>

      <div className='add-workouts'>
        <Createworkout></Createworkout>

      </div>
    </div>
  )
}

export default Home
