import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Deltagere from "./pages/Deltagere";
import Page2 from "./pages/Page2";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/deltagere" element={<Deltagere />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
