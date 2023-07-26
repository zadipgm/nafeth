import { SetStateAction, useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Wrapper } from "./style";

interface IProps {
  lat: number;
  long: number;
  width?: string;
  height?: string;
  zoom?: number;
  isLoading: boolean;
}

const SimpleGoogleMap = ({
  lat,
  long,
  width = "100%",
  height,
  isLoading = false,
}: IProps) => {
  const [center, setCenter] = useState({
    lat: lat,
    lng: long,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCoEVYGBZPtlTkNl7w11B6oz0G14R83FOg",
  });

  const containerStyle = {
    width,
    height,
  };

  const [map, setMap] = useState(15);

  useEffect(() => {
    setCenter({ lat: lat, lng: long });
  }, [map]);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setTimeout(() => {
      setMap(map);
    }, 500);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(15);
  }, []);

  return isLoaded ? (
    <Wrapper id="map_google">
      <GoogleMap
        options={{ zoomControl: false }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={map && 15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </Wrapper>
  ) : null;
};

export default SimpleGoogleMap;
