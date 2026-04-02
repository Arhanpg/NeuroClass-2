import { Card, CardContent } from "@/components/ui/card";

export function MetricCard({ label, value, change }: { label: string; value: string; change?: string }) {
  return (
    <Card><CardContent className="p-6"><p className="text-sm text-gray-500">{label}</p><p className="text-3xl font-bold mt-1">{value}</p>{change && <p className="text-sm text-green-500 mt-1">{change}</p>}</CardContent></Card>
  );
}
