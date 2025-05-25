import Container from "./Container";
import FormUcapan from "./Form/FormUcapan";
import Header from "./Header";
import UcapanList from "./UcapanList";

const Remark = () => {
  return (
    <Container id="RSVP" className="items-center py-10">
      <Header />

      <div className="center flex-col p-10 w-full ">
        <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-none text-center">
          Kirim Ucapan & Doa
        </h1>

        <FormUcapan />

        <UcapanList />
      </div>
    </Container>
  );
};

export default Remark;
