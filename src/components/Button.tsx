type Props = {
  children: React.ReactNode
  onClick: () => void
}



const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="relative rounded-md border-2 border-amber-300 px-3.5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all">
      <div className="absolute inset-0 w-full h-full opacity-0 [&_span]:drop-shadow-xl hover:opacity-100 hover:!text-yellow-900 shadow-sm bg-gradient-to-br from-amber-50 to-amber-300 via-yellow-500 rounded-sm transition-all"/>
      <span className='drop-shadow-lg relative pointer-events-none'>{children}</span>
    </button>
  )
}

export default Button