import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your components/pages here
import SignIn from "../signIn/SignIn";
import App from "../app/App";
import Home from "../home/Home";
import Quests from "../quests/Quests";
import SignUp from "../signIn/SignUp";
import HomeAluno from "../homeAluno/HomeAluno";
import QuestPage from "../questPage/QuestPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HomeAluno" element={<HomeAluno/>} />
        <Route path="/Quests" element={<Quests />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/QuestPage" element = {<QuestPage/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
