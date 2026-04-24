import SectionCard from '../common/SectionCard';
import { RangeField } from './FormControls';

function TeamTimelineForm({ formData, setField }) {
  return (
    <SectionCard title="Team & Timeline" subtitle="Estimate available execution power and delivery window.">
      <div className="grid gap-4 md:grid-cols-2">
        <RangeField label="Team Size" value={formData.teamSize} onChange={(value) => setField('teamSize', value)} min={1} max={10} />
        <RangeField label="Timeline (days)" value={formData.timelineDays} onChange={(value) => setField('timelineDays', value)} min={7} max={180} step={1} />
      </div>
    </SectionCard>
  );
}

export default TeamTimelineForm;
