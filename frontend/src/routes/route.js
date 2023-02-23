import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
// Components
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Dashboard from "../pages/protected/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginContainer from "../store/login/container/login.container";
import CheckAuth from "./CheckAuth";
import RegisterContainer from "../store/register/container/register.container";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* <Route element={<CheckAuth />}> */}
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<LoginContainer />} />
                <Route path="register" element={<RegisterContainer />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            {/* </Route> */}
        </Route>
    )
)