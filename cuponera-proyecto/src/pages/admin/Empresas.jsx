import { useState } from "react";
import { empresas as empresasData } from "../../data"; //datos de data.js

function Empresas() {
  // datos de data.js
  const [empresas, setEmpresas] = useState(empresasData);

  // Función para eliminar empresa
  const eliminarEmpresa = (id) => {
    setEmpresas(empresas.filter((empresa) => empresa.id !== id));
  };

  // Función para categorizar ofertas según su estado
  const categorizarOfertas = (ofertas) => {
    const hoy = new Date();

    return {
      EnEspera: ofertas.filter(oferta => oferta.estado === "en espera"),
      AprobadasFuturas: ofertas.filter(oferta => oferta.estado === "aprobada futura"),
      Activas: ofertas.filter(oferta => oferta.estado === "activa"),
      Pasadas: ofertas.filter(oferta => oferta.estado === "pasada"),
      Rechazadas: ofertas.filter(oferta => oferta.estado === "rechazada"),
      Descartadas: ofertas.filter(oferta => oferta.estado === "descartada"),
    };
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Gestión de Empresas</h1>

      {/* Empresas */}
      {empresas.map((empresa) => {
        const ofertasCategorizadas = categorizarOfertas(empresa.ofertas);

        return (
          <div key={empresa.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mb-6">
            <h2 className="bg-slate-600 text-white text-xl font-semibold p-4 rounded-t-lg">
              {empresa.nombre} ({empresa.codigo})
            </h2>
            <div className="p-6">
              <p><strong>Dirección:</strong> {empresa.direccion}</p>
              <p><strong>Contacto:</strong> {empresa.contacto} - {empresa.telefono} - {empresa.correo}</p>
              <p><strong>Rubro:</strong> {empresa.rubro}</p>
              <p><strong>Porcentaje de Comisión:</strong> {empresa.porcentajeComision}%</p>
            </div>

            {/* Ofertas*/}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3">Promociones</h3>
              
              {/* Categorias*/}
              {Object.entries(ofertasCategorizadas).map(([categoria, ofertas]) => (
                <div key={categoria} className="mb-4">
                  <h4 className="text-md font-bold bg-gray-200 p-2 rounded">{categoria.replace(/([A-Z])/g, " $1")}</h4>
                  {ofertas.length > 0 ? (
                    <ul>
                      {ofertas.map((oferta) => (
                        <li key={oferta.id} className="border-b py-2">
                          <strong>{oferta.nombre}</strong> - Estado: {oferta.estado} - Precio: ${oferta.precio}
                          <p>Vendidos: {oferta.vendidos} | Disponibles: {oferta.disponibles}</p>
                          <p>Ingresos: ${oferta.vendidos * oferta.precio} | Cargo: ${((oferta.vendidos * oferta.precio) * empresa.porcentajeComision) / 100}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">No hay ofertas</p>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => eliminarEmpresa(empresa.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
            >
              Eliminar
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Empresas;
