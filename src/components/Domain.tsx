"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import {
	BookOpen,
	AlertTriangle,
	Target,
	FlaskConical,
	Code2,
	ArrowUpRight,
	ChevronDown,
	ChevronUp,
	Bot,
	DatabaseZap,
	Flame,
	GitBranch,
	Network,
} from "lucide-react";

const TABS = [
	{ id: "survey", icon: BookOpen, label: "Literature Survey" },
	{ id: "gap", icon: AlertTriangle, label: "Research Gap" },
	{ id: "problem", icon: Target, label: "Research Problem" },
	{ id: "objectives", icon: Target, label: "Objectives" },
	{ id: "methodology", icon: FlaskConical, label: "Methodology" },
	{ id: "tech", icon: Code2, label: "Technologies" },
];

const TECH_STACK = [
	{
		category: "Orchestration",
		items: [
			{
				name: "LangGraph",
				icon: Network,
				accent: "rgba(34,211,238,0.18)",
			},
			{
				name: "FastAPI",
				asset: "/assets/tech/fastapi.svg",
				accent: "rgba(0,150,136,0.18)",
			},
			{
				name: "PostgreSQL",
				asset: "/assets/tech/postgresql.svg",
				accent: "rgba(65,105,225,0.18)",
			},
			{
				name: "Alembic",
				icon: DatabaseZap,
				accent: "rgba(245,158,11,0.18)",
			},
		],
	},
	{
		category: "AI & LLM",
		items: [
			{
				name: "Qwen 2.5 - 7B",
				icon: Bot,
				accent: "rgba(167,139,250,0.18)",
			},
			{
				name: "LangChain",
				asset: "/assets/tech/langchain.svg",
				accent: "rgba(148,163,184,0.18)",
			},
			{
				name: "Qdrant",
				asset: "/assets/tech/qdrant.svg",
				accent: "rgba(220,36,76,0.18)",
			},
		],
	},
	{
		category: "Infrastructure",
		items: [
			{
				name: "Kubernetes",
				asset: "/assets/tech/kubernetes.svg",
				accent: "rgba(50,108,229,0.18)",
			},
			{
				name: "Terraform",
				asset: "/assets/tech/terraform.svg",
				accent: "rgba(132,79,186,0.18)",
			},
			{
				name: "Docker",
				asset: "/assets/tech/docker.svg",
				accent: "rgba(36,150,237,0.18)",
			},
			{
				name: "Helm",
				asset: "/assets/tech/helm.svg",
				accent: "rgba(15,22,137,0.18)",
			},
		],
	},
	{
		category: "Chaos & Observability",
		items: [
			{
				name: "LitmusChaos",
				icon: Flame,
				accent: "rgba(251,113,133,0.18)",
			},
			{
				name: "Prometheus",
				asset: "/assets/tech/prometheus.svg",
				accent: "rgba(230,82,44,0.18)",
			},
			{
				name: "OpenTelemetry",
				asset: "/assets/tech/opentelemetry.svg",
				accent: "rgba(250,204,21,0.18)",
			},
			{
				name: "Grafana",
				asset: "/assets/tech/grafana.svg",
				accent: "rgba(244,104,0,0.18)",
			},
		],
	},
	{
		category: "CI/CD",
		items: [
			{
				name: "GitHub Actions",
				asset: "/assets/tech/githubactions.svg",
				accent: "rgba(32,136,255,0.18)",
			},
			{
				name: "GitHub API",
				asset: "/assets/tech/github.svg",
				accent: "rgba(148,163,184,0.18)",
			},
			{
				name: "Workflow Dispatch",
				icon: GitBranch,
				accent: "rgba(34,211,238,0.18)",
			},
		],
	},
	{
		category: "Frontend",
		items: [
			{
				name: "Next.js",
				asset: "/assets/tech/nextdotjs.svg",
				accent: "rgba(148,163,184,0.16)",
			},
			{
				name: "TypeScript",
				asset: "/assets/tech/typescript.svg",
				accent: "rgba(49,120,198,0.18)",
			},
			{
				name: "Tailwind CSS",
				asset: "/assets/tech/tailwindcss.svg",
				accent: "rgba(6,182,212,0.18)",
			},
		],
	},
];

const OBJECTIVES = [
	{
		id: "01",
		title: "CI/CD Pipeline Orchestrator",
		desc: "Design and implement a HITL CI/CD orchestration system with governed policy enforcement, explainability artifacts (ADR/audit trail), and a managed knowledge lifecycle - eliminating black-box pipeline generation.",
		color: "var(--accent-cyan)",
	},
	{
		id: "02",
		title: "IaC Artifact Generation",
		desc: "Build a repository-aware system that analyzes project signals (stack, environment, patterns) and generates contextually accurate Kubernetes manifests, Terraform scaffolding, and Dockerfile templates.",
		color: "var(--accent-amber)",
	},
	{
		id: "03",
		title: "Adaptive Test Prioritization",
		desc: "Develop an agentic test case prioritization framework that reorders CI test execution based on commit diffs and historical failure data, reducing feedback loops and compute waste.",
		color: "#a78bfa",
	},
	{
		id: "04",
		title: "Automated Chaos & Resilience Validation",
		desc: "Create a closed-loop chaos engineering agent that selects experiments contextually, executes fault injection via Kubernetes tooling, observes telemetry, and produces a unified resilience score (0-100).",
		color: "#fb7185",
	},
];

const LITERATURE_COMPONENTS = [
	{
		id: "01",
		title: "Intelligent Infrastructure and Deployment Generation",
		icon: DatabaseZap,
		accent: "var(--accent-cyan)",
		tint: "rgba(34,211,238,0.12)",
		border: "rgba(34,211,238,0.28)",
		summary:
			"IaC research shows strong repeatability through Terraform, Kubernetes, Helm, and related tooling, but design quality still depends on expert judgment. Static analyzers improve defect detection, while LLM-based IaC generation introduces promise at generation time without solving validation, approval, and lifecycle feedback end to end.",
		references: [
			{
				cite: "[1]",
				label: "Chiari et al., 2022",
				title: "Static Analysis of Infrastructure as Code: A Survey",
				url: "https://arxiv.org/abs/2206.10344v1",
			},
			{
				cite: "[2]",
				label: "Srivatsa et al., 2023",
				title: "A Survey of using Large Language Models for Generating Infrastructure as Code",
				url: "https://aclanthology.org/2023.icon-1.48/",
			},
			{
				cite: "[3]",
				label: "Sonar IaC",
				title: "sonar-iac: Static Code Analyser for Infrastructure-as-Code",
				url: "https://github.com/SonarSource/sonar-iac",
			},
		],
	},
	{
		id: "02",
		title: "Adaptive Test Case Prioritization",
		icon: Target,
		accent: "var(--accent-amber)",
		tint: "rgba(245,158,11,0.12)",
		border: "rgba(245,158,11,0.28)",
		summary:
			"Regression testing literature consistently supports prioritization for earlier fault detection, first through coverage and history signals, and later through embeddings and reinforcement learning. The field is mature academically, but most methods remain detached from live CI feedback, cold-start handling, and developer-facing explanations.",
		references: [
			{
				cite: "[4]",
				label: "Rothermel et al., 2001",
				title: "Prioritizing Test Cases for Regression Testing",
				url: "https://digitalcommons.unl.edu/csearticles/9/",
			},
			{
				cite: "[5]",
				label: "Yoo and Harman, 2012",
				title: "Regression Testing Minimization, Selection and Prioritization: A Survey",
				url: "https://colab.ws/articles/10.1002%2Fstv.430",
			},
			{
				cite: "[6]",
				label: "Test2Vec, 2022",
				title: "Test2Vec: An Execution Trace Embedding for Test Case Prioritization",
				url: "https://arxiv.org/abs/2206.15428",
			},
			{
				cite: "[7]",
				label: "RL for TCP, 2022",
				title: "Reinforcement Learning for Test Case Prioritization",
				url: "https://arxiv.org/pdf/2011.01834.pdf",
			},
		],
	},
	{
		id: "03",
		title: "Automated Chaos and Resilience Testing",
		icon: Flame,
		accent: "#fb7185",
		tint: "rgba(251,113,133,0.12)",
		border: "rgba(251,113,133,0.28)",
		summary:
			"Chaos engineering literature establishes controlled fault injection as a practical way to expose hidden resilience weaknesses in distributed systems. Platforms such as LitmusChaos and Chaos Mesh provide execution mechanics, while SRE and observability work provide measurement models, but experiment choice, normalized scoring, and pipeline gating are still weakly connected.",
		references: [
			{
				cite: "[8]",
				label: "Basiri et al., 2016",
				title: "Chaos Engineering",
				url: "https://arxiv.org/pdf/1702.05843",
			},
			{
				cite: "[9]",
				label: "LitmusChaos Docs",
				title: "What is LitmusChaos?",
				url: "https://docs.litmuschaos.io/",
			},
			{
				cite: "[10]",
				label: "Chaos Mesh",
				title: "A Powerful Chaos Engineering Platform for Kubernetes",
				url: "https://chaos-mesh.org/",
			},
			{
				cite: "[11]",
				label: "Google SRE",
				title: "Error Budget Policy for Service Reliability",
				url: "https://sre.google/workbook/error-budget-policy/",
			},
		],
	},
	{
		id: "04",
		title: "Multi-Agent, Human-in-the-Loop CI/CD Orchestration",
		icon: Bot,
		accent: "#a78bfa",
		tint: "rgba(167,139,250,0.12)",
		border: "rgba(167,139,250,0.28)",
		summary:
			"CI/CD studies show that delivery maturity depends on more than execution speed: governance, maintainability, and organizational fit remain persistent issues. More recent human-AI and multi-agent research adds a useful foundation for reviewable, role-based automation, but existing CI/CD generators still stop short of repository-aware planning, policy staging, and governed learning.",
		references: [
			{
				cite: "[12]",
				label: "Shahin et al., 2017",
				title: "Continuous Integration, Delivery and Deployment: A Systematic Review",
				url: "https://arxiv.org/abs/1703.07019",
			},
			{
				cite: "[13]",
				label: "Laukkanen et al., 2017",
				title: "Problems, Causes and Solutions When Adopting Continuous Delivery",
				url: "https://www.sciencedirect.com/science/article/pii/S0950584916302324",
			},
			{
				cite: "[14]",
				label: "Amershi et al., 2019",
				title: "Guidelines for Human-AI Interaction",
				url: "https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/",
			},
			{
				cite: "[15]",
				label: "AutoGen, 2023",
				title: "Enabling Next-Gen LLM Applications via Multi-Agent Conversation",
				url: "https://arxiv.org/abs/2308.08155",
			},
		],
	},
];

const RESEARCH_GAPS = [
	{
		id: "01",
		title: "Infrastructure Generation Gap",
		icon: DatabaseZap,
		accent: "var(--accent-cyan)",
		tint: "rgba(34,211,238,0.12)",
		summary:
			"Current IaC stacks execute well once artifacts exist, but they do not reason deeply from repository context before generation.",
		gaps: [
			"Static analyzers catch known issues but not project-specific intent.",
			"Generation is often template-driven rather than context-aware.",
			"Deployment outcomes rarely feed back into future artifact decisions.",
		],
	},
	{
		id: "02",
		title: "Adaptive Testing Gap",
		icon: Target,
		accent: "var(--accent-amber)",
		tint: "rgba(245,158,11,0.12)",
		summary:
			"Most TCP techniques optimize ordering quality, but not sustained adaptation inside a changing CI environment.",
		gaps: [
			"Cold-start repositories lack enough history for accurate ranking.",
			"Single-method approaches miss hybrid structural and semantic signals.",
			"Developers often get rankings without concise reasoning.",
		],
	},
	{
		id: "03",
		title: "Resilience Validation Gap",
		icon: Flame,
		accent: "#fb7185",
		tint: "rgba(251,113,133,0.12)",
		summary:
			"Chaos platforms automate fault injection mechanics, yet planning and learning around experiments remain mostly manual.",
		gaps: [
			"Experiment selection is not strongly application-aware.",
			"Telemetry is rich, but resilience is not summarized into a usable score.",
			"Results seldom close the loop back into CI/CD decisions.",
		],
	},
	{
		id: "04",
		title: "Governed CI/CD Orchestration Gap",
		icon: Bot,
		accent: "#a78bfa",
		tint: "rgba(167,139,250,0.12)",
		summary:
			"AI-assisted pipeline generation is improving, but governance and explainable planning are still underdeveloped.",
		gaps: [
			"Many tools generate YAML as a one-shot artifact.",
			"Policy checks often happen after generation instead of during planning.",
			"Human edits and approvals are rarely turned into managed learning.",
		],
  },
];

const METHODOLOGY_PHASES = [
  {
    step: "01",
    title: "Gap-Driven Requirements",
    desc: "Literature, DevOps pain points, and proposal findings define the platform requirements and research scope.",
  },
  {
    step: "02",
    title: "Architecture Design",
    desc: "Core APIs, orchestrator control flow, frontend views, and multi-store data architecture are planned together.",
  },
  {
    step: "03",
    title: "Module Prototyping",
    desc: "The four research components are implemented independently as working prototype modules.",
  },
  {
    step: "04",
    title: "Governed Integration",
    desc: "Shared metadata, session records, approvals, and execution workflows connect the modules into one lifecycle.",
  },
  {
    step: "05",
    title: "Evaluation and Refinement",
    desc: "Sample repositories, pipeline scenarios, and resilience experiments are used to measure and improve the artifact.",
  },
];

const METHODOLOGY_COMPONENTS = [
  {
    id: "C1",
    title: "Infrastructure Generation",
    accent: "var(--accent-cyan)",
    flow: "Discover -> Extract -> Plan -> Validate -> Generate",
    desc: "Repository signals are translated into deployment-ready Docker, Kubernetes, and Terraform artifacts with human checks for low-confidence decisions.",
  },
  {
    id: "C2",
    title: "Adaptive Test Prioritization",
    accent: "var(--accent-amber)",
    flow: "Parse -> Graph -> Embed -> Score -> Execute",
    desc: "Code structure, semantic similarity, and historical test behavior are combined into an explainable priority queue for faster CI feedback.",
  },
  {
    id: "C3",
    title: "Chaos and Resilience Testing",
    accent: "#fb7185",
    flow: "Discover -> Map -> Select -> Inject -> Score",
    desc: "Runtime services are mapped to code and evaluated through context-aware chaos experiments with observability-based resilience scoring.",
  },
  {
    id: "C4",
    title: "HITL CI/CD Orchestration",
    accent: "#a78bfa",
    flow: "Inspect -> Plan -> Enforce -> Generate -> Track",
    desc: "A multi-agent control plane manages sessions, approvals, policy checks, YAML generation, ADR creation, dispatch, and governed learning.",
  },
];

const METHODOLOGY_SIGNALS = [
  "Repository metadata shared across modules",
  "PostgreSQL for auditable workflow and approval records",
  "Neo4j for dependency reasoning and service mapping",
  "Qdrant for embeddings, similarity, and long-term memory",
];

const METHODOLOGY_METRICS = [
  "Artifact validity and deployment readiness",
  "CI time savings and prioritization quality",
  "Resilience score and experiment usefulness",
  "Workflow generation success and approval effectiveness",
];

export default function Domain() {
	const [activeTab, setActiveTab] = useState("survey");
	const [expandedObj, setExpandedObj] = useState<string | null>("01");

	return (
		<section
			id='domain'
			className='section'
			style={{ background: "var(--bg-secondary)" }}
		>
			<div className='container-xl'>
				<SectionHeader
					badge='02 · Domain'
					title='Research '
					highlight='Domain'
					subtitle='Synapse-CI addresses persistent gaps in DevOps automation - static pipelines, unauditable AI generation, and fragmented tooling across the delivery lifecycle.'
				/>

				<div
					className='flex flex-wrap gap-2 mb-8 p-1 rounded-xl'
					style={{
						background: "var(--bg-card)",
						border: "1px solid var(--border)",
					}}
				>
					{TABS.map(({ id, icon: Icon, label }) => (
						<button
							key={id}
							onClick={() => setActiveTab(id)}
							className='flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all'
							style={{
								background:
									activeTab === id
										? "var(--accent-cyan)"
										: "transparent",
								color:
									activeTab === id
										? "var(--bg-primary)"
										: "var(--text-secondary)",
								fontWeight: activeTab === id ? "700" : "400",
							}}
						>
							<Icon size={14} />
							<span className='hidden sm:block'>{label}</span>
						</button>
					))}
				</div>

				<div>
					{activeTab === "survey" && (
						<div className='space-y-6'>
							<div className='grid lg:grid-cols-2 gap-6'>
								{LITERATURE_COMPONENTS.map((item) => {
									const Icon = item.icon;
									return (
										<div
											key={item.id}
											className='rounded-2xl p-6 flex flex-col'
											style={{
												background: "var(--bg-card)",
												border: `1px solid ${item.border}`,
											}}
										>
											<div className='flex items-start gap-4 mb-4'>
												<div
													className='w-11 h-11 rounded-xl flex items-center justify-center shrink-0'
													style={{
														background: item.tint,
													}}
												>
													<Icon
														size={20}
														style={{
															color: item.accent,
														}}
													/>
												</div>
												<div>
													<div
														className='font-mono text-xs mb-1'
														style={{
															color: item.accent,
														}}
													>
														COMPONENT {item.id}
													</div>
													<h4
														className='font-display font-bold text-lg leading-snug'
														style={{
															color: "var(--text-primary)",
														}}
													>
														{item.title}
													</h4>
												</div>
											</div>

											<p
												className='leading-relaxed mb-5'
												style={{
													color: "var(--text-secondary)",
													fontFamily:
														"var(--font-sans)",
												}}
											>
												{item.summary}
											</p>

											<div
												className='mt-auto rounded-xl p-4'
												style={{
													background:
														"var(--bg-secondary)",
													border: "1px solid var(--border)",
												}}
											>
												<div
													className='font-mono text-xs mb-3 uppercase tracking-widest'
													style={{
														color: "var(--text-muted)",
													}}
												>
													References
												</div>
												<div className='flex flex-col gap-2'>
													{item.references.map(
														(ref) => (
															<a
																key={ref.cite}
																href={ref.url}
																target='_blank'
																rel='noopener noreferrer'
																className='flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition-all'
																style={{
																	background:
																		"var(--bg-card)",
																	border: "1px solid var(--border)",
																	color: "var(--text-secondary)",
																}}
															>
																<span className='font-mono text-xs leading-relaxed'>
																	{ref.cite}{" "}
																	{ref.label}
																</span>
																<ArrowUpRight
																	size={14}
																	style={{
																		color: item.accent,
																	}}
																/>
															</a>
														),
													)}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					)}

					{activeTab === "gap" && (
						<div className='space-y-6'>
							<div className='grid lg:grid-cols-2 gap-6'>
								{RESEARCH_GAPS.map((gap) => {
									const Icon = gap.icon;
									return (
										<div
											key={gap.id}
											className='rounded-2xl p-6'
											style={{
												background: "var(--bg-card)",
												border: "1px solid var(--border)",
											}}
										>
											<div className='flex items-start gap-4 mb-4'>
												<div
													className='w-11 h-11 rounded-xl flex items-center justify-center shrink-0'
													style={{
														background: gap.tint,
													}}
												>
													<Icon
														size={20}
														style={{
															color: gap.accent,
														}}
													/>
												</div>
												<div>
													<div
														className='font-mono text-xs mb-1'
														style={{
															color: gap.accent,
														}}
													>
														GAP {gap.id}
													</div>
													<h4
														className='font-display font-bold text-lg'
														style={{
															color: "var(--text-primary)",
														}}
													>
														{gap.title}
													</h4>
												</div>
											</div>

											<p
												className='leading-relaxed mb-4'
												style={{
													color: "var(--text-secondary)",
													fontFamily:
														"var(--font-sans)",
												}}
											>
												{gap.summary}
											</p>

											<div className='flex flex-col gap-2'>
												{gap.gaps.map((point) => (
													<div
														key={point}
														className='rounded-xl px-4 py-3'
														style={{
															background:
																"var(--bg-secondary)",
															border: "1px solid var(--border)",
														}}
													>
														<div className='flex items-start gap-3'>
															<span
																className='mt-1 w-2 h-2 rounded-full shrink-0'
																style={{
																	background:
																		gap.accent,
																}}
															/>
															<p
																className='text-sm leading-relaxed'
																style={{
																	color: "var(--text-secondary)",
																	fontFamily:
																		"var(--font-sans)",
																}}
															>
																{point}
															</p>
														</div>
													</div>
												))}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					)}

					{activeTab === "problem" && (
						<div
							className='rounded-2xl p-8 lg:p-12'
							style={{
								background: "var(--bg-card)",
								border: "1px solid var(--border-strong)",
								position: "relative",
								overflow: "hidden",
							}}
						>
							<div
								className='absolute top-0 left-0 w-1 h-full'
								style={{
									background:
										"linear-gradient(to bottom, var(--accent-cyan), var(--accent-amber))",
								}}
							/>
							<div className='pl-6'>
								<p
									className='font-mono text-sm mb-6'
									style={{ color: "var(--accent-cyan)" }}
								>
									{"// research_problem.md"}
								</p>
								<h3
									className='font-display font-bold text-2xl lg:text-3xl mb-6 leading-tight'
									style={{ color: "var(--text-primary)" }}
								>
									How can an integrated agentic AI platform
									provide{" "}
									<span className='gradient-text'>
										trustworthy, governed, and explainable
									</span>{" "}
									CI/CD pipeline automation that reduces
									static waste, prevents knowledge conflicts,
									and validates resilience across the full
									DevOps lifecycle?
								</h3>
								<p
									className='text-lg leading-relaxed'
									style={{
										color: "var(--text-secondary)",
										fontFamily: "var(--font-sans)",
									}}
								>
									Modern DevOps teams face a compounding
									problem: delivery pipelines evolve rapidly
									while automation remains manual and fragile.
									AI tools exist but behave as black boxes -
									generating artifacts without governance,
									traceability, or organizational context.
									Synapse-CI addresses this by unifying
									pipeline planning, IaC generation, test
									optimization, and resilience validation
									under a single governed lifecycle, where
									every decision is auditable and every
									learning artifact is explicitly managed.
								</p>
							</div>
						</div>
					)}

					{activeTab === "objectives" && (
						<div className='space-y-4'>
							{OBJECTIVES.map((obj) => (
								<div
									key={obj.id}
									className='rounded-xl overflow-hidden transition-all'
									style={{
										border: "1px solid var(--border)",
										background: "var(--bg-card)",
									}}
								>
									<button
										className='w-full flex items-center gap-5 p-5 text-left'
										onClick={() =>
											setExpandedObj(
												expandedObj === obj.id
													? null
													: obj.id,
											)
										}
									>
										<span
											className='font-mono text-2xl font-bold shrink-0'
											style={{ color: obj.color }}
										>
											{obj.id}
										</span>
										<span
											className='font-display font-bold text-lg flex-1'
											style={{
												color: "var(--text-primary)",
											}}
										>
											{obj.title}
										</span>
										{expandedObj === obj.id ? (
											<ChevronUp
												size={18}
												style={{
													color: "var(--text-muted)",
												}}
											/>
										) : (
											<ChevronDown
												size={18}
												style={{
													color: "var(--text-muted)",
												}}
											/>
										)}
									</button>
									{expandedObj === obj.id && (
										<div
											className='px-5 pb-5'
											style={{
												borderTop:
													"1px solid var(--border)",
											}}
										>
											<p
												className='pt-4 leading-relaxed text-lg'
												style={{
													color: "var(--text-secondary)",
													fontFamily:
														"var(--font-sans)",
												}}
											>
												{obj.desc}
											</p>
										</div>
									)}
								</div>
							))}
						</div>
					)}

					{activeTab === "methodology" && (
						<div className='space-y-6'>
							<div
								className='rounded-2xl p-6 lg:p-8'
								style={{
									background:
										"linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.06))",
									border: "1px solid var(--border-strong)",
								}}
							>
								<div className='grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start'>
									<div>
										<div
											className='font-mono text-xs uppercase tracking-widest mb-3'
											style={{ color: "var(--accent-cyan)" }}
										>
											Methodology Overview
										</div>
										<h3
											className='font-display font-bold text-2xl lg:text-3xl mb-4'
											style={{ color: "var(--text-primary)" }}
										>
											Design science research, built as a modular
											prototype and validated through realistic
											DevOps execution flows.
										</h3>
										<p
											className='leading-relaxed'
											style={{
												color: "var(--text-secondary)",
												fontFamily: "var(--font-sans)",
											}}
										>
											Synapse-CI is developed as a working artifact,
											not just a conceptual model. Each of the four
											research components is implemented independently,
											then integrated through shared APIs, storage,
											session state, and human approval points.
										</p>
									</div>

									<div
										className='rounded-xl p-5'
										style={{
											background: "var(--bg-card)",
											border: "1px solid var(--border)",
										}}
									>
										<div
											className='font-mono text-xs uppercase tracking-widest mb-3'
											style={{ color: "var(--text-muted)" }}
										>
											System Flow
										</div>
										<div className='methodology-flow-panel rounded-xl p-4'>
											<div className='methodology-flow-grid'>
												<div className='methodology-node methodology-node-top-left'>
													Repository Analysis
												</div>
												<div className='methodology-node methodology-node-top-right'>
													Artifact Generation
												</div>
												<div className='methodology-flow-core'>
													<span className='methodology-flow-ping' />
													<span className='font-mono text-xs uppercase tracking-widest'>
														Synapse-CI
													</span>
													<strong className='font-display text-base'>
														Orchestrator
													</strong>
												</div>
												<div className='methodology-node methodology-node-bottom-left'>
													Human Approval
												</div>
												<div className='methodology-node methodology-node-bottom-right'>
													Resilience Feedback
												</div>
												<div className='methodology-link methodology-link-top-left' />
												<div className='methodology-link methodology-link-top-right' />
												<div className='methodology-link methodology-link-bottom-left' />
												<div className='methodology-link methodology-link-bottom-right' />
												<div className='methodology-signal methodology-signal-top' />
												<div className='methodology-signal methodology-signal-bottom' />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className='rounded-2xl p-6'
								style={{
									background: "var(--bg-card)",
									border: "1px solid var(--border)",
								}}
							>
								<div
									className='font-mono text-xs uppercase tracking-widest mb-5'
									style={{ color: "var(--accent-cyan)" }}
								>
									Development Lifecycle
								</div>
								<div className='grid lg:grid-cols-5 gap-4'>
									{METHODOLOGY_PHASES.map((step, i) => (
										<div
											key={step.step}
											className='relative rounded-xl p-4'
											style={{
												background: "var(--bg-secondary)",
												border: "1px solid var(--border)",
											}}
										>
											{i < METHODOLOGY_PHASES.length - 1 && (
												<div
													className='hidden lg:block absolute top-8 -right-2 w-4 h-px'
													style={{ background: "var(--border)" }}
												/>
											)}
											<div
												className='w-10 h-10 rounded-full flex items-center justify-center mb-3 font-mono text-sm font-bold'
												style={{
													background:
														"linear-gradient(135deg, var(--accent-cyan), var(--accent-amber))",
													color: "var(--bg-primary)",
												}}
											>
												{step.step}
											</div>
											<h4
												className='font-display font-bold text-sm mb-2'
												style={{ color: "var(--text-primary)" }}
											>
												{step.title}
											</h4>
											<p
												className='text-xs leading-relaxed'
												style={{
													color: "var(--text-secondary)",
													fontFamily: "var(--font-sans)",
												}}
											>
												{step.desc}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className='grid lg:grid-cols-2 gap-6'>
								{METHODOLOGY_COMPONENTS.map((item) => (
									<div
										key={item.id}
										className='rounded-2xl p-6'
										style={{
											background: "var(--bg-card)",
											border: "1px solid var(--border)",
										}}
									>
										<div className='flex items-center justify-between gap-4 mb-4'>
											<div>
												<div
													className='font-mono text-xs mb-1'
													style={{ color: item.accent }}
												>
													{item.id}
												</div>
												<h4
													className='font-display font-bold text-lg'
													style={{
														color: "var(--text-primary)",
													}}
												>
													{item.title}
												</h4>
											</div>
											<div
												className='w-3 h-12 rounded-full'
												style={{ background: item.accent }}
											/>
										</div>

										<div
											className='rounded-xl px-4 py-3 mb-4 font-mono text-xs'
											style={{
												background: "var(--bg-secondary)",
												border: "1px solid var(--border)",
												color: item.accent,
											}}
										>
											{item.flow}
										</div>

										<p
											className='leading-relaxed'
											style={{
												color: "var(--text-secondary)",
												fontFamily: "var(--font-sans)",
											}}
										>
											{item.desc}
										</p>
									</div>
								))}
							</div>

							<div className='grid lg:grid-cols-2 gap-6'>
								<div
									className='rounded-2xl p-6'
									style={{
										background: "var(--bg-card)",
										border: "1px solid var(--border)",
									}}
								>
									<div
										className='font-mono text-xs uppercase tracking-widest mb-4'
										style={{ color: "var(--accent-amber)" }}
									>
										Shared Knowledge Flow
									</div>
									<div className='flex flex-col gap-3'>
										{METHODOLOGY_SIGNALS.map((point) => (
											<div
												key={point}
												className='rounded-xl px-4 py-3'
												style={{
													background: "var(--bg-secondary)",
													border: "1px solid var(--border)",
												}}
											>
												<p
													className='text-sm leading-relaxed'
													style={{
														color: "var(--text-secondary)",
														fontFamily: "var(--font-sans)",
													}}
												>
													{point}
												</p>
											</div>
										))}
									</div>
								</div>

								<div
									className='rounded-2xl p-6'
									style={{
										background: "var(--bg-card)",
										border: "1px solid var(--border)",
									}}
								>
									<div
										className='font-mono text-xs uppercase tracking-widest mb-4'
										style={{ color: "#a78bfa" }}
									>
										Evaluation Lens
									</div>
									<p
										className='leading-relaxed mb-4'
										style={{
											color: "var(--text-secondary)",
											fontFamily: "var(--font-sans)",
										}}
									>
										The prototype is assessed using sample repositories,
										prioritized test runs, deployment artifacts, chaos
										experiments, and governed CI/CD workflow scenarios.
									</p>
									<div className='grid sm:grid-cols-2 gap-3'>
										{METHODOLOGY_METRICS.map((metric) => (
											<div
												key={metric}
												className='rounded-xl px-4 py-3'
												style={{
													background: "var(--bg-secondary)",
													border: "1px solid var(--border)",
												}}
											>
												<p
													className='text-sm leading-relaxed'
													style={{
														color: "var(--text-secondary)",
														fontFamily: "var(--font-sans)",
													}}
												>
													{metric}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "tech" && (
						<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
							{TECH_STACK.map((group) => (
								<div
									key={group.category}
									className='card p-5'
								>
									<h4
										className='font-mono text-xs font-bold mb-3 uppercase tracking-widest'
										style={{ color: "var(--accent-cyan)" }}
									>
										{group.category}
									</h4>
									<div className='grid grid-cols-2 gap-3'>
										{group.items.map((item) => (
											<div
												key={item.name}
												className='rounded-xl p-3 flex flex-col items-start gap-3'
												style={{
													background:
														"var(--bg-secondary)",
													border: "1px solid var(--border)",
												}}
											>
												<div
													className='w-10 h-10 rounded-lg flex items-center justify-center'
													style={{
														background: item.accent,
													}}
												>
													{item.asset ? (
														<Image
															src={item.asset}
															alt={`${item.name} logo`}
															width={20}
															height={20}
															className='w-5 h-5 object-contain'
														/>
													) : item.icon ? (
														<item.icon
															size={18}
															style={{
																color: "var(--text-primary)",
															}}
														/>
													) : null}
												</div>
												<span
													className='text-sm font-mono leading-snug'
													style={{
														color: "var(--text-primary)",
													}}
												>
													{item.name}
												</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					)}
				</div>

			</div>
		</section>
	);
}
