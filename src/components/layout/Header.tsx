"use client";

import { Bell, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 sticky top-0 z-50">
      {/* Left side - Page title */}
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Dashboard
      </h1>

      {/* Right side - Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <Bell className="text-gray-700 dark:text-gray-300" size={20} />
          {/* Example: small notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Admin User Info */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-md">
          <User className="text-gray-700 dark:text-gray-300" size={18} />
          <span className="text-gray-900 dark:text-white font-medium text-sm">
            Admin
          </span>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}