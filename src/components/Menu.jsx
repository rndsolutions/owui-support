export default function Menu() {

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-md font-semibold text-neutral-900">
                    <img src="/public/logo-2.png" alt="ContextOps Logo" className="inline-block h-16 max-w-xs mr-1" />
                    <span className="hidden md:inline">Managed </span><span className="text-blue-600"> AI</span> Services with <span role="img" aria-label="heart">❤️</span> by R&amp;D Solutions
                </div>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-700">
                    <a href="#" className="hover:text-blue-600">Home</a>
                    <a href="#" onClick={() => smoothScrollTo('why')} className="hover:text-blue-600">Why Us</a>
                    <a href="#" onClick={() => smoothScrollTo('aiBenefits')} className="hover:text-blue-600">AI Benefits</a>
                    <a href="#pricing" className="hover:text-blue-600">Pricing</a>
                    <a href="https://docs.openwebui.com" className="hover:text-blue-600">Docs</a>
                    <a href="#" onClick={() => smoothScrollTo('contacts')} className="hover:text-blue-600">Contact</a>
                    <a href="https://demo.contextops.ai" className="hover:text-blue-600">Sign-In</a>
                </nav>
            </div>
        </header>
    )
}