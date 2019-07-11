import Grid from "@material-ui/core/Grid";
import ListItem from "../components/ListItem.js";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = theme => ({
  grid: {
    width: 700,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  }
});

const ParcelList = props => {
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
        {props.parcels.map(parcel => (
          <Grid item key={parcel.id} xs={12} md={12}>
            <ListItem parcel={parcel} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = props => {
  const { parcels } = props;
  return { parcels };
};
export default connect(mapStateToProps)(withStyles(styles)(ParcelList));
