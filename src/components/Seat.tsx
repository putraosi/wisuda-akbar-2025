import { IcChair } from "../assets";
import { openURL } from "../helpers/linking";
import Container from "./Container";
import Header from "./Header";
import Item, { type ItemProps } from "./Items";

const dataSeat: ItemProps[] = [
  {
    id: 1,
    name: "HARI 1",
    description: "SMP-SMA Ikhwan",
    link: "https://drive.google.com/file/u/1/d/1gibE-aZ-fJnuvNN6Iu1f1nd2-lfhVAJR/view?usp=share_link",
    image: IcChair,
  },
  {
    id: 2,
    name: "HARI 2 Sesi 1",
    description: "SMP-SMA Akhwat",
    link: "https://drive.google.com/file/d/1iJ_MWdvDzqk0ajCzKD9CoXDH3jdTUz3i/view",
    image: IcChair,
  },
  {
    id: 3,
    name: "HARI 2 Sesi 2",
    description: "SD Ikhwan-Akhwat",
    link: "https://drive.google.com/file/d/1B9vV9fDFoD2lLBw5Z_FoXj0AOBZar7Gl/view",
    image: IcChair,
  },
];

const Seat = () => {
  return (
    <Container id="seat" className="items-center py-10">
      <Header />

      <div className="center flex-col p-10">
        <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-none text-center">
          NOMOR URUT & NOMOR KURSI
        </h1>
        <h3 className="text-[24px] sm:text-[30px] font-extrabold leading-none text-center">
          WISUDAWAN
        </h3>

        <div className="bg-gold100 rounded-md p-1 text-xs text-black italic text-center  mt-2 mb-6">
          Ketuk icon kursi untuk akses tautan lengkap
        </div>

        <div>
          {dataSeat.map((item: ItemProps, index) => (
            <Item key={index} data={item} onClick={() => openURL(item?.link)} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Seat;
