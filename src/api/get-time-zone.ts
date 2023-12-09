const googleMapsApiKey = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

export const getTimeZone = async (lat: number, lon: number): Promise<string> => {
  try {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat}%2C${lon}&timestamp=${currentTimestamp}&key=${googleMapsApiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    return data.timeZoneId as string;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
