import AddTask from "./addTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList"

const Entry = ({ tasks, id, date }) => {
    return (<>
        <div className="entry" key={id}>
            <AddTask entryId={id} />
            <h1>{date}</h1> <TaskActions entryId={id} />
            <TaskList tasks={tasks} entryId={id} />
        </div>
    </>
    )


}

export default Entry;