import React from 'react';
import ReactMapGL from 'react-map-gl';

class MapContainer extends React.Component {
  state = {
    viewport: {
      width: '100vw',
      height: '70vh',
      latitude: 49.6773106,
      longitude: 5.4669888,
      zoom: 14
    }
  };

  getInitialProps = async (props) => {
    return props.parcels;
  }

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/benoitrion/cju1m3f8j16qa1flj4c96ns1b"
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    )
  }
}
export default MapContainer;