import AddTask from "./addTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList"
import { useState } from "react";
import CompactActions from "./CompactActions";

const Entry = ({ tasks, id, date, compact }) => {
    const [showFull,setShowFull ]= useState(!compact)
    const onEditOpen =()=>{
        setShowFull(!showFull)
    }
    return (<>
        <div className="entry" key={id}>
            <AddTask entryId={id} />
            <h1>{date}</h1> 
            {showFull ? <TaskActions entryId={id} /> : <CompactActions entryId={id}/>}
            {showFull && <TaskList tasks={tasks} entryId={id} />}
            <button onClick={onEditOpen} className="fullView_btn">{showFull ? 'Close' : 'Open'} Full View</button>
        </div>
    </>
    )


}

export default Entry;