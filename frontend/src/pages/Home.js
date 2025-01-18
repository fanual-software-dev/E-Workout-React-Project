import React, { useContext, useEffect,useState } from 'react'
import Workoutdetails from '../components/Workoutdetails'
import Createworkout from '../components/Createworkout'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { UsersContext } from '../context/UsersContextProvider'

const Home = () => {
const {workouts,dispatch} = useWorkoutsContext()
const {users} = useContext(UsersContext)
const user = JSON.parse(localStorage.getItem('UserData'))
const [isloogedin,setisloggedin] = useState(localStorage.getItem('UserData'))
    useEffect(()=>{

      console.log(users,"users at home")

        const featchWorkouts = async ()=>{

            const response = await fetch('/api/workouts',{
              headers:{
                "Authorization":`Bearer ${user.token}`
              }
            })
            const data = await response.json()
            if (response.ok){

              dispatch({type:'SET_WORKOUTS',payload:data})
                
            }
        }

        
        featchWorkouts()

    },[dispatch])
  return (
    <div className='home'>
      {isloogedin && <p className='username'>{JSON.parse(localStorage.getItem('UserData')).user.email}</p>}
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
