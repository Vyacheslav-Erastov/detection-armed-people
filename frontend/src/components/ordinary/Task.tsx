import Stack from "@mui/material/Stack";
import { ITaskDetailed } from "../../types/Task";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

interface ITaskDetailedProps {
    task: ITaskDetailed
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


export function Task({ task }: ITaskDetailedProps) {
    return (
        <Box sx={{ p: 2, border: '1px solid black', width: "20%", margin: "1%", borderRadius: 1 }}>
            <CustomStack key_="Название задачи" value={task.name} />
            <CustomStack key_="Тип задачи" value={task.type} />
            <CustomStack key_="Статус задачи" value={task.status} />
        </Box>
    );
}

export default Task;