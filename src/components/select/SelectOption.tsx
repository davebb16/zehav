import { ReactElement } from 'react'

interface props {
  children: ReactElement[]
}

const SelectOption: React.FC<props> = ({ children }) => {
  return <option>{children}</option>
}

export default SelectOption
