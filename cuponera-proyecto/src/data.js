export const empresas = [
    {
      id: 1,
      nombre: "San Martin",
      codigo: "SM234234",
      direccion: "calle calle",
      contacto: "nombre ",
      telefono: "77777777",
      correo: "sanmartin@gmail.com",
      rubro: "Restaurantes",
      porcentajeComision: 10,
      ofertas: [
        { id: 1, nombre: "Promo 2x1", estado: "activa", precio: 5, vendidos: 100, disponibles: 50 },
        { id: 2, nombre: "Descuento 30%", estado: "en espera", precio: 8, vendidos: 0, disponibles: 50 },
      ],
    },
    {
      id: 2,
      nombre: "Vidal",
      codigo: "V2352",
      direccion: "Calle calle",
      contacto: "nombre",
      telefono: "7888888",
      correo: "salonvidal@gmail.com.com",
      rubro: "Salon de belleza",
      porcentajeComision: 15,
      ofertas: [
        { id: 3, nombre: "Alisado en descuento", estado: "aprobada futura", precio: 50, vendidos: 10, disponibles: 5 },
        { id: 4, nombre: "Corte", estado: "activa", precio: 10, vendidos: 20, disponibles: 20 },
      ],
    },
    {
        id: 3,
        nombre: "Electronica 2001",
        codigo: "E2001123",
        direccion: "El Paseo General Escalon",
        contacto: "Jairo",
        telefono: "79999999",
        correo: "electronica2001@gmail.com.com",
        rubro: "Tienda de Musica",
        porcentajeComision: 10,
        ofertas: [
          { id: 5, nombre: "Consola Digital Rack behringer", estado: "aprobada futura", precio: 5000, vendidos: 3, disponibles: 5 },
          { id: 6, nombre: "Bocinas 400 WATTS", estado: "activa", precio: 295, vendidos: 14, disponibles: 10 },
        ],
    },
];
  
  

export const rubros = [
    "Restaurantes",
    "Talleres",
    "Salones de Belleza",
    "Tienda de Musica",
];
  
export const clientes = [
    { id: 1, nombre: "Andrea Cobos", email: "andcobos@icloud.com", cuponesComprados: 5 },
];
  