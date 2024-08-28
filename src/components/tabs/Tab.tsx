
type Props = {
  title: string
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div className='flex flex-col flex-1'>{children}</div>
}

export default Tab