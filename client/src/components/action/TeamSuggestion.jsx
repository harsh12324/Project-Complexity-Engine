import SectionCard from '../common/SectionCard';

function TeamSuggestion({ teamSuggestion }) {
  return (
    <SectionCard title="Suggested Team Setup" subtitle="A practical team structure for executing the current project.">
      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
        <p className="text-sm text-slate-300">Ideal Team Size</p>
        <p className="mt-1 text-2xl font-bold text-white">{teamSuggestion.idealTeamSize}</p>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {teamSuggestion.suggestedRoles.map((role) => (
          <div key={role} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            {role}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default TeamSuggestion;
