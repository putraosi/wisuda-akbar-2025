import Container from "./Container";
import FormToGoogle from "./FormToGoogle";
import Header from "./Header";

const RSVP = () => {
  return (
    <Container id="RSVP" className="items-center py-10">
      <Header />

      <div className="center flex-col p-10 w-full">
        <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-none text-center">
          RSVP
        </h1>

        <p className="text-lg font-extrabold text-center mt-6">
          Tanpa mengurangi rasa hormat kami kepada para tamu undangan, mohon
          sekiranya tamu undangan dapat melakukan konfirmasi kehadiran terlebih
          dahulu.
        </p>

        <FormToGoogle />
      </div>
    </Container>
  );
};

export default RSVP;
