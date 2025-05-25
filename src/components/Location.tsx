import { ImgLocation } from "../assets";
import { LOCATION } from "../constantas";
import { openURL } from "../helpers/linking";
import Container from "./Container";
import Header from "./Header";

const Location = () => {
  return (
    <Container id="location" className="items-center py-10">
      <Header />

      <div className="flex flex-col h-full w-full center">
        <div className="center flex-col p-10">
          <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-none text-center">
            LOKASI ACARA
          </h1>

          <div className="bg-gold100 rounded-md p-1 text-xs text-black italic text-center  mt-2 mb-6">
            Ketuk gambar untuk akses tauntan lengkap
          </div>

          <img
            src={ImgLocation}
            alt="location"
            onClick={() => openURL(LOCATION)}
            className="w-[340px] h-auto rounded-md cursor-pointer"
          />

          <h4 className="mt-6 text-xl sm:text-2xl font-extrabold text-center">
            The Krakatau Grand Ballroom
          </h4>

          <p className="text-center text-sm sm:text-base">
            Jl. Taman Mini Indonesia Indah Pintu 1 Tmii, Ceger, Kec. Cipayung,
            Jakarta, Daerah Khusus Ibukota Jakarta 13820
          </p>
        </div>

        <button
          onClick={() => openURL(LOCATION)}
          className=" rounded-full bg-gold100 text-black font-bold px-4 py-2 hover:text-white"
        >
          Lihat Lokasi Acara
        </button>
      </div>
    </Container>
  );
};

export default Location;
