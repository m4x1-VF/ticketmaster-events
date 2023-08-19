import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-3xl font-bold mb-5">{error.status} Ops!!</h1>
      <p className="text-xl">{error.data}</p>
    </div>
  );
};

export default Error404;
