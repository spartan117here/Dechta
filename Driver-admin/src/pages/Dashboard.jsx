import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { stats } from "../data/mockData";
import { UsersThree, Moped, ClockCountdown, WarningDiamond } from "@phosphor-icons/react";
import L from 'leaflet';

// Fix for default Leaflet marker icons in React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Dashboard = () => {
  // Map icons to components dynamically
  const iconMap = { UsersThree, Moped, ClockCountdown, WarningDiamond };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = iconMap[stat.icon];
          return (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-${stat.color}-500 bg-${stat.color}-500/10`}>
                  <Icon size={24} weight="fill" />
               </div>
               <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</p>
                  <p className="text-2xl font-black dark:text-white">{stat.value}</p>
               </div>
            </div>
          )
        })}
      </div>

      {/* Map Section */}
      <div className="grid grid-cols-12 gap-8 h-[600px]">
         <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border dark:border-slate-800 p-6 overflow-hidden">
             <h3 className="font-extrabold dark:text-white mb-4">Dispatch Feed</h3>
             {/* Map over your drivers list here for the side list */}
             <div className="text-slate-500 text-sm">Driver list goes here...</div>
         </div>
         
         <div className="col-span-12 lg:col-span-8 bg-slate-200 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-900 relative z-0">
            <MapContainer center={[13.045, 80.250]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={[13.0418, 80.2341]}>
                  <Popup>Senthil Kumar <br /> Active</Popup>
                </Marker>
            </MapContainer>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;