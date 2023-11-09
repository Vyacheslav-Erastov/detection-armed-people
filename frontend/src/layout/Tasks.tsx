import Task from "../components/ordinary/Task";
import { useApi } from "../hooks/api";
import { useTasks } from "../hooks/tasks";
import WebsocketProvider from "../providers/WebsocketProvider";

function Tasks() {

    const { tasks, error, loading, onChange } = useTasks()
    const { endpoints, websocket_path } = useApi()
    return (
        <div>
            <WebsocketProvider onChange={onChange} url={websocket_path} />
            {tasks.map(task => <Task task={task} />)}
        </div>
    );
}

export default Tasks;