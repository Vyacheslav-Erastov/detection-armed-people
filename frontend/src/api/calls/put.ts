import axios from "axios"
import { InterfaceType } from "typescript"

const PUT = (path: string, data: {}) => {
    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    }

    return axios.put(path, config)
}