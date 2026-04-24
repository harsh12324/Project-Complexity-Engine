function getRecommendations(data, scoreResult, timelineResult) {
  const suggestions = [];

  if (data.analysisMode === "MVP") {
    suggestions.push("Keep the MVP narrow: focus on one core workflow and one polished dashboard path.");
  }

  if (data.integrations >= 5) {
    suggestions.push("Reduce third-party integrations in the initial release.");
  }

  if (data.timelineDays <= 30) {
    suggestions.push("Break the project into MVP and advanced phases.");
  }

  if (data.teamSize <= 2 && (data.modules >= 6 || data.features >= 9)) {
    suggestions.push("Increase team size or reduce the initial scope.");
  }

  if (data.hasAI) {
    suggestions.push("Prototype the AI feature early and keep fallback behavior ready.");
  }

  if (data.securityLevel === "High") {
    suggestions.push("Prioritize authentication, input validation, authorization, and secure APIs first.");
  }

  if (data.hasRealtime) {
    suggestions.push("Build core CRUD flows first, then layer realtime updates.");
  }

  if (timelineResult.schedulePressure === "High") {
    suggestions.push("The selected deadline is too aggressive. Increase time or shrink scope.");
  }

  if (data.teamExperience === "Beginner") {
    suggestions.push("Choose simple architecture and avoid overengineering in the first version.");
  }

  if (scoreResult.totalScore >= 70) {
    suggestions.push("Focus on a polished MVP demo instead of shipping every planned feature.");
  }

  if (data.platform === "Both") {
    suggestions.push("Start with one platform first, then extend after the demo.");
  }

  if (data.domain === "AI Project") {
    suggestions.push("Lock the evaluation metric early so AI quality does not drift during development.");
  }

  if (data.domain === "E-commerce") {
    suggestions.push("Treat checkout, order state, and payment failure recovery as a separate hardening stream.");
  }

  if (!suggestions.length) {
    suggestions.push("The project scope looks manageable. Focus on clean architecture and better UX polish.");
  }

  return suggestions;
}

module.exports = getRecommendations;
