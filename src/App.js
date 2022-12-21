import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Questions from "./component/question/Questions";
import Statistic from "./component/Statistic/Statistic";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import FullQuestions from "./pages/FullQuestions/FullQuestions";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/statistic" element={<Statistic />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/questions" element={<Questions />}/>
                <Route path="/question/:id" element={<FullQuestions />}/>
            </Routes>
        </BrowserRouter>

    );
}


export default App;
