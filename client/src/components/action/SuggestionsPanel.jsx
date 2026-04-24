import SectionCard from '../common/SectionCard';

function SuggestionsPanel({ recommendations }) {
  return (
    <SectionCard title="Recommendations" subtitle="What to do next to make the project more feasible.">
      <div className="grid gap-3">
        {recommendations.map((item, index) => (
          <div key={`${item}-${index}`} className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-50">
            {item}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default SuggestionsPanel;
