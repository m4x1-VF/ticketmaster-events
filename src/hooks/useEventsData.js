import { useState } from "react";

const useEventData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=4ZJD0jQE7gVYDKI1e30LkdIWSRBYxfsB&countryCode=ES${
          params?.length ? params : ""
        }`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return {
    events: data?._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventData;
