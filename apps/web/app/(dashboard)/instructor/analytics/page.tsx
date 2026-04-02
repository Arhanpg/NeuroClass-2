import { ClassHeatmap } from "@/components/analytics/ClassHeatmap";
import { GradeDistribution } from "@/components/analytics/GradeDistribution";
export default function AnalyticsPage() {
  return (<div><h1 className="text-3xl font-bold mb-6">Class Analytics</h1><div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><ClassHeatmap /><GradeDistribution /></div></div>);
}
