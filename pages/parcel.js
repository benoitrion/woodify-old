import Layout from "../components/Layout.js";
import getParcels from "../parcel-data";
import MapContainer from "../components/MapContainer.js";
import ParcelDetails from "../components/ParcelDetails";
import SaleCard from "../components/SaleCard";
import SaleCardFormDialog from "../components/SaleCardFormDialog";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Taskboard from "../components/Taskboard.js";

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
      <SaleCard details={props.parcel.saleDetails} />
      <SaleCardFormDialog />
      <Taskboard parcel={props.parcel} />
    </Layout>
  </React.Fragment>
);

Parcel.getInitialProps = async function(context) {
  const { id } = context.query;

  const filteredParcels = getParcels().filter(p => p.id === id);

  if (filteredParcels.length !== 0) {
    return { parcel: filteredParcels[0] };
  }
  return {};
};

export default withStyles(styles)(Parcel);
