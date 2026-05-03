"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
	{ label: "Home", href: "#home" },
	{ label: "Domain", href: "#domain" },
	{ label: "Milestones", href: "#milestones" },
	{ label: "Documents", href: "#documents" },
	{ label: "Slides", href: "#presentations" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const { theme, toggleTheme } = useTheme();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);

			// Active section detection
			const sections = navLinks.map((l) => l.href.replace("#", ""));
			for (let i = sections.length - 1; i >= 0; i--) {
				const el = document.getElementById(sections[i]);
				if (el && window.scrollY >= el.offsetTop - 120) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled ? "py-3 backdrop-blur-xl border-b" : "py-5"
				}`}
				style={{
					backgroundColor: scrolled
						? "var(--bg-card)"
						: "transparent",
					borderColor: "var(--border)",
				}}
			>
				<div className='container-xl flex items-center justify-between'>
					{/* Logo */}
					<a
						href='#home'
						className='flex items-center gap-2 group'
					>
						<div
							className='relative w-8 h-8 rounded overflow-hidden transition-all duration-300'
							style={{
								boxShadow: "0 0 16px rgba(34,211,238,0.4)",
							}}
						>
							<Image
								src='/assets/synapse_logo.png'
								alt='Synapse-CI logo'
								fill
								className='object-cover'
							/>
						</div>
						<span
							className='font-display font-bold text-lg'
							style={{ color: "var(--text-primary)" }}
						>
							Synapse
							<span style={{ color: "var(--accent-cyan)" }}>
								-CI
							</span>
						</span>
					</a>

					{/* Desktop Nav */}
					<div className='hidden lg:flex items-center gap-8'>
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className='nav-link'
								style={{
									color:
										activeSection ===
										link.href.replace("#", "")
											? "var(--accent-cyan)"
											: "var(--text-secondary)",
								}}
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Controls */}
					<div className='flex items-center gap-3'>
						<button
							onClick={toggleTheme}
							className='w-9 h-9 rounded-lg flex items-center justify-center transition-all'
							style={{
								border: "1px solid var(--border)",
								color: "var(--text-secondary)",
							}}
							aria-label='Toggle theme'
						>
							{theme === "dark" ? (
								<Sun size={16} />
							) : (
								<Moon size={16} />
							)}
						</button>
						<button
							className='lg:hidden w-9 h-9 rounded-lg flex items-center justify-center'
							style={{
								border: "1px solid var(--border)",
								color: "var(--text-secondary)",
							}}
							onClick={() => setMobileOpen(!mobileOpen)}
							aria-label='Toggle menu'
						>
							{mobileOpen ? <X size={16} /> : <Menu size={16} />}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu */}
			<div
				className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
					mobileOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				style={{
					backgroundColor: "rgba(5,13,26,0.95)",
					backdropFilter: "blur(20px)",
				}}
				onClick={() => setMobileOpen(false)}
			>
				<div
					className='flex flex-col items-center justify-center h-full gap-8'
					onClick={(e) => e.stopPropagation()}
				>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className='font-display font-bold text-3xl'
							style={{ color: "var(--text-primary)" }}
							onClick={() => setMobileOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</>
	);
}
