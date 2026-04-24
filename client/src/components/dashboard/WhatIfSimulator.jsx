import { useMemo, useState } from 'react';
import SectionCard from '../common/SectionCard';
import AnimatedButton from '../common/AnimatedButton';
import { analyzeProject } from '../../services/api';

function SmallRange({ label, value, onChange, min, max }) {
  return (
    <label className="block rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-semibold text-white">{value}</span>
      </div>
      <input
        type="range"
        className="mt-3 w-full"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

function WhatIfSimulator({ formData, result }) {
  const [teamSize, setTeamSize] = useState(formData.teamSize);
  const [timelineDays, setTimelineDays] = useState(formData.timelineDays);
  const [integrations, setIntegrations] = useState(formData.integrations);
  const [modules, setModules] = useState(formData.modules);
  const [loading, setLoading] = useState(false);
  const [simulated, setSimulated] = useState(null);

  const changedPayload = useMemo(
    () => ({ ...formData, teamSize, timelineDays, integrations, modules }),
    [formData, teamSize, timelineDays, integrations, modules]
  );

  const runSimulation = async () => {
    try {
      setLoading(true);
      const response = await analyzeProject(changedPayload);
      setSimulated(response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionCard
      title="What-if Simulator"
      subtitle="Test how scope, team size, integrations, and deadline change the outcome."
      action={
        <AnimatedButton onClick={runSimulation} disabled={loading} className="disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? 'Running...' : 'Run Scenario'}
        </AnimatedButton>
      }
    >
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3 md:grid-cols-2">
          <SmallRange label="Team Size" value={teamSize} onChange={setTeamSize} min={1} max={10} />
          <SmallRange label="Timeline Days" value={timelineDays} onChange={setTimelineDays} min={7} max={120} />
          <SmallRange label="Integrations" value={integrations} onChange={setIntegrations} min={0} max={10} />
          <SmallRange label="Modules" value={modules} onChange={setModules} min={1} max={15} />
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <p className="text-sm text-slate-300">Current vs simulated</p>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <div className="flex items-center justify-between"><span>Current score</span><strong>{result.score}/100</strong></div>
            <div className="flex items-center justify-between"><span>Simulated score</span><strong>{simulated ? `${simulated.score}/100` : '—'}</strong></div>
            <div className="flex items-center justify-between"><span>Current timeline</span><strong>{result.timeline.realistic} days</strong></div>
            <div className="flex items-center justify-between"><span>Simulated timeline</span><strong>{simulated ? `${simulated.timeline.realistic} days` : '—'}</strong></div>
            <div className="flex items-center justify-between"><span>Risk count</span><strong>{simulated ? simulated.risks.length : result.risks.length}</strong></div>
          </div>
          {simulated ? (
            <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-sm text-cyan-100">
              Scenario result: {simulated.difficulty} · {simulated.timeline.schedulePressure} pressure
            </div>
          ) : null}
        </div>
      </div>
    </SectionCard>
  );
}

export default WhatIfSimulator;
