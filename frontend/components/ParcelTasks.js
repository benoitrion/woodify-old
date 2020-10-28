import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
      width: 700,
      marginTop: 40,
      [theme.breakpoints.down('sm')]: {
          width: 'calc(100% - 20px)'
      }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

const ParcelTasks = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h3" color="primary">{'Tasks'}</Typography>
      <Grid container justify="center">
        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
          {props.parcel.tasks.map((task) => (
            <Grid item key={task.id} xs={12} md={12}>
              <Paper className={classes.paper}>
                <Typography variant="subtitle1" color="primary">{task.description}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {task.date}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default withStyles(styles)(ParcelTasks);