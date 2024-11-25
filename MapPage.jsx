import React, {useState} from 'react'
import './MapPage.css'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const MapPage = () => {
  // 5 advanced markers for each of the 5 parking lots
  const markers = [
    { lat: 35.207152, lng: -97.439607, title: 'Duck Pond Parking Lot' },
    { lat: 35.20140, lng: -97.44194, title: 'Jenkins Parking Garage' },
    { lat: 35.20535, lng: -97.44414, title: 'Asp Parking Garage' },
    { lat: 35.20962, lng: -97.44847, title: 'Elm Parking Garage' },
    { lat: 35.197417, lng: -97.442142, title: 'Timberdell Parking Garage' },
  ];

return (
<div className='container'>
    <APIProvider apiKey="AIzaSyCcZqLYksoUy07wWgk7-Eg4UC2ICuDbsz8">
        <Map center={{ lat: 35.205894, lng: -97.445717 }} zoom={15} style={{
            width: '600px', 
            height: '600px', 
            border: '10px solid white',
            backgroundColor: 'white',
            borderRadius: '20px',
          }}
          disableDefaultUI>
          {markers.map((marker, index) => (
            <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
          ))}
        </Map>
      </APIProvider>
    <form onSubmit={MapPage}>
      <h1>Click on a parking lot to get started!</h1>
    </form>
</div>


);
}

export default MapPage