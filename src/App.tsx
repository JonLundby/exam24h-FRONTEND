import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Participants from "./pages/Participants";
import Page2 from "./pages/Page2";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/participants" element={<Participants />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
