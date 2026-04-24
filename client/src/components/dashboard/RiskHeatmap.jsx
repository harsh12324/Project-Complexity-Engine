import SectionCard from '../common/SectionCard';

const severityStyles = {
  Critical: 'border-rose-500/40 bg-rose-500/10 text-rose-100',
  High: 'border-orange-400/30 bg-orange-500/10 text-orange-100',
  Medium: 'border-amber-400/30 bg-amber-500/10 text-amber-100',
  Low: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-100'
};

function RiskHeatmap({ risks }) {
  return (
    <SectionCard title="Risk Analysis" subtitle="Expert rules triggered by your current project inputs.">
      <div className="grid gap-3">
        {risks.length ? (
          risks.map((risk, index) => (
            <div key={`${risk.title}-${index}`} className={`rounded-2xl border p-4 ${severityStyles[risk.severity] || severityStyles.Low}`}>
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-semibold">{risk.title}</h4>
                <span className="rounded-full border border-current/20 px-2.5 py-1 text-xs font-semibold">{risk.severity}</span>
              </div>
              <p className="mt-2 text-sm opacity-90">{risk.message}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] opacity-70">{risk.category}</p>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
            No major expert rules were triggered. This looks relatively manageable.
          </div>
        )}
      </div>
    </SectionCard>
  );
}

export default RiskHeatmap;
