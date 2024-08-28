import Typography from '../components/Typography'


export const faqContent = {
  'Hebrew Basics': [
    {
      question: "What are the different letter prefixes in Hebrew?",
      answer: (
        <div className='flex flex-col gap-2'>
          <Typography>
            Something about letter prefixes
          </Typography>
          <Typography>
            More Prefix stuff
          </Typography>
        </div>
      ),
    },
    {
      question: "Some Basic Hebrew Question",
      answer: (
          <Typography>
            A basic answer
          </Typography>
      ),
    },
  ],
  'Switching Your Phone to Hebrew': [
    {
      question: "Phoneonone",
      answer: (
        <div className='flex flex-col gap-2'>
          <Typography>
            Phone
          </Typography>

        </div>
      ),
    },
  ],
}

export const categories = Object.keys(faqContent) as Array<keyof typeof faqContent>

