import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-5 ">
                <li>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-green-500 underline" : ""
                    }
                     >Home</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/favorites"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-green-500 underline" : ""
                    }
                     >Favorites</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-green-500 underline" : ""
                    }
                     >Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;