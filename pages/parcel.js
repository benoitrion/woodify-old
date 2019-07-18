import Layout from "../components/Layout.js";
import MapContainer from "../components/MapContainer.js";
import ParcelDetails from "../components/ParcelDetails";
import SellerCard from "../components/SaleCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Taskboard from "../components/Taskboard.js";
import { connect } from "react-redux";
import { getParcelFromStore } from "../src/store.js";

const styles = {
  "justify-content": "center",
  display: "flex"
};

const Parcel = props => (
  <React.Fragment>
    <CssBaseline />
    <Layout>
      <MapContainer parcels={[props.parcel]} />
      <ParcelDetails parcel={props.parcel} />
      <SellerCard details={props.parcel.saleDetails} />
      <Taskboard parcel={props.parcel} />
    </Layout>
  </React.Fragment>
);

Parcel.getInitialProps = function({ reduxStore, query }) {
  const { id } = query;

  // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  reduxStore.dispatch(getParcelFromStore(id));

  return {};
};

const mapStateToProps = props => {
  console.log(props);
  const { parcel } = props;
  return { parcel };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Parcel));
