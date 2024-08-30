import clsx from 'clsx'

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  selectedTab: number
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, selectedTab }) => {
  return <li className='flex'><button className={clsx(index === selectedTab ? 'bg-background-dimmed1 hover:bg-background-dimmed2' : ' hover:bg-background-dimmed1 text-foreground-dimmed2', 'flex justify-start px-5 py-3 flex-1 rounded-lg transition-all')} onClick={() => setSelectedTab(index)}>{title}</button></li>
}

export default TabTitle