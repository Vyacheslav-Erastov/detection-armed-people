import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IEvent } from '../../types/Event';

interface IEventProps {
    event: IEvent
    endpoints: { [id: string]: any }
}

function EventItem({ event, endpoints }: IEventProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={`${endpoints["event"](event.task_id, event.event_path)}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {/* {`Event `} */}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default EventItem;