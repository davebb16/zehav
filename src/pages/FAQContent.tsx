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
      question: (
        <>
          When is the word "
        <Typography as='span' variant='heading4' className='font-secular' fontWeight='normal'>
          את
        </Typography>
        " used in Hebrew?
        </>
      ),
      answer: (
        <div className='flex flex-col gap-4'>
          <Typography>
            In Hebrew, the word "את" (et) is used as a direct object marker. It precedes a definite direct object in a sentence, which usually means the object is a specific person, place, or thing. Here are some guidelines for when to use "את":
          </Typography>
          <Typography>
            <ol><li>Before Definite Nouns: Use "את" before a noun that has the definite article "ה" (ha-), which corresponds to "the" in English.</li></ol>
          </Typography>
          <Typography><li>Example: אני רואה את הספר (Ani ro'eh et ha-sefer) – "I see the book."
            Before Proper Nouns: Use "את" before proper nouns, like names of people or places.</li>
          </Typography>

          <Typography>Example: אני פוגש את דויד (Ani pogesh et David) – "I meet David."
          Before Pronouns: Use "את" before pronouns that serve as the direct object.</Typography>

          <Typography>Example: אני אוהב אותך (Ani ohev otcha) – "I love you."
          When Not to Use "את":</Typography>

          <Typography>With Indefinite Nouns: If the direct object is indefinite (doesn't have "the"), don't use "את".</Typography>

          <Typography>Example: אני קורא ספר (Ani kore sefer) – "I am reading a book."
          Before a Verb: Never use "את" before a verb, as it is strictly for marking the direct object.</Typography>

          <Typography>Understanding when to use "את" is key to proper Hebrew syntax, as it helps clarify the structure of a sentence.
          </Typography>
          </div>
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

