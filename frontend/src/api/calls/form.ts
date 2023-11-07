import axios from "axios"
import { InterfaceType } from "typescript"

const FORM = (path: string, data: {}) => {
    let config = {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data: data
    }

    return axios.post(path, config)
}