import SectionCard from '../common/SectionCard';
import { SelectField } from './FormControls';

function RiskForm({ formData, setField }) {
  return (
    <SectionCard title="Risk & Uncertainty" subtitle="Tell the expert system how stable your requirements and dependencies are.">
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label="Uncertainty Level"
          value={formData.uncertaintyLevel}
          onChange={(value) => setField('uncertaintyLevel', value)}
          options={['Low', 'Medium', 'High']}
        />
        <SelectField
          label="External Dependency Level"
          value={formData.externalDependencyLevel}
          onChange={(value) => setField('externalDependencyLevel', value)}
          options={['Low', 'Medium', 'High']}
        />
      </div>
    </SectionCard>
  );
}

export default RiskForm;
