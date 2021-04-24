import TaskList from "./TaskList"

const Entry = ({tasks,id,date}) =>{
    return(
        <div className="entry" key={id}>
        <h1>{date}</h1>
            <TaskList tasks={tasks} entryId={id}/>
        </div>
    )


}

export default Entry;