import Container from "./Container";
import Header from "./Header";

const DressCode = () => {
  return (
    <Container id="dress-code" className="items-center py-10">
      <Header />

      {/* IKHWAN */}
      <div className="w-5/6 ">
        <div className="w-full text-black font-extrabold bg-gold100 rounded-md text-center mt-6 py-1">
          DRESS CODE
        </div>

        <div className="text-center borderGold py-1 font-extrabold mt-4  mb-1 text-lg">
          WISUDAWAN
        </div>

        <div className="row gap-1">
          <div className="basis-1/3 borderGold text-center h-20 center font-bold text-sm flex flex-col leading-none">
            Ikhwan
          </div>

          <div className="basis-2/3 borderGold h-20 text-sm center flex-col px-2">
            Jubah Wisuda, Seragam Hari Jumat (Putih), Sepatu Formal
          </div>
        </div>

        <div className="row gap-1">
          <div className="basis-1/3 borderGold text-center h-20 center font-bold text-sm flex flex-col leading-none">
            Akhwat
          </div>

          <div className="basis-2/3 borderGold h-20 text-sm center flex-col px-2">
            Jubah Wisuda, Seragam Hari Selasa (Hitam), Sepatu Formal
          </div>
        </div>
      </div>

      {/* AKHWAT */}
      <div className="w-5/6 ">
        <div className="text-center borderGold py-1 font-extrabold mt-4 mb-1 text-lg uppercase leading-5">
          Orang Tua/Wali
          <br /> Tamu Undangan
        </div>

        <div className="row gap-1">
          <div className="basis-1/3 borderGold text-center h-20 center font-bold flex-col">
            Ikhwan
          </div>

          <div className="basis-2/3 borderGold h-20 text-sm center flex-col px-2">
            Pakaian Formal/Syar’i & Sepatu Formal
          </div>
        </div>

        <div className="row gap-1 mt-1">
          <div className="basis-1/3 borderGold text-center h-20 center font-bold flex-col">
            Akhwat
          </div>

          <div className="basis-2/3 borderGold h-20 text-sm center flex-col px-2">
            Pakaian Formal/Syar’i & Sepatu Formal
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DressCode;
