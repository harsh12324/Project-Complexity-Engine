function generateExplanation(scoreResult, timelineResult) {
  const reasons = scoreResult.triggeredRules.map((rule) => rule.reason);
  let summary = `This project is classified as ${scoreResult.difficulty} with a score of ${scoreResult.totalScore}/100 in ${scoreResult.analysisMode} mode.`;

  if (reasons.length) {
    summary += ` Main contributors: ${reasons.join(" ")}`;
  } else {
    summary += " The current project inputs do not trigger many high-risk expert rules.";
  }

  summary += ` Estimated realistic timeline is ${timelineResult.realistic} days, and schedule pressure is ${timelineResult.schedulePressure.toLowerCase()}.`;

  return summary;
}

module.exports = generateExplanation;
