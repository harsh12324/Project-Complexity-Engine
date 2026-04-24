import { useState } from 'react';
import SectionCard from '../components/common/SectionCard';
import AnimatedButton from '../components/common/AnimatedButton';
import ComparisonTable from '../components/dashboard/ComparisonTable';
import { SelectField, TextInput } from '../components/input/FormControls';
import { analyzeProject } from '../services/api';

function CompactEditor({ title, formData, setField }) {
  return (
    <SectionCard title={title} subtitle="Adjust the key planning signals for this scenario.">
      <div className="grid gap-4 md:grid-cols-2">
        <TextInput label="Project Name" value={formData.projectName} onChange={(value) => setField('projectName', value)} placeholder="Project name" />
        <SelectField label="Domain" value={formData.domain} onChange={(value) => setField('domain', value)} options={['Web App', 'Mobile App', 'AI Project', 'Management System', 'E-commerce', 'IoT Project']} />
        <SelectField label="Analysis Mode" value={formData.analysisMode} onChange={(value) => setField('analysisMode', value)} options={['Full Product', 'MVP']} />
        <SelectField label="Team Experience" value={formData.teamExperience} onChange={(value) => setField('teamExperience', value)} options={['Beginner', 'Intermediate', 'Advanced']} />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">Modules: {formData.modules}<input type="range" min="1" max="15" value={formData.modules} onChange={(e) => setField('modules', Number(e.target.value))} className="mt-3 w-full" /></label>
        <label className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">Features: {formData.features}<input type="range" min="1" max="20" value={formData.features} onChange={(e) => setField('features', Number(e.target.value))} className="mt-3 w-full" /></label>
        <label className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">Integrations: {formData.integrations}<input type="range" min="0" max="10" value={formData.integrations} onChange={(e) => setField('integrations', Number(e.target.value))} className="mt-3 w-full" /></label>
        <label className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">Timeline Days: {formData.timelineDays}<input type="range" min="7" max="120" value={formData.timelineDays} onChange={(e) => setField('timelineDays', Number(e.target.value))} className="mt-3 w-full" /></label>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <SelectField label="Security" value={formData.securityLevel} onChange={(value) => setField('securityLevel', value)} options={['Low', 'Medium', 'High']} />
        <SelectField label="Data Complexity" value={formData.dataComplexity} onChange={(value) => setField('dataComplexity', value)} options={['Low', 'Medium', 'High']} />
        <SelectField label="UI Complexity" value={formData.uiComplexity} onChange={(value) => setField('uiComplexity', value)} options={['Low', 'Medium', 'High']} />
      </div>
    </SectionCard>
  );
}

function CompareProjects({ formA, setFormA, formB, setFormB, resultA, resultB, onLoadTemplateA, onLoadTemplateB, templates }) {
  const [loading, setLoading] = useState(false);

  const setFieldA = (key, value) => setFormA((prev) => ({ ...prev, [key]: value }));
  const setFieldB = (key, value) => setFormB((prev) => ({ ...prev, [key]: value }));

  const handleCompare = async () => {
    try {
      setLoading(true);
      const [a, b] = await Promise.all([analyzeProject(formA), analyzeProject(formB)]);
      resultA.current = a;
      resultB.current = b;
      resultA.setValue(a);
      resultB.setValue(b);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-5">
      <div className="grid gap-5 xl:grid-cols-2">
        <CompactEditor title="Project A" formData={formA} setField={setFieldA} />
        <CompactEditor title="Project B" formData={formB} setField={setFieldB} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SectionCard title="Load Template for Project A" subtitle="Use a fast starting point.">
          <div className="flex flex-wrap gap-2">
            {templates.map((template) => (
              <button key={`A-${template.id}`} type="button" onClick={() => onLoadTemplateA(template)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-500/10">{template.name}</button>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Load Template for Project B" subtitle="Create a side-by-side scenario.">
          <div className="flex flex-wrap gap-2">
            {templates.map((template) => (
              <button key={`B-${template.id}`} type="button" onClick={() => onLoadTemplateB(template)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-violet-400/30 hover:bg-violet-500/10">{template.name}</button>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="flex justify-end">
        <AnimatedButton onClick={handleCompare} disabled={loading} className="disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? 'Comparing...' : 'Compare Projects'}
        </AnimatedButton>
      </div>

      {resultA.value && resultB.value ? (
        <ComparisonTable resultA={resultA.value} resultB={resultB.value} nameA={formA.projectName} nameB={formB.projectName} />
      ) : (
        <SectionCard title="Comparison Output" subtitle="Run comparison to see side-by-side results.">
          <p className="text-sm text-slate-300">The comparison table will appear here after you run both scenarios.</p>
        </SectionCard>
      )}
    </div>
  );
}

export default CompareProjects;
