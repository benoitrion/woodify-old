import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Paper from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

const ListItem = (props) => {
  const { classes } = props;
  return (
    <Grid item key={props.parcel.id} xs={12} md={12}>
      <Paper className={classes.paper}>
        <Link as={`/parcel/${props.parcel.id}`} href={`/parcel?id=${props.parcel.id}`}>
          <a className={classes.link}>
            <Typography variant="subtitle1" color="primary">{props.parcel.title}</Typography>
          </a>
        </Link>
        <Typography variant="subtitle1" color="textSecondary">
          {props.parcel.date}
        </Typography>
      </Paper>
    </Grid>
  )
}
export default withStyles(styles)(ListItem);