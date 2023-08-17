const Eventitem = ({ id, info, image, name, onEventClick }) => {
  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onEventClick(id);
  };

  return (
    <div className="flex my-[24px] items-start]">
      <figure className="ml-[14px]">
        <img src={image} alt={name} width={200} height={200} />
      </figure>
      <section className="flex flex-col items-start ml-[14px]">
        <h4 className="m-0 text-[22px]">{name}</h4>
        <p className="text-left m-0 text-ellipsis line-clamp-5 ">{info}</p>
        <button onClick={handleSeeMoreClick} className="mt-[8px]">
          Ver mas
        </button>
      </section>
    </div>
  );
};
export default Eventitem;
