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
import { Divider, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, styled } from '@mui/material';
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
    const [type, setType] = useState('VIDEO_DETECTION');
    const formik = useFormik({
        initialValues: {
            name: '',
            type: { type },
            video_files: '',
            rtsp_links: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string)
    };
    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Форма создания задачи</DialogTitle>
                < DialogContent >
                    <TextField
                        fullWidth
                        margin='dense'
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
                        margin='dense'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Тип задачи"
                        onChange={handleChange}
                    >
                        <MenuItem value={"RTSP_DETECTION"}>RTSP_DETECTION</MenuItem>
                        <MenuItem value={"VIDEO_DETECTION"} selected={true}>VIDEO_DETECTION</MenuItem>
                    </Select>
                    {type == "RTSP_DETECTION" &&
                        <TextField
                            fullWidth
                            margin='dense'
                            id="rtsp_links"
                            name="rtsp_links"
                            label="RTSP ссылки"
                            value={formik.values.rtsp_links}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.rtsp_links && Boolean(formik.errors.rtsp_links)}
                            helperText={formik.touched.rtsp_links && formik.errors.rtsp_links}
                        />}
                    {type == "VIDEO_DETECTION" &&
                        <div>
                            <Button sx={{ margin: "1% 0" }} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                Загрузить файл
                                <VisuallyHiddenInput type="file" value={formik.values.video_files} multiple={true} />
                            </Button>
                        </div>}
                    <Button color="primary" variant="contained" fullWidth type="submit" onClick={() => formik.handleSubmit()}>
                        Создать задачу
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default TaskCreateDialog;