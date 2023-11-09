import { Button, Container, IconButton, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import TaskCreateDialog from "../components/dialogs/TaskCreateDialog";
import { useState } from "react";

export function NavBar() {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            < Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            DETECTION-ARMED-PEOPLE
                        </Typography>
                        <Button color="inherit" onClick={() => setOpen(true)}>Создать задачу</Button>
                    </Toolbar>
                </AppBar>
            </Box >
            {open &&
                <TaskCreateDialog open={open} handleClose={handleClose} />
            }
        </>
    );
}

export default NavBar;