"use client";
import { LayoutDashboard, Users, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
        <nav className="space-y-6">
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <LayoutDashboard size={18} /> Dashboard
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <Users size={18} /> Users
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <Settings size={18} /> Settings
          </div>
        </nav>
      </div>
      <ThemeToggle />
    </aside>
  );
}