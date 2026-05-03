"use client";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { Mail, Github, Linkedin, User } from "lucide-react";

const SUPERVISORS = [
	{
		id: "supervisor",
		name: "Dr. Dharshana Kasthurirathna",
		role: "Supervisor",
		affiliation: "Sri Lanka Institute of Information Technology (SLIIT)",
		department: "Department of Software Engineering",
		email: "dharshana.k@sliit.lk",
		photo: "/assets/supervisor/dr_darshana.jpg",
		linkedin:
			"https://www.linkedin.com/in/dharshana-kasthurirathna-a4a3275/",
	},
	{
		id: "cosupervisor",
		name: "Ms. Thilini Jayalath",
		role: "Co-Supervisor",
		affiliation: "Sri Lanka Institute of Information Technology (SLIIT)",
		department: " Department of Software Engineering",
		email: "thilini.j@sliit.lk",
		photo: "/assets/supervisor/thilinij.jpeg",
		linkedin: "https://www.linkedin.com/in/thilini-jayalath-2815b4b0/",
	},
];

const EXTERNAL_SUPERVISORS = [
	{
		id: "external-supervisor",
		name: "External Supervisor Name",
		role: "External Supervisor",
		affiliation: "Industry / Organization Name",
		department: "Research Collaboration Contact",
		email: "external.supervisor@example.com",
		photo: "/assets/team/external-supervisor.jpg",
		linkedin: "#",
	},
];

const MEMBERS = [
	{
		id: "member1",
		name: "Kaweesha Marasinghe",
		role: "Team leader",
		studentId: "IT22338402",
		component: "Repository Analyzer and Deployment Agent",
		email: "kaweesha.mr@gmail.com",
		photo: "/assets/team/member1.jpg",
		github: "https://github.com/Kaweesha-mr",
		linkedin: "https://www.linkedin.com/in/kaweeshamr/",
	},
	{
		id: "member2",
		name: "Ushan Senarathna",
		role: "Team Member",
		studentId: "IT22362858",
		component: "CI/CD Orchestrator & HITL Governance",
		email: "ushan.r.senarathna@gmail.com",
		photo: "/assets/team/member_2.jpg",
		github: "https://github.com/ushan-rx",
		linkedin: "www.linkedin.com/in/ushan-senarathna",
	},
	{
		id: "member3",
		name: "Yashodha Fernando",
		role: "Team Member",
		studentId: "IT22914828",
		component: "Test Prioratization",
		email: "fyashodha@gmail.com",
		photo: "/assets/team/member3.jpg",
		github: "https://github.com/Yashoda-Fr",
		linkedin: "https://www.linkedin.com/in/yashodha-fernando-16b249244/",
	},
	{
		id: "member4",
		name: "Lithara Bambarendage",
		role: "Team Member",
		studentId: "IT22906380",
		component: "Automated Context Aware Chaos Experiment Generation",
		email: "litharabambarendage@gmail.com",
		photo: "/assets/team/member_4.jpeg",
		github: "https://github.com/LitharaBambarendage",
		linkedin: "https://www.linkedin.com/in/lithara-bambarendage-1a1030302/",
	},
];

function PhotoPlaceholder({
	name,
	size = 80,
}: {
	name: string;
	size?: number;
}) {
	const initials = name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
	return (
		<div
			className='rounded-full flex items-center justify-center font-display font-bold shrink-0'
			style={{
				width: size,
				height: size,
				background:
					"linear-gradient(135deg, rgba(34,211,238,0.2), rgba(251,191,36,0.15))",
				border: "2px solid var(--border-strong)",
				fontSize: size * 0.28,
				color: "var(--accent-cyan)",
			}}
		>
			{initials || <User size={size * 0.4} />}
		</div>
	);
}

export default function AboutUs() {
	return (
		<section
			id='about'
			className='section'
			style={{ background: "var(--bg-secondary)" }}
		>
			<div className='container-xl'>
				<SectionHeader
					badge='06 · About Us'
					title='Meet the '
					highlight='Team'
					subtitle='Synapse-CI is a final-year research project developed by a four-member team at the Sri Lanka Institute of Information Technology.'
				/>

				{/* Supervisors */}
				<div className='mb-14'>
					<h3
						className='font-mono text-sm uppercase tracking-widest mb-6'
						style={{ color: "var(--text-muted)" }}
					>
						— Supervisors
					</h3>
					<div className='grid sm:grid-cols-2 gap-5'>
						{SUPERVISORS.map((sup) => (
							<div
								key={sup.id}
								className='card p-5 flex items-center gap-5'
							>
								<div className='relative'>
									{/* Try actual photo, fallback to placeholder */}
									<Image
										src={sup.photo}
										alt={sup.name}
										width={72}
										height={72}
										className='rounded-full object-cover shrink-0'
										style={{
											border: "2px solid var(--border-strong)",
										}}
										onError={(e) => {
											(
												e.target as HTMLImageElement
											).style.display = "none";
											(
												e.target as HTMLImageElement
											).nextElementSibling?.removeAttribute(
												"style",
											);
										}}
									/>
									<div style={{ display: "none" }}>
										<PhotoPlaceholder
											name={sup.name}
											size={72}
										/>
									</div>
								</div>
								<div className='flex-1 min-w-0'>
									<div
										className='font-mono text-xs mb-1'
										style={{ color: "var(--accent-amber)" }}
									>
										{sup.role}
									</div>
									<h4
										className='font-display font-bold text-base'
										style={{ color: "var(--text-primary)" }}
									>
										{sup.name}
									</h4>
									<p
										className='text-xs mt-0.5 truncate'
										style={{
											color: "var(--text-muted)",
											fontFamily: "var(--font-sans)",
										}}
									>
										{sup.affiliation}
									</p>
									<div className='flex items-center gap-3 mt-2'>
										<a
											href={`mailto:${sup.email}`}
											className='flex items-center gap-1 font-mono text-xs transition-colors'
											style={{
												color: "var(--accent-cyan)",
											}}
										>
											<Mail size={11} />
											{sup.email}
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='mb-14'>
					<h3
						className='font-mono text-sm uppercase tracking-widest mb-6'
						style={{ color: "var(--text-muted)" }}
					>
						— External Supervisor
					</h3>
					<div className='grid sm:grid-cols-2 gap-5'>
						{EXTERNAL_SUPERVISORS.map((sup) => (
							<div
								key={sup.id}
								className='card p-5 flex items-center gap-5'
							>
								<div className='relative'>
									<Image
										src={sup.photo}
										alt={sup.name}
										width={72}
										height={72}
										className='rounded-full object-cover shrink-0'
										style={{
											border: "2px solid var(--border-strong)",
										}}
										onError={(e) => {
											(
												e.target as HTMLImageElement
											).style.display = "none";
											(
												e.target as HTMLImageElement
											).nextElementSibling?.removeAttribute(
												"style",
											);
										}}
									/>
									<div style={{ display: "none" }}>
										<PhotoPlaceholder
											name={sup.name}
											size={72}
										/>
									</div>
								</div>
								<div className='flex-1 min-w-0'>
									<div
										className='font-mono text-xs mb-1'
										style={{ color: "#a78bfa" }}
									>
										{sup.role}
									</div>
									<h4
										className='font-display font-bold text-base'
										style={{ color: "var(--text-primary)" }}
									>
										{sup.name}
									</h4>
									<p
										className='text-xs mt-0.5 truncate'
										style={{
											color: "var(--text-muted)",
											fontFamily: "var(--font-sans)",
										}}
									>
										{sup.affiliation}
									</p>
									<p
										className='text-xs mt-0.5 truncate'
										style={{
											color: "var(--text-muted)",
											fontFamily: "var(--font-sans)",
										}}
									>
										{sup.department}
									</p>
									<div className='flex items-center gap-3 mt-2'>
										<a
											href={`mailto:${sup.email}`}
											className='flex items-center gap-1 font-mono text-xs transition-colors'
											style={{
												color: "var(--accent-cyan)",
											}}
										>
											<Mail size={11} />
											{sup.email}
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Team members */}
				<div>
					<h3
						className='font-mono text-sm uppercase tracking-widest mb-6'
						style={{ color: "var(--text-muted)" }}
					>
						— Team Members
					</h3>
					<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
						{MEMBERS.map((member) => (
							<div
								key={member.id}
								className='card p-5 flex flex-col items-center text-center'
							>
								{/* Photo */}
								<div className='relative mb-4'>
									<Image
										src={member.photo}
										alt={member.name}
										width={84}
										height={84}
										className='rounded-full object-cover'
										style={{
											border: "2px solid var(--border-strong)",
										}}
										onError={(e) => {
											(
												e.target as HTMLImageElement
											).style.display = "none";
										}}
									/>
									{/* <PhotoPlaceholder
										name={member.name}
										size={84}
									/> */}
								</div>

								{/* Info */}
								<span
									className='font-mono text-xs px-2 py-0.5 rounded-full mb-2'
									style={{
										background:
											member.role === "Team Leader"
												? "rgba(34,211,238,0.1)"
												: "rgba(100,100,100,0.1)",
										color:
											member.role === "Team Leader"
												? "var(--accent-cyan)"
												: "var(--text-muted)",
										border: `1px solid ${member.role === "Team Leader" ? "rgba(34,211,238,0.3)" : "var(--border)"}`,
									}}
								>
									{member.role}
								</span>

								<h4
									className='font-display font-bold text-base mb-1'
									style={{ color: "var(--text-primary)" }}
								>
									{member.name}
								</h4>

								<p
									className='font-mono text-xs mb-2'
									style={{ color: "var(--text-muted)" }}
								>
									{member.studentId}
								</p>

								<p
									className='text-xs leading-relaxed mb-4'
									style={{
										color: "var(--text-secondary)",
										fontFamily: "var(--font-sans)",
									}}
								>
									{member.component}
								</p>

								{/* Social links */}
								<div className='flex items-center gap-3 mt-auto'>
									<a
										href={`mailto:${member.email}`}
										className='w-8 h-8 rounded-lg flex items-center justify-center transition-all'
										style={{
											border: "1px solid var(--border)",
											color: "var(--text-muted)",
										}}
										title='Email'
									>
										<Mail size={13} />
									</a>
									<a
										href={member.github}
										target='_blank'
										rel='noopener noreferrer'
										className='w-8 h-8 rounded-lg flex items-center justify-center transition-all'
										style={{
											border: "1px solid var(--border)",
											color: "var(--text-muted)",
										}}
										title='GitHub'
									>
										<Github size={13} />
									</a>
									<a
										href={member.linkedin}
										target='_blank'
										rel='noopener noreferrer'
										className='w-8 h-8 rounded-lg flex items-center justify-center transition-all'
										style={{
											border: "1px solid var(--border)",
											color: "var(--text-muted)",
										}}
										title='LinkedIn'
									>
										<Linkedin size={13} />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* University note */}
				<div
					className='mt-12 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-5'
					style={{
						background: "var(--bg-card)",
						border: "1px solid var(--border)",
					}}
				>
					{/* University logo placeholder */}
					<div
						className='w-16 h-16 rounded-xl flex items-center justify-center shrink-0'
						style={{ border: "1px solid var(--border)" }}
					>
						<Image
							src='/assets/sliit-logo.png'
							alt='SLIIT Logo'
							width={48}
							height={48}
							className='object-contain'
							onError={(e) => {
								(e.target as HTMLImageElement).style.display =
									"none";
							}}
						/>
					</div>
					<div>
						<h4
							className='font-display font-bold text-base mb-1'
							style={{ color: "var(--text-primary)" }}
						>
							Sri Lanka Institute of Information Technology
							(SLIIT)
						</h4>
						<p
							className='text-sm'
							style={{
								color: "var(--text-secondary)",
								fontFamily: "var(--font-sans)",
							}}
						>
							Faculty of Computing · Department of Information
							Technology · Final Year Research Project 2024/2025
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
