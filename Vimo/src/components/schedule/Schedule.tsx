import {
    Card,
    ScheduleDay,
    ScheduleItem,
    ScheduleTime,
    Title,
} from './styles/ScheduleStyle';

function Schedule() {
    return (
        <Card>
            <Title>Horario</Title>
            <ScheduleItem>
                <ScheduleDay>Lunes</ScheduleDay>
                
                <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleDay>Martes</ScheduleDay>
                <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleDay>Miercoles</ScheduleDay>
                <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleDay>Jueves</ScheduleDay>
                <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleDay>Viernes</ScheduleDay>
                <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleDay>Sabado</ScheduleDay>
                <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleDay>Domingo</ScheduleDay>
                <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
            </ScheduleItem>

        </Card>
    );
}

export default Schedule;
