import clsx from 'clsx'

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  selectedTab: number
}

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  selectedTab,
}) => {
  return (
    <div className='flex'>
      <button
        className={clsx(
          index === selectedTab
            ? 'bg-background-dimmed1 hover:bg-background-dimmed2'
            : 'text-foreground-dimmed2 hover:bg-background-dimmed1',
          'flex flex-1 justify-start rounded-lg px-5 py-3 transition-all'
        )}
        onClick={() => setSelectedTab(index)}
      >
        {title}
      </button>
    </div>
  )
}

export default TabTitle
