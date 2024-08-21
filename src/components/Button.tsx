export default function Button({ children }) {
  return (
    <button className="rounded-md border-2 border-violet-500 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gradient-to-br from-indigo-500 to-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all">
      {children}
    </button>
  )
}