import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Gestión de Empresas */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Gestión de Empresas</h2>
          <p className="text-gray-600">Administra las empresas ofertantes, registra nuevas y gestiona sus ofertas.</p>
          <Link to="/admin/empresas" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Ir a Empresas
          </Link>
        </div>

        {/* Gestión de Rubros */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Gestión de Rubros</h2>
          <p className="text-gray-600">Crea, edita y elimina rubros como restaurantes, talleres y más.</p>
          <Link to="/admin/rubros" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Ir a Rubros
          </Link>
        </div>

        {/* Gestión de Clientes */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Gestión de Clientes</h2>
          <p className="text-gray-600">Visualiza clientes registrados y su historial de cupones comprados.</p>
          <Link to="/admin/clientes" className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700">
            Ir a Clientes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
