import BasicInfoForm from '../components/input/BasicInfoForm';
import ScopeForm from '../components/input/ScopeForm';
import TechForm from '../components/input/TechForm';
import TeamTimelineForm from '../components/input/TeamTimelineForm';
import RiskForm from '../components/input/RiskForm';

function InputLab({ formData, setField }) {
  return (
    <div className="grid gap-5">
      <BasicInfoForm formData={formData} setField={setField} />
      <ScopeForm formData={formData} setField={setField} />
      <TechForm formData={formData} setField={setField} />
      <TeamTimelineForm formData={formData} setField={setField} />
      <RiskForm formData={formData} setField={setField} />
    </div>
  );
}

export default InputLab;
