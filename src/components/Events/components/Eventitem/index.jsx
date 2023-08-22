import HearthFilled from "../../../../assets/hearth-filled.png";
import HearthUnfilled from "../../../../assets/hearth-unfilled.png";
import useLikeEvents from "../../../../hooks/useLikeEvents";

const EventItem = ({ id, date, time, image, name, onEventClick }) => {
  const { isEventLiked, toggleEventLike } = useLikeEvents(id);

  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onEventClick(id);
  };

  const handleHearthClick = () => {
    toggleEventLike();
  };

  return (
    <div className="flex my-[24px] items-start]">
      <figure className="ml-[14px] relative">
        <img
          src={isEventLiked ? HearthFilled : HearthUnfilled}
          alt="Hearth button"
          className="absolute w-6 top-[10px] left-[10px] z-10 cursor-pointer"
          onClick={handleHearthClick}
        />
        <img src={image} alt={name} width={200} height={200} />
      </figure>
      <section className="flex flex-col items-start ml-[14px]">
        <h4 className="m-0 text-[22px]">{name}</h4>
        <p className="text-left m-0 text-ellipsis line-clamp-5 ">{date}</p>
        <p className="text-left m-0 text-ellipsis line-clamp-5 ">{time}</p>
        <button onClick={handleSeeMoreClick} className="mt-[8px]">
          Ver mas
        </button>
      </section>
    </div>
  );
};
export default EventItem;
