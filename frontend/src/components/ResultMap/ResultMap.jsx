import "./ResultMap.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import ResultMapMarker from "./ResultMapMarker";
import { useRef } from "react";
import { useContext, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import { useEffect } from "react";

const libraries = ["places"];

const ResultMap = ({ miniMap }) => {
  const { currentBusinessResults, radius } = useContext(BusinessSearchContext);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
  });
  const [center, setCenter] = useState({ lat: 40.7459, lng: -73.9911 });
  const [zoom, setZoom] = useState(10);

  const isInitialMount = useRef(true);

  useEffect(() => {
    let newCenter = {};
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (currentBusinessResults.length > 0) {
        newCenter.lat = currentBusinessResults[0].coordinates.latitude;
        newCenter.lng = currentBusinessResults[0].coordinates.longitude;
      }
      setCenter({});
      setCenter((oldCenter) => ({ ...oldCenter, ...newCenter }));
    }
  }, [currentBusinessResults]);

  useEffect(() => {
    if (radius === "16093") {
      setZoom(12);
    } else if (radius === "8046") {
      setZoom(13);
    } else if (radius === "3216") {
      setZoom(14);
    } else {
      setZoom(15);
    }
  }, [radius]);

  if (miniMap && isLoaded) {
    return (
      <GoogleMap
        center={miniMap}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          draggable: false,
          zoomControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
        }}
        mapTypeId={"aada71b9e77315ab"}
      >
        <Marker
          position={miniMap}
          icon={{
            url: require("../../assets/marker.png"),
            scaledSize: { width: 50, height: 50 },
          }}
        />
      </GoogleMap>
    );
  }

  return isLoaded ? (
    <GoogleMap
      center={center}
      zoom={zoom}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      mapTypeId={"aada71b9e77315ab"}
    >
      {currentBusinessResults.length > 0 && (
        <>
          {currentBusinessResults.map((result, i) => {
            let coords = {
              lat: result.coordinates.latitude,
              lng: result.coordinates.longitude,
            };
            return (
              <ResultMapMarker
                center={coords}
                result={result}
                index={i}
                key={i}
              />
            );
          })}
        </>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default ResultMap;
