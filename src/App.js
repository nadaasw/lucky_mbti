import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import YearlyFortune from "./pages/YearlyFortune";
import DailyFortune from "./pages/DailyFortune";
import ResultPage from "./pages/ResultPage"; // ✅ 추가
import AdvancedTest from "./pages/AdvancedTest";
import AdvancedResult from "./pages/AdvancedResult";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yearly" element={<YearlyFortune />} />
        <Route path="/daily" element={<DailyFortune />} />
        <Route path="/result" element={<ResultPage />} /> {/* ✅ 결과 페이지 추가 */}
        <Route path="/advanced-test" element={<AdvancedTest />} />
        <Route path="/advanced-result" element={<AdvancedResult />} />
      </Routes>
    </Router>
  );
}

export default App;