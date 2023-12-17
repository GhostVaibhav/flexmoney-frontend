import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FormElt from "./components/form";
import Leave from "./components/Leave";
import Forgot from "./components/Forgot";
import Change from "./components/Change";
import Pay from "./components/Pay";

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <Router>
        <Navbar />
        <div className='flex justify-center text-white'>
          <Routes>
            <Route path="/" element={<FormElt />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/change" element={<Change />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
