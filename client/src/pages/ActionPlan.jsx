import RoadmapView from '../components/action/RoadmapView';
import SuggestionsPanel from '../components/action/SuggestionsPanel';
import TeamSuggestion from '../components/action/TeamSuggestion';
import ReportExport from '../components/action/ReportExport';
import ScopeReductionPanel from '../components/action/ScopeReductionPanel';
import AssistantPanel from '../components/action/AssistantPanel';

function ActionPlan({ result, formData }) {
  if (!result) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
        Run the analysis first to generate the action plan.
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      <RoadmapView roadmap={result.roadmap} />
      <ScopeReductionPanel scopeReduction={result.scopeReduction} />
      <div className="grid gap-5 xl:grid-cols-2">
        <SuggestionsPanel recommendations={result.recommendations} />
        <TeamSuggestion teamSuggestion={result.teamSuggestion} />
      </div>
      <AssistantPanel formData={formData} />
      <ReportExport formData={formData} result={result} />
    </div>
  );
}

export default ActionPlan;
