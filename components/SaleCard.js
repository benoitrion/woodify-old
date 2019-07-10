import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    width: 1200,
    "margin-top": "20px",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  card: {
    width: 300
  }
});

function SaleCard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid
          spacing={24}
          alignItems="center"
          justify="center"
          container
          className={classes.grid}
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {props.details.date}
              </Typography>
              <Typography
                color="primary"
                variant="display2"
                style={{ textAlign: "center" }}
              >
                {props.details.price} €
              </Typography>
              <Typography
                color="textSecondary"
                style={{ textAlign: "center" }}
                gutterBottom
              >
                {props.details.seller}
              </Typography>

              <Typography color="textSecondary" gutterBottom>
                {props.details.notary} - {props.details.notaryFees} €
              </Typography>
              <Typography variant="body1" component="p">
                {props.details.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

SaleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SaleCard);
