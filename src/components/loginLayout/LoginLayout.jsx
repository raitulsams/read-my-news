
import Header from "../Header";
import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";
const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default LoginLayout;
