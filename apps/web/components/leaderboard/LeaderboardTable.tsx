"use client";
import { useLeaderboard } from "@/lib/hooks/useLeaderboard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface LeaderboardTableProps {
  courseId: string;
}

export function LeaderboardTable({ courseId: _courseId }: LeaderboardTableProps) {
  const { entries, loading } = useLeaderboard();

  if (loading) return <div className="skeleton h-48 rounded-md" />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">#</TableHead>
          <TableHead>Student</TableHead>
          <TableHead className="text-right">Score</TableHead>
          <TableHead className="text-right">Rank</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry, i) => (
          <TableRow key={entry.userId}>
            <TableCell className="font-mono tabular-nums">{i + 1}</TableCell>
            <TableCell>{entry.displayName}</TableCell>
            <TableCell className="text-right tabular-nums">{entry.totalScore}</TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{entry.rank}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
