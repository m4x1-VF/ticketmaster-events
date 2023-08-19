import { useEffect, useState } from "react";

const useEventData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?apikey=4ZJD0jQE7gVYDKI1e30LkdIWSRBYxfsB&countryCode=ES"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchEvents();
  }, []);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventData;
