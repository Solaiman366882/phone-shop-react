import { NavLink } from "react-router-dom";
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <header className="w-full py-5 shadow-xl px-5">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <NavLink to={"/"}>
                    <h1>Phone Shop</h1>
                </NavLink>
                <Nav></Nav>
            </div>
        </header>
    );
};

export default Header;