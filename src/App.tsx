import Navbar from "../src/pages/Navbar";
import { Routes, Route } from "react-router-dom";
import Burgers from "./pages/Burgers";
import Starters from "./pages/Starters";
import Footer from "../src/pages/Footer";
import '../src/App.css';

export default function App() {
  return (
    <div className="font-poppins text-[#1a1a1a] bg-[#f9f3eb] min-h-screen">
      <Navbar />
      <main className="px-4 md:px-2">
        <Routes>
          <Route path="/" element={<Burgers />} />
          <Route path="/entrantes" element={<Starters />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}