import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const App: React.FC = () => {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  const locations = [
    {
      id: "crea",
      name: "CLINICA CREA OSORNO",
      address: "Dr. Guillermo Buhler 1561",
      bookingUrl:
        "https://eae382cedf078d54fba6978b780deb6dc16bb114.agenda.softwaredentalink.com/agenda?modalidad=1",
      mapUrl: "https://maps.app.goo.gl/CPmqkLUuaDpxyCGg8",
    },
    {
      id: "barcelona",
      name: "CLÍNICA BARCELONA EN PUERTO VARAS",
      address: "La Fabrica, centro comercial",
      bookingUrl:
        "https://api.whatsapp.com/send?phone=56991366246&text=Hola,%20quiero%20pedir%20una%20hora%20con%20la%20Dra.%20Norambuena.",
      mapUrl: "https://maps.app.goo.gl/hcGJk9uWfTG9Mqky5",
    },
    {
      id: "alcudia",
      name: "CLÍNICA ALCUDIA EN RIO BUENO",
      address: "Patricio Lynch 1961",
      bookingUrl: "#",
      mapUrl: "https://maps.app.goo.gl/6TLSTu41tCdcRgNSA",
    },
  ];

  const toggleLocation = (id: string) => {
    if (expandedLocation === id) {
      setExpandedLocation(null);
    } else {
      setExpandedLocation(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-pink-50 to-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header with profile */}
          <div className="bg-gradient-to-r from-pastel-pink-100 to-pastel-pink-200 py-8 px-6 text-center">
            <div className="mx-auto mb-4 flex justify-center">
              <div className="relative inline-block w-32 h-32">
                <div className="absolute inset-0 bg-pastel-pink-300 rounded-full blur-md opacity-50 transform scale-110"></div>
                <img
                  src="/FOTO373.JPG"
                  alt="Dra. Paulina Norambuena Suazo"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white object-[center_40%] shadow-lg"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Paulina Norambuena Suazo
            </h1>
            <p className="text-gray-600 mb-2">
              Cirujano dentista - Experta en estética y armonización orofacial
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-pastel-pink-600">
                Estética dental
              </span>
              <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-pastel-pink-600">
                Odontología general
              </span>
              <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-pastel-pink-600">
                Armonización facial
              </span>
            </div>
          </div>

          {/* Contact information */}
          <div className="px-6 py-6 bg-white">
            {/* First row of contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="bg-pastel-pink-100 p-3 rounded-full mr-4 shadow-sm">
                  <Phone size={20} className="text-pastel-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Teléfono</h4>
                  <a
                    href="tel:+56991366246"
                    className="text-gray-600 hover:text-pastel-pink-500"
                  >
                    +56 9 9136 6246
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pastel-pink-100 p-3 rounded-full mr-4 shadow-sm">
                  <Mail size={20} className="text-pastel-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a
                    href="mailto:Pauli.norambuenas@gmail.com"
                    className="text-gray-600 hover:text-pastel-pink-500"
                  >
                    Pauli.norambuenas@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Second row of contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div className="flex items-center">
                <div className="bg-pastel-pink-100 p-3 rounded-full mr-4 shadow-sm">
                  <Clock size={20} className="text-pastel-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Horario de Atención
                  </h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pastel-pink-100 p-3 rounded-full mr-4 shadow-sm">
                  <MapPin size={20} className="text-pastel-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ubicación</h4>
                  <p className="text-gray-600">
                    Osorno, Puerto Varas, Río Bueno
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment links */}
          <div className="px-6 py-6 bg-gray-50 border-t border-gray-100">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
              Donde me encuentras:
            </h2>

            <div className="space-y-4">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <button
                    onClick={() => toggleLocation(location.id)}
                    className="w-full bg-pastel-pink-500 hover:bg-pastel-pink-600 text-white text-center py-4 px-6 rounded-t-md font-medium transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Calendar size={20} className="mr-2" />
                      {location.name}
                    </div>
                    {expandedLocation === location.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {expandedLocation === location.id && (
                    <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg">
                      <p className="mb-3 text-gray-600">{location.address}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <a
                          href={location.bookingUrl}
                          className="flex-1 bg-pastel-pink-100 hover:bg-pastel-pink-200 text-pastel-pink-700 text-center py-2 px-4 rounded font-medium transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Agendar cita
                        </a>
                        <a
                          href={location.mapUrl}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded font-medium transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver en mapa
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Logo section */}
          <div className="px-6 py-6 bg-white border-t border-gray-100 flex justify-center items-center">
            <a
              href="https://www.instagram.com/drapaulinanorambuena/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/LOGO.png"
                alt="Logo"
                className="h-[350px] w-auto transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110 cursor-pointer"
              />
              <p className="text-center text-sm text-gray-500 mt-2 group-hover:text-pastel-pink-500 transition-colors">
                Sígueme en Instagram
              </p>
            </a>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-10">
          <a
            href="https://wa.me/56991366246"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={28} />
          </a>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Dra. Paulina Norambuena Suazo. Todos los
          derechos reservados.
        </footer>
      </main>
    </div>
  );
};

export default App;
