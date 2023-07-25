import { Landing, Events, Form, Info } from "./views";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
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
