export const paths = (path: string) => {
    return {
        tasks: () => `${path}/tasks`,
        task: (task_id: string) => `${path}/tasks/${task_id}`,
        events: () => `${path}/events`,
        event: (event_id: string) => `${path}/events/${event_id}`,
        event_file: (task_id: string, file_name: string) => `${path}/events/file?task_id=${task_id}&&file_name=${file_name}`,
    };
}