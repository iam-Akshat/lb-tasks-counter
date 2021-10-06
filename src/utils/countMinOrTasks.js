const countMinOrTasks = (taskType, numOrMin, tasks) => {
    const isMin = "min" === numOrMin
    const expTasks = tasks.filter(task => task.type === taskType);
    const result = expTasks.reduce((count, curTask) => {
        if (isMin) {
            count += curTask.count * +curTask.duration
            return count;
        }
        count += curTask.count;
        return count;
    }, 0);
    return result;
}

export {countMinOrTasks}