import React from 'react'
import { TileLayer, Map, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import ExtendedMarker from './ExtendedMarker';
// import ExtendedMarker from './ExtendedMarker';

const skater = new Icon({
  iconUrl: '../../../img/defaultMarker.png',
  iconSize: [20, 30]
});

class MapComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        lat: 27.690800,
        lng: 85.342982,
        zoom: 13,
      };
    }
  
    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://factsnepal.com/">Facts Nepal</a>'
            // url='https://api.mapbox.com/styles/v1/upendraoli/cjuvfcfns1q8r1focd0rdlgqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvbWF0dXBlbiIsImEiOiJja2E5bDFwb2swdHNyMnNvenZxa2Vpeml2In0.fCStqdwmFYFP-cUvb5vMCw'
            url='https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvbWF0dXBlbiIsImEiOiJja2E5bDFwb2swdHNyMnNvenZxa2Vpeml2In0.fCStqdwmFYFP-cUvb5vMCw'
          />
          <ExtendedMarker position={position} icon={skater}>
            <Popup>
              <span>FACTS Research and Analytics <br/> तथ्य अनुसन्धान र विश्लेषण</span>
            </Popup>
          </ExtendedMarker>
        </Map>
      );
    }
  }

 
export default MapComponent;
