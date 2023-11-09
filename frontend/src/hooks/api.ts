import { DEFAULT_IP } from "../utils/constants"
import { paths } from "../utils/paths"

export const useApi = () => {
    const [address, setAddr] = useState(DEFAULT_IP)

    const api = address + "/api/v1"
    const endpoints = paths(`http://${api}`)
    const websocket_path = `ws://${api}/ws`
    return {
        endpoints,
        websocket_path
    }
}