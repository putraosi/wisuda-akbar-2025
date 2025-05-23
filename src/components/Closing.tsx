import { IcGeneration, IcLogo } from "../assets";
import { NAME } from "../constantas";
import Container from "./Container";

const Closing = () => {
  return (
    <Container id="closing" className="items-center justify-center">
      <div className="flex flex-row gap-7">
        <img src={IcLogo} alt="logo" className="w-[80px] h-auto" />
        <img src={IcGeneration} alt="generation" className="w-auto h-[80px]" />
      </div>

      <h1 className="text-[46px]  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] text-center leading-none mt-6">
        WISUDA
        <br />
        AKBAR 2025
      </h1>

      <h4 className="font-bold uppercase text-xl ">{NAME}</h4>
    </Container>
  );
};

export default Closing;
