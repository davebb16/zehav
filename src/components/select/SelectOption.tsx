import { ReactElement } from 'react'

interface props {
  children: ReactElement[]
  setSelectedTab: (index: number) => void
  selectedTab: number
}

const SelectOption: React.FC<props> = ({ children, setSelectedTab }) => {
  return <option onClick={() => setSelectedTab(index)}>{children}</option>
}

export default SelectOption
