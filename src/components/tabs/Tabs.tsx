import React, { ReactElement, useState } from 'react'
import TabTitle from './TabTitle'
import Select from '../select/Select'
import SelectOption from '../select/SelectOption'

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className='flex flex-col gap-spacing md:flex-row'>
      <div className='flex md:hidden'>
        <Select>
          {children.map((item, index) => (
            <SelectOption
              key={index}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            >
              {item.props.title}
            </SelectOption>
          ))}
        </Select>
      </div>
      <div className='hidden flex-col gap-4 sm:flex'>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs
