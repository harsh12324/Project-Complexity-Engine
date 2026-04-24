import SectionCard from '../common/SectionCard';

function RoadmapView({ roadmap }) {
  return (
    <SectionCard title="Generated Weekly Roadmap" subtitle="A week-by-week execution plan for the current scope.">
      <div className="space-y-4">
        {roadmap.map((phase) => (
          <div key={phase.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <h4 className="text-base font-semibold text-white">{phase.label}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {phase.tasks.map((task) => (
                <li key={task} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default RoadmapView;
