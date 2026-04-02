export function DashboardShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
