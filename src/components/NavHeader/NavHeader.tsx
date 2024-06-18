import NavMenu from "./NavMenu";

export default function NavHeader() {
    return (
        <header className="navbar navbar-dark bg-success d-flex flex-column justify-content-center">
            <h1 className="text-white">24 HOUR EXAM</h1>
            <NavMenu />
        </header>
    );
}
