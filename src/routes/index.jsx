import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Home from "../views/Home";
import Detail from "../views/Details";
import Error404 from "../views/Error404";
import Profile from "../views/Profile";
import MyInfo from "../views/Profile/components/MyInfo";
import LikedEvents from "../views/Profile/components/LikedEvents";
import ErrorBoundary from "../components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: (
      <Suspense fallback={<div>Cargando...</div>}>
        <ErrorBoundary fallback={<div>Ha ocurrido un error</div>}>
          <Detail />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <MyInfo />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
