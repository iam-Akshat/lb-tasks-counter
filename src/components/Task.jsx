import { useDispatch } from "react-redux";
import { incrementTask , decrementTask} from "../state/reducers/entriesSlice";
const buttonStyles = {
    height:'2rem',
    width:'2rem'
}
const taskStyle={
display:'flex',
width:'100%',
maxWidth:'400px',
justifyContent:'space-around'
}
const Task = ({ id, type, duration, count, entryId }) => {
    const dispatch = useDispatch()
    const handleIncrementClick = () =>{
        dispatch(incrementTask({
            taskId: id,
            entryId
        }))
    }
    const handleDecrementClick = () =>{
        dispatch(decrementTask({
            taskId: id,
            entryId
        }))
    }

    return (
        <div className="task" key={id} style={taskStyle}>
            <button style={buttonStyles} onClick={handleDecrementClick}>-</button>
            <div>
            <p>Task type:{type}</p>
            <p>{duration} min</p>
            <p>Task count:{count}</p>
            </div>
            
            
            <button onClick={handleIncrementClick} style={buttonStyles}>+</button>
        </div>
    )
}
export default Task;