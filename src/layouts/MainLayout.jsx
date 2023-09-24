import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className="min-h-[70vh]">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;