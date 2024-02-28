// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuizCreator from './pages/QuizCreator';
import QuizTaker from './pages/QuizTaker';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<QuizCreator />} />
        <Route path="/take" element={<QuizTaker />} />
      </Routes>
    </Router>
  );
};

export default App;
