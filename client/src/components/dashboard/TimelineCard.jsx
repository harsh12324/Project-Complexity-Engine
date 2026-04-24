import SectionCard from '../common/SectionCard';

function TimelineCard({ timeline }) {
  return (
    <SectionCard title="Timeline Estimate" subtitle="Compare your current deadline with expert-system estimates.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <TimelineStat label="Optimistic" value={`${timeline.optimistic} days`} />
        <TimelineStat label="Realistic" value={`${timeline.realistic} days`} />
        <TimelineStat label="Risky" value={`${timeline.risky} days`} />
        <TimelineStat label="Pressure" value={timeline.schedulePressure} />
      </div>
    </SectionCard>
  );
}

function TimelineStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default TimelineCard;
