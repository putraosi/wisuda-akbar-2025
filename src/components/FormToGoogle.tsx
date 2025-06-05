import { useRef, useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScGCA6CCxJFt2Aatkq06pkoVZ295QgN67icLEKGDca6DB0Tlw/formResponse";

const GoogleFormIntegration = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setIsConfirm(true);
      formRef.current?.reset();
    }, 100); // delay agar kirim tetap jalan
  };

  if (isConfirm)
    return (
      <span className="text-center mt-10 font-medium">
        Terima kasih sudah mengisi konfirmasi kehadiran.
      </span>
    );

  return (
    <div className="w-full">
      {/* Hidden iframe target to prevent opening new tab */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

      <form
        ref={formRef}
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="mx-auto p-6 bg-white shadow-md rounded space-y-4 text-black text-xs mt-6"
      >
        <label className="block text-black">
          Nama Wisudawan <span className="text-red-500">*</span>
          <input
            type="text"
            name="entry.74606891"
            required
            placeholder="Nama Wisudawan"
            className="w-full p-2 border rounded"
          />
        </label>

        <div>
          <span className="block mb-1">
            Info Kehadiran <span className="text-red-500">*</span>
          </span>
          <label className="mr-4">
            <input
              type="radio"
              name="entry.1284787753"
              value="Hadir"
              required
              className="mr-1"
            />
            Hadir
          </label>
          <label>
            <input
              type="radio"
              name="entry.1284787753"
              value="Berhalangan Hadir"
              className="mr-1"
            />
            Berhalangan Hadir
          </label>
        </div>

        <label className="block">
          Jumlah Kehadiran <span className="text-red-500">*</span>
          <input
            type="text"
            name="entry.1983486079"
            placeholder="1 - 3"
            required
            className="w-full p-2 border rounded"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-gold100 text-white py-2 rounded hover:font-extrabold"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default GoogleFormIntegration;
