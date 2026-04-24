import SectionCard from '../common/SectionCard';
import { SelectField, TextArea, TextInput } from './FormControls';

function BasicInfoForm({ formData, setField }) {
  return (
    <SectionCard title="Basic Information" subtitle="Define what the project is, how much of it you want to ship, and where it belongs.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <TextInput
          label="Project Name"
          value={formData.projectName}
          onChange={(value) => setField('projectName', value)}
          placeholder="Ex. Smart Alumni Platform"
        />
        <SelectField
          label="Domain"
          value={formData.domain}
          onChange={(value) => setField('domain', value)}
          options={['Web App', 'Mobile App', 'AI Project', 'IoT Project', 'Academic Project', 'Management System', 'E-commerce']}
        />
        <SelectField
          label="Analysis Mode"
          value={formData.analysisMode}
          onChange={(value) => setField('analysisMode', value)}
          options={['Full Product', 'MVP']}
        />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <SelectField
          label="Platform"
          value={formData.platform}
          onChange={(value) => setField('platform', value)}
          options={['Web', 'Mobile', 'Both']}
        />
        <SelectField
          label="Team Experience"
          value={formData.teamExperience}
          onChange={(value) => setField('teamExperience', value)}
          options={['Beginner', 'Intermediate', 'Advanced']}
        />
      </div>
      <div className="mt-4">
        <TextArea
          label="Project Description"
          value={formData.description}
          onChange={(value) => setField('description', value)}
          placeholder="Describe the problem, core features, and target users."
        />
      </div>
    </SectionCard>
  );
}

export default BasicInfoForm;
