import SectionCard from '../common/SectionCard';
import { SelectField, ToggleField } from './FormControls';

function TechForm({ formData, setField }) {
  return (
    <SectionCard title="Technical Profile" subtitle="Capture depth in UI, data, security, and advanced features.">
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="UI Complexity" value={formData.uiComplexity} onChange={(value) => setField('uiComplexity', value)} options={['Low', 'Medium', 'High']} />
        <SelectField label="Data Complexity" value={formData.dataComplexity} onChange={(value) => setField('dataComplexity', value)} options={['Low', 'Medium', 'High']} />
        <SelectField label="Security Level" value={formData.securityLevel} onChange={(value) => setField('securityLevel', value)} options={['Low', 'Medium', 'High']} />
        <SelectField label="Scalability Need" value={formData.scalabilityNeed} onChange={(value) => setField('scalabilityNeed', value)} options={['Low', 'Medium', 'High']} />
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <ToggleField label="Authentication" checked={formData.hasAuth} onChange={(value) => setField('hasAuth', value)} />
        <ToggleField label="Payments" checked={formData.hasPayments} onChange={(value) => setField('hasPayments', value)} />
        <ToggleField label="Realtime Features" checked={formData.hasRealtime} onChange={(value) => setField('hasRealtime', value)} />
        <ToggleField label="AI / ML" checked={formData.hasAI} onChange={(value) => setField('hasAI', value)} />
        <ToggleField label="Analytics Dashboard" checked={formData.hasAnalytics} onChange={(value) => setField('hasAnalytics', value)} />
        <ToggleField label="File Upload" checked={formData.hasFileUpload} onChange={(value) => setField('hasFileUpload', value)} />
      </div>
    </SectionCard>
  );
}

export default TechForm;
