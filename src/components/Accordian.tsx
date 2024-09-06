import { useState } from 'react'
import Typography from './Typography'
import clsx from 'clsx'

type Props = {
  header: string
  content: string
}

const Accordian: React.FC<Props> = ({ header, content }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col overflow-hidden border-b border-background-border'>
      <button
        className='flex items-center justify-between py-inner-spacing text-left'
        onClick={() => setOpen(!open)}
      >
        <Typography variant='heading4'>{header}</Typography>
        {/* TODO: //! figure out how to import icons correctly */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={clsx(
            open && 'rotate-180',
            'size-5 shrink-0 stroke-accent stroke-[3px] transition-all'
          )}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m19.5 8.25-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
      <div
        className={clsx(
          !open ? '[grid-template-rows:_0fr;]' : '[grid-template-rows:_1fr;]',
          'grid transition-all'
        )}
      >
        <div
          className={clsx(
            !open ? 'invisible' : 'visible',
            'min-h-0 overflow-hidden transition-all duration-700'
          )}
        >
          <Typography className='pb-5'>{content}</Typography>
        </div>
      </div>
    </div>
  )
}

export default Accordian
