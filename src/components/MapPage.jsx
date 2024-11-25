import React, {useState} from 'react'
import './MapPage.css'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const MapPage = () => {
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
          gestureHandling={"greedy"}
          disableDefaultUI>
        </Map>
      </APIProvider>
    <form onSubmit={MapPage}>
      <h1>Click on a parking lot to get started!</h1>
    </form>
</div>


);
}

export default MapPage