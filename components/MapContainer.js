import React from "react";
import ReactMapGL from "react-map-gl";
import Router from "next/router";

import { defaultMapStyle, dataLayer } from "./map-style.js";
import { fromJS } from "immutable";
import { connect } from "react-redux";

const MAPBOX_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

class MapContainer extends React.Component {
  state = {
    mapStyle: defaultMapStyle,
    data: null,
    hoveredParcel: null,
    viewport: {
      width: "100vw",
      height: "60vh",
      latitude: 49.6773106,
      longitude: 5.4669888,
      zoom: 13
    }
  };

  componentDidMount() {
    // setTimeout(() => {
    //   const geoJson = this._buildGeoJson(this.props.parcels);
    //   this._loadData(geoJson);
    // }, 200);
  }

  _loadData = data => {
    const mapStyle = defaultMapStyle
      .setIn(["sources", "parcels"], fromJS({ type: "geojson", data }))
      .set("layers", defaultMapStyle.get("layers").push(dataLayer));

    this.setState({ data, mapStyle });
  };

  _buildGeoJson = parcels => {
    let geoJSON = { type: "FeatureCollection" };
    let features = [];
    parcels.forEach(p => features.push(p.geojson));
    geoJSON["features"] = features;
    return geoJSON;
  };

  _onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;

    const hoveredParcel = features && features.find(f => f.layer.id === "data");

    this.setState({ hoveredParcel, x: offsetX, y: offsetY });
  };

  _onClick = event => {
    const { features } = event;

    const hoveredParcel = features && features.find(f => f.layer.id === "data");

    if (hoveredParcel && hoveredParcel.properties.id) {
      Router.push(
        `/parcel?id=${hoveredParcel.properties.id}`,
        `/parcel/${hoveredParcel.properties.id}`
      );
    }
  };

  _renderTooltip() {
    const { hoveredParcel, x, y } = this.state;

    return (
      hoveredParcel && (
        <div>
          <div className="tooltip" style={{ left: x, top: y }}>
            <div>Parcel: {hoveredParcel.properties.title}</div>
            <div>Castral number: {hoveredParcel.properties.cadastralNb}</div>
            <div>Type: {hoveredParcel.properties.type}</div>
          </div>
          <style jsx>{`
            .tooltip {
              position: absolute;
              margin: 48px;
              padding: 4px;
              background: rgba(0, 0, 0, 0.8);
              color: #fff;
              max-width: 300px;
              font-size: 13px;
              z-index: 9;
              pointer-events: none;
              font-family: Helvetica, Arial, sans-serif;
            }
          `}</style>
        </div>
      )
    );
  }

  render() {
    const { viewport, mapStyle } = this.state;

    setTimeout(() => {
      const geoJson = this._buildGeoJson(this.props.parcels);
      this._loadData(geoJson);
    }, 200);

    return (
      <div>
        <ReactMapGL
          mapStyle={mapStyle}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
          {...viewport}
          onHover={this._onHover}
          onClick={this._onClick}
        >
          {this._renderTooltip()}
        </ReactMapGL>
      </div>
    );
  }
}
const mapStateToProps = props => {
  const { parcels } = props;
  return { parcels };
};
export default connect(mapStateToProps)(MapContainer);
