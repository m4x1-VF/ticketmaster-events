import useEventData from "../../hooks/useEventsData";
import Eventitem from "./components/Eventitem";

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventData();

  const handleClick = (id) => {
    console.log("Evento clickeado", id);
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
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleClick}
      />
    ));
  };

  return <div>{renderEvents()}</div>;
};
export default Events;
