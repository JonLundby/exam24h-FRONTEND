import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import View1 from "./pages/View1";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/view1" element={<View1 />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Layout>
        </>
    );
}

export default App;
