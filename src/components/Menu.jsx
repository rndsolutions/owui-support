import { useState } from "react";

export default function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				{/* Burger Menu Button */}
				<button
					className="lg:hidden text-neutral-900 focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				{/* Heading */}
				<div className="mr-auto text-md font-semibold text-neutral-900 flex gap-1 items-center">
					<img src="/public/logo-2.png" alt="ContextOps Logo" className="h-16 max-w-xs mr-1" />
					<span className="hidden md:inline whitespace-nowrap">Managed </span>
					<span className="text-blue-600 whitespace-nowrap"> AI</span>
					<span className=" xs:hidden  whitespace-nowrap">Services with </span>
					<span role="img" aria-label="heart" className=" xs:hidden whitespace-nowrap">
						❤️
					</span>
					<span className="whitespace-nowrap">by R&amp;D Solutions</span>
				</div>

				{/* Navigation Menu */}
				<nav
					className={`${
						isMenuOpen ? "block max-w-[220px]" : "hidden"
					} absolute top-full left-0 w-full bg-white shadow-md lg:static lg:flex lg:gap-6 lg:shadow-none lg:bg-transparent text-sm font-medium text-neutral-700`}
				>
					<a href="#" className="ml-auto block px-4 py-2 lg:p-0 hover:text-blue-600">
						Home
					</a>
					<a
						href="#"
						onClick={() => smoothScrollTo("why")}
						className="block px-4 py-2 lg:p-0 hover:text-blue-600"
					>
						Why Us
					</a>
					<a
						href="#"
						onClick={() => smoothScrollTo("aiBenefits")}
						className="block px-4 py-2 lg:p-0 hover:text-blue-600"
					>
						AI Benefits
					</a>
					<a href="#pricing" className="block px-4 py-2 lg:p-0 hover:text-blue-600">
						Pricing
					</a>
					<a href="https://docs.contextops.ai" className="block px-4 py-2 lg:p-0 hover:text-blue-600">
						Docs
					</a>
					<a
						href="#"
						onClick={() => smoothScrollTo("contacts")}
						className="block px-4 py-2 lg:p-0 hover:text-blue-600"
					>
						Contact
					</a>
					<a href="https://demo.contextops.ai" className="block px-4 py-2 lg:p-0 hover:text-blue-600">
						Sign-In
					</a>
				</nav>
			</div>
		</header>
	);
}
