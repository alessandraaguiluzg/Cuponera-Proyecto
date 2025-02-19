import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/AdminNavbar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Empresas from "./pages/admin/Empresas";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>

          <Route path="/" element={<AdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/empresas" element={<Empresas />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
