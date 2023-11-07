import Task from "../components/ordinary/Task";
import { useTasks } from "../hooks/tasks";

function Tasks() {
    
    const {tasks, error, loading} = useTasks()

    return (
        <div>
            {tasks.map(task => <Task task={task} />)}
        </div>
    );
}

export default Tasks;