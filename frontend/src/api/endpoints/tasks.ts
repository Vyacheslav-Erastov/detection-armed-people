import { DEFAULT_IP } from "../../utils/constants"
import { paths } from "../../utils/paths"
import { GET } from "../calls/get"

export const get_tasks = () => {
    console.log(paths(DEFAULT_IP)["tasks"]())
    return GET(paths(DEFAULT_IP)["tasks"]())
}