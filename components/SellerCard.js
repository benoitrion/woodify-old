import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: 700,
    marginTop: 20,
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

function Headline(props) {
  return (
    <React.Fragment>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs={6}>
          <Typography gutterBottom variant="headline" color="primary">
            {props.value}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )

}

function Row(props) {
  return (
    <React.Fragment>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="primary">{props.title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="textSecondary">
            {props.value}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

function SellerCard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
          <Grid item xs={12} md={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={16}>
                <Headline value={'Selling Details'}></Headline>
                <Row title='Seller' value={props.parcel.seller}></Row>
                <Row title='Price' value={props.parcel.price}></Row>
                <Row title='Notary Fees' value={props.parcel.notaryFees}></Row>
                <Row title='Date' value={props.parcel.date}></Row>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}

SellerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SellerCard);