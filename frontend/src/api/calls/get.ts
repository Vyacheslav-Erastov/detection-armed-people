import axios from "axios"

export const GET = (path: string) => {
    let config = {
        headers: {
            "Accept": "application/json"
        }
    }
    return axios.get(path, config)
}