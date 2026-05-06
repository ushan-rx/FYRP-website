"use client";

import { useEffect, useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import SectionHeader from "./SectionHeader";
import {
	CheckCircle,
	Github,
	Globe,
	Mail,
	MessageSquare,
	Send,
} from "lucide-react";

export default function Contact() {
	const [state, handleSubmit] = useForm("xykojwll");
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [showSuccess, setShowSuccess] = useState(false);

	useEffect(() => {
		if (state.succeeded) {
			setForm({ name: "", email: "", message: "" });
			setShowSuccess(true);
		}
	}, [state.succeeded]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<section
			id='contact'
			className='section'
		>
			<div className='container-xl'>
				<SectionHeader
					badge='07 · Contact'
					title='Get in '
					highlight='Touch'
					subtitle='Have questions about the Synapse-CI research? Reach out to the team.'
				/>

				<div className='grid lg:grid-cols-2 gap-12'>
					<div>
						<h3
							className='font-display font-bold text-xl mb-6'
							style={{ color: "var(--text-primary)" }}
						>
							Contact Details
						</h3>

						<div className='space-y-4 mb-8'>
							{[
								{
									icon: Mail,
									label: "General Enquiries",
									value: "synapseci@gmail.com",
									href: "mailto:synapseci@gmail.com",
									color: "var(--accent-cyan)",
								},
								{
									icon: Github,
									label: "GitHub Repository",
									value: "github.com/synapse-ci",
									href: "https://github.com/synapse-ci",
									color: "#a78bfa",
								},
								{
									icon: Globe,
									label: "Institution",
									value: "SLIIT · Department of Information Technology",
									href: "https://www.sliit.lk",
									color: "var(--accent-amber)",
								},
							].map(({ icon: Icon, label, value, href, color }) => (
								<a
									key={label}
									href={href}
									target={href.startsWith("mailto") ? undefined : "_blank"}
									rel='noopener noreferrer'
									className='flex items-center gap-4 p-4 rounded-xl transition-all group'
									style={{
										background: "var(--bg-card)",
										border: "1px solid var(--border)",
									}}
								>
									<div
										className='w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all'
										style={{ background: `${color}18` }}
									>
										<Icon
											size={18}
											style={{ color }}
										/>
									</div>
									<div>
										<div
											className='font-mono text-xs mb-0.5'
											style={{ color: "var(--text-muted)" }}
										>
											{label}
										</div>
										<div
											className='font-sans text-sm font-medium'
											style={{ color: "var(--text-primary)" }}
										>
											{value}
										</div>
									</div>
								</a>
							))}
						</div>

						<div
							className='terminal text-sm'
							style={{ fontFamily: "var(--font-mono)" }}
						>
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
									style={{ color: "var(--text-muted)" }}
								>
									note.txt
								</span>
							</div>
							<p
								className='leading-relaxed'
								style={{ color: "var(--text-secondary)" }}
							>
								<span style={{ color: "var(--accent-cyan)" }}># </span>
								This is an active research project at SLIIT.
								<br />
								<span style={{ color: "var(--accent-cyan)" }}># </span>
								Feedback and collaboration inquiries are welcome.
								<br />
								<span style={{ color: "var(--accent-cyan)" }}># </span>
								Response time: 2-3 business days.
							</p>
						</div>
					</div>

					<div>
						{showSuccess ? (
							<div
								className='flex flex-col items-center justify-center text-center h-full p-12 rounded-2xl'
								style={{
									background: "var(--bg-card)",
									border: "1px solid var(--border)",
								}}
							>
								<CheckCircle
									size={48}
									className='mb-4'
									style={{ color: "#4ade80" }}
								/>
								<h4
									className='font-display font-bold text-xl mb-2'
									style={{ color: "var(--text-primary)" }}
								>
									Message Sent!
								</h4>
								<p
									className='text-sm'
									style={{
										color: "var(--text-secondary)",
										fontFamily: "var(--font-sans)",
									}}
								>
									Your message was sent successfully. We&apos;ll get back to
									you shortly.
								</p>
								<button
									onClick={() => setShowSuccess(false)}
									className='mt-6 btn-outline'
								>
									Send Another
								</button>
							</div>
						) : (
							<div
								className='p-6 rounded-2xl'
								style={{
									background: "var(--bg-card)",
									border: "1px solid var(--border)",
								}}
							>
								<h3
									className='font-display font-bold text-xl mb-6 flex items-center gap-2'
									style={{ color: "var(--text-primary)" }}
								>
									<MessageSquare
										size={20}
										style={{ color: "var(--accent-cyan)" }}
									/>
									Send a Message
								</h3>

								<form
									onSubmit={handleSubmit}
									className='space-y-4'
								>
									<input
										type='hidden'
										name='_subject'
										value='Synapse-CI Website Contact'
									/>

									<div>
										<label
											htmlFor='contact-name'
											className='block font-mono text-xs mb-2 uppercase tracking-wider'
											style={{ color: "var(--text-muted)" }}
										>
											Your Name
										</label>
										<input
											id='contact-name'
											type='text'
											name='name'
											value={form.name}
											onChange={handleChange}
											placeholder='Jane Smith'
											required
											className='w-full px-4 py-3 rounded-lg font-sans text-sm outline-none transition-all'
											style={{
												background: "var(--bg-secondary)",
												border: "1px solid var(--border)",
												color: "var(--text-primary)",
											}}
											onFocus={(e) =>
												(e.target.style.borderColor =
													"var(--border-strong)")
											}
											onBlur={(e) =>
												(e.target.style.borderColor = "var(--border)")
											}
										/>
										<ValidationError
											prefix='Name'
											field='name'
											errors={state.errors}
											className='mt-2 font-mono text-xs'
										/>
									</div>

									<div>
										<label
											htmlFor='contact-email'
											className='block font-mono text-xs mb-2 uppercase tracking-wider'
											style={{ color: "var(--text-muted)" }}
										>
											Email Address
										</label>
										<input
											id='contact-email'
											type='email'
											name='email'
											value={form.email}
											onChange={handleChange}
											placeholder='jane@example.com'
											required
											className='w-full px-4 py-3 rounded-lg font-sans text-sm outline-none transition-all'
											style={{
												background: "var(--bg-secondary)",
												border: "1px solid var(--border)",
												color: "var(--text-primary)",
											}}
											onFocus={(e) =>
												(e.target.style.borderColor =
													"var(--border-strong)")
											}
											onBlur={(e) =>
												(e.target.style.borderColor = "var(--border)")
											}
										/>
										<ValidationError
											prefix='Email'
											field='email'
											errors={state.errors}
											className='mt-2 font-mono text-xs'
										/>
									</div>

									<div>
										<label
											htmlFor='contact-message'
											className='block font-mono text-xs mb-2 uppercase tracking-wider'
											style={{ color: "var(--text-muted)" }}
										>
											Message or Query
										</label>
										<textarea
											id='contact-message'
											name='message'
											value={form.message}
											onChange={handleChange}
											placeholder='Tell us about your query or feedback...'
											rows={5}
											required
											className='w-full px-4 py-3 rounded-lg font-sans text-sm outline-none transition-all resize-none'
											style={{
												background: "var(--bg-secondary)",
												border: "1px solid var(--border)",
												color: "var(--text-primary)",
											}}
											onFocus={(e) =>
												(e.target.style.borderColor =
													"var(--border-strong)")
											}
											onBlur={(e) =>
												(e.target.style.borderColor = "var(--border)")
											}
										/>
										<ValidationError
											prefix='Message'
											field='message'
											errors={state.errors}
											className='mt-2 font-mono text-xs'
										/>
									</div>

									<ValidationError
										errors={state.errors}
										className='font-mono text-xs'
									/>

									<button
										type='submit'
										disabled={state.submitting}
										className='w-full btn-primary flex items-center justify-center gap-2 py-3'
									>
										<Send size={14} />
										{state.submitting ? "Sending..." : "Send Message"}
									</button>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
