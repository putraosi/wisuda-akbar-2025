import { IcGeneration, IcLogo } from "../assets";
import { NAME } from "../constantas";

const Header = () => {
  return (
    <div className="row gap-4">
      <img src={IcLogo} alt="logo" className="w-[40px] h-auto" />

      <div className="center-x">
        <h1 className="text-xl   font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] text-center leading-none">
          WISUDA AKBAR 2025
        </h1>

        <h4 className="font-bold uppercase text-sm">{NAME}</h4>
      </div>

      <img src={IcGeneration} alt="generation" className="w-auto h-[40px]" />
    </div>
  );
};

export default Header;
