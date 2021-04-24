import AddTask from "./addTask";
import TaskList from "./TaskList"

const Entry = ({ tasks, id, date }) => {
    return (<>
        <div className="entry" key={id}>
            <AddTask entryId={id} />
            <h1>{date}</h1>
            <TaskList tasks={tasks} entryId={id} />
        </div>
    </>
    )


}

export default Entry;