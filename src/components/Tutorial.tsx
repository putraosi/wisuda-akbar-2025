import { IcVideo } from "../assets";
import { openURL } from "../helpers/linking";
import Container from "./Container";
import Header from "./Header";
import type { ItemProps } from "./Items";
import Item from "./Items";

const dataVideo: ItemProps[] = [
  {
    id: 1,
    name: "HARI 1",
    description: "SMP-SMA Ikhwan",
    link: "https://drive.google.com/file/d/1ON4rTOpNuindWkzGVw5ITBz8Nd4pZbCd/view",
    image: IcVideo,
  },
  {
    id: 2,
    name: "HARI 2 Sesi 1",
    description: "SMP-SMA Akhwat",
    link: "https://drive.google.com/file/d/1-nnsf6kKpaIMFhe3H1I0glYW89YBGzun/view",
    image: IcVideo,
  },
  {
    id: 3,
    name: "HARI 2 Sesi 2",
    description: "SD Ikhwan-Akhwat",
    link: "https://drive.google.com/file/d/1_Y6ojhNTnVdbtOX4En5FdI8q1faJeatG/view",
    image: IcVideo,
  },
];

const Tutorial = () => {
  return (
    <Container id="tutorial" className="items-center py-10">
      <Header />

      <div className="center flex-col p-10">
        <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-none text-center">
          VIDEO TUTORIAL
        </h1>
        <h3 className="text-2xl font-extrabold leading-none text-center">
          KEDATANGAN KE VENUE
        </h3>

        <div className="bg-gold100 rounded-md p-1 text-xs text-black italic text-center  mt-2 mb-6">
          Ketuk icon rekaman untuk akses tautan lengkap
        </div>

        <div>
          {dataVideo.map((item: ItemProps, index) => (
            <Item key={index} data={item} onClick={() => openURL(item?.link)} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Tutorial;
