import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserTable from "@/components/dashboard/UserTable";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsCard title="Revenue" value="$24,000" />
        <AnalyticsCard title="Users" value="1,240" />
        <AnalyticsCard title="Orders" value="320" />
      </div>
      <RevenueChart />
      <UserTable />
    </div>
  );
}