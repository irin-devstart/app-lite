import { createBrowserRouter } from "react-router-dom";
import { WebRoute } from "./common/constants";
import { AppLayout, AuthLayout } from "./components/layouts";
import {
  Dashboard,
  Login,
  ShippingCompsCreate,
  ShippingCompsList,
  ShippingCompsUpdate,
  Profile,
} from "./pages";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: WebRoute.auth.login,
        element: <Login />,
      },
      {
        path: WebRoute.auth.profile,
        element: <Profile />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: WebRoute.home,
        element: <Dashboard />,
      },
      {
        path: WebRoute.shippingComps.index,
        element: <ShippingCompsList />,
      },
      {
        path: WebRoute.shippingComps.create,
        element: <ShippingCompsCreate />,
      },
      {
        path: WebRoute.shippingComps.update,
        element: <ShippingCompsUpdate />,
      },
    ],
  },
]);

export default router;
