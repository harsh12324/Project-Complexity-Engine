const rules = require("../data/rules");

function getDifficulty(score) {
  if (score <= 25) return "Easy";
  if (score <= 50) return "Medium";
  if (score <= 75) return "Hard";
  return "Very Hard";
}

function initializeCategories() {
  return {
    scope: 0,
    technical: 0,
    timeline: 0,
    dependency: 0,
    team: 0,
    risk: 0,
    security: 0
  };
}

function getModeMultiplier(data) {
  return data.analysisMode === "MVP" ? 0.72 : 1;
}

function applySoftScores(data, categoryScores, modeMultiplier) {
  let total = 0;

  const add = (score, category) => {
    const adjusted = Math.round(score * modeMultiplier);
    total += adjusted;
    categoryScores[category] += adjusted;
  };

  if (data.userRoles >= 4) add(5, "scope");
  if (data.hasAuth) add(3, "security");
  if (data.hasAnalytics) add(data.analysisMode === "MVP" ? 1 : 3, "technical");
  if (data.hasFileUpload) add(data.analysisMode === "MVP" ? 1 : 2, "technical");
  if (data.platform === "Both") add(data.analysisMode === "MVP" ? 3 : 6, "scope");

  return total;
}

function normalizeCategoryScores(categoryScores, totalScore) {
  const keys = Object.keys(categoryScores);
  return keys.map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: totalScore > 0 ? Math.min(100, Math.round((categoryScores[key] / totalScore) * 100)) : 0
  }));
}

function analyzeScore(data) {
  let totalScore = 0;
  const modeMultiplier = getModeMultiplier(data);
  const categoryScores = initializeCategories();
  const triggeredRules = [];
  const ruleTrace = [];

  rules.forEach((rule) => {
    if (rule.condition(data)) {
      const adjustedScore = Math.max(1, Math.round(rule.score * modeMultiplier));
      totalScore += adjustedScore;
      categoryScores[rule.category] = (categoryScores[rule.category] || 0) + adjustedScore;
      triggeredRules.push({ ...rule, adjustedScore });
      ruleTrace.push({
        id: rule.id,
        title: rule.title,
        score: adjustedScore,
        originalScore: rule.score,
        category: rule.category,
        reason: rule.reason
      });
    }
  });

  totalScore += applySoftScores(data, categoryScores, modeMultiplier);

  if (data.analysisMode === "MVP") {
    totalScore = Math.max(0, totalScore - 4);
  }

  totalScore = Math.min(100, totalScore);

  return {
    totalScore,
    difficulty: getDifficulty(totalScore),
    triggeredRules,
    ruleTrace,
    categoryScores,
    radarData: normalizeCategoryScores(categoryScores, totalScore),
    analysisMode: data.analysisMode || "Full Product"
  };
}

module.exports = analyzeScore;
