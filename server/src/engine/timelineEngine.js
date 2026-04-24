function estimateTimeline(data) {
  let baseDays = 10;
  const modeMultiplier = data.analysisMode === "MVP" ? 0.72 : 1;

  baseDays += data.modules * 3 * modeMultiplier;
  baseDays += data.features * 1.5 * modeMultiplier;
  baseDays += data.integrations * 2 * modeMultiplier;
  baseDays += data.userRoles * 1.5;

  if (data.hasAI) baseDays += data.analysisMode === "MVP" ? 6 : 10;
  if (data.hasRealtime) baseDays += data.analysisMode === "MVP" ? 4 : 8;
  if (data.hasPayments) baseDays += 6;
  if (data.hasAnalytics) baseDays += data.analysisMode === "MVP" ? 2 : 4;
  if (data.hasFileUpload) baseDays += 3;
  if (data.hasAuth) baseDays += 3;

  if (data.securityLevel === "High") baseDays += 7;
  else if (data.securityLevel === "Medium") baseDays += 4;

  if (data.uiComplexity === "High") baseDays += 5;
  else if (data.uiComplexity === "Medium") baseDays += 3;

  if (data.dataComplexity === "High") baseDays += 6;
  else if (data.dataComplexity === "Medium") baseDays += 3;

  if (data.teamExperience === "Beginner") baseDays += 7;
  else if (data.teamExperience === "Intermediate") baseDays += 3;

  const optimistic = Math.max(7, Math.round(baseDays * 0.85));
  const realistic = Math.max(10, Math.round(baseDays));
  const risky = Math.max(14, Math.round(baseDays * 1.25));

  let schedulePressure = "Low";
  if (data.timelineDays < realistic) schedulePressure = "High";
  else if (data.timelineDays < risky) schedulePressure = "Medium";

  return {
    optimistic,
    realistic,
    risky,
    schedulePressure,
    chartData: [
      { name: "Optimistic", days: optimistic },
      { name: "Realistic", days: realistic },
      { name: "Risky", days: risky },
      { name: "Given", days: data.timelineDays }
    ]
  };
}

module.exports = estimateTimeline;
