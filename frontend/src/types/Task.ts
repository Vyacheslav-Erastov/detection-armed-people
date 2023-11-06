import { IEvent } from "./Event";

export enum TaskType {
    VIDEO_DETECTION = "VIDEO_DETECTION",
    RTSP_DETECTION = "RTSP_DETECTION"
}

export enum TaskStatus {
    CREATED = "CREATED",
    PROCESSING = "PROCESSING",
    STOPPED = "STOPPED",
    ERROR = "ERROR",
    COMPLETED = "COMPLETED"
}

export interface ITaskBase {
    name: string
    type: string
    status: string
    video_titles?: string[]
    rtsp_links?: string[]
    start_time?: string
    end_time?: string
}

export interface ITaskUpdate extends ITaskBase {

}

export interface ITask extends ITaskBase {
    id: string
}

export interface ITaskCreate extends ITask {

}

export interface ITaskDetailed extends ITask {
    events?: IEvent[]
}