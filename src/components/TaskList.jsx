import Task from "./Task"

const TaskList = ({ tasks, entryId }) => {
    const taskList = tasks.map(task => {
        return <Task {...task} entryId={entryId} />
    })
    return (
        <div className="task_list">
            {taskList}
        </div>
    )
}

export default TaskList;