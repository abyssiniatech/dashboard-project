import Link from "next/link";
import { LayoutDashboard, BarChart3, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center px-6">

      {/* HERO SECTION */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Modern Admin Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A powerful admin dashboard built with
          <span className="font-semibold"> Next.js 14</span>,
          <span className="font-semibold"> TypeScript</span>,
          <span className="font-semibold"> Tailwind CSS</span>, and
          <span className="font-semibold"> Recharts</span>.
        </p>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        >
          <LayoutDashboard size={20} />
          Open Dashboard
        </Link>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl w-full">

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <BarChart3 className="text-blue-500 mb-4" size={30} />
          <h3 className="text-xl font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Visualize revenue, traffic, and performance using beautiful charts.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <Users className="text-green-500 mb-4" size={30} />
          <h3 className="text-xl font-semibold mb-2">User Management</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Manage users, permissions, and roles with powerful tables.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <ShieldCheck className="text-purple-500 mb-4" size={30} />
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Built with modern best practices for security and performance.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-20 text-gray-500 dark:text-gray-400 text-sm">
        Built with ❤️ using Next.js + Tailwind CSS
      </footer>

    </div>
  );
}