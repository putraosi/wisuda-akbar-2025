import { IcGeneration, IcLogo } from "../assets";
import { NAME } from "../constantas";
import Container from "./Container";
import Header from "./Header";

const Agenda = () => {
  return (
    <Container id="agenda" className="items-center py-10">
      <Header />

      {/* IKHWAN */}
      <div className="w-3/5 ">
        <div className="text-center borderGold py-1 font-extrabold mt-6 mb-1 text-lg">
          IKHWAN
        </div>

        <div className="row gap-1">
          <div className="basis-1/3 borderGold text-center h-16 center font-bold text-sm">
            SMP
            <br />
            SMA
          </div>

          <div className="basis-2/3 borderGold h-16 text-xs center flex-col">
            <span className="font-bold">Rabu, 18 Juni 2025</span>
            <span>06:30 - 13:00 WIB</span>
          </div>
        </div>
      </div>

      {/* AKHWAT */}
      <div className="w-3/5 ">
        <div className="text-center borderGold py-1 font-extrabold mt-4 mb-1 text-lg">
          AKHWAT
        </div>

        <div className="row gap-1">
          <div className="basis-1/3 borderGold text-center h-16 center font-bold flex-col">
            <span className="text-sm text-gold100">Sesi 1</span>
            <span className="text-xs">SMP-SMA</span>
          </div>

          <div className="basis-2/3 borderGold h-16 text-xs center flex-col">
            <span className="font-bold">Kamis, 19 Juni 2025</span>
            <span>06:30 - 12:00 WIB</span>
          </div>
        </div>

        <div className="row gap-1 mt-1">
          <div className="basis-1/3 borderGold text-center h-16 center font-bold flex-col">
            <span className="text-sm text-gold100">Sesi 2</span>
            <span className="text-xs">SD</span>
            <span className="text-[8px]">(Ikhwan & Akhwat)</span>
          </div>

          <div className="basis-2/3 borderGold h-16 text-xs center flex-col">
            <span className="font-bold">Kamis, 19 Juni 2025</span>
            <span>12:30 - 16:30 WIB</span>
          </div>
        </div>
      </div>

      {/* DRESS CODE */}
      <div className="w-5/6 mt-6">
        <div className="w-full text-black font-extrabold bg-gold100 rounded-md text-center py-1">
          DRESS CODE
        </div>

        {/* WISUDAWAN */}
        <div className="row gap-1 mt-2">
          <div className="basis-1/3 borderGold text-center h-16 center font-bold text-sm">
            Wisudawan
          </div>

          <div className="basis-2/3 borderGold h-16 center flex-col px-4">
            <div className="row gap-2">
              <span className="font-semibold">Ikhwan </span>
              <p className="font-normal text-[8px]">
                Jubah Wisuda, Seragam Hari Jumat (Putih), Sepatu Formal
              </p>
            </div>

            <div className="row gap-2">
              <span className="font-semibold">Akhwat </span>
              <p className="font-normal text-[8px]">
                Jubah Wisuda, Seragam Hari Selasa (Hitam), Sepatu Formal
              </p>
            </div>
          </div>
        </div>

        {/* ORANG TUA/WALI */}
        <div className="row gap-1 mt-2">
          <div className="basis-1/3 borderGold text-center h-16 center font-bold text-xs">
            Orang Tua/Wali
            <br />
            Tamu Undangan
          </div>

          <div className="basis-2/3 borderGold h-16 center flex-col px-4">
            <div className="row gap-2">
              <span className="font-semibold">Ikhwan </span>
              <p className="font-normal text-[8px]">
                Pakaian Formal/Syar’i & Sepatu Formal
              </p>
            </div>

            <div className="row gap-2">
              <span className="font-semibold">Akhwat </span>
              <p className="font-normal text-[8px]">
                Pakaian Formal/Syar’i & Sepatu Formal
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Agenda;
