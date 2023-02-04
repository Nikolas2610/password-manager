import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
// Components
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
    )
)