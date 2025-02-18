import React from 'react';
import CompanyAdminNavbar from './components/company-admin/CompanyAdminNavbar';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <CompanyAdminNavbar />
            <h1 className="text-2xl font-bold text-center mt-6">Bienvenido al Admin de Empresa</h1>
            <p className="text-center text-gray-600">Aquí podrás gestionar empleados y ofertas.</p>
        </div>
    );
}

export default App;
