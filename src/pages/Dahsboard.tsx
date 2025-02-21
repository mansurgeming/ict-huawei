import { motion } from "framer-motion";
import Sidebar from "../components/sidebar"
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
    return (
        <div className="h-screen w-screen flex gap-5">
            <Sidebar title={'dashboard'} />
            <div className="h-full w-auto relative flex-grow">
                <img 
                    src="/assets/Dashboard-BG.webp" 
                    className="h-full w-full object-cover" 
                    alt="Dashboard Background" 
                />

                {/* Marker 1 */}
                <motion.div
                    className="absolute top-23 left-77 flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div className="w-24 h-10 bg-white rounded-md flex flex-col items-center shadow-md hover:scale-120">
                        <h3 className="text-sm font-bold text-green-700">POKCOY</h3>
                        <h4 className="text-xs text-black-700">14 days</h4>
                    </div>
                    <div className="h-5 w-5 rounded-full bg-green-700 drop-shadow-md"></div>
                    <hr className="border-r-3 h-10 border-black border-dashed"></hr>
                </motion.div>

                {/* Marker 2 */}
                <motion.div
                    className="absolute top-80 left-28 flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <div className="w-24 h-10 bg-white rounded-md flex flex-col items-center shadow-md hover:scale-120">
                        <h3 className="text-sm font-bold text-green-700">POKCOY</h3>
                        <h4 className="text-xs text-black-700">14 days</h4>
                    </div>
                    <div className="h-5 w-5 rounded-full bg-green-700 drop-shadow-md"></div>
                    <div className="w-80 flex flex-row">
                        <div className="w-1/2"></div>
                        <div className="w-1/2 border-b-3 border-l-3 border-black border-dashed h-10"></div>
                    </div>
                </motion.div>

                {/* Marker 3 */}
                <motion.div
                    className="absolute top-12 right-72 flex flex-row items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <hr className="border-t-3 w-24 border-black border-dashed"></hr>
                    <div className="h-5 w-5 rounded-full bg-green-700 drop-shadow-md"></div>
                    <div className="w-24 h-10 bg-white rounded-md flex flex-col items-center shadow-md hover:scale-120">
                        <h3 className="text-sm font-bold text-green-700">POKCOY</h3>
                        <h4 className="text-xs text-black-700">14 days</h4>
                    </div>
                </motion.div>

                {/* Marker 4 */}
                <motion.div
                    className="absolute top-40 right-30 flex flex-row items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <hr className="border-t-3 w-28 border-black border-dashed"></hr>
                    <div className="h-5 w-5 rounded-full bg-green-700 drop-shadow-md"></div>
                    <div className="w-24 h-10 bg-white rounded-md flex flex-col items-center shadow-md hover:scale-120">
                        <h3 className="text-sm font-bold text-green-700">POKCOY</h3>
                        <h4 className="text-xs text-black-700">14 days</h4>
                    </div>
                </motion.div>

                {/* Marker 5 */}
                <motion.div
                    className="absolute top-76 right-12 flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <div className="w-50">
                        <div className="w-1/2 border-t-3 border-r-3 border-black border-dashed h-10"></div>
                    </div>
                    <div className="h-5 w-5 rounded-full bg-green-700 drop-shadow-md"></div>
                    <div className="w-24 h-10 bg-white rounded-md flex flex-col items-center shadow-md hover:scale-120">
                        <h3 className="text-sm font-bold text-green-700">POKCOY</h3>
                        <h4 className="text-xs text-black-700">14 days</h4>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Dashboard;

