"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Calendar, Award, ChevronDown, ChevronUp } from "lucide-react";

const MILESTONES = [
	{
		id: "proposal",
		title: "Project Proposal",
		date: "11th September 2025",
		marks: 12,
		totalMarks: 100,
		status: "completed",
		desc: "A project proposal presented to supervisors outlining the research problem, motivation, proposed solution, and expected contributions. Covers background, related work, methodology overview, and project timeline.",
	},
	{
		id: "pp1",
		title: "Progress Presentation I",
		date: "8th January 2026",
		marks: 15,
		totalMarks: 100,
		status: "completed",
		desc: "Reviews 50% project completion status. Demonstrates working prototypes of the CI/CD Orchestrator HITL flow and the IaC analyzer. Validates design decisions and identifies implementation gaps.",
	},
	{
		id: "pp2",
		title: "Progress Presentation II",
		date: "10th March 2026",
		marks: 18,
		totalMarks: 100,
		status: "completed",
		desc: "Reviews 90% completion demonstration. Full Synapse-CI platform integration shown including all four components. Includes poster presentation summarizing the research platform and contributions.",
	},
	{
		id: "report",
		title: "Final Report",
		date: "26th April 2026",
		marks: 19,
		totalMarks: 100,
		status: "completed",
		desc: "Comprehensive final document covering individual and group reports. Includes complete system documentation, experimental evaluation, results analysis, and conclusions for all four research components.",
	},
	{
		id: "viva",
		title: "Final Presentation & Viva",
		date: "6th May 2026",
		marks: 20,
		totalMarks: 100,
		status: "upcoming",
		desc: "Individual viva assessment evaluating each member's contribution to the research platform. Full system demonstration followed by examiner Q&A on technical decisions and research outcomes.",
	},
	{
		id: "website",
		title: "Website Assessment",
		date: "6th May 2026",
		marks: 2,
		totalMarks: 100,
		status: "upcoming",
		desc: "Project website that promotes and documents the Synapse-CI research platform. Covers all required sections including domain overview, milestones, documents, team, and contact information.",
	},
	{
		id: "paper",
		title: "Research Paper",
		date: "8th May 2026",
		marks: 10,
		totalMarks: 100,
		status: "upcoming",
		desc: "Formal academic paper documenting novel contributions to agentic CI/CD orchestration, governed knowledge lifecycle management, and resilience scoring methodology. Submitted to conference proceedings.",
	},
	{
		id: "logbook",
		title: "Logbook",
		date: "May 2026",
		marks: 4,
		totalMarks: 100,
		status: "upcoming",
		desc: "Project status validated through logbook entries including Status Documents 1 & 2. Records progress against planned milestones and demonstrates consistent project management throughout the year.",
	},
];

const STATUS_COLORS: Record<string, string> = {
	completed: "#4ade80",
	upcoming: "var(--accent-amber)",
	active: "var(--accent-cyan)",
};

export default function Milestones() {
	const [expanded, setExpanded] = useState<string | null>(null);
	const [filter, setFilter] = useState<"all" | "completed" | "upcoming">(
		"all",
	);

	const filtered =
		filter === "all"
			? MILESTONES
			: MILESTONES.filter((m) => m.status === filter);

	const completed = MILESTONES.filter((m) => m.status === "completed").length;
	const totalMarks = MILESTONES.reduce((acc, m) => acc + m.marks, 0);

	return (
		<section
			id='milestones'
			className='section'
		>
			<div className='container-xl'>
				<SectionHeader
					badge='03 · Milestones'
					title='Project '
					highlight='Milestones'
					subtitle='Eight assessment milestones tracking the full research lifecycle from proposal to final viva.'
				/>

				{/* Summary stats */}
				<div className='grid grid-cols-3 gap-4 mb-10'>
					{[
						{
							label: "Total Milestones",
							value: MILESTONES.length.toString(),
						},
						{
							label: "Completed",
							value: `${completed}/${MILESTONES.length}`,
						},
						{ label: "Total Marks", value: `${totalMarks}%` },
					].map((stat) => (
						<div
							key={stat.label}
							className='rounded-xl p-5 text-center'
							style={{
								background: "var(--bg-card)",
								border: "1px solid var(--border)",
							}}
						>
							<div
								className='font-display font-bold text-3xl mb-1'
								style={{ color: "var(--accent-cyan)" }}
							>
								{stat.value}
							</div>
							<div
								className='font-mono text-xs'
								style={{ color: "var(--text-muted)" }}
							>
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Filter */}
				<div className='flex gap-2 mb-8'>
					{(["all", "completed", "upcoming"] as const).map((f) => (
						<button
							key={f}
							onClick={() => setFilter(f)}
							className='font-mono text-xs px-4 py-2 rounded-lg capitalize transition-all'
							style={{
								background:
									filter === f
										? "var(--accent-cyan)"
										: "var(--bg-card)",
								color:
									filter === f
										? "var(--bg-primary)"
										: "var(--text-secondary)",
								border: "1px solid var(--border)",
								fontWeight: filter === f ? "700" : "400",
							}}
						>
							{f}
						</button>
					))}
				</div>

				{/* Timeline */}
				<div className='relative pl-8'>
					{/* Vertical line */}
					<div
						className='absolute left-0 top-0 bottom-0 w-px'
						style={{ background: "var(--border)" }}
					/>

					<div className='space-y-4'>
						{filtered.map((milestone, i) => {
							const color =
								STATUS_COLORS[milestone.status] ??
								"var(--text-muted)";
							const isExpanded = expanded === milestone.id;
							return (
								<div
									key={milestone.id}
									className='relative'
									style={{ animationDelay: `${i * 80}ms` }}
								>
									{/* Timeline dot */}
									<div
										className='absolute -left-8 top-5 w-3 h-3 rounded-full'
										style={{
											background: color,
											border: "2px solid var(--bg-primary)",
											boxShadow: `0 0 8px ${color}`,
											transform: "translateX(-4px)",
										}}
									/>

									<div
										className='rounded-xl overflow-hidden cursor-pointer transition-all'
										style={{
											background: "var(--bg-card)",
											border: `1px solid ${isExpanded ? "var(--border-strong)" : "var(--border)"}`,
										}}
										onClick={() =>
											setExpanded(
												isExpanded
													? null
													: milestone.id,
											)
										}
									>
										<div className='p-5 flex items-center gap-4'>
											{/* Status icon */}
											<div
												className='w-10 h-10 rounded-lg flex items-center justify-center shrink-0'
												style={{
													background: `${color}18`,
												}}
											>
												<Award
													size={18}
													style={{ color }}
												/>
											</div>

											<div className='flex-1 min-w-0'>
												<div className='flex flex-wrap items-center gap-3 mb-1'>
													<h4
														className='font-display font-bold text-base'
														style={{
															color: "var(--text-primary)",
														}}
													>
														{milestone.title}
													</h4>
													<span
														className='font-mono text-xs px-2 py-0.5 rounded-full capitalize'
														style={{
															background: `${color}18`,
															color,
															border: `1px solid ${color}40`,
														}}
													>
														{milestone.status}
													</span>
												</div>
												<div
													className='flex items-center gap-4 font-mono text-xs'
													style={{
														color: "var(--text-muted)",
													}}
												>
													<span className='flex items-center gap-1'>
														<Calendar size={11} />
														{milestone.date}
													</span>
													<span style={{ color }}>
														{milestone.marks}% marks
														allocated
													</span>
												</div>
											</div>

											{/* Expand icon */}
											<div
												style={{
													color: "var(--text-muted)",
												}}
											>
												{isExpanded ? (
													<ChevronUp size={16} />
												) : (
													<ChevronDown size={16} />
												)}
											</div>
										</div>

										{/* Progress bar */}
										<div
											className='mx-5 mb-4 h-1 rounded-full'
											style={{
												background: "var(--border)",
											}}
										>
											<div
												className='h-full rounded-full transition-all duration-500'
												style={{
													width:
														milestone.status ===
														"completed"
															? "100%"
															: milestone.status ===
																  "active"
																? "65%"
																: "0%",
													background: `linear-gradient(90deg, ${color}, ${color}80)`,
												}}
											/>
										</div>

										{/* Expanded detail */}
										{isExpanded && (
											<div
												className='px-5 pb-5'
												style={{
													borderTop:
														"1px solid var(--border)",
												}}
											>
												<p
													className='pt-4 leading-relaxed'
													style={{
														color: "var(--text-secondary)",
														fontFamily:
															"var(--font-sans)",
													}}
												>
													{milestone.desc}
												</p>
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
