import axios from "axios"

export const GET = (path: string) => {
    console.log(path)
    let config = {
        headers: {
            "Accept": "application/json"
        }
    }
    console.log(path)
    return axios.get(path, config)
}