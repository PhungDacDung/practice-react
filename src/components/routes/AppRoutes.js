import { Routes, Route } from "react-router-dom"
import Home from "../Home";
import TableUsers from "../TableUsers";
import About from "../About";
import Login from "../Login";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../NotFound";


const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/manage-user"
                    element={
                        <PrivateRoutes>
                            <TableUsers />
                        </PrivateRoutes>
                    }
                />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )

}

export default AppRoutes;