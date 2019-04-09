import Layout from '../components/Layout.js'
import getParcels from '../parcel-data'
import MapContainer from '../components/MapContainer.js'
import ParcelDetails from '../components/ParcelDetails'
import ParcelSellingDetails from '../components/ParcelSellingDetails'
import ParcelTasks from '../components/ParcelTasks'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
});

const Parcel = props => (
  <React.Fragment>
    <CssBaseline />
    <Layout >
      <MapContainer parcels={[props.parcel]} />
      <ParcelDetails parcel={props.parcel} />
      <ParcelSellingDetails parcel={props.parcel} />
      <ParcelTasks parcel={props.parcel} />
    </Layout>
  </React.Fragment>
)

Parcel.getInitialProps = async function (context) {
  const { id } = context.query

  const filteredParcels = getParcels().filter(p => p.id === id)

  if(filteredParcels.length !== 0) {
    return {parcel : filteredParcels[0]};
  }
  return {};
}

export default withStyles(styles)(Parcel);