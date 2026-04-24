import SectionCard from '../common/SectionCard';

function ExpertExplanation({ explanation }) {
  return (
    <SectionCard title="Expert Explanation" subtitle="Why the engine classified the project this way.">
      <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-5 text-sm leading-7 text-slate-200">
        {explanation}
      </div>
    </SectionCard>
  );
}

export default ExpertExplanation;
