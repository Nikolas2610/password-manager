import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
// Components
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginContainer from "../store/login/container/login.container";
import RegisterContainer from "../store/register/container/register.container";
import DashboardContainer from "../store/passwords/container/dashboard.container";
import GuestRoutes from "./GuestRoutes";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route element={<GuestRoutes />}>
                <Route path="login" element={<LoginContainer />} />
                <Route path="register" element={<RegisterContainer />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path="dashboard" element={<DashboardContainer />} />
            </Route>
        </Route>
    )
)