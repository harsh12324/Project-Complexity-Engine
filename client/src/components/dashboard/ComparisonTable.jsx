import SectionCard from '../common/SectionCard';

const rows = [
  ['Complexity Score', (r) => `${r.score}/100`],
  ['Difficulty', (r) => r.difficulty],
  ['Analysis Mode', (r) => r.analysisMode],
  ['Realistic Timeline', (r) => `${r.timeline.realistic} days`],
  ['Schedule Pressure', (r) => r.timeline.schedulePressure],
  ['Risks Triggered', (r) => r.risks.length],
  ['Budget Tier', (r) => `${r.budget.tier} (${r.budget.estimatedRange})`]
];

function ComparisonTable({ resultA, resultB, nameA, nameB }) {
  const betterScore = resultA.score <= resultB.score ? 'A' : 'B';

  return (
    <SectionCard title="Comparison Table" subtitle="See both projects side by side and choose the safer or faster option.">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-200">
          <thead>
            <tr className="border-b border-white/10 text-slate-400">
              <th className="px-4 py-3">Metric</th>
              <th className="px-4 py-3">{nameA || 'Project A'}</th>
              <th className="px-4 py-3">{nameB || 'Project B'}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, getter]) => (
              <tr key={label} className="border-b border-white/5">
                <td className="px-4 py-3 font-medium text-white">{label}</td>
                <td className="px-4 py-3">{getter(resultA)}</td>
                <td className="px-4 py-3">{getter(resultB)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-50">
        Recommendation: Project {betterScore} looks easier to ship first based on the current complexity score.
      </div>
    </SectionCard>
  );
}

export default ComparisonTable;
