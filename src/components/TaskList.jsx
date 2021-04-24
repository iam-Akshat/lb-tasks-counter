import Task from "./Task"

const TaskList = ({tasks,entryId}) =>{
    const taskList = tasks.map(task =>{
        return <Task {...task} entryId ={entryId}/>
    })
    return (
            taskList
    )
}

export default TaskList;