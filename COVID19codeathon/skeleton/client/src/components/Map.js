import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Legend from "./Legend";
import CalloutCard from "./CalloutCard"

function Map(props) {
  const [selectedPark, setSelectedPark, center] = useState(null);
  
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
		
      window.removeEventListener("keydown", listener);
    };
  }, []);
  const getLocation = () => {
    let x = document.getElementById("demo")
    console.log('this is:', this);
  
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  const showPosition = (position) => {
    let x = document.getElementById("demo")
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    return position
  }

  return (
    <div>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 38.5052, lng: -122.4704 }}
    >
	{props.people.map(loc => (
		<Marker
		key={JSON.parse(loc["text"])["properties"]["ID"]}
		position={{
			lat:JSON.parse(loc["text"])["geometry"]["coordinates"][1],
			lng:JSON.parse(loc["text"])["geometry"]["coordinates"][0]
		}}
          onClick={() => {
			setSelectedPark(JSON.parse(loc["text"]));
          }}

            icon={{
              url: "/green.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}

	{props.type.map(loc => (
		<Marker
		key={JSON.parse(loc["text"])["properties"]["ID"]}
		position={{
			lat:JSON.parse(loc["text"])["geometry"]["coordinates"][1],
			lng:JSON.parse(loc["text"])["geometry"]["coordinates"][0]
		}}
	onClick={() => {
		setSelectedPark(JSON.parse(loc["text"]));
          }}
            icon={{
              url: "/blue.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}
	


      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
					<CalloutCard showLogo={false} name="Alta Bates" email="contact@abates.com" phone="(510) 655-4000" urgentNeeds="toilet paper"/>
        </InfoWindow>
      )}
    </GoogleMap>

    {!props.showLegend && <div style={{width:"50vw", height:"100vh", position:"absolute",top:55,right:0}}>
					<CalloutCard name="Alta Bates" email="contact@abates.com" phone="(510) 655-4000" urgentNeeds="toilet paper" showLogo={true}/>
					</div>}
    {props.showLegend &&<div style={{width:"100vw", height:"20vh", position:"absolute",bottom:95,right:0}}><Legend/></div>}
    </div>
  );
}

export default Map;

