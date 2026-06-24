const variants = {
  gold: 'via-[#D4AF37]/65',
  red: 'via-[#B11226]/55',
  soft: 'via-white/22',
}

function SectionDivider({ variant = 'gold', offset = 'bottom-0' }) {
  const color = variants[variant] ?? variants.gold

  return (
    <div className={`pointer-events-none absolute inset-x-0 ${offset} z-10`} aria-hidden="true">
      <div className={`h-px bg-linear-to-r from-transparent ${color} to-transparent`} />
      <div className="mx-auto h-[3px] w-24 rounded-full bg-linear-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />
    </div>
  )
}

export default SectionDivider
