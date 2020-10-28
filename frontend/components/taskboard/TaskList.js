import { Draggable, Droppable } from 'react-beautiful-dnd';
import React from 'react';
import styled from 'styled-components'

import TaskItem from './TaskItem';

const scrollContainerHeight = 750;

const Container = styled.div``;

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: 750px;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
`;

const ScrollContainer = styled.div`

  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${scrollContainerHeight}px;
`;

class InnerTaskList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks !== this.props.tasks) {
      return true;
    }
    return false;
  }

  render() {
    return this.props.tasks.map((task, index) => (
      <Draggable
        key={`${index}-${task.title}`}
        draggableId={`${index}-${task.title}`}
        index={index}
      >
        {(dragProvided, dragSnapshot) => (
          <TaskItem
            key={task.id}
            task={task}
            isDragging={dragSnapshot.isDragging}
            provided={dragProvided}
          />
        )}
      </Draggable>
    ));
  }
}

class InnerList extends React.Component {
  render() {
    const { tasks, dropProvided } = this.props;

    return (
      <Container>
        <DropZone ref={dropProvided.innerRef}>
          <InnerTaskList tasks={tasks} />
          {dropProvided.placeholder}
        </DropZone>
      </Container>
    );
  }
}

class TaskList extends React.Component {
  static defaultProps = {
    listId: 'LIST'
  };
  render() {
    const {
      ignoreContainerClipping,
      isDropDisabled,
      listId,
      tasks,
      title
    } = this.props;

    return (
      <Droppable
        droppableId={listId}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
      >
        {(dropProvided) => (
          <ScrollContainer>
            <InnerList tasks={tasks} title={title} dropProvided={dropProvided} />
          </ScrollContainer>
        )}
      </Droppable>
    );
  }
}

export default TaskList;