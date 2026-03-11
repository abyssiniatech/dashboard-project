// "use client";
// import { LayoutDashboard, Users, Settings } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import Link from "next/link";

// export default function Sidebar() {
//   return (
//     <aside className="w-64 h-screen bg-slate-900 text-white p-6 flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
//         <nav className="space-y-6">
//           <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
//             <LayoutDashboard size={18} /> Dashboard
//           </div>
//           <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
//             <Users size={18} /> Users
//           </div>
//           <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
//             <Settings size={18} /> Settings
//           </div>
//         </nav>
//       </div>
//       <ThemeToggle />
//     </aside>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Settings, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface MenuItem {
  name: string;
  path: string;
  icon: React.FC<{ size?: number }>;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true); // collapsible

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-slate-900 text-white h-screen flex flex-col transition-all duration-300`}
    >
      {/* Top Logo & Toggle */}
      <div className="flex items-center justify-between p-4">
        {isOpen && <h2 className="text-2xl font-bold">Admin Panel</h2>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded hover:bg-slate-700"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-2 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-slate-200"
              }`}
            >
              <item.icon size={20} />
              {isOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Theme Toggle */}
      <div className="p-4">
        <ThemeToggle />
      </div>
    </aside>
  );
}