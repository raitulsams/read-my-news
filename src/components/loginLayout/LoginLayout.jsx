import { Outlet } from "react-router";
import Header from "../Header";

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default LoginLayout;