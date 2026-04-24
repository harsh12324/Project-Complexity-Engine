import SectionCard from '../common/SectionCard';

function RuleTracePanel({ ruleTrace = [] }) {
  return (
    <SectionCard title="Why This Score?" subtitle="Exact expert rules that fired and how much they contributed.">
      <div className="grid gap-3">
        {ruleTrace.length ? (
          ruleTrace.map((rule) => (
            <div key={rule.id} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">{rule.title}</h4>
                  <p className="mt-1 text-sm text-slate-300">{rule.reason}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-slate-300">{rule.category}</span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-100">+{rule.score}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
            No heavy rules fired. Your current scope is relatively controlled.
          </div>
        )}
      </div>
    </SectionCard>
  );
}

export default RuleTracePanel;
