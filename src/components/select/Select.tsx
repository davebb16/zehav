import { ReactElement } from 'react'

type Props = {
  children: ReactElement[]
}

const Select: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <label
        htmlFor='location'
        className='block text-sm font-medium leading-6 text-foreground'
      >
        Location
      </label>
      <select
        id='location'
        name='location'
        defaultValue='Canada'
        className='bg-field mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-foreground ring-1 ring-inset ring-background-border focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6'
      >
        {children}
      </select>
    </div>
  )
}

export default Select
