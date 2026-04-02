import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function CommitLog({ commits }: { commits: { sha: string; message: string; author: string; complexity: string }[] }) {
  return (
    <Table><TableHeader><TableRow><TableHead>SHA</TableHead><TableHead>Message</TableHead><TableHead>Author</TableHead><TableHead>Complexity</TableHead></TableRow></TableHeader>
      <TableBody>{commits.map((c) => (<TableRow key={c.sha}><TableCell className="font-mono text-xs">{c.sha.slice(0, 7)}</TableCell><TableCell>{c.message}</TableCell><TableCell>{c.author}</TableCell><TableCell><Badge variant={c.complexity === "high" ? "destructive" : "secondary"}>{c.complexity}</Badge></TableCell></TableRow>))}</TableBody>
    </Table>
  );
}
