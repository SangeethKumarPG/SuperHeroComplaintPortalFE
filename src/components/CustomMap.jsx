import React, { useEffect, useRef, useState } from 'react'

function CustomMap({latitude, longitude, setCustomLocationData}) {
    const mapRef = useRef(null);
    const [markerPosition, setMarkerPosition] = useState({lat: latitude, lng: longitude});
    useEffect(()=>{
        const map = new window.google.maps.Map(mapRef.current, {center:markerPosition, zoom:8});
        const marker = new window.google.maps.Marker({position:markerPosition, map:map, draggable:true});

        marker.addListener('dragend', ()=> {
            const newPosition = marker.getPosition();
            setMarkerPosition({lat: newPosition.lat(), lng: newPosition.lng()});
            setCustomLocationData(markerPosition);
        });

    },[markerPosition])
  return (
    <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
  )
}

export default CustomMap