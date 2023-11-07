import axios from "axios"
import { InterfaceType } from "typescript"

const DELETE = (path: string, itype: InterfaceType) => {
    let config = {
        method: "DELETE",
        headers: {
            "Accept": "application/json"
        }
    }

    return axios.delete<typeof itype>(path, config)
}