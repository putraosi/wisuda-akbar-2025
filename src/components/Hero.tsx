import { IcGeneration, IcLogo } from "../assets";
import { NAME } from "../constantas";
import Container from "./Container";
import Countdown from "./Countdown";

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Hero: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Container id="hero" className="items-center justify-center">
      <div className="p-6 flex flex-col items-center justify-center ">
        <div className="flex flex-row gap-7">
          <img src={IcLogo} alt="logo" className="w-[100px] h-auto" />
          <img
            src={IcGeneration}
            alt="generation"
            className="w-auto h-[100px]"
          />
        </div>

        <h3 className="uppercase font-bold text-[40px] mt-6 mb-2">Undangan</h3>

        <h1 className="text-[46px] sm:text-[60px]  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] text-center leading-none">
          WISUDA
          <br />
          AKBAR 2025
        </h1>

        <h4 className="font-bold uppercase text-xl sm:text-[26.5px]">{NAME}</h4>

        <span className="font-semibold mt-4">Kepada Ykh.</span>
        <span className="font-semibold">Bapak/Ibu:</span>

        <div className="mt-4 border border border-gold100 rounded-lg px-5 py-6">
          <p className="font-bold text-2xl uppercase text-center">
            Orang tua/wali
            <br />
            wisudawan
          </p>
        </div>

        <div className="bg-gold100 rounded-md p-1 text-[10px] text-black font-semibold italic mt-4 text-center">
          Undangan hanya berlaku untuk 3 orang: 1 Wisudawan dan 2 Orang Tua/Wali
        </div>

        {!isOpen && (
          <button
            onClick={setIsOpen}
            className=" rounded-full bg-gold100 text-black font-bold px-4 py-2 mt-[30px]"
          >
            <a href="#agenda" className="hover text-black font-semibold">
              Buka Undangan
            </a>
          </button>
        )}
      </div>
    </Container>
  );
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Wisuda Akbar 2025</h1>
      <p className="mt-4 text-lg">5 Oktober 2025 – Gedung Serbaguna</p>

      <Countdown targetDate="2025-10-05T08:00:00" />
    </section>
  );
};

export default Hero;
