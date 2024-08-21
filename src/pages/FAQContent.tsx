import Typography from '../components/Typography'


export const faqContent = {
  'Hebrew Basics': [
    {
      question: "What are the different letter prefixes in Hebrew?",
      answer: (
        <div className='flex flex-col gap-2'>
          <Typography>
            asfdsd
          </Typography>
          <Typography>
            asdf
          </Typography>
        </div>
      ),
    },
  ],
  'Switching Your Phone to Hebrew': [
    {
      question: "What are the different letter prefixes in Hebrew?",
      answer: (
        <div className='flex flex-col gap-2'>
          <Typography>
            asfdsd
          </Typography>
          <Typography>
            asdf
          </Typography>
        </div>
      ),
    },
  ],
}

export const categories = Object.keys(faqContent) as Array<keyof typeof faqContent>

