function getScopeReduction(data) {
  const moveToPhase2 = [];
  const keepInMvp = [];
  const removeNow = [];

  if (data.hasRealtime) moveToPhase2.push("Realtime updates / live collaboration");
  if (data.hasAI) moveToPhase2.push("Advanced AI assistant or model-powered features");
  if (data.hasAnalytics) moveToPhase2.push("Deep analytics and event-tracking dashboards");
  if (data.hasPayments && data.analysisMode === "MVP") moveToPhase2.push("Payments until the core user flow is stable");
  if (data.integrations >= 5) removeNow.push("Non-essential third-party integrations beyond the top 2 or 3");
  if (data.userRoles >= 4) removeNow.push("Low-priority user roles for the first release");
  if (data.features >= 10) removeNow.push("Secondary features that do not support the primary demo story");

  keepInMvp.push("Authentication and role-aware access");
  keepInMvp.push("One core workflow with a polished UI");
  keepInMvp.push("Clear dashboard summary and explainable analysis output");

  if (data.domain === "E-commerce") keepInMvp.push("Product listing, cart, and order flow");
  if (data.domain === "AI Project") keepInMvp.push("One narrow AI use case with fallback behavior");
  if (data.domain === "Management System") keepInMvp.push("Admin panel plus the most important operational module");

  return {
    removeNow: removeNow.length ? removeNow : ["No urgent removals detected. Focus on copy and polish."],
    keepInMvp,
    moveToPhase2: moveToPhase2.length ? moveToPhase2 : ["Advanced enhancements can be added after demo validation."]
  };
}

module.exports = getScopeReduction;
