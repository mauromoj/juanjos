import { useEffect, useState } from "react";
import BurgerCard from "../components/BurgerCard";

export default function Home() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch(
      "https://kcquftnighqxkkgquwhn.supabase.co/rest/v1/Burgers?select=*",
      {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcXVmdG5pZ2hxeGtrZ3F1d2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMTQxNjEsImV4cCI6MjA2NjU5MDE2MX0.HZBHRPP6_ypOBZzG8udm_m8g49TSD7oul0mFXJOyePk",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcXVmdG5pZ2hxeGtrZ3F1d2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMTQxNjEsImV4cCI6MjA2NjU5MDE2MX0.HZBHRPP6_ypOBZzG8udm_m8g49TSD7oul0mFXJOyePk",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Hamburguesas desde Supabase:", data); // <-- Agregado
        setBurgers(data);
      })
      .catch((err) => console.error("Error cargando hamburguesas:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 space-y-20">
      <div id="burgers">
        <h2 className="text-3xl font-lobster text-[#e63946] mb-4">
          Nuestras Hamburguesas
        </h2>
        <p>Aquí puedes ver nuestras hamburguesas artesanales...</p>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-x-1 space-y-6">
          {burgers.map((burger) => (
            <BurgerCard
              key={burger.id}
              name={burger.name}
              price={burger.price}
              description={burger.description}
              imageUrl={burger.image_url}
              caption={burger.caption}
            />
          ))}
        </div>
      </div>

      <div id="entrantes">
        <h2 className="text-3xl font-lobster text-[#e63946] mb-4">Entrantes</h2>
        <p>Perfectos para abrir el apetito...</p>
      </div>

      <div id="ubicacion">
        <h2 className="text-3xl font-lobster text-[#e63946] mb-4">
          Dónde Estamos
        </h2>
        
      </div>
    </section>
  );
}
