import React from 'react';
import MapContainer from '../components/MapContainer.js'
import Layout from '../components/Layout.js'
import ParcelList from '../components/ParcelList.js'
import getParcels from '../parcel-data'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GridCardNumber from '../components/GridCardNumber.js'

const styles = ({
});

const Index = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout >
        <MapContainer parcels={props.parcels} />
        <GridCardNumber parcels={props.parcels} />
        <ParcelList parcels={props.parcels} />
      </Layout>
    </React.Fragment>
  )
}

Index.getInitialProps = async function () {
  return {
    parcels: await getParcels()
  }
}

export default withStyles(styles)(Index);