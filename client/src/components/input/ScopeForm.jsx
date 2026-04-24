import SectionCard from '../common/SectionCard';
import { RangeField } from './FormControls';

function ScopeForm({ formData, setField }) {
  return (
    <SectionCard title="Scope & Structure" subtitle="Quantify how large the product is.">
      <div className="grid gap-4 md:grid-cols-2">
        <RangeField label="Modules" value={formData.modules} onChange={(value) => setField('modules', value)} min={1} max={15} />
        <RangeField label="Features" value={formData.features} onChange={(value) => setField('features', value)} min={1} max={20} />
        <RangeField label="Integrations" value={formData.integrations} onChange={(value) => setField('integrations', value)} min={0} max={10} />
        <RangeField label="User Roles" value={formData.userRoles} onChange={(value) => setField('userRoles', value)} min={1} max={8} />
      </div>
    </SectionCard>
  );
}

export default ScopeForm;
