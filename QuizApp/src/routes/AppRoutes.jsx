import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuizSetup from '../Components/QuizSetup.jsx';
import QuizPage from '../Components/QuizPage.jsx';
import Leaderboard from '../Components/Leaderboard.jsx';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<QuizSetup />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default AppRoutes;
