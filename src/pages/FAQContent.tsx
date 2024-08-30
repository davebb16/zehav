import Bold from '../components/text-formatting/Bold'
import Typography from '../components/Typography'

export const faqContent = {
  'Hebrew Basics': [
    {
      question: 'What are the different letter prefixes in Hebrew?',
      answer: (
        <div className='flex flex-col gap-2'>
          <Typography>Something about letter prefixes</Typography>
          <Typography>More Prefix stuff</Typography>
        </div>
      ),
    },
    {
      question: (
        <>
          When is the word "
          <Typography
            as='span'
            variant='heading4'
            className='font-secular'
            fontWeight='normal'
          >
            את
          </Typography>
          " used in Hebrew?
        </>
      ),
      answer: (
        <div className='flex flex-col gap-text-gap'>
          <Typography>
            In Hebrew, the word "את" (et) is used as a direct object marker. It
            precedes a definite direct object in a sentence, which usually means
            the object is a specific person, place, or thing. Here are some
            guidelines for when to use "את":
            <ol>
              <Typography as='li'>
                <Bold>Before Definite Nouns:</Bold> Use "את" before a noun that
                has the definite article "ה" (ha-), which corresponds to "the"
                in English.
                <ul>
                  <li>
                    Example: אני רואה את הספר (Ani ro'eh et ha-sefer) – "I see
                    the book."
                  </li>
                </ul>
              </Typography>
              <Typography as='li'>
                <Bold>Before Proper Nouns:</Bold> Use "את" before proper nouns,
                like names of people or places.
                <ul>
                  <li>
                    Example: אני פוגש את דויד (Ani pogesh et David) – "I meet
                    David."
                  </li>
                </ul>
              </Typography>

              <Typography as='li'>
                <Bold>Before Pronouns:</Bold> Use "את" before pronouns that
                serve as the direct object.
                <ul>
                  <li>
                    Example: אני אוהב אותך (Ani ohev otcha) – "I love you."
                  </li>
                </ul>
              </Typography>
            </ol>
          </Typography>

          <Typography>
            <Bold>When Not to Use "את":</Bold>
            <ol>
              <li>
                <Bold>With Indefinite Nouns:</Bold> If the direct object is
                indefinite (doesn't have "the"), don't use "את"
                <ul>
                  <li>
                    Example: אני קורא ספר (Ani kore sefer) – "I am reading a
                    book."
                  </li>
                </ul>
              </li>

              <li>
                <Bold>Before a Verb:</Bold> Never use "את" before a verb, as it
                is strictly for marking the direct object.{' '}
                <ul>
                  <li>
                    <Bold>ADD AN EXAMPLE DAVID</Bold>
                  </li>
                </ul>
              </li>
            </ol>
          </Typography>
          <Typography>
            Understanding when to use "את" is key to proper Hebrew syntax, as it
            helps clarify the structure of a sentence.
          </Typography>
        </div>
      ),
    },
  ],
  'Switching Your Phone to Hebrew': [
    {
      question: 'How do dates and times work in Hebrew?',
      answer: (
        <div className='flex flex-col gap-2'>
          <Typography>Coming soon...</Typography>
        </div>
      ),
    },
    {
      question: 'What are some words that I need to know?',
      answer: (
        <div className='flex flex-col gap-2'>
          <Typography>Coming soon...</Typography>
        </div>
      ),
    },
  ],
}

export const categories = Object.keys(faqContent) as Array<
  keyof typeof faqContent
>
