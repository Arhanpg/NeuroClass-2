export function NotificationItem({ title, time, read }: { title: string; time: string; read: boolean }) {
  return (
    <div className={`p-3 rounded-lg cursor-pointer transition ${read ? "opacity-60" : "bg-brand-50 dark:bg-brand-900/10"}`}>
      <p className="text-sm font-medium">{title}</p><p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  );
}
