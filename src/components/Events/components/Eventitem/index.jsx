const Eventitem = ({ id, info, image, name, onEventClick }) => {
  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onEventClick(id);
  };

  return (
    <div>
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver mas</button>
    </div>
  );
};
export default Eventitem;
