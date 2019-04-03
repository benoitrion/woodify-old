import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  box: {
    marginBottom: 40,
    height: 65
  }
});

function processValue(value) {
  if(typeof value === 'number') {
    return Number.parseFloat(Math.round(value * 100) / 100).toFixed(2);
  } 
  return value;
}

const CardNumber = (props) => {
  const { classes } = props;
  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.paper}>
        <div className={classes.box}>
          <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom variant="subheading">
            {props.headline}
          </Typography>
          <Typography style={{ textAlign: 'center' }} color='primary' gutterBottom variant="display2">
            { processValue(props.value) }
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
}
export default withStyles(styles)(CardNumber);