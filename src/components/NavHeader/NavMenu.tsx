import { NavLink } from "react-router-dom";

export default function NavMenu() {
    return (
        <>
            <ul className="nav justify-content-center">
                <li>
                    <NavLink to="/" className="nav-link text-white ml-3">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/view1" className="nav-link text-white ml-3">
                        View1
                    </NavLink>
                </li>
            </ul>
        </>
    );
}
