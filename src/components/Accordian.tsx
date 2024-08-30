import { useState } from 'react';
import Typography from './Typography';
import clsx from 'clsx';

type Props = {
  header: string;
  content: string;
}

const Accordian: React.FC<Props> = ({ header, content}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col border-b border-background-border flex-1'>
      <button className='py-inner-spacing flex-1 flex items-center justify-between text-left' onClick={() => setOpen(!open)}><Typography variant='heading4'>{header}</Typography>
        {/* TODO: //! figure out how to import icons correctly */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx(open && "rotate-180", "size-5 stroke-[3px] transition-all stroke-accent shrink-0")}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <Typography className='pb-5'>{content}</Typography>}
    </div>
  );
}

export default Accordian
