import { Draggable } from 'react-beautiful-dnd';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 335px;
  margin-top: 15px;
  margin-right: 10px;
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  vertical-align: top;
`;

const Inner = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  white-space: normal;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 0.25rem;
`;

const Column = ({ title, tasks, index }) => (
    <Draggable draggableId={title} index={index}>
      {provided => (
        <Wrapper key={index}>
          <Inner>
            <Typography variant="headline" color="primary">
              {title}
            </Typography>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <TaskList listId={title} tasks={tasks} />
            </div>
          </Inner>
        </Wrapper>
      )}
    </Draggable>
);

Column.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.oneOf([
        'primary',
        'success',
        'error',
        'info',
        'normal',
        'warning'
      ])
    })
  ).isRequired
};

export default Column;