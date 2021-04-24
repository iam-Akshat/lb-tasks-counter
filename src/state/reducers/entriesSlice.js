import { createSlice } from "@reduxjs/toolkit"
import { loadState } from "../../localStorage";
const savedState = loadState();
const initialState = savedState || {
    entries:[]
}

const entriesSlice = createSlice({
    name:'entries',
    initialState,
    reducers:{
        addEntry(state,action){
            console.log(action.payload);
            state.entries.unshift(action.payload)
        },
        addTask(state,action){
            state.entries.forEach((entry)=>{
                if (entry.id === action.payload.id) {
                    entry.tasks.push(action.payload.task)
                }
            })
        },
        incrementTask(state,action){
            state.entries.forEach((entry)=>{
                if (entry.id === action.payload.entryId) {
                    entry.tasks.forEach((task)=>{
                        if(task.id === action.payload.taskId){
                            task.count += 1;
                        }
                    })
                }
            })
        },
        decrementTask(state,action){
            state.entries.forEach((entry)=>{
                if (entry.id === action.payload.entryId) {
                    entry.tasks.forEach((task)=>{
                        if(task.id === action.payload.taskId){
                            task.count -= 1;
                        }
                    })
                }
            })
        }
    }
})

export const { addEntry, addTask,incrementTask, decrementTask } = entriesSlice.actions
export default entriesSlice.reducer; 