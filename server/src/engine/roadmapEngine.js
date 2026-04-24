function createMilestone(label, tasks) {
  return { label, tasks };
}

function generateRoadmap(data, timelineResult) {
  const advancedTasks = [];

  if (data.hasAI) advancedTasks.push("Integrate and validate AI workflow");
  if (data.hasRealtime) advancedTasks.push("Add realtime events or socket layer");
  if (data.hasPayments) advancedTasks.push("Integrate payment gateway and failure flows");
  if (data.hasAnalytics) advancedTasks.push("Add analytics dashboard and event tracking");
  if (data.hasFileUpload) advancedTasks.push("Add file upload and storage validation");

  const weeklyPlan = [];
  const realistic = Math.max(14, timelineResult.realistic);
  const weekCount = Math.max(3, Math.min(6, Math.ceil(realistic / 7)));

  weeklyPlan.push(
    createMilestone("Week 1", [
      "Finalize requirements and choose MVP scope",
      "Prepare user flow, wireframes, and architecture",
      "Create data model and API contract"
    ])
  );

  weeklyPlan.push(
    createMilestone("Week 2", [
      "Set up frontend and backend foundations",
      "Implement input forms, core pages, and base API routes",
      "Start rule engine and scoring logic"
    ])
  );

  if (weekCount >= 4) {
    weeklyPlan.push(
      createMilestone("Week 3", [
        "Complete dashboard cards, charts, and explainability panels",
        "Connect analysis output to roadmap and recommendations",
        ...(advancedTasks.length ? [advancedTasks[0]] : ["Add one standout premium feature"])
      ])
    );
  }

  if (weekCount >= 5) {
    weeklyPlan.push(
      createMilestone("Week 4", [
        ...(advancedTasks.length > 1 ? advancedTasks.slice(1, 4) : ["Refine comparison and history flows", "Improve interactions and empty states"]),
        "Add validations and edge-case handling"
      ])
    );
  }

  weeklyPlan.push(
    createMilestone(`Week ${weeklyPlan.length + 1}`, [
      "Test all flows and rule outputs",
      "Polish copy, animations, and presentation storyline",
      "Deploy the app and rehearse demo"
    ])
  );

  return weeklyPlan;
}

module.exports = generateRoadmap;
