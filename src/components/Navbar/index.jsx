import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div className="my-14 w-full flex">
      <div className="flex flex-1 ml-14">
        <p className="text-[24px] font-bold">Mi taquilla</p>
      </div>
      <div className="flex flex-1 items-center justify-end mr-[56px]">
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          className="text-[16px] py-[6px] px-[12px] rounded  w-[200px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
