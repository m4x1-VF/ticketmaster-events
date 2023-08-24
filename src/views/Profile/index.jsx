import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    navigate(`/profile/${tab}`);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <Link to="/">
        <FontAwesomeIcon
          icon={faHouse}
          size="lg"
          style={{ color: "#000000" }}
        />
      </Link>
      <div className="flex flex-row  justify-center my-4 gap-2">
        <span
          className={`${
            pathname.includes("my-info")
              ? "border-black border-b-2 font-medium"
              : ""
          } ${"text-lg cursor-pointer hover: opacity-80 transition ease-in-out delay-75"}`}
          onClick={() => {
            handleTabClick("my-info");
          }}
        >
          Mi información
        </span>
        <span
          className={`${
            pathname.includes("liked-events")
              ? "border-black border-b-2 cursor-pointer font-medium"
              : "cursor-pointer"
          } ${"text-lg cursor-pointer hover: opacity-80 transition easeease-in-out delay-75"}`}
          onClick={() => {
            handleTabClick("liked-events");
          }}
        >
          Eventos favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
};
export default Profile;
