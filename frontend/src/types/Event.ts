export interface IEventBase {
    event_path: string
    description?: string
    video_title?: string
    rtsp_link?: string
    rtsp_time?: string
    video_time?: string
}

export interface IEventUpdate extends IEventBase {

}

export interface IEvent extends IEventBase {
    id: string
    task_id: string
}

export interface IEventCreate extends IEvent {

}