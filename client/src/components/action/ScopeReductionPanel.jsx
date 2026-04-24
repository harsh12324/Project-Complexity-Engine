import SectionCard from '../common/SectionCard';

function Group({ title, items, tone }) {
  return (
    <div className={`rounded-2xl border p-4 ${tone}`}>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-3 space-y-2 text-sm opacity-95">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-current opacity-80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScopeReductionPanel({ scopeReduction }) {
  return (
    <SectionCard title="Suggested Scope Reduction" subtitle="What to keep, what to postpone, and what to cut for a stronger release.">
      <div className="grid gap-4 xl:grid-cols-3">
        <Group title="Keep in MVP" items={scopeReduction.keepInMvp} tone="border-emerald-400/20 bg-emerald-500/10 text-emerald-50" />
        <Group title="Move to Phase 2" items={scopeReduction.moveToPhase2} tone="border-cyan-400/20 bg-cyan-500/10 text-cyan-50" />
        <Group title="Remove Now" items={scopeReduction.removeNow} tone="border-rose-400/20 bg-rose-500/10 text-rose-50" />
      </div>
    </SectionCard>
  );
}

export default ScopeReductionPanel;
