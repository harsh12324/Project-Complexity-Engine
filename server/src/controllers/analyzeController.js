const analyzeScore = require("../engine/scoreEngine");
const estimateTimeline = require("../engine/timelineEngine");
const getRecommendations = require("../engine/recommendationEngine");
const generateRoadmap = require("../engine/roadmapEngine");
const generateExplanation = require("../engine/explanationEngine");
const getTeamSuggestion = require("../engine/teamSuggestionEngine");
const getScopeReduction = require("../engine/scopeReductionEngine");
const getBudgetEstimate = require("../engine/budgetEngine");

function analyzeController(req, res) {
  try {
    const data = req.body;

    const scoreResult = analyzeScore(data);
    const timelineResult = estimateTimeline(data);
    const recommendations = getRecommendations(data, scoreResult, timelineResult);
    const roadmap = generateRoadmap(data, timelineResult);
    const explanation = generateExplanation(scoreResult, timelineResult);
    const teamSuggestion = getTeamSuggestion(data, scoreResult);
    const scopeReduction = getScopeReduction(data);
    const budget = getBudgetEstimate(data, timelineResult, scoreResult);

    const risks = scoreResult.triggeredRules.map((rule) => ({
      title: rule.title,
      message: rule.risk,
      category: rule.category,
      severity: rule.adjustedScore >= 9 ? "Critical" : rule.adjustedScore >= 7 ? "High" : rule.adjustedScore >= 5 ? "Medium" : "Low"
    }));

    res.json({
      success: true,
      score: scoreResult.totalScore,
      difficulty: scoreResult.difficulty,
      analysisMode: scoreResult.analysisMode,
      categoryScores: scoreResult.categoryScores,
      radarData: scoreResult.radarData,
      ruleTrace: scoreResult.ruleTrace,
      explanation,
      risks,
      timeline: timelineResult,
      recommendations,
      roadmap,
      teamSuggestion,
      scopeReduction,
      budget
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Analysis failed",
      error: error.message
    });
  }
}

module.exports = analyzeController;
