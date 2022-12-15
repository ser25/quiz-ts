import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Questions from "./component/question/Questions";
import Statistic from "./component/Statistic/Statistic";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/statistic" element={<Statistic />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/questions" element={<Questions />}/>
            </Routes>
        </BrowserRouter>

    );
}


export default App;
