import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputLabel, MenuItem, Select, SelectChangeEvent, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Обязательное поле'),
    type: yup
        .string()
        .required('Обязательное поле'),
    video_files: yup
        .mixed(),
    rtsp_links: yup
        .string()

});

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


function TaskCreateDialog({ open, handleClose }: { open: boolean, handleClose: any }) {
    console.log("Okey")
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            video_files: '',
            rtsp_links: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });
    const [type, setType] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    return (
        <>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Форма создания задачи</DialogTitle>
                < DialogContent >
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Название задачи"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <InputLabel id="demo-simple-select-label">Тип задачи</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formik.values.type}
                            label="Тип задачи"
                            onChange={handleChange}
                        >
                            <MenuItem value={"RTSP_DETECTION"}>RTSP_DETECTION</MenuItem>
                            <MenuItem value={"VIDEO_DETECTION"}>VIDEO_DETECTION</MenuItem>
                        </Select>
                        <TextField
                            fullWidth
                            id="rtsp_links"
                            name="rtsp_links"
                            label="RTSP ссылки"
                            value={formik.values.rtsp_links}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.rtsp_links && Boolean(formik.errors.rtsp_links)}
                            helperText={formik.touched.rtsp_links && formik.errors.rtsp_links}
                        />
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                            Upload file
                            <VisuallyHiddenInput type="file" value={formik.values.video_files} multiple={true} />
                        </Button>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default TaskCreateDialog;