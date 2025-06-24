export const BenefitCard = ({ benefit, onClaim }) => {
    return (
        <div
            className="relative p-6 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg text-foreground transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#28CC95]/60 hover:to-[#007CF0]/60 hover:border-transparent group cursor-pointer"
            onClick={onClaim}
        >
            <div className="text-3xl mb-2">{benefit.icon}</div>
            <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-white">
                {benefit.title}
            </h3>
            <p className="text-sm mb-4 group-hover:text-white/80">{benefit.description}</p>
            <button
                className="px-4 py-2 rounded-md text-white bg-gradient-to-tr from-[#28CC95]/60 to-[#007CF0]/60 text-sm font-medium border border-white/20 hover:bg-white/20 transition"
            >
                {benefit.cta}
            </button>
        </div>
    )
}
