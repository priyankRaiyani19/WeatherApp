import { IoPartlySunnySharp } from "react-icons/io5";

import { useCurrentLocation } from "../hooks/LocationContext";
import { SearchBar } from "./SearchBar";

function Header() {
  const { setCurrentLocation } = useCurrentLocation();

  const handleSearch = (query: string) => {
    setCurrentLocation(query);
  };

  return (
    <header className="flex flex-col md:flex-row gap-[2rem]  justify-between items-center ">
      <div className="flex items-center gap-4">
        <IoPartlySunnySharp className="text-gray-200/90 drop-shadow-2xl" size={50} />
        <h1 className="text-4xl font-extrabold tracking-widest font-[Orbitron] drop-shadow-md glow-text">
          Atmospheria
        </h1>
      </div>

      <SearchBar onSearch={handleSearch} />
    </header>
  );
}

export default Header;
