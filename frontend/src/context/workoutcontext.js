import { createContext } from "react";

export const workoutscontext = createContext()

export const workoutcontextprovider = ({children})=>{

    return (
        <workoutscontext.Provider>
            {children}
        </workoutscontext.Provider>
    )
}