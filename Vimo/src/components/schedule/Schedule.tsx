import {
    Card,
    ScheduleDay,
    ScheduleItem,
    ScheduleText,
    ScheduleTime,
    Title,
} from './styles/ScheduleStyle';

function Schedule() {
    return (
        <Card>
            <Title>Horario</Title>
            <ScheduleItem>
                <ScheduleText>
                    <ScheduleDay>Lunes</ScheduleDay>
                    <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
                </ScheduleText>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleText>
                    <ScheduleDay>Lunes</ScheduleDay>
                    <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
                </ScheduleText>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleText>
                    <ScheduleDay>Lunes</ScheduleDay>
                    <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
                </ScheduleText>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleText>
                    <ScheduleDay>Lunes</ScheduleDay>
                    <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
                </ScheduleText>
            </ScheduleItem>
            <ScheduleItem>
                <ScheduleText>
                    <ScheduleDay>Lunes</ScheduleDay>
                    <ScheduleTime>11:00pm - 12:00pm</ScheduleTime>
                </ScheduleText>
            </ScheduleItem>
        </Card>
    );
}

export default Schedule;
