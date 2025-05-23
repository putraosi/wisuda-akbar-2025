import { useState } from "react";
import { IcChair2, IcDirection, IcMarker, IcPlay, IcRundown } from "./assets";
import Agenda from "./components/Agenda";
import Closing from "./components/Closing";
import Direction from "./components/Direction";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Rundown from "./components/Rundown";
import Seat from "./components/Seat";
import Tutorial from "./components/Tutorial";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative scroll-smooth">
      <Hero isOpen={isOpen} setIsOpen={() => setIsOpen(true)} />

      {isOpen && (
        <>
          <Agenda />
          <Location />
          <Direction />
          <Seat />
          <Rundown />
          <Tutorial />
          <Closing />

          {/* Bottom Nav */}
          <nav className="fixed bottom-0 w-full bg-gold100 border-t shadow-inner flex justify-around py-2 z-50 w-svw sm:max-w-[480px]">
            {dataSubMenu.map((item, index) => (
              <SubMenuItem key={index} data={item} />
            ))}
          </nav>
        </>
      )}
    </div>
  );
};

export default App;

interface SubMenuProps {
  to: string;
  name: string;
  icon: any;
}

const dataSubMenu: SubMenuProps[] = [
  { to: "location", name: "Lokasi", icon: IcMarker },
  { to: "direction", name: "Arah", icon: IcDirection },
  { to: "seat", name: "Kursi", icon: IcChair2 },
  { to: "rundown", name: "Rundown", icon: IcRundown },
  { to: "tutorial", name: "Tutorial", icon: IcPlay },
];

const SubMenuItem: React.FC<{ data: SubMenuProps }> = ({ data }) => {
  return (
    <a href={`#${data?.to}`} className="flex-col center gap-1.5 text-xs cursor-pointer hover:font-semibold">
      <img src={data?.icon} alt={data?.to} className="w-4 h-auto" />
      {data?.name}
    </a>
  );
};
