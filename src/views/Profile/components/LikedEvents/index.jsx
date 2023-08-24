import { useState } from "react";
import { useEffect } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
import EventItem from "../../../../components/Events/components/Eventitem";
import { useNavigate } from "react-router-dom";

const LikedEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEventsDetails = async () => {
      try {
        setIsLoading(true);
        const likedEvents =
          JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        const results = [];
        for (const eventId of likedEvents) {
          const response = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
              import.meta.env.VITE_TICKETMASTER_API_KEY
            }`
          );
          const data = await response.json();
          results.push(data);

          setEvents(results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventsDetails();
  }, []);

  if (Object.keys(error).length > 0) {
    return <div>Error al cargar eventos</div>;
  }
  if (isLoading) {
    return <div>Cargando eventos...</div>;
  }

  const handleClick = (eventId) => {
    navigate(`/detail/${eventId}`);
  };
  console.log(events);
  return (
    <div className="flex flex-col justify-center items-center">
      {events.map((event, index) => (
        <EventItem
          key={`liked-event-item-${event.id}-${index}`}
          name={event.name}
          date={event.dates.start.localDate}
          time={event.dates.start.localTime}
          image={event.images[0].url}
          id={event.id}
          onEventClick={handleClick}
        />
      ))}
    </div>
  );
};
export default LikedEvents;
