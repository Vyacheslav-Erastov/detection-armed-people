import axios from "axios"
import { InterfaceType } from "typescript"

const POST = (path: string, data: {}) => {
    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    }

    return axios.post(path, config)
}