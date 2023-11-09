import { useEffect, useState } from "react";
import { ITaskDetailed } from "../types/Task";
import { get_tasks } from "../api/endpoints/tasks";
import { AxiosError } from "axios";
import { WebSocketEvent } from "../types/WebsocketEvents";
import { useApi } from "./api";

export function useTasks() {
    const [tasks, setTasks] = useState<ITaskDetailed[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { endpoints, websocket_path } = useApi()

    async function fetchTasks() {
        try {
            setError("")
            setLoading(true)
            const response = await get_tasks(endpoints)
            setTasks(response.data)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    const onChange = (event: WebSocketEvent, data: ITaskDetailed | any) => {
        switch (event) {
            case "TASK_CREATE":
                setTasks(prev => [...prev, data])
                break;
            case "TASK_UPDATE":
                setTasks(tasks => tasks.map(task =>
                    task.id == data.id
                        ? { ...task, ...data }
                        : task))
                break;
            case "TASK_DELETE":
                setTasks(tasks => tasks.filter(task =>
                    task.id != data.id))
                break;
            case "EVENT_CREATE":
                setTasks(tasks => tasks.map(task =>
                    task.id == data.task_id
                        ? { ...task, events: [...task.events, data] }
                        : task))
                break;
        }
    }

    return { tasks, error, loading, onChange }
}