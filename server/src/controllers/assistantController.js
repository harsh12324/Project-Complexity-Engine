const analyzeScore = require("../engine/scoreEngine");
const estimateTimeline = require("../engine/timelineEngine");
const getRecommendations = require("../engine/recommendationEngine");
const generateRoadmap = require("../engine/roadmapEngine");
const generateExplanation = require("../engine/explanationEngine");
const getTeamSuggestion = require("../engine/teamSuggestionEngine");
const getScopeReduction = require("../engine/scopeReductionEngine");
const getBudgetEstimate = require("../engine/budgetEngine");
const answerAssistant = require("../engine/assistantEngine");

function assistantController(req, res) {
  try {
    const { question, formData } = req.body;

    if (!question || !formData) {
      return res.status(400).json({ success: false, message: "question and formData are required" });
    }

    const scoreResult = analyzeScore(formData);
    const timeline = estimateTimeline(formData);
    const explanation = generateExplanation(scoreResult, timeline);
    const recommendations = getRecommendations(formData, scoreResult, timeline);
    const roadmap = generateRoadmap(formData, timeline);
    const teamSuggestion = getTeamSuggestion(formData, scoreResult);
    const scopeReduction = getScopeReduction(formData);
    const budget = getBudgetEstimate(formData, timeline, scoreResult);

    const result = {
      score: scoreResult.totalScore,
      difficulty: scoreResult.difficulty,
      ruleTrace: scoreResult.ruleTrace,
      explanation,
      recommendations,
      roadmap,
      teamSuggestion,
      scopeReduction,
      budget,
      timeline
    };

    const answer = answerAssistant(question, formData, result);
    return res.json({ success: true, answer });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Assistant failed", error: error.message });
  }
}

module.exports = assistantController;
