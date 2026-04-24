import StatCard from '../components/common/StatCard';
import DifficultyBadge from '../components/dashboard/DifficultyBadge';
import ScoreGauge from '../components/dashboard/ScoreGauge';
import TimelineCard from '../components/dashboard/TimelineCard';
import BreakdownChart from '../components/dashboard/BreakdownChart';
import RadarChartBox from '../components/dashboard/RadarChartBox';
import RiskHeatmap from '../components/dashboard/RiskHeatmap';
import ExpertExplanation from '../components/dashboard/ExpertExplanation';
import TimelineChart from '../components/dashboard/TimelineChart';
import RuleTracePanel from '../components/dashboard/RuleTracePanel';
import WhatIfSimulator from '../components/dashboard/WhatIfSimulator';
import BudgetCard from '../components/dashboard/BudgetCard';

function AnalysisDashboard({ result, formData }) {
  if (!result) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
        Run the analysis first to view the dashboard.
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Complexity Score" value={`${result.score}/100`} hint="Overall difficulty signal" />
        <StatCard label="Difficulty" value={<DifficultyBadge difficulty={result.difficulty} />} hint="Expert classification" />
        <StatCard label="Mode" value={result.analysisMode} hint="MVP or Full Product" />
        <StatCard label="Schedule Pressure" value={result.timeline.schedulePressure} hint="Deadline realism" />
        <StatCard label="Total Risks" value={result.risks.length} hint="Triggered expert rules" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <ScoreGauge score={result.score} />
        <TimelineCard timeline={result.timeline} />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <BreakdownChart data={result.categoryScores} />
        <RadarChartBox data={result.radarData} />
      </div>

      <BudgetCard budget={result.budget} />
      <TimelineChart data={result.timeline.chartData} />
      <RuleTracePanel ruleTrace={result.ruleTrace} />
      <RiskHeatmap risks={result.risks} />
      <ExpertExplanation explanation={result.explanation} />
      <WhatIfSimulator formData={formData} result={result} />
    </div>
  );
}

export default AnalysisDashboard;
