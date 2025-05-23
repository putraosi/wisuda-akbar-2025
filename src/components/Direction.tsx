import { ImgDirection } from "../assets";
import { DIRECTION } from "../constantas";
import { openURL } from "../helpers/linking";
import Container from "./Container";
import Header from "./Header";

const Direction = () => {
  return (
    <Container id="direction" className="items-center py-10">
      <Header />

      <div className="center flex-col p-10">
        <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-none text-center">
          PETUNJUK ARAH
        </h1>

        <div className="bg-gold100 rounded-md p-1 text-xs text-black italic text-center  mt-2 mb-6">
          Ketuk gambar untuk akses tautan lengkap
        </div>

        <div className="mt-10 shadow-[0px_0px_100px_rgba(255,255,255,1)]">
          <img
            src={ImgDirection}
            alt="location"
            onClick={() => openURL(DIRECTION)}
            className="w-[340px] h-auto rounded-md cursor-pointer"
          />
        </div>
      </div>
    </Container>
  );
};

export default Direction;
