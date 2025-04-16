import { MdSunnySnowing } from "react-icons/md";
import { PiSunFill } from "react-icons/pi";
import { RiMoonFill } from "react-icons/ri";
import { TbHazeMoon } from "react-icons/tb";

import type { AstroInfoProps } from "../../../types/Types";

import Card from "../../../component/Card";

const astroInfo = [
  {
    icon: <PiSunFill className="h-16 w-16 text-yellow-300" />,
    title: "Sunrise",
    key: "sunrise",
  },
  {
    icon: <MdSunnySnowing className="h-16 w-16 text-yellow-300" />,
    title: "Sunset",
    key: "sunset",
  },
  {
    icon: <RiMoonFill className="h-16 w-16 text-yellow-300" />,
    title: "Moonrise",
    key: "moonrise",
  },
  {
    icon: <TbHazeMoon className="h-16 w-16 text-yellow-300" />,
    title: "Moonset",
    key: "moonset",
  },

];

function AstroInfo({ astro }: AstroInfoProps) {
  const newAstro = astroInfo.map(a => ({
    ...a,
    value: astro[a.key],
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">

      {newAstro.map(astroItem => (
        <Card key={astroItem.key} className="bg-gradient-to-br  p-4 rounded-lg">
          <div className="flex flex-col items-center text-center">
            {astroItem.icon}
            <h2 className="text-xl font-semibold text-white">{astroItem.title}</h2>
            <p className="text-lg text-gray-200">{astroItem.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default AstroInfo;
