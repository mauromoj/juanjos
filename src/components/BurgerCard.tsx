import { LuWheat } from "react-icons/lu";
import { LuMilk } from "react-icons/lu";
import { IoFishOutline } from "react-icons/io5";
import { MdOutlineEgg } from "react-icons/md";
import { PiShrimp } from "react-icons/pi";
import { LuNut } from "react-icons/lu";
import { SiShell } from "react-icons/si";
import { SlChemistry } from "react-icons/sl";
import { GiSesame } from "react-icons/gi";
import { PiBeerBottle } from "react-icons/pi";
import { GiPeanut } from "react-icons/gi";

type BurgerCardProps = {
  name: string;
  price: string;
  description: string;
  caption?: string;
  imageUrl: string;
  imageAllergens?: string;
};

function BurgerCard({
  name,
  price,
  description,
  caption,
  imageUrl,
  imageAllergens,
}: BurgerCardProps) {
  return (
    <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-md transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-75 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-[#e63946] text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
          {price} €
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 font-lobster text-[#e63946]">
          {name}
        </h2>
        <p className="whitespace-pre-line text-sm text-gray-700 mt-2">
          {description}
        </p>
        <p className="text-[#e63946] text-sm mb-4 font-poppins">{caption}</p>
        <div className="flex flex-wrap gap-2 text-[#e63946]">
          <LuWheat />
          <LuMilk />
          <IoFishOutline />
          <MdOutlineEgg />
          <PiShrimp />
          <LuNut />
          <SiShell />
          <SlChemistry />
          <GiSesame />
          <PiBeerBottle />
          <GiPeanut />
        </div>
      </div>
    </div>
  );
}

export default BurgerCard;
