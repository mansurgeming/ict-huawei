import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../../components/sidebar";

const growthData = [
  { day: 1, growth: 1 },
  { day: 3, growth: 3 },
  { day: 7, growth: 7 },
  { day: 14, growth: 12 },
  { day: 21, growth: 18 },
  { day: 30, growth: 25 },
];

export default function DetailGarden() {
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [showTreatmentModal, setShowTreatmentModal] = useState(false);
  const [treatmentText, setTreatmentText] = useState("Loading...");
  const [showHarvestModal, setShowHarvestModal] = useState(false);
  const [harvestData, setHarvestData] = useState({ weight: "", height: "" });

  const handleHarvest = () => {
    setShowHarvestModal(true);

    setTimeout(() => {
      setShowHarvestModal(false);
    }, 5000);
  };
  const handleInputHarvestChange = (field: string, value: string) => {
    setHarvestData({ ...harvestData, [field]: value });
  };
  const [tableData, setTableData] = useState([
    {
      dateTime: "29-01-2025 17:00:03",
      voltage: "3.3",
      pulseFrequency: "50",
      electricField: "200",
      pipeLength: "10",
      lastHeight: "15",
      lastHeightCheckTime: "29-01-2025 16:59:59",
    },
  ]);
  const handleTreatment = () => {
    setShowTreatmentModal(true);
    setTreatmentText("Loading...");

    setTimeout(() => {
      setTreatmentText("Treatment Success");
    }, 5000);

    setTimeout(() => {
      setShowTreatmentModal(false);
    }, 7000);
  };

  // Fungsi menambah baris tabel
  const addRow = () => {
    setTableData([
      ...tableData,
      {
        dateTime: "",
        voltage: "",
        pulseFrequency: "",
        electricField: "",
        pipeLength: "",
        lastHeight: "",
        lastHeightCheckTime: "",
      },
    ]);
  };

  // Fungsi menangani perubahan input di dalam tabel
  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedData = [...tableData];
    updatedData[index][field as keyof (typeof tableData)[0]] = value;
    setTableData(updatedData);
  };

  // Fungsi submit (bisa diubah untuk mengirim data ke server)
  const handleSubmit = () => {
    console.log("Submitted Data:", tableData);
  };

  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar />
      {/* Modal Treatment */}
      {showTreatmentModal && (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-opacity-25 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold">{treatmentText}</h2>
            {treatmentText === "Loading..." && (
              <div className="mt-4 flex justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Pop-up Harvest */}
      {showHarvestModal && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-50 z-10 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Harvest Data</h2>

            {/* Input Weight */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Weight (g)
              </label>
              <input
                type="text"
                value={harvestData.weight}
                onChange={(e) =>
                  handleInputHarvestChange("weight", e.target.value)
                }
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* Input Height */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Height (cm)
              </label>
              <input
                type="text"
                value={harvestData.height}
                onChange={(e) =>
                  handleInputHarvestChange("height", e.target.value)
                }
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div className="flex justify-center gap-5">
              <button
                onClick={() => setShowHarvestModal(false)}
                className="mt-4 px-6 py-2 w-[120px] text-white rounded-lg shadow-md bg-red-600 hover:bg-red-500 block mx-auto"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowHarvestModal(false)}
                className="mt-4 px-6 py-2 w-[120px] text-white rounded-lg shadow-md bg-[#007043] hover:bg-[#669439] block mx-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="p-6 bg-gray-100 h-screen w-full">
        {/* Kotak Atas: Kiri & Kanan */}
        <div className="grid grid-cols-2 gap-6">
          {/* Kotak Kiri - Data Tanaman */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            {/* 4 Button Utama */}
            <div className="flex justify-between mb-4">
              {["Treatment", "Setup", "Harvest", "Train"].map((btn) => (
                <button
                  key={btn}
                  className="w-[125px] py-2 text-white rounded-lg shadow-md bg-[#007043] hover:bg-[#669439]"
                  onClick={
                    btn === "Setup"
                      ? () => setShowSetupModal(true)
                      : btn === "Treatment"
                      ? () => handleTreatment()
                      : btn === "Harvest"
                      ? () => setShowHarvestModal(true)
                      : undefined
                  }
                >
                  {btn}
                </button>
              ))}
            </div>

            <h2 className="text-lg font-bold mb-4">Plant Data</h2>

            {/* Bungkus Derajat, Humidity, dan Ketinggian */}
            <div className="bg-green-100 p-4 rounded-lg mb-4 shadow-sm flex justify-around">
              <p className="text-gray-700 font-semibold">26°C</p>
              <p className="text-gray-700 font-semibold">80% Humidity</p>
              <p className="text-gray-700 font-semibold">800 Mdpl</p>
            </div>

            {/* Bungkus Data */}
            {[
              { label: "Plants Age", value: "16 Days" },
              { label: "Last Treatment", value: "29-01-2025 17:00:03 GMT(+7)" },
              { label: "Last Checking", value: "29-01-2025 17:00:03 GMT(+7)" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg mb-2 shadow-sm"
              >
                <p className="text-gray-800 font-semibold">
                  <strong>{item.label}:</strong> {item.value}
                </p>
              </div>
            ))}
          </div>
          {showSetupModal && (
            <div className="z-10 fixed inset-0 flex items-center justify-center bg-opacity-25 backdrop-blur-md">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-center">SETUP</h2>
                <div className="p-8 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Plant Name"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Rack Number"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Phase"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Growing Medium"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Planting Distance"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Nutrient"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Media"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    type="number"
                    placeholder="Number of Plants"
                    className="w-96 p-2 border border-gray-300 rounded-lg bg-white text-black"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg mr-2"
                    onClick={() => setShowSetupModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    onClick={() => setShowSetupModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Kotak Kanan - Grafik Growth */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-bold mb-4">Growth Progress</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="day"
                  label={{
                    value: "Days",
                    position: "insideBottom",
                    offset: -5,
                  }}
                />
                <YAxis
                  label={{
                    value: "Growth (cm)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="growth"
                  stroke="#16A34A"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Kotak Bawah - Tabel */}
        <div className="bg-white mt-6 p-6 rounded-2xl shadow-lg overflow-x-auto">
          <h2 className="text-lg font-bold mb-4">Sensor Data</h2>

          {/* Tombol Add Row */}
          <div className="flex justify-end">
            <button
              onClick={addRow}
              className="mb-4 px-4 py-2 w-[125px] text-white rounded-lg shadow-md bg-[#007043] hover:bg-[#669439]"
            >
              Add Row
            </button>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 border text-black">Date Time</th>
                <th className="p-3 border text-black">Voltage (V)</th>
                <th className="p-3 border text-black">Pulse Frequency (Hz)</th>
                <th className="p-3 border text-black">Electric Field (kV/m)</th>
                <th className="p-3 border text-black">Pipe Length (m)</th>
                <th className="p-3 border text-black">Last Height (cm)</th>
                <th className="p-3 border text-black">
                  Last Height Check Time
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="text-center">
                  {Object.keys(row).map((field) => (
                    <td key={field} className="p-3 border text-black">
                      <input
                        type="text"
                        value={row[field as keyof typeof row]}
                        onChange={(e) =>
                          handleInputChange(index, field, e.target.value)
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tombol Submit */}
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 w-[125px] text-white rounded-lg shadow-md bg-[#007043] hover:bg-[#669439] block mx-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
