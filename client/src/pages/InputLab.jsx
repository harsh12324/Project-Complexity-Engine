import BasicInfoForm from '../components/input/BasicInfoForm';
import ScopeForm from '../components/input/ScopeForm';
import TechForm from '../components/input/TechForm';
import TeamTimelineForm from '../components/input/TeamTimelineForm';
import RiskForm from '../components/input/RiskForm';
import AnimatedButton from '../components/common/AnimatedButton';

function InputLab({ formData, setField, onAnalyze, loading }) {
  return (
    <div className="grid gap-5">
      <BasicInfoForm formData={formData} setField={setField} />
      <ScopeForm formData={formData} setField={setField} />
      <TechForm formData={formData} setField={setField} />
      <TeamTimelineForm formData={formData} setField={setField} />
      <RiskForm formData={formData} setField={setField} />

      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-5 shadow-glow backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-300">
              Ready for expert analysis?
            </p>
            <h3 className="mt-1 text-xl font-bold text-white">
              Analyze your complete project configuration
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              After filling all project details, run the expert system to generate complexity score,
              risk level, timeline, budget, roadmap, and recommendations.
            </p>
          </div>

          <AnimatedButton
            onClick={onAnalyze}
            disabled={loading}
            className="w-full disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          >
            {loading ? 'Analyzing...' : 'Analyze Main Project'}
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}

export default InputLab;