import Stack from "@mui/material/Stack";
import { ITaskDetailed } from "../../types/Task";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActions, CardContent, Grid } from "@mui/material";
import EventItem from "./Event";
import { useState } from "react";

interface ITaskDetailedProps {
    task: ITaskDetailed
    endpoints: { [id: string]: any }
}

function CustomStack(props: { key_: string, value: string }) {
    return (
        <Stack direction="row" spacing={1} sx={{ margin: "1%" }}>
            <Typography variant="h6" gutterBottom>
                {props.key_}:
            </Typography>
            <Chip label={props.value} color="primary" />
        </Stack>
    )
}


export function TaskItem({ task, endpoints }: ITaskDetailedProps) {
    const [showEvents, setShowEvents] = useState<boolean>(false)


    const handleEvents = () => {
        setShowEvents(prev => !prev)
    }


    return (
        <>
            <Grid xs={6} md={4} sx={{ marginBottom: "0.5%" }}>
                <Card>
                    <CardContent>
                        <CustomStack key_="Название задачи" value={task.name} />
                        <CustomStack key_="Тип задачи" value={task.type} />
                        <CustomStack key_="Статус задачи" value={task.status} />
                        <CustomStack key_="Дата запуска" value={task.start_time ? task.start_time : "Н/Д"} />
                        <CustomStack key_="Дата завершения" value={task.end_time ? task.end_time : "Н/Д"} />
                    </CardContent>
                    <CardActions>

                        {task.events ? <Button sx={{ margin: "1%" }} size="small" onClick={() => handleEvents()}>
                            {showEvents ? "Скрыть события" : "Показать события"}
                        </Button>
                            : <Chip label={"События отстутствуют"} color="warning" />}
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={6} md={8}>
                {showEvents &&
                    <div>
                        {task.events.map(event_obj =>
                            (<EventItem event={event_obj} endpoints={endpoints} />)
                        )}
                    </div>}
            </Grid>
        </>
    );
}

export default TaskItem;