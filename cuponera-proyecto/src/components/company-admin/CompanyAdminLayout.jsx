import React from 'react';
import { Outlet } from 'react-router-dom';
import CompanyAdminNavbar from './CompanyAdminNavbar';

const CompanyAdminLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            
            <CompanyAdminNavbar />

            {/* Contenido dinámico de cada página */}
            <main className="p-6 flex-grow">
                <Outlet /> 
            </main>
        </div>
    );
};

export default CompanyAdminLayout;
