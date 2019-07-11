import React from "react";
import MapContainer from "../components/MapContainer.js";
import Layout from "../components/Layout.js";
import ParcelList from "../components/ParcelList.js";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import GridCardNumber from "../components/GridCardNumber.js";
import { connect } from "react-redux";
import { getParcelsFromStore } from "../src/store.js";
const styles = {};

const Index = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <MapContainer />
        <GridCardNumber />
        <ParcelList />
      </Layout>
    </React.Fragment>
  );
};

Index.getInitialProps = function({ reduxStore }) {
  // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  reduxStore.dispatch(getParcelsFromStore());

  return {};
};

const mapDispatchToProps = { getParcelsFromStore };
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Index));
