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
    link: "https://drive.google.com/file/d/1O1YquTKGK0BSrh4MnJRGLXaTLYUjW3GQ/view?usp=share_link",
    image: IcChair,
  },
  {
    id: 2,
    name: "HARI 2 Sesi 1",
    description: "SMP-SMA Akhwat",
    link: "https://drive.google.com/file/d/1SJrJXw1qqNjlpub7TIIyDSuXI0Ud1ji1/view?usp=share_link",
    image: IcChair,
  },
  {
    id: 3,
    name: "HARI 2 Sesi 2",
    description: "SD Ikhwan-Akhwat",
    link: "https://drive.google.com/file/d/17-x5zmXBP-xnjVEiA4W_JhNA0W-rVlVE/view?usp=share_link",
    image: IcChair,
  },
];

const Seat = () => {
  return (
    <Container id="seat" className="items-center py-10">
      <Header />

      <div className="flex flex-1 flex-col">
        <div className="flex-1 flex items-center flex-col p-10">
          <h1 className="text-[24px] font-extrabold leading-none text-center">
            NOMOR URUT PROSESI & <br />
            NOMOR KURSI
          </h1>
          <h3 className="text-[20px] font-extrabold leading-none text-center">
            WISUDAWAN
          </h3>

          <div className="bg-gold100 rounded-md p-1 text-xs text-black italic text-center  mt-2 mb-6">
            Ketuk icon kursi untuk akses tautan lengkap
          </div>

          <div>
            {dataSeat.map((item: ItemProps, index) => (
              <Item
                key={index}
                data={item}
                onClick={() => openURL(item?.link)}
              />
            ))}
          </div>
        </div>

        <span className="px-6 text-center text-xs mb-14">
          Tidak Diperkenankan Membawa Anak Dibawah Usia 12 Tahun Ke Dalam
          Ballroom
        </span>
      </div>
    </Container>
  );
};

export default Seat;
