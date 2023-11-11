import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ITaskDetailed } from "../types/Task";
import { Chip, Grid } from '@mui/material';
import TaskItem from '../components/ordinary/Task';

interface ITasksDetailedProps {
    tasks: ITaskDetailed[]
    endpoints: {}
}



function Tasks({ tasks, endpoints }: ITasksDetailedProps) {
    return (
        <>
            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="justify">Название задачи</TableCell>
                            <TableCell align="justify">Статус задачи</TableCell>
                            <TableCell align="justify">Тип задачи</TableCell>
                            <TableCell align="justify">Дата создания</TableCell>
                            <TableCell align="justify">Дата завершения</TableCell>
                            <TableCell align="justify">Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow
                                key={task.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {task.name}
                                </TableCell>
                                <TableCell align="justify"><Chip label={task.status} color="primary" /></TableCell>
                                <TableCell align="justify"><Chip label={task.type} color="primary" /></TableCell>
                                <TableCell align="justify">{task.start_time}</TableCell>
                                <TableCell align="justify">{task.end_time}</TableCell>
                                <TableCell align="justify">Действия</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
            {/* () */}
            <Grid container spacing={2} sx={{ margin: "1%" }}>
                {tasks.map(task_obj =>
                    (<TaskItem task={task_obj} endpoints={endpoints} />)
                )}
            </Grid>
        </>
    );
}

export default Tasks;