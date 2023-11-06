import Card from "@mui/material/Card";
import { ITaskDetailed } from "../types/Task";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface ITaskDetailedProps {
    task: ITaskDetailed
}

export function Task({ task }: ITaskDetailedProps) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Task Name: {task.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Task;