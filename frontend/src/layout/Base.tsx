import { useApi } from "../hooks/api";
import { useTasks } from "../hooks/tasks";
import WebsocketProvider from "../providers/WebsocketProvider";
import NavBar from "./NavBar";
import Tasks from "./Tasks";

function Base() {
    const { tasks, error, loading, onChange } = useTasks()
    const { endpoints, websocket_path } = useApi()
    return (
        <div>
            <WebsocketProvider onChange={onChange} url={websocket_path} />
            <NavBar />
            <Tasks tasks={tasks} endpoints={endpoints} />
        </div>
    );
}

export default Base;