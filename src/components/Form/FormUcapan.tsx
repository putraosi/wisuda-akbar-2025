import { useEffect, useRef, useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdt4Z3JUdw1Ctdy2S7qwHCUNfh9TlTAJWFibsLLwZe0SQBORw/formResponse";

interface Props {}

const FormUcapan: React.FC<Props> = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      formRef.current?.reset();
    }, 100); // delay agar kirim tetap jalan
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
    }
  }, [submitted]);

  return (
    <div className="p-4 w-full bg-white shadow rounded-lg mt-6">
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

      {submitted && (
        <div className="text-green-600 mb-3">
          Terima kasih atas ucapan dan doanya!
        </div>
      )}

      <form
        ref={formRef}
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-4 text-black text-xs"
      >
        <label className="block text-black">
          Nama <span className="text-red-500">*</span>
          <input
            type="text"
            name="entry.773469327"
            required
            placeholder="Nama"
            className="w-full p-2 border rounded"
          />
        </label>
        <div>
          <label className="block text-black">
            Ucapan & Doa <span className="text-red-500">*</span>
            <textarea
              name="entry.1159957748"
              required
              placeholder="Ucapan & Doa"
              rows={2}
              className="w-full border px-3 py-2 rounded"
            />
          </label>
        </div>
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

export default FormUcapan;
