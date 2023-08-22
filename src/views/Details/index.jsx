import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
            import.meta.env.VITE_TICKETMASTER_API_KEY
          }`
        );
        const data = await response.json();
        console.log(data);
        setEventData(data);
        setIsLoading(false);
      } catch (error) {
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };
    fetchEventData();
  }, []);

  if (isLoading && Object.keys(eventData).length === 0) {
    return <div>Cargando evento...</div>;
  }

  if (Object.keys(error) > 0) {
    return <div>Error al cargar evento</div>;
  }

  console.log(eventData);
  console.log(import.meta.env.VITE_TICKETMASTER_API_KEY);

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
