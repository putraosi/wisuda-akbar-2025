import { useEffect, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";

interface KehadiranData {
  Nama: string;
  "Ucapan & Doa": string;
  Timestamp: string;
}

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdgnATTv7atFFX7MdB-lRfNi_vnBk0ZXhn78aiyac2ZZpUbIfgFUHurfNqG1S2BG7uYDXbhDE0zhXK/pub?output=csv";

function csvToJson(csv: string): KehadiranData[] {
  const [headerLine, ...lines] = csv.split("\n");
  const headers = headerLine.split(",");

  return lines.map((line) => {
    const values = line.split(",");
    const obj: any = {};
    headers.forEach((header, idx) => {
      obj[header.trim()] = values[idx]?.trim();
    });
    return obj;
  });
}

const UcapanList = () => {
  const [data, setData] = useState<KehadiranData[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(SHEET_CSV_URL)
        .then((res) => res.text())
        .then((text) => {
          const json = csvToJson(text);
          setData(json);
        });
    };

    fetchData(); // fetch once on load

    const interval = setInterval(fetchData, 5000); // refresh every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const isShow: boolean = data && data?.length ? true : false;

  if (!isShow) return null;

  return (
    <div className="bg-white shadow rounded-lg p-4 mx-auto h-60 w-full overflow-y-auto space-y-4 mt-6">
      {data.map((item, idx) => (
        <div key={idx} className="border-b pb-2">
          <div className="flex items-start gap-3">
            <FiMessageCircle className="w-6 h-6 text-gray-500 mt-1" />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item["Nama"]}</p>
              <p className="text-sm text-gray-600">{item["Ucapan & Doa"]}</p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">
              {item["Timestamp"]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UcapanList;
