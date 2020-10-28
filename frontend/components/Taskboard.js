import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import reorder, { reorderQuoteMap } from './taskboard/reorder';

import Column from './taskboard/Column';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: 1200,
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
});

function Taskboard(props) {
  const { classes } = props;

  const [columns, setColumn] = useState(props.parcel.tasks);
  const [ordered, setOrder] = useState(Object.keys(columns));

  const onDragEnd = result => {
    if (!result.destination) return;

    const source = result.source;
    const destination = result.destination;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (result.type === 'COLUMN') {
      const ordered = reorder(ordered, source.index, destination.index);

      setOrder(ordered);

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination
    });

    setColumn(data.quoteMap);
  };

  return (
    <Grid container justify="center">
      <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="taskboard" type="COLUMN">
              {provided => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {ordered.map((key, index) => (
                    <Column
                      key={key}
                      index={index}
                      title={key}
                      tasks={columns[key]}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Taskboard);