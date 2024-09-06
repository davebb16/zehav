type props = {
  href: string
  children: React.ReactNode
}

const LinkTo: React.FC<props> = ({ href, children }) => {
  return (
    <a
      target='_blank'
      className='text-foreground-dimmed1 transition-all [text-decoration:_underline_transparent;] hover:[text-decoration-color:rgb(var(--accent));]'
      href={href}
    >
      {children}
    </a>
  )
}

export default LinkTo
