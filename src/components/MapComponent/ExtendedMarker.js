import React from 'react'
import { Marker } from 'react-leaflet';

const ExtendedMarker = props => {

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return <Marker ref={initMarker} {...props}/>
}

export default ExtendedMarker
