import React, { useEffect, useRef } from 'react'

function Map({latitude, longitude}) {
    console.log("Lattitude: ", latitude, " Longitude: ", longitude);
    const mapRef = useRef(null);
    useEffect(()=>{
        const map = new window.google.maps.Map(mapRef.current,{
            center:{lat:parseFloat(latitude),lng:parseFloat(longitude)},
            zoom:15
        })
        new window.google.maps.Marker({
            position:{lat:latitude,lng:longitude},
            map:map
        });
    }, [latitude, longitude])
  return (
    <div ref={mapRef} style={{width:'100%', height:'500px'}}/>
  )
}

export default Map