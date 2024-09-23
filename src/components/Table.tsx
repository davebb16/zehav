import React from 'react'

type TableProps = {
  children: React.ReactNode
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className='overflow-hidden border border-background-border shadow sm:rounded-lg'>
      <table className='min-w-full divide-y divide-background-border'>
        <thead className='bg-background-dimmed1'>
          <tr>
            <th
              scope='col'
              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-foreground-dimmed1 sm:pl-6'
            >
              Name
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-foreground-dimmed1'
            >
              Title
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-foreground-dimmed1'
            >
              Email
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-foreground-dimmed1'
            >
              Role
            </th>
            <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
              <span className='sr-only'>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-field'>
          <tr>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-foreground-dimmed1 sm:pl-6'>
              David Billings
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-foreground-dimmed2'>
              Dude
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-foreground-dimmed2'>
              david@science.edu
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-foreground-dimmed2'>
              MaN
            </td>
            <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
              <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                Edit<span className='sr-only'>, David Billings</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
