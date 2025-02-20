import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import pokcoyImg from "../../assets/image/pokcoy.jpeg";
import lettuceImg from "../../assets/image/lettuce.jpeg";
import spinachImg from "../../assets/image/spinachhd.png";
import kaleImg from "../../assets/image/kale.png";
import cabbageImg from "../../assets/image/cabbagehd.jpeg";
import tomatoImg from "../../assets/image/tomatoes.jpeg";

const dummyGardens = [
  { id: 1, name: "Pokcoy", days: 10, plants: 4, image: pokcoyImg },
  { id: 2, name: "Lettuce", days: 8, plants: 6, image: lettuceImg },
  { id: 3, name: "Spinach", days: 12, plants: 5, image: spinachImg },
  { id: 4, name: "Kale", days: 15, plants: 7, image: kaleImg },
  { id: 5, name: "Cabbage", days: 20, plants: 3, image: cabbageImg },
  { id: 6, name: "Tomato", days: 18, plants: 5, image: tomatoImg },
];

export default function MyGarden() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="p-6 bg-gray-100 h-screen w-full">
        {/* Main Content */}
        <main className="flex-1 pl-6 p-6 shadow-xl bg-white">
          <h2 className="p-5 text-3xl text-black font-bold">Garden</h2>
          <h3 className="p-5 text-xl text-black">All Plants</h3>

          <div className="flex justify-end">
            <button
              className="mt-4 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-700"
              onClick={() => setShowModal(true)}
            >
              Add Garden +
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {dummyGardens.map((garden) => (
              <div
                key={garden.id}
                className="bg-green-800 text-white p-4 rounded shadow-md"
              >
                <img
                  src={garden.image}
                  alt={garden.name}
                  className="w-full h-96 object-cover rounded mb-2 bg-white"
                />
                <h3 className="text-lg font-bold">{garden.name}</h3>
                <p>{garden.days} Days</p>
                <p>{garden.plants} Plants</p>
                <Link to={"/detail-garden"}>
                  <button className="mt-2 px-2 py-1 bg-gray-500 text-white rounded">
                    Treated
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md">
              <div className="bg-[#223F3F] p-8 rounded-2xl shadow-2xl w-[450px]">
                <h2 className="text-xl font-bold text-white text-center">
                  Add New Garden
                </h2>
                <input
                  type="text"
                  placeholder="Enter plants name"
                  className="mt-4 p-3 w-full border border-gray-300 rounded-lg bg-white text-black"
                />
                <input
                  type="number"
                  placeholder="Enter the number of plant"
                  className="mt-4 p-3 w-full border border-gray-300 rounded-lg bg-white text-black"
                />
                <div className="flex justify-end mt-6 space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
