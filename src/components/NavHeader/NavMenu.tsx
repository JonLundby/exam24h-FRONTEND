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
                    <NavLink to="/participants" className="nav-link text-white ml-3">
                        Participants(admin only)
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/results" className="nav-link text-white ml-3">
                        Results
                    </NavLink>
                </li>
            </ul>
        </>
    );
}
