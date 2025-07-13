import Divider from "../components/Divider";

export default function AboutUs() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800">
      <h1 className="text-4xl font-lobster text-[#e63946] text-center mb-8">
        ¿No sabes cómo pedir?
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <p className="text-lg font-semibold text-center">
          Llámanos al <br />
          <span className="text-3xl font-bold text-[#e63946]">962-56-72-30</span>
        </p>

        <p className="text-center text-sm uppercase tracking-widest font-semibold text-gray-500">
          Somos solo un local para llevar o delivery
        </p>

        <p className="text-center italic text-gray-600">
          De LUNES a JUEVES (dependiendo del trabajo) se pueden reservar pedidos para alguna hora en específico.
          <br />
          De VIERNES a DOMINGOS NO HACEMOS RESERVAS POR ALTA DEMANDA
        </p>

        <Divider />

        <h2 className="text-2xl font-lobster text-[#e63946] text-center">
          Sediento de Burger
        </h2>

        <p className="text-center text-lg font-semibold">
          ¡Has llegado al lugar correcto!
        </p>

        <p className="text-center italic text-gray-600">
          ¿Algún evento especial? <br />
          Llámanos antes y déjanos saber.
        </p>

        <Divider />

        <h2 className="text-2xl font-lobster text-[#e63946] text-center">
          Nos dejas tu feedback?
        </h2>

        <p className="text-center text-gray-700">
          Para nosotros es importante conocer tu opinión. Déjanos saberla por Instagram y si <strong>haz flipado</strong> o <strong>vibrado</strong> con nuestras BURGERS o nuestro SERVICIO, déjanos una <strong>reseña en Google Maps</strong>.
        </p>

        <Divider />

        {/* Nueva sección Horarios */}
        <div>
          <h2 className="text-2xl font-lobster text-[#e63946] mb-4 text-center">
            Horarios
          </h2>

          <ul className="text-center text-lg space-y-1 font-semibold text-gray-800">
            <li>Lunes: 19:30h - 23:00h</li>
            <li>Martes: 19:30h - 23:00h</li>
            <li>Miércoles: Cerrados</li>
            <li>Jueves: 19:30h - 23:00h</li>
            <li>Viernes: 20:00h - 23:00h</li>
            <li>Sábados: 13:00h - 16:00h, 20:00h - 23:00h</li>
            <li>Domingos: 13:00h - 16:00h, 20:00h - 23:00h</li>
          </ul>

          <p className="mt-4 italic text-center text-red-600 font-semibold">
            Importante: Cocina cierra 30 minutos antes dependiendo del día y del trabajo.
          </p>
        </div>
      </div>
    </section>
  );
}
