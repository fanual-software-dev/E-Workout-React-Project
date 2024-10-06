import { WorkoutsContext } from "../context/WorkoutsContextProvider";
import { useContext } from "react";

export const useWorkoutsContext = ()=>{
    const context = useContext(WorkoutsContext)

    if (!context){
        throw Error('useWorkoutsContext must be used inside WorkoutsProvide')
    }
    return context
}