import React from 'react';
import './Home.css'
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div className= 'home'>
            <Link to={'/admin'}>
                <button>Admin</button>
            </Link>
            <div>Question with timer or not </div>
            {true
                ? <div>Yes</div>
                :<div>Timer</div>}
            <Link to={'/questions'}>
                <button>Розпочати</button>
            </Link>

        </div>
    );
};

export default Home;