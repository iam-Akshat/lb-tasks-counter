import {v4} from "uuid"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../state/reducers/entriesSlice"
const AddTask = ({entryId}) => {
    const dispatch = useDispatch()
    const [taskType,setTaskType] = useState('EXP')
    const [time,setTime] = useState('');
    const [error,setError] = useState(null);

    const handleTaskSubmit = () =>{
        if(time.trim().length === 0){
            setError(true)
            return;
        }
        setError(false);
        dispatch(addTask({
            id:entryId,
            task:{
                id: v4(),
                type: taskType,
                duration: time,
                count:0
            }
        }))
    }
    return (
        <div className='add_form'>
            <div className='task_type_picker'>
                <label htmlFor="type">Task type:</label>
                <select name="type" onChange={(e)=>setTaskType(e.target.value)}>
                    <optgroup>
                        <option defaultChecked>EXP</option>
                        <option>SXS</option>
                    </optgroup>
                </select>
            </div>
            <div className='task_time_picker'>
                <label>Enter task time (in min) </label>
                <input type='text' value={time} onChange={(e)=> setTime(e.target.value)}/>
                {error && 'Write a valid number'}
            </div>
            <button onClick ={handleTaskSubmit}>Add task</button>
        </div>
    )
}

export default AddTask;