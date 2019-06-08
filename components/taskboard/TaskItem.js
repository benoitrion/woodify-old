import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const Container = styled.div`
    width: 320px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    min-height: 40px;

    /* flexbox */
    display: flex;
`;

const TaskItem = ({ task, provided }) => (
    <Container
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
    >
        <Card>
            <CardContent>
                <Typography variant="subtitle1" color="primary">
                    {task.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {task.description}
                </Typography>
            </CardContent>
        </Card>
    </Container>
);
export default TaskItem;