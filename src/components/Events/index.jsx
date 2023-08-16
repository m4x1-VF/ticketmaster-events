import { useState } from "react";
import Eventitem from "./components/Eventitem";
import eventsJSON from "../../data/events.json";

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON);
  const events = data._embedded.events;
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

  return (
    <div>
      <h1>Eventos</h1>
      {renderEvents()}
    </div>
  );
};
export default Events;
