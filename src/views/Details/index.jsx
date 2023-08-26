// import { useState } from "react";
// import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import eventFetcher from "../../utils/fetchEvents";
const pathname = window.location.pathname;
const resource = eventFetcher(pathname.substring(8, pathname.length));

const Detail = () => {
  // const { eventId } = useParams();
  // const [eventData, setEventData] = useState({});
  const eventData = resource.eventDetail.read();
  console.log(eventData);

  return (
    <div>
      <div className="flex flex-col items-start">
        <img
          src={eventData.images?.[0].url}
          alt={eventData.name}
          className="w-[100%] h-[70vh] object-cover"
        />
        <h3 className="my-[12px] text-xl"> {eventData.name}</h3>
        {eventData.dates?.start.dateTime ? (
          <p>
            {format(
              new Date(eventData.dates?.start.dateTime),
              "d LLLL yyyy H:mm",
              { locale: es }
            )}
            hrs
          </p>
        ) : null}
      </div>
      <div>
        <p>
          Rango de precios: {eventData.priceRanges?.[0].min}-
          {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData.url}>Comprar entradas</a>
    </div>
  );
};
export default Detail;
