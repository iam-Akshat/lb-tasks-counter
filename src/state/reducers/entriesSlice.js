import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    entries:[
        {
            id:12,
            date: new Date('2021','04','23').toDateString(),
            tasks:[
                {
                    id:2,
                    type:'exp',
                    duration:10.2,
                    count:2
                },
                {
                    id:21,
                    type:'sxs',
                    duration:2,
                    count:22
                }
            ]
        },
        {
            id:11,
            date: new Date('2021','02','23').toDateString(),
            tasks:[
                {
                    id:1,
                    type:'exp',
                    duration:5,
                    count:2
                },
                {
                    id:2,
                    type:'sxs',
                    duration:1,
                    count:6
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