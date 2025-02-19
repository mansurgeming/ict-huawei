export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen p-4 flex flex-col text-black">
      <h2 className="text-lg font-bold mb-4">Growvanta</h2>
      <nav>
        <ul className="space-y-2">
          <li className="py-2 px-4 hover:bg-green-800 rounded">Dashboard</li>
          <li className="py-2 px-4 hover:bg-green-700 rounded">My Garden</li>
          <li className="py-2 px-4 hover:bg-green-700 rounded">Device</li>
          <li className="py-2 px-4 hover:bg-green-700 rounded">
            Customer Service
          </li>
          <li className="py-2 px-4 hover:bg-green-700 rounded">Product</li>
          <li className="py-2 px-4 hover:bg-green-700 rounded">Report</li>
        </ul>
      </nav>
    </aside>
  );
}
