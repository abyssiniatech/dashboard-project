    "use client"
import { Card , CardContent } from "@/component/ui/card";

interface Props {
  title: string;
  value: string;
}

export default function AnalyticsCard({ title, value }: Props) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-gray-500 dark:text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </CardContent>
    </Card>
  );
}