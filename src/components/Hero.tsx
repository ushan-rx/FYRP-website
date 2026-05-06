"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Cpu, GitBranch, Shield, Zap } from "lucide-react";

const TERMINAL_LINES = [
	{
		prefix: "$ ",
		text: "synapse-ci init --repo my-microservice",
		color: "var(--accent-cyan)",
	},
	{
		prefix: "  ✓ ",
		text: "Repository analyzed. Tech: [Node.js, Docker, K8s]",
		color: "var(--text-secondary)",
	},
	{
		prefix: "  ✓ ",
		text: "Catalog match found (similarity: 0.94)",
		color: "#4ade80",
	},
	{
		prefix: "  ⚙ ",
		text: "Intent: feature_deploy · Risk: LOW",
		color: "var(--accent-amber)",
	},
	{
		prefix: "  ✓ ",
		text: "Policy Guardian: APPROVED (2 gates passed)",
		color: "#4ade80",
	},
	{
		prefix: "  ✓ ",
		text: "Generating YAML + ADR audit trail...",
		color: "var(--text-secondary)",
	},
	{
		prefix: "  ✓ ",
		text: "Workflow committed to .github/workflows/",
		color: "#4ade80",
	},
	{
		prefix: "  → ",
		text: "Tests prioritized · Resilience score: 87/100",
		color: "var(--accent-cyan)",
	},
];

const STATS = [
	{ icon: GitBranch, label: "Pipeline Catalog", value: "Match-First Reuse" },
	{ icon: Shield, label: "Policy Guardian", value: "Governed Lifecycle" },
	{ icon: Cpu, label: "Agentic Nodes", value: "7 Specialized" },
	{ icon: Zap, label: "Resilience Score", value: "0-100 Unified" },
];

export default function Hero() {
	const [visibleLines, setVisibleLines] = useState<number>(0);
	const [cursor, setCursor] = useState(true);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const timer = setInterval(() => {
			setVisibleLines((v) => {
				if (v >= TERMINAL_LINES.length) {
					clearInterval(timer);
					return v;
				}
				return v + 1;
			});
		}, 400);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		intervalRef.current = setInterval(() => setCursor((c) => !c), 500);
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<section
			id='home'
			className='relative min-h-screen flex flex-col justify-center overflow-hidden'
			style={{ paddingTop: "6rem" }}
		>
			<div className='absolute inset-0 bg-grid opacity-60' />

			<div
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none'
				style={{
					background:
						"radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
				}}
			/>

			<div
				className='absolute top-0 left-0 w-px h-full opacity-20'
				style={{
					background:
						"linear-gradient(to bottom, transparent, var(--accent-cyan), transparent)",
					left: "10%",
				}}
			/>
			<div
				className='absolute top-0 right-0 w-px h-full opacity-20'
				style={{
					background:
						"linear-gradient(to bottom, transparent, var(--accent-amber), transparent)",
					right: "10%",
				}}
			/>

			<div className='container-xl relative z-10'>
				<div className='flex flex-wrap items-center gap-3 mb-6'>
					<span className='badge'>Research Project · SLIIT 2025 - 2026</span>
					<span
						className='w-2 h-2 rounded-full animate-pulse'
						style={{ background: "#4ade80" }}
					/>
					<span
						className='font-mono text-xs'
						style={{ color: "#4ade80" }}
					>
						ACTIVE
					</span>
				</div>

				<h1
					className='font-display font-bold leading-[1.02] mb-8 max-w-6xl'
					style={{
						fontSize: "clamp(2.1rem, 5.2vw, 4.6rem)",
						color: "var(--text-primary)",
					}}
				>
					Agent-Driven Automation for Secure Resilient Cloud Native
					Deployments
				</h1>

				<div className='grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 lg:gap-12 items-start'>
					<div>
						<h2
							className='font-display font-bold leading-none mb-5'
							style={{ fontSize: "clamp(2.4rem, 4.4vw, 4.25rem)" }}
						>
							<span className='gradient-text'>Synapse CI</span>
						</h2>

						<p
							className='text-lg leading-relaxed mb-8 max-w-xl'
							style={{
								color: "var(--text-secondary)",
								fontFamily: "var(--font-sans)",
							}}
						>
							Synapse-CI is a research-grade platform that combines{" "}
							<strong style={{ color: "var(--accent-cyan)" }}>
								Human-in-the-Loop CI/CD orchestration
							</strong>
							, governed knowledge management, IaC generation,
							adaptive test prioritization, and automated chaos
							validation - all under one connected lifecycle.
						</p>

						<div className='flex flex-wrap gap-4 mb-10'>
							<a
								href='#domain'
								className='btn-primary'
							>
								Explore Research →
							</a>
							<a
								href='#documents'
								className='btn-outline'
							>
								View Documents
							</a>
						</div>

						<div className='grid grid-cols-2 gap-3'>
							{STATS.map(({ icon: Icon, label, value }) => (
								<div
									key={label}
									className='flex items-center gap-3 p-3 rounded-lg'
									style={{
										background: "var(--bg-card)",
										border: "1px solid var(--border)",
									}}
								>
									<div
										className='w-8 h-8 rounded flex items-center justify-center shrink-0'
										style={{ background: "rgba(34,211,238,0.1)" }}
									>
										<Icon
											size={15}
											style={{ color: "var(--accent-cyan)" }}
										/>
									</div>
									<div>
										<div
											className='font-mono text-xs'
											style={{ color: "var(--text-muted)" }}
										>
											{label}
										</div>
										<div
											className='font-display font-semibold text-sm'
											style={{ color: "var(--text-primary)" }}
										>
											{value}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='relative lg:pt-5'>
						<div
							className='absolute inset-0 -m-8 rounded-2xl pointer-events-none'
							style={{
								background:
									"radial-gradient(ellipse at center, rgba(34,211,238,0.06) 0%, transparent 70%)",
							}}
						/>
						<div className='terminal relative'>
							<div className='terminal-header'>
								<div
									className='terminal-dot'
									style={{ background: "#ff5f57" }}
								/>
								<div
									className='terminal-dot'
									style={{ background: "#febc2e" }}
								/>
								<div
									className='terminal-dot'
									style={{ background: "#28c840" }}
								/>
								<span
									className='ml-3 text-xs'
									style={{
										color: "var(--text-muted)",
										fontFamily: "var(--font-mono)",
									}}
								>
									synapse-ci · orchestrator
								</span>
							</div>

							<div
								className='space-y-1'
								style={{ minHeight: "220px" }}
							>
								{TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
									<div
										key={i}
										className='font-mono text-sm leading-6'
										style={{ color: line.color }}
									>
										<span style={{ color: "var(--text-muted)" }}>
											{line.prefix}
										</span>
										{line.text}
									</div>
								))}
								{visibleLines < TERMINAL_LINES.length && (
									<div
										className='font-mono text-sm'
										style={{ color: "var(--accent-cyan)" }}
									>
										<span style={{ color: "var(--text-muted)" }}>
											${" "}
										</span>
										<span
											className='inline-block w-2 h-4 align-middle'
											style={{
												background: cursor
													? "var(--accent-cyan)"
													: "transparent",
												transition: "background 0.1s",
											}}
										/>
									</div>
								)}
							</div>

							<div
								className='mt-4 pt-4'
								style={{ borderTop: "1px solid var(--border)" }}
							>
								<div
									className='flex justify-between font-mono text-xs mb-2'
									style={{ color: "var(--text-muted)" }}
								>
									<span>pipeline progress</span>
									<span style={{ color: "var(--accent-cyan)" }}>
										{Math.round(
											(visibleLines / TERMINAL_LINES.length) * 100,
										)}
										%
									</span>
								</div>
								<div
									className='h-1 rounded-full overflow-hidden'
									style={{ background: "var(--border)" }}
								>
									<div
										className='h-full rounded-full transition-all duration-300'
										style={{
											width: `${(visibleLines / TERMINAL_LINES.length) * 100}%`,
											background:
												"linear-gradient(90deg, var(--accent-cyan), var(--accent-amber))",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='flex justify-center mt-16'>
					<a
						href='#domain'
						className='flex flex-col items-center gap-2 group'
						style={{ color: "var(--text-muted)" }}
					>
						<span className='font-mono text-xs tracking-widest uppercase'>
							Scroll
						</span>
						<ArrowDown
							size={16}
							className='animate-bounce'
							style={{ color: "var(--accent-cyan)" }}
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
