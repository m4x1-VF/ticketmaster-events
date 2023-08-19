import useEventData from "../../hooks/useEventsData";
import Eventitem from "./components/Eventitem";
import { useNavigate } from "react-router-dom";

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventData();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm)
      );
    }

    if (isLoading) {
      return <p>Cargando...</p>;
    }

    if (error) {
      return <p>Ha ocurrido un error</p>;
    }
    return eventsFiltered.map((eventItem) => (
      <Eventitem
        key={`event-item-${eventItem.id}`}
        id={eventItem.id}
        name={eventItem.name}
        date={eventItem.dates.start.localDate}
        time={eventItem.dates.start.localTime}
        image={eventItem.images[0].url}
        onEventClick={handleClick}
      />
    ));
  };

  return <div>{renderEvents()}</div>;
};
export default Events;
