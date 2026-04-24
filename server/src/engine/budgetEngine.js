function getBudgetEstimate(data, timelineResult, scoreResult) {
  let points = timelineResult.realistic * 350;

  if (data.hasAI) points += 15000;
  if (data.hasRealtime) points += 8000;
  if (data.hasPayments) points += 10000;
  if (data.securityLevel === "High") points += 12000;
  if (data.integrations >= 5) points += 7000;
  if (data.teamExperience === "Beginner") points += 3000;
  if (data.analysisMode === "MVP") points *= 0.8;

  const min = Math.max(15000, Math.round(points * 0.75 / 1000) * 1000);
  const max = Math.max(min + 10000, Math.round(points * 1.15 / 1000) * 1000);

  let tier = "Low";
  if (scoreResult.totalScore >= 70 || max >= 100000) tier = "High";
  else if (scoreResult.totalScore >= 40 || max >= 50000) tier = "Medium";

  const drivers = [];
  if (data.hasAI) drivers.push("AI workflow");
  if (data.securityLevel === "High") drivers.push("High security");
  if (data.integrations >= 5) drivers.push("Many integrations");
  if (data.hasRealtime) drivers.push("Realtime system");
  if (data.features >= 10 || data.modules >= 8) drivers.push("Broad scope");
  if (!drivers.length) drivers.push("Standard engineering effort");

  return {
    tier,
    estimatedRange: `₹${min.toLocaleString("en-IN")} - ₹${max.toLocaleString("en-IN")}`,
    drivers,
    notes: data.analysisMode === "MVP" ? "Estimate is reduced for MVP-only delivery." : "Estimate covers a more complete product scope."
  };
}

module.exports = getBudgetEstimate;
