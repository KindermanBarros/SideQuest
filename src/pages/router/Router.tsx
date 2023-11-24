import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components/pages here
import SignIn from '../SignIn/SignIn';
import App from '../App/App';
import Home from '../Home/home';
import SignUp from '../SignIn/SignUp';


const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
