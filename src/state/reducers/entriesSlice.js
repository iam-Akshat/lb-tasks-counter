import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    entries:[
        {
            id:12,
            date: new Date('2021','04','23').toString(),
            tasks:[
                {
                    id:2,
                    type:'exp',
                    duration:10.2,
                    count:2
                }
            ]
        }
    ]
}

const entriesSlice = createSlice({
    name:'entries',
    initialState,
    reducers:{
        addEntry(state,action){
            console.log(action.payload);
            state.entries.push(action.payload)
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
        }
    }
})

export const { addEntry, addTask,incrementTask } = entriesSlice.actions
export default entriesSlice.reducer; 