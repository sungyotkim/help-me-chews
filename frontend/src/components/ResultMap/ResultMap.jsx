import "./ResultMap.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import ResultMapMarker from "./ResultMapMarker";
import { useRef } from "react";
import { useContext, useState } from "react";
import { BusinessSearchContext } from "../../contexts/BusinessSearchContext";
import { useEffect } from "react";

const libraries = ["places"];

const ResultMap = () => {
  const { businessResults, currentBusinessResults, radius } = useContext(
    BusinessSearchContext
  );
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
  });
  const [center, setCenter] = useState({ lat: 40.7459, lng: -73.9911 });
  const [zoom, setZoom] = useState(15);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (businessResults.region) {
        center.lat = businessResults.region.center.latitude;
        center.lng = businessResults.region.center.longitude;
      }
      setCenter({});
      setCenter((oldCenter) => ({ ...oldCenter, ...center }));
    }
  }, [businessResults]);

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
      defaultMapTypeId={"aada71b9e77315ab"}
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
