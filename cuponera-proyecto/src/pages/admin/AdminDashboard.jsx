import { empresas, rubros, clientes } from '../../data';

function AdminDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Gestión de Empresas */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Encabezado */}
            <h2 className="bg-slate-700 text-white text-xl font-semibold p-4 rounded-t-lg">
                Gestión de Empresas
            </h2>
            <div className="p-6">
                <ul className="text-gray-600">
                {empresas.length > 0 ? (
                    empresas.map((empresa) => (
                    <li key={empresa.id} className="border-b py-2">
                        {empresa.nombre} ({empresa.codigo}) - {empresa.rubro}
                    </li>
                    ))
                ) : (
                    <p>No hay empresas registradas</p>
                )}
                </ul>
            </div>
        </div>

        {/* Gestión de Rubros */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Encabezado con fondo azul y texto blanco */}
            <h2 className="bg-zinc-600 text-white text-xl font-semibold p-4 rounded-t-lg">
                Gestión de Rubros
            </h2>

            {/* Contenido con fondo blanco */}
            <div className="p-6">
                <ul className="text-gray-600">
                {rubros.length > 0 ? (
                    rubros.map((rubro, index) => (
                    <li key={index} className="border-b py-2">{rubro}</li>
                    ))
                ) : (
                    <p>No hay rubros registrados</p>
                )}
                </ul>
            </div>
        </div>

        {/* Gestión de Clientes */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Encabezado con fondo azul y texto blanco */}
            <h2 className="bg-slate-600 text-white text-xl font-semibold p-4 rounded-t-lg">
                Gestión de Clientes
            </h2>

            {/* Contenido con fondo blanco */}
            <div className="p-6">
                <ul className="text-gray-600">
                {clientes.length > 0 ? (
                    clientes.map((cliente) => (
                    <li key={cliente.id} className="border-b py-2">
                        {cliente.nombre} - {cliente.email} ({cliente.cuponesComprados} cupones)
                    </li>
                    ))
                ) : (
                    <p>No hay clientes registrados</p>
                )}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
