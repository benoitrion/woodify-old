import {fromJS} from 'immutable';

import MAP_STYLE from './map-style-basic-v9.json';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/

export const dataLayer = fromJS({
    id: 'data',
    source: 'parcels',
    type: 'fill',
    interactive: true,
    "paint": {
        "fill-color": "#ed293e",
        "fill-opacity": 0.3
    },
  });

export const defaultMapStyle = fromJS(MAP_STYLE);