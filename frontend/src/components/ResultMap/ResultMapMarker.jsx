import { useState } from "react";
import { Marker } from "@react-google-maps/api";

const ResultMapMarker = ({ center, result, index }) => {
  const [fillColor, setFillColor] = useState("#f40707");
  const [reverseFillColor, setReverseFillColor] = useState("white");
  const markerLabels = "12345";

  const handleMouseOver = () => {
    setFillColor("white");
    setReverseFillColor("#f40707");
  };

  const handleMouseOut = () => {
    setFillColor("#f40707");
    setReverseFillColor("white");
  };

  return (
    <Marker
      position={center}
      label={{
        text: markerLabels[index],
        fontWeight: "bold",
        color: `${reverseFillColor}`,
        fontFamily: "Arial",
        fontSize: "large",
      }}
      icon={{
        path: `M 1 3.3 L 0.85 3 A 1 1 0 0 1 0 2 A 1 1 0 0 1 1 1 L 1 1 A 1 1 0 0 1 2 2 A 1 1 0 0 1 1.15 3 z`,
        fillOpacity: 1,
        fillColor: `${fillColor}`,
        strokeColor: `${reverseFillColor}`,
        strokeWeight: 2,
        scale: 15,
        labelOrigin: new window.google.maps.Point(1, 2),
        anchor: new window.google.maps.Point(1, 1),
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ResultMapMarker;
