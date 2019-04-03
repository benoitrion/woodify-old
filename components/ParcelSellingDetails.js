import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
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

const ParcelSellingDetails = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="h3" color="primary">{'Selling details'}</Typography>
      <Grid container justify="center">
        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
          <Grid item xs={12} md={12}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" color="primary">{'Seller'}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.parcel.seller}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1" color="primary">{'Price'}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.parcel.price}
            </Typography>
          </Paper>
          </Grid>
          <Grid item xs={12} md={12}>

          <Paper className={classes.paper}>
            <Typography variant="subtitle1" color="primary">{'Notary fees'}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.parcel.notaryFees}
            </Typography>
          </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1" color="primary">{'Date'}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.parcel.date}
            </Typography>
          </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default withStyles(styles)(ParcelSellingDetails);