import { Map } from "components/google-map-with-markers-start";

export const GoogleMaps = () => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  if (googleMapsApiKey === undefined) {
    return <div>Error</div>;
  }
  return <Map googleMapsApiKey={googleMapsApiKey} />;
};
