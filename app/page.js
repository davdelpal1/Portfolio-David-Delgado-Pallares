import ThemeSwitcher from "../components/ThemeSwitcher"; // ⬅️ IMPORTACIÓN CORRECTA


export default function Home() {
  const proyectos = [
    {
      nombre: "Xtreme-Biking",
      descripcion: "Aplicación web de venta de bicicletas para la asignatura PGPI. Desarrollada con Django y HTML.",
      link: "https://github.com/goncammej/Xtreme-biking",
    },
    {
      nombre: "DeliverUs",
      descripcion: "Plataforma para pedir comida en restaurantes. Proyecto de IISSI2 con gestión de usuarios, pedidos y productos.",
      link: "https://github.com/IISSI2-IS-2024/proyecto-de-curso-davdelpal1",
    },
    {
      nombre: "Plataforma de voto electrónico educativa",
      descripcion: "Sistema de votación seguro con soporte para varios tipos de elecciones. Proyecto educativo de la US.",
      link: "https://github.com/EGC-23-24/decide-part-lorca",
    },
    {
      nombre: "Spring PetClinic (1ª convocatoria)",
      descripcion: "Proyecto de PSG2 con Spring Boot para gestión veterinaria. Primera entrega del curso.",
      link: "https://github.com/gii-is-psg2/psg2-2223-g2-24",
    },
    {
      nombre: "Spring PetClinic (2ª convocatoria)",
      descripcion: "Segunda versión del proyecto PetClinic, enfocado a reforzar arquitectura backend con Spring Boot.",
      link: "https://github.com/gii-is-psg2/PSG2-2223-davdelpal1",
    },
    {
      nombre: "Terraforming Mars",
      descripcion: "Versión digital del juego de cartas. Proyecto de la asignatura DP1, centrado en la jugabilidad por turnos.",
      link: "https://github.com/gii-is-DP1/dp1-2021-2022-g3-04-1",
    },
  ];
  
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow">
      <ThemeSwitcher /> {/* 👈 Agregamos el botón de tema */}
      <header className="bg-white dark:bg-gray-900 shadow p-6">
        <h1 className="text-4xl font-bold text-black dark:text-white">David Delgado Pallares</h1>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
          Estudiante de 4º de Ingeniería Informática del Software en la Universidad de Sevilla.
          Me apasionan las tecnologías desde que era pequeño y siempre ha sido mi sueño convertir mi pasión en mi profesión.
        </p>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
          Durante mis estudios, he adquirido experiencia en lenguajes de programación como Python, Java y C++, así como 
          en el desarrollo de aplicaciones web utilizando frameworks como React y Node.js.
        </p>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
          Actualmente, estoy especialmente motivado por finalizar mis estudios, encontrar oportunidades para seguir creciendo
          como desarrollador y aplicar mis conocimientos en proyectos reales.
        </p>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
          Si quieres saber más sobre mí o sobre mis proyectos, no dudes en contactar conmigo.
        </p>
        <div className="mt-4 flex gap-4">
          <a href="https://github.com/davdelpal1" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/david-delgado-pallares-35b36b173/" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
          <a href="mailto:delgado.pallares.david@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Contacto</a>
        </div>
      </header>

      <main className="p-8">
        <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-black dark:text-white">{proyecto.nombre}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{proyecto.descripcion}</p>
              <a href={proyecto.link} target="_blank" className="text-blue-500 dark:text-blue-300 hover:underline">Ver proyecto</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}