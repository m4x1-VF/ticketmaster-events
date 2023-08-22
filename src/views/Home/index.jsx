import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { events, isLoading, error, fetchEvents, page } = useEventData();
  const handleNavbarSearch = (term) => {
    fetchEvents(`&keyword=${term}`);
    setSearchTerm(term);
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados...</div>;
    }
    if (error) {
      return <p>Ha ocurrido un error</p>;
    }
    return (
      <div>
        <Events events={events} searchTerm={searchTerm} />
        <ReactPaginate
          className="list-none flex justify-center items-center my-2"
          nextClassName="text-xl px-2 cursor-pointer font-bold"
          previousClassName="text-xl px-2 cursor-pointer font-bold"
          pageClassName="text-xl px-2 cursor-pointer font-bold"
          activeClassName="bg-black text-white rounded-xl"
          disabledClassName="cursor-not-allowed"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      {renderEvents()}
    </>
  );
};

export default Home;
