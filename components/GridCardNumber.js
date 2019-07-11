import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CardNumber from "../components/CardNumber.js";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  }
});
const GridCardNumber = props => {
  const { classes } = props;
  return (
    <Grid container justify="center">
      <Grid
        spacing={24}
        alignItems="center"
        justify="center"
        container
        className={classes.grid}
      >
        {props.parcels.reduce((a, b) => (
          <React.Fragment>
            <Grid item xs={12} md={4}>
              <CardNumber headline={"Area"} value={a.area + b.area} />
              <CardNumber
                headline={"Revenues"}
                value={a.revenues + b.revenues}
              />
              <CardNumber
                headline={"Expenses"}
                value={a.expenses + b.expenses}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};
const mapStateToProps = props => {
  const { parcels } = props;
  return { parcels };
};
export default connect(mapStateToProps)(withStyles(styles)(GridCardNumber));
