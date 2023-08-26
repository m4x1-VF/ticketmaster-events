import wrapPromise from "./wrapPromise";

const fetchEventDetail = async (eventId) => {
  console.log(eventId);
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
        import.meta.env.VITE_TICKETMASTER_API_KEY
      }`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = (eventId) => {
  return {
    eventDetail: wrapPromise(fetchEventDetail(eventId)),
  };
};

export default fetchData;
