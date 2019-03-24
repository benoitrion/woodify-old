import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import CardNumber from './CardNumber.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
});
const ParcelDetails = (props) => {
  const { classes } = props;
  return (
    <Grid container justify="center">
      <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
          <React.Fragment>
            <CardNumber headline={'Area'} value={props.parcel.area}></CardNumber>
            <CardNumber headline={'Type'} value={props.parcel.type}></CardNumber>
            <CardNumber headline={'Revenues'} value={props.parcel.revenues}></CardNumber>
            <CardNumber headline={'Expenses'} value={props.parcel.expenses}></CardNumber>
          </React.Fragment>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(ParcelDetails);