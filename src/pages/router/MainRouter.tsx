import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components/pages here
import SignIn from '../SignIn/SignIn';
import App from '../App/App';


const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;