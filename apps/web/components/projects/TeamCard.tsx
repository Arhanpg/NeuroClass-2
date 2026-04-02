export function TeamCard({ name, members }: { name: string; members: { name: string; avatar?: string }[] }) {
  return (
    <div className="p-4 rounded-xl border bg-white dark:bg-gray-900">
      <h3 className="font-semibold mb-3">{name}</h3>
      <div className="flex -space-x-2">{members.map((m, i) => <div key={i} className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-gray-900">{m.name[0]}</div>)}</div>
    </div>
  );
}
