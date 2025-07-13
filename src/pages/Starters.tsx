import { useEffect, useState } from "react";
import Card from "../components/Card";
import Divider from "../components/Divider";

export default function Home() {
  const [starters, setStarters] = useState<Starter[]>([]);

  type Starter = {
    id: number;
    name: string;
    price: string;
    description: string;
    caption?: string;
    image_url: string;
    imageAllergens?: string;
  };

  useEffect(() => {
    fetch("https://kcquftnighqxkkgquwhn.supabase.co/rest/v1/Starters?select=*", {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcXVmdG5pZ2hxeGtrZ3F1d2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMTQxNjEsImV4cCI6MjA2NjU5MDE2MX0.HZBHRPP6_ypOBZzG8udm_m8g49TSD7oul0mFXJOyePk",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcXVmdG5pZ2hxeGtrZ3F1d2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMTQxNjEsImV4cCI6MjA2NjU5MDE2MX0.HZBHRPP6_ypOBZzG8udm_m8g49TSD7oul0mFXJOyePk",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStarters(data);
      })
      .catch((err) => console.error("Error cargando entrantes:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 space-y-20">
      <div id="starters">
        <h2 className="text-3xl font-lobster text-[#e63946] mb-4">
          Nuestros Entrantes
        </h2>
        <p>Aquí puedes ver nuestros entrantes...</p>
        <Divider />
        <div className="columns-1 sm:columns-2 md:columns-3 gap-x-1 space-y-6">
          {starters.map((starter) => (
            <Card
              key={starter.id}
              name={starter.name}
              price={starter.price}
              description={starter.description}
              imageUrl={starter.image_url}
              caption={starter.caption}
            />
          ))}
        </div>
      </div>

      <div id="ubicacion">
        <h2 className="text-3xl font-lobster text-[#e63946] mb-4">
          Dónde Estamos
        </h2>
      </div>
    </section>
  );
}
