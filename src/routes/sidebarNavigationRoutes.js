import {
  Dashboard,
  Subject,
} from "@mui/icons-material";

import DashboardLayout from "../components/layouts/Dashboard";
import Dummy from "../components/Dummy";

const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: Dashboard,
    component: (
      <DashboardLayout title="Dashboard" />
    ),
  },
  {
    label: "Dummy1",
    path: "/Dummy1",
    icon: Subject,
    component: <Dummy title="Dummy content 1" />,
  },
  {
    label: "Dummy2",
    path: "/Dummy2",
    icon: Subject,
    component: <Dummy title="Dummy content 2" />,
  },
];

export default routes;
