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

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Login />} />
        </Route>
    )
)