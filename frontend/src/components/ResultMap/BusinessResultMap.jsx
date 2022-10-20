import { GoogleMap, Marker } from "@react-google-maps/api";

const BusinessResultMap = ({ center }) => {
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      mapTypeId={"aada71b9e77315ab"}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default BusinessResultMap;
