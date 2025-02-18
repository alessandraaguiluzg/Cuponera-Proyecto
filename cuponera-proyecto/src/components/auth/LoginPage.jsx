import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
    const navigate = useNavigate();

    const handleLogin = (role) => {
        setUser({ role });
        if (role === "companyAdmin") navigate("/company-admin");
        if (role === "cuponeraAdmin") navigate("/cuponera-admin");
        if (role === "customer") navigate("/customer");
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-2xl font-bold">Selecciona tu rol</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleLogin("companyAdmin")}>
                Admin de Empresa
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleLogin("cuponeraAdmin")}>
                Admin de Cuponera
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleLogin("customer")}>
                Cliente
            </button>
        </div>
    );
};

export default LoginPage