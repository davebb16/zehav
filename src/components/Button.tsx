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
    <As
      onClick={onClick}
      href={to}
      className={clsx(
        className,
        'relative overflow-hidden rounded-md border-2 border-accent px-3.5 py-2.5 text-sm font-semibold  [&:hover_div]:opacity-100  [&:hover_span]:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all'
      )}
    >
      <div className='absolute inset-0 w-full h-full opacity-0 shadow-sm bg-gradient-to-br from-[#F8CF59] to-[#F8CF59] via-[#997323] rounded-sm transition-all' />
      <span className='text-shadow relative pointer-events-none transition-all'>
        {children}
      </span>
    </As>
  )
}

//from-[#f3ca65] to-[#e8c763] via-[#896b2d]
export default Button
