import React from "react";
import { motion } from "framer-motion";
import { Autocomplete, Button, Checkbox, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Map from "./Map";
import CustomMap from "./CustomMap";

function RequestHelp() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [customLocation, setCustomLocation] = useState(false);
  const [customLocationData, setCustomLocationData] = useState({
    lat: null,
    lng: null,
  });

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
  console.log(location);
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        className="p-3"
      >
        <h1 className="text-center">Request Help</h1>
        <Autocomplete
          freeSolo
          options={[
            "Pet Missing",
            "Pet Rescue",
            "Rescue from Criminal Activity",
            "Find Missing Person",
            "Rescue from Disaster",
          ]}
          // getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              label="Select Complaint Type"
              {...params}
            />
          )}
        />
        <Autocomplete
          className="mt-3"
          options={[
            "Danger To Life",
            "Danger To Property",
            "Danger To Safety",
            "Danger To Animals",
            "Danger To Environment",
            "No Immediate Response Required",
            "Potential but not immediate threat",
          ]}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              label="Select Danger Level"
              {...params}
            />
          )}
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
              <p>Latitude: {customLocationData.lat}</p>
              <p>Longitude: {customLocationData.lng}</p>
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
          fullWidth
          label="Issue Description"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" fullWidth className="mt-3">Submit</Button>

      </motion.div>
    </>
  );
}

export default RequestHelp;
