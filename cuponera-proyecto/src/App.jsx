import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/AdminNavbar";
import AdminDashboard from "./pages/admin/AdminDashboard";
//import Empresas from "./pages/admin/Empresas";
//import Rubros from "./pages/admin/Rubros";
//import Clientes from "./pages/admin/Clientes";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl font-bold">La Cuponera</h1>} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
