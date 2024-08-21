export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="relative rounded-md border-2 border-amber-300 px-3.5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all hover:border-transparent overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 shadow-sm bg-gradient-to-br from-indigo-500 to-violet-700 transition-all"/>
      {children}
    </button>
  )
}