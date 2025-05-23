import { IcPaper } from "../assets";
import { openURL } from "../helpers/linking";
import Container from "./Container";
import Header from "./Header";
import type { ItemProps } from "./Items";
import Item from "./Items";

const dataSeat: ItemProps[] = [
  {
    id: 1,
    name: "HARI 1",
    description: "SMP-SMA Ikhwan",
    link: "https://drive.google.com/file/d/1k9GjqMVT828A42gMQBrDTlEcZICWytnk/view",
    image: IcPaper,
  },
  {
    id: 2,
    name: "HARI 2 Sesi 1",
    description: "SMP-SMA Akhwat",
    link: "https://drive.google.com/file/d/1kk4g5e83d32aUTSxmA6qy-RLUSjQnGVP/view",
    image: IcPaper,
  },
  {
    id: 3,
    name: "HARI 2 Sesi 2",
    description: "SD Ikhwan-Ikhwan",
    link: "https://drive.google.com/file/d/1c-V_-auFrpkX5YHZbSS8Z314GSJZaN1U/view",
    image: IcPaper,
  },
];

const Rundown = () => {
  return (
    <Container id="rundown" className="items-center py-10">
      <Header />

      <div className="center flex-col p-10">
        <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-none text-center">
          RUNDOWN ACARA
        </h1>

        <div className="bg-gold100 rounded-md p-1 text-xs text-black italic text-center  mt-2 mb-6">
          Ketuk icon kertas untuk akses tautan lengkap
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

export default Rundown;
