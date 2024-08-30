import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  to?: string
  
}



const Button: React.FC<Props> = ({ children, onClick, className, to }) => {
  const As = to ? 'a' : 'button'
  return (
    <As onClick={onClick} href={to} className={clsx(className, "relative rounded-md border-2 border-accent px-3.5 py-2.5 text-sm font-semibold [&:hover_span]:text-black/80 [&:hover_div]:opacity-100 [&_span]:drop-shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all")}>
      <div className="absolute inset-0 w-full h-full opacity-0 shadow-sm bg-gradient-to-br from-amber-50 to-amber-300 via-yellow-500 rounded-sm transition-all"/>
      <span className='drop-shadow-lg relative pointer-events-none transition-all'>{children}</span>
    </As>
  )
}

export default Button