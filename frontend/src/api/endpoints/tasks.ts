import { GET } from "../calls/get"

export const get_tasks = (endpoints: { [id: string]: any }) => {
    return GET(endpoints["tasks"]())
}