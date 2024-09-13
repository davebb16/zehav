import { ReactElement } from 'react'

type Props = {
  children: ReactElement[]
  setSelectedTab: (index: number) => void
}

const Select: React.FC<Props> = ({ children, setSelectedTab }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex
    setSelectedTab(index)
  }
  return (
    <div className='flex flex-1 flex-col'>
      <label
        htmlFor='Categories'
        className='block text-sm font-medium leading-6 text-foreground'
      >
        Categories
      </label>
      <select
        onChange={handleSelectChange}
        id='Categories'
        name='Categories'
        defaultValue='Hebrew Basics'
        className='bg-field mt-2 block w-full min-w-full flex-1 rounded-md border-0 py-1.5 pl-3 pr-10 text-foreground ring-1 ring-inset ring-background-border focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6'
      >
        {children}
      </select>
    </div>
  )
}

export default Select
