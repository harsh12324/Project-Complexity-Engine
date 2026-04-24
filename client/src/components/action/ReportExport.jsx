import SectionCard from '../common/SectionCard';

function ReportExport({ formData, result }) {
  const handlePrint = () => window.print();

  return (
    <SectionCard title="Report & Demo Notes" subtitle="Use this section in your presentation or print the analysis view.">
      <div className="space-y-4 text-sm text-slate-300">
        <p>
          <span className="font-semibold text-white">Project:</span> {formData.projectName || 'Untitled Project'}
        </p>
        <p>
          <span className="font-semibold text-white">Summary:</span> {result.explanation}
        </p>
        <button
          type="button"
          onClick={handlePrint}
          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 font-medium text-white transition hover:bg-white/15"
        >
          Print / Save as PDF
        </button>
      </div>
    </SectionCard>
  );
}

export default ReportExport;
