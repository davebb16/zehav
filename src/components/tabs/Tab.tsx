
type Props = {
  title: string
  children: React.ReactNode
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div className='flex flex-col flex-1'>{children}</div>
}

export default Tab