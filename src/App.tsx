import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Participants from "./pages/Participants";
import Results from "./pages/Results";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/participants" element={<Participants />} />
                    <Route path="/results" element={<Results />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
