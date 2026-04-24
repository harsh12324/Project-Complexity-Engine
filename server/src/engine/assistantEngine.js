function buildTopRules(result) {
  return (result.ruleTrace || [])
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function answerAssistant(question, data, result) {
  const normalized = (question || "").toLowerCase();
  const topRules = buildTopRules(result);

  if (normalized.includes("why") || normalized.includes("score")) {
    if (!topRules.length) {
      return "Your score is low because the current inputs do not trigger many heavy-risk rules. The project is relatively manageable with the present scope.";
    }
    return `Your score is high mainly because of ${topRules.map((rule) => `${rule.title} (+${rule.score})`).join(", ")}. These rules contribute the most weight in the current analysis.`;
  }

  if (normalized.includes("reduce") || normalized.includes("simplify") || normalized.includes("lower complexity")) {
    const suggestions = [];
    if (data.hasRealtime) suggestions.push("move realtime to phase 2");
    if (data.hasAI) suggestions.push("ship a non-AI fallback first");
    if (data.integrations > 3) suggestions.push("cut non-essential integrations");
    if (data.features > 8) suggestions.push("reduce the feature count for the first release");
    if (data.teamSize <= 2) suggestions.push("either add one more contributor or reduce modules");
    return suggestions.length
      ? `To reduce complexity, ${suggestions.join(", ")}.`
      : "The best way to reduce complexity here is to narrow the MVP scope and keep the release focused on one strong user flow.";
  }

  if (normalized.includes("team") || normalized.includes("role")) {
    return `A practical team for this project is ${result.teamSuggestion.idealTeamSize} people: ${result.teamSuggestion.suggestedRoles.join(", ")}.`;
  }

  if (normalized.includes("timeline") || normalized.includes("deadline")) {
    return `The realistic timeline is ${result.timeline.realistic} days, while your current target is ${data.timelineDays} days. Schedule pressure is ${result.timeline.schedulePressure.toLowerCase()}.`;
  }

  if (normalized.includes("mvp")) {
    return `For the MVP, keep ${result.scopeReduction.keepInMvp.slice(0, 3).join(", ")}. Move ${result.scopeReduction.moveToPhase2.slice(0, 2).join(", ")} into later phases.`;
  }

  return `Here is the short expert view: ${result.explanation}`;
}

module.exports = answerAssistant;
