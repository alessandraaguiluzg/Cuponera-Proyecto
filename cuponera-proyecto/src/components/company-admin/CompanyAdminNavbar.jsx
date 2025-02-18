import React from 'react';

const CompanyAdminNavbar = ({ children }) => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
            {children}
        </nav>
    );
};

export function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <span role="img" aria-label="ticket">🎟️</span>
            <h1 className="text-xl font-bold">CUPONERA</h1>
        </div>
    );
}

export function NavLinks() {
    return (
        <div className="space-x-4">
            <a href="/admin/dashboard" className="hover:underline">Inicio</a>
            <a href="/admin/ofertas" className="hover:underline">Ofertas</a>
            <a href="/admin/empleados" className="hover:underline">Empleados</a>
        </div>
    );
}

export function ProfileIcon() {
    return (
        <div className="rounded-full bg-white text-blue-500 p-2 cursor-pointer">
            <span role="img" aria-label="user">👤</span>
        </div>
    );
}

export default CompanyAdminNavbar;
