export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-full bg-white/10 text-white 
        hover:bg-white/20 transition ${className}`}
    >
      {children}
    </button>
  )
}
