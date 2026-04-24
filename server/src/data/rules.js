const rules = [
  {
    id: 1,
    title: "Large module count",
    condition: (data) => data.modules >= 8,
    score: 10,
    category: "scope",
    risk: "Large module count may increase development overhead.",
    reason: "The project has many modules, which increases implementation scope."
  },
  {
    id: 2,
    title: "Feature-heavy project",
    condition: (data) => data.features >= 10,
    score: 8,
    category: "scope",
    risk: "Too many features can delay MVP delivery.",
    reason: "The feature count is high, so the project may be overloaded for a first release."
  },
  {
    id: 3,
    title: "Short deadline",
    condition: (data) => data.timelineDays <= 30,
    score: 10,
    category: "timeline",
    risk: "A short deadline increases delivery pressure and reduces testing time.",
    reason: "The available timeline is tight for building and testing safely."
  },
  {
    id: 4,
    title: "High security need",
    condition: (data) => data.securityLevel === "High",
    score: 9,
    category: "security",
    risk: "High security requirements need careful architecture, validation, and testing.",
    reason: "The project has strong security requirements, which raises technical complexity."
  },
  {
    id: 5,
    title: "Too many integrations",
    condition: (data) => data.integrations >= 5,
    score: 8,
    category: "dependency",
    risk: "External services can break, rate limit, or delay delivery.",
    reason: "Several third-party integrations increase dependency risk and debugging effort."
  },
  {
    id: 6,
    title: "Small team for large scope",
    condition: (data) => data.teamSize <= 2 && (data.modules >= 6 || data.features >= 9),
    score: 10,
    category: "team",
    risk: "A small team may struggle to deliver the current scope in time.",
    reason: "The team size is low compared with the planned scope."
  },
  {
    id: 7,
    title: "AI enabled",
    condition: (data) => Boolean(data.hasAI),
    score: 9,
    category: "technical",
    risk: "AI features introduce data, model, evaluation, and integration uncertainty.",
    reason: "AI capability adds complexity in experimentation, data handling, and testing."
  },
  {
    id: 8,
    title: "Realtime enabled",
    condition: (data) => Boolean(data.hasRealtime),
    score: 7,
    category: "technical",
    risk: "Realtime systems need event-driven architecture and synchronization handling.",
    reason: "Realtime capability adds backend and frontend coordination complexity."
  },
  {
    id: 9,
    title: "Payments enabled",
    condition: (data) => Boolean(data.hasPayments),
    score: 7,
    category: "security",
    risk: "Payment flows require secure integration, retries, and failure handling.",
    reason: "Payment support raises implementation and compliance sensitivity."
  },
  {
    id: 10,
    title: "High uncertainty",
    condition: (data) => data.uncertaintyLevel === "High",
    score: 8,
    category: "risk",
    risk: "Unclear requirements often lead to rework and misaligned delivery.",
    reason: "Requirement uncertainty increases planning and execution risk."
  },
  {
    id: 11,
    title: "Beginner team",
    condition: (data) => data.teamExperience === "Beginner",
    score: 6,
    category: "team",
    risk: "Lower experience may increase learning and debugging time.",
    reason: "The current team experience level suggests extra implementation risk."
  },
  {
    id: 12,
    title: "High data complexity",
    condition: (data) => data.dataComplexity === "High",
    score: 7,
    category: "technical",
    risk: "Complex data models increase schema, validation, and testing burden.",
    reason: "The project needs more advanced data modeling and data handling."
  },
  {
    id: 13,
    title: "High UI complexity",
    condition: (data) => data.uiComplexity === "High",
    score: 6,
    category: "technical",
    risk: "Complex UI takes more time in design, states, and QA.",
    reason: "A sophisticated interface increases frontend implementation effort."
  },
  {
    id: 14,
    title: "High scalability need",
    condition: (data) => data.scalabilityNeed === "High",
    score: 6,
    category: "technical",
    risk: "Scalability requirements demand stronger architecture and optimization.",
    reason: "The project needs to handle growth, increasing architecture complexity."
  },
  {
    id: 15,
    title: "High external dependency level",
    condition: (data) => data.externalDependencyLevel === "High",
    score: 6,
    category: "dependency",
    risk: "Heavy dependency on external tools can delay delivery and create failures.",
    reason: "External dependency exposure is high, so reliability is lower."
  },
  {
    id: 16,
    title: "E-commerce payment sensitivity",
    condition: (data) => data.domain === "E-commerce" && Boolean(data.hasPayments),
    score: 8,
    category: "security",
    risk: "Checkout, refunds, and order-state consistency increase delivery risk.",
    reason: "E-commerce products with payments require more secure transactional flows."
  },
  {
    id: 17,
    title: "AI project data uncertainty",
    condition: (data) => data.domain === "AI Project" && (Boolean(data.hasAI) || data.dataComplexity === "High"),
    score: 8,
    category: "technical",
    risk: "Model quality depends on data readiness, evaluation, and iteration cycles.",
    reason: "AI projects usually require extra experimentation and validation cycles."
  },
  {
    id: 18,
    title: "Mobile delivery overhead",
    condition: (data) => data.domain === "Mobile App" || data.platform === "Mobile",
    score: 5,
    category: "technical",
    risk: "Mobile builds, testing matrices, and store-readiness add overhead.",
    reason: "Mobile delivery includes extra UI, packaging, and device compatibility work."
  },
  {
    id: 19,
    title: "IoT integration risk",
    condition: (data) => data.domain === "IoT Project",
    score: 8,
    category: "dependency",
    risk: "Hardware integration and environment variability can slow development.",
    reason: "IoT solutions add hardware communication and testing complexity."
  },
  {
    id: 20,
    title: "Management system multi-role complexity",
    condition: (data) => data.domain === "Management System" && data.userRoles >= 4,
    score: 6,
    category: "scope",
    risk: "Multiple operational roles lead to more workflows, permissions, and screens.",
    reason: "Management systems become harder as the number of user roles increases."
  }
];

module.exports = rules;
