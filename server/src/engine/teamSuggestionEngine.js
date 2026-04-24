function getTeamSuggestion(data, scoreResult) {
  const base = [
    "Frontend/UI",
    "Backend/API",
    "Logic & Testing"
  ];

  if (data.teamSize >= 4) base.push("Presentation & Documentation");
  if (data.hasAI) base.push("AI/Data Specialist");
  if (data.hasRealtime || data.hasPayments || data.securityLevel === "High") base.push("Security & Integrations");

  return {
    idealTeamSize: scoreResult.totalScore >= 70 ? Math.max(4, data.teamSize) : Math.max(3, data.teamSize),
    suggestedRoles: base
  };
}

module.exports = getTeamSuggestion;
