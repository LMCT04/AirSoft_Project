import { Landing, Events, Form, Info } from "./views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavegationBar from "./components/navegationBar/navBar";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            {location.pathname !== "/dashboard" && <NavegationBar />}

            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/events" element={<Events />} />
                <Route exact path="/inscription" element={<Form />} />
                <Route exact path="/info" element={<Info />} />
            </Routes>
        </div>
    );
}

export default App;
