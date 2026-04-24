import SectionCard from '../common/SectionCard';

const tierStyles = {
  High: 'text-rose-200 bg-rose-500/10 border-rose-500/25',
  Medium: 'text-amber-100 bg-amber-500/10 border-amber-500/25',
  Low: 'text-emerald-100 bg-emerald-500/10 border-emerald-500/25'
};

function BudgetCard({ budget }) {
  return (
    <SectionCard title="Budget Estimate" subtitle="A lightweight budget signal based on scope, risk, and delivery effort.">
      <div className="grid gap-4 md:grid-cols-[220px_1fr]">
        <div className={`rounded-2xl border p-4 ${tierStyles[budget.tier] || tierStyles.Low}`}>
          <p className="text-sm opacity-80">Budget Tier</p>
          <p className="mt-2 text-3xl font-bold">{budget.tier}</p>
          <p className="mt-3 text-sm opacity-90">{budget.estimatedRange}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <p className="text-sm font-semibold text-white">Key Cost Drivers</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {budget.drivers.map((driver) => (
              <span key={driver} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{driver}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-300">{budget.notes}</p>
        </div>
      </div>
    </SectionCard>
  );
}

export default BudgetCard;
