import { useEffect, useState } from "react";
import { ITaskDetailed } from "../types/Task";
import { get_tasks } from "../api/endpoints/tasks";
import { AxiosError } from "axios";

export function useTasks() {
    const [tasks, setTasks] = useState<ITaskDetailed[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function fetchTasks() {
        try {
            setError("")
            setLoading(true)
            const response = await get_tasks()
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

    return { tasks, error, loading }
}