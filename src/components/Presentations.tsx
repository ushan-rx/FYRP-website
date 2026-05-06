"use client";
import SectionHeader from "./SectionHeader";
import { Presentation, ExternalLink, Calendar } from "lucide-react";

const PRESENTATIONS = [
	{
		id: "proposal-pres",
		title: "Project Proposal Presentation",
		date: "August 2024",
		desc: "Introduces Synapse-CI — research motivation, problem statement, proposed solution architecture, and team roles. First formal presentation to supervisors and panel.",
		slides: "https://canva.link/5q4u17x62n2ppvu", // Replace with actual link
		status: "available",
		thumbnail: "/assets/slides-proposal-thumb.png",
	},
	{
		id: "pp1-pres",
		title: "Progress Presentation I",
		date: "December 2024",
		desc: "50% milestone demo covering the CI/CD Orchestrator HITL state machine, IaC analyzer prototype, and early test prioritization results.",
		slides: "https://canva.link/qfamy4krl1lycc3", // Replace with actual link
		status: "available",
		thumbnail: "/assets/slides-pp1-thumb.png",
	},
	{
		id: "pp2-pres",
		title: "Progress Presentation II",
		date: "March 2025",
		desc: "90% milestone — full platform integration demonstration across all four components, chaos validation results, and resilience score benchmarks.",
		slides: "https://canva.link/oyomr2290pv019v", // Replace with actual link
		status: "available",
		thumbnail: "/assets/slides-pp2-thumb.png",
	},
	{
		id: "final-pres",
		title: "Final Presentation",
		date: "May 2025",
		desc: "Complete research platform presentation with full experimental evaluation, comparative analysis, and contribution summary for the examination panel and viva.",
		slides: "#",
		status: "pending",
		thumbnail: "/assets/slides-final-thumb.png",
	},
];

export default function Presentations() {
	return (
		<section
			id='presentations'
			className='section'
		>
			<div className='container-xl'>
				<SectionHeader
					badge='05 · Presentations'
					title='Slides & '
					highlight='Presentations'
					subtitle='Presentation decks from all major research assessments — from initial proposal through final viva.'
				/>

				<div className='grid sm:grid-cols-2 gap-6'>
					{PRESENTATIONS.map((pres, i) => (
						<div
							key={pres.id}
							className='card overflow-hidden flex flex-col'
							style={{
								opacity: pres.status === "pending" ? 0.65 : 1,
							}}
						>
							{/* Slide thumbnail area */}
							<div
								className='relative flex items-center justify-center'
								style={{
									background: "var(--bg-secondary)",
									height: "160px",
									borderBottom: "1px solid var(--border)",
									overflow: "hidden",
								}}
							>
								{/* Decorative slide mockup */}
								<div className='absolute inset-0 flex items-center justify-center'>
									<div
										className='w-40 h-28 rounded-lg flex flex-col gap-2 p-3 shadow-lg'
										style={{
											background: "var(--bg-card)",
											border: "1px solid var(--border-strong)",
										}}
									>
										<div
											className='h-3 rounded-sm'
											style={{
												background:
													"var(--accent-cyan)",
												width: "60%",
											}}
										/>
										<div
											className='h-1.5 rounded-sm'
											style={{
												background: "var(--border)",
												width: "90%",
											}}
										/>
										<div
											className='h-1.5 rounded-sm'
											style={{
												background: "var(--border)",
												width: "75%",
											}}
										/>
										<div className='flex gap-2 mt-2'>
											<div
												className='flex-1 h-8 rounded'
												style={{
													background:
														"rgba(34,211,238,0.12)",
												}}
											/>
											<div
												className='flex-1 h-8 rounded'
												style={{
													background:
														"rgba(251,191,36,0.12)",
												}}
											/>
										</div>
									</div>
								</div>

								{/* Presentation number */}
								<div
									className='absolute top-3 right-3 font-mono text-4xl font-bold opacity-10'
									style={{ color: "var(--accent-cyan)" }}
								>
									{String(i + 1).padStart(2, "0")}
								</div>

								{/* Status badge */}
								<div
									className='absolute top-3 left-3 font-mono text-xs px-2 py-0.5 rounded-full capitalize'
									style={{
										background:
											pres.status === "available"
												? "rgba(74, 222, 128, 0.15)"
												: "rgba(100,100,100,0.15)",
										color:
											pres.status === "available"
												? "#4ade80"
												: "var(--text-muted)",
										border: `1px solid ${pres.status === "available" ? "rgba(74,222,128,0.3)" : "var(--border)"}`,
									}}
								>
									{pres.status}
								</div>
							</div>

							{/* Content */}
							<div className='p-5 flex flex-col flex-1'>
								<div
									className='flex items-center gap-2 font-mono text-xs mb-2'
									style={{ color: "var(--text-muted)" }}
								>
									<Calendar size={11} />
									{pres.date}
								</div>

								<h4
									className='font-display font-bold text-base mb-2'
									style={{ color: "var(--text-primary)" }}
								>
									{pres.title}
								</h4>
								<p
									className='text-sm leading-relaxed flex-1 mb-4'
									style={{
										color: "var(--text-secondary)",
										fontFamily: "var(--font-sans)",
									}}
								>
									{pres.desc}
								</p>

								<a
									href={pres.slides}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2 justify-center py-2.5 rounded-lg font-mono text-sm transition-all'
									style={{
										background:
											pres.status === "available"
												? "rgba(34,211,238,0.1)"
												: "var(--bg-secondary)",
										color:
											pres.status === "available"
												? "var(--accent-cyan)"
												: "var(--text-muted)",
										border: "1px solid var(--border)",
										pointerEvents:
											pres.status === "pending"
												? "none"
												: "auto",
									}}
								>
									<Presentation size={14} />
									View Slides
									<ExternalLink size={12} />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
