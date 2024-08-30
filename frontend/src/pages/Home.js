import React, { useEffect,useState } from 'react'
import Workoutdetails from '../components/Workoutdetails'

const Home = () => {

    const [workouts,setWorkouts] = useState(null)
    useEffect(()=>{

        const featchWorkouts = async ()=>{

            const response = await fetch('/api/workouts')
            const data = await response.json()
            if (response.ok){
                setWorkouts(data)
            }
        }

        
        featchWorkouts()

    },[])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout)=>(
            <Workoutdetails key={workout._id} workout={workout}/>
        ))}
      </div>
    </div>
  )
}

export default Home
