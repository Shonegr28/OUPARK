import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import CreateParkingLotComponent from '../components/CreateParkingLotComponent'


const CreateParkingLot = () => {
    return (
      <div>
        <CreateParkingLotComponent/>
      </div>
    )
  }
  
  export default CreateParkingLot;