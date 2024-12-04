import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
// import { modelName } from '../../../backend/models/User';

const CreateParkingLotComponent = () => {
    const [name, setName] = useState(''); // Initialize as empty string
    const [lat, setLat] = useState(""); // Initialize as empty string
    const [lon, setLon] = useState("");

    const handleSubmit = (e) => {
        console.log("sendingDatatoAPI-> " +  name+" "+ lat+" "+ lon);
        e.preventDefault();

        axios.post("http://localhost:3001/create-parking-lot", { name, lat, lon })
          .then(result => {
            console.log("response: " + result.data);
            navigate("/map");
          })
          .catch(err => {
          });
      };

    return (
      <div>

        <form onSubmit={handleSubmit}>
            <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Create a new parking lot location!</h1>


            <label style={{ color: 'black' }}>Name of parking lot</label>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>

            <label style={{ color: 'black' }}>Enter Latitude</label>
            <input type="text" placeholder="Enter lat" value={lat} onChange={(e) => setLat(e.target.value)}/>

            <label style={{ color: 'black' }}>Enter Longitude</label>
            <input type="text" placeholder="Enter lat" value={lon} onChange={(e) => setLon(e.target.value)}/>

            <button type="submit" style={{ color: 'black', fontWeight: 'bold' }}>Submit! Create new lot yay!</button>

        </form>

      </div>
    )
  }
  
  export default CreateParkingLotComponent;