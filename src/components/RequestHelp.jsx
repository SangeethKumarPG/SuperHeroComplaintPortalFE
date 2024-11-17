import React from "react";
import { motion } from "framer-motion";
import { Autocomplete, Button, Checkbox, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Map from "./Map";
import CustomMap from "./CustomMap";
import { registerComplaint } from "../services/allAPI";
import Swal from "sweetalert2";


function RequestHelp() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [customLocation, setCustomLocation] = useState(false);
  const [customLocationData, setCustomLocationData] = useState({
    lat: null,
    lng: null,
  });

  const [requesterName, setRequesterName] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [dangerLevel, setDangerLevel] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);
  console.log("Initial Location: ", location);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(requesterName !== "" && complaintType !== "" && dangerLevel !== "" && description !== ""){

      const complainData = {
        requesterName: requesterName,
        complaintType: complaintType,
        dangerLevel: dangerLevel,
        description: description,
        location: {
          lat: customLocation ? parseFloat(customLocationData.lat) : parseFloat(location.latitude),
          lng: customLocation ? parseFloat(customLocationData.lng) : parseFloat(location.longitude),
        },
      };
      console.log("Form data: ", complainData);
      const response = await registerComplaint(complainData);
      if(response.status === 201){
        Swal.fire({
          title: 'Complaint Registered',
          text: 'Your complaint has been registered successfully. We will get back to you soon.',
          icon:'success'
        }).then(() => {
          setRequesterName("");
          setComplaintType("");
          setDangerLevel("");
          setDescription("");
          setCustomLocation(false);
        });
      }else{
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
          icon: 'error'
        });
      }
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Please fill all the required fields.',
        icon: 'error'
      });
    }
  }



  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        className="p-3"
      >
        <h1 className="text-center">Request Help</h1>
        <TextField
          className="mt-3"
          variant="outlined"
          value={requesterName}
          fullWidth
          label="Name of the Requester"
          onChange={(e) => setRequesterName(e.target.value)}
          required
        />
        <Autocomplete
          className="mt-3"
          freeSolo
          value={complaintType}
          inputValue={complaintType}
          options={[
            "Pet Missing",
            "Pet Rescue",
            "Rescue from Criminal Activity",
            "Find Missing Person",
            "Rescue from Disaster",
          ]}
          // getOptionLabel={(option) => option}
          onInputChange={(e, value) => setComplaintType(value)}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              label="Select Complaint Type"
              {...params}
            />
          )}
          required
        />

        <Autocomplete
          className="mt-3"
          freeSolo
          value={dangerLevel}
          inputValue={dangerLevel}
          options={[
            "Danger To Life",
            "Danger To Property",
            "Danger To Safety",
            "Danger To Animals",
            "Danger To Environment",
            "No Immediate Response Required",
            "Potential but not immediate threat",
          ]}
          onInputChange={(e, value) => setDangerLevel(value)}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              label="Select Danger Level"
              {...params}
            />
          )}
          required
        />
        <div className="mt-3">
          Custom Location
          <Checkbox
            checked={customLocation}
            onChange={() => setCustomLocation(!customLocation)}
          >
            Choose Custom Location?
          </Checkbox>
          {customLocation ? (
            <div>
              <p>Custom Location</p>
              <br />
              {/*<p>Latitude: {customLocationData.lat}</p>
              <p>Longitude: {customLocationData.lng}</p>*/}
              <CustomMap
                latitude={parseFloat(location.latitude)}
                longitude={parseFloat(location.longitude)}
                setCustomLocationData={setCustomLocationData}
              />
            </div>
          ) : (
            <div>
              <p>Current Location</p>
              <Map
                latitude={location.latitude}
                longitude={location.longitude}
              />
            </div>
          )}
        </div>
        <TextField
          className="mt-3"
          variant="outlined"
          value={description}
          fullWidth
          label="Issue Description"
          multiline
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" fullWidth className="mt-3" onClick={handleSubmit}>Submit</Button>

      </motion.div>
    </>
  );
}

export default RequestHelp;
