const options = [
  { value: "SOCRATIC", label: "Socratic", desc: "Guided questioning" },
  { value: "SCAFFOLDED", label: "Scaffolded", desc: "Step-by-step support" },
  { value: "DIRECT", label: "Direct", desc: "Explicit instruction" },
  { value: "PROJECT_BASED", label: "Project-Based", desc: "Learning by doing" },
];

export function PedagogySelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((opt) => (
        <button key={opt.value} type="button" onClick={() => onChange(opt.value)}
          className={`p-3 rounded-lg border text-left transition ${value === opt.value ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20" : "border-gray-200 hover:border-gray-300"}`}>
          <div className="font-medium text-sm">{opt.label}</div>
          <div className="text-xs text-gray-500">{opt.desc}</div>
        </button>
      ))}
    </div>
  );
}
