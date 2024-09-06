import { Link } from '@tanstack/react-router'
import Bold from '../components/text-formatting/Bold'
import Spacer from '../components/text-formatting/Spacer'
import Typography from '../components/Typography'
import LinkTo from '../components/text-formatting/LinkTo'

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
            "את"(et) is a word in Hebrew that can seem pretty confusing at
            first, since there is no English translation for the word. There are
            three times when this word should be used: before a definite direct
            object, before a proper noun, and before a pronoun (I know those
            might sound scary, but bear with me and I'll try to explain it).
            Here are some examples of each:
            <ol>
              <Typography as='li'>
                <Bold>Before a Definite Direct Object:</Bold>

                <ul>
                  <li>
                    Example: אני אוהב את הכלב | I love the dog.
                    <br />
                    <Typography variant='caption'>
                      Hebrew Pronunciation: Ani ohev et haKiliv
                    </Typography>
                    <ul>
                      <li>
                        Since we are talking about <Bold>the</Bold> dog, it is a
                        <Bold> definite object</Bold>, and we add "את". Most
                        times you are talking about "the object" in Hebrew, you
                        will use "את".
                      </li>
                      <li>
                        {' '}
                        Another good way to think of "את" is as a marker for
                        <Bold>
                          {' '}
                          which object is receiving the action of the sentence
                        </Bold>
                        . Since "the dog" is receiving the love, we say "את the
                        dog".
                      </li>
                    </ul>
                  </li>
                  <li>
                    Example: את הכלב אני אוהב | I love the dog.
                    <br />
                    <Typography variant='caption'>
                      Hebrew Pronunciation: Et haKiliv, ani ohev
                    </Typography>
                    <ul>
                      <li>
                        This is the perfect example of why "את" is needed. Even
                        though the order of this sentence is switched around, we
                        still know that "I" am the one giving the love, and "the
                        dog" is the one recieving the love, since it has an "את"
                        before it. You could literally put these words in any
                        order you want, (like אני את הכלב אוהב ) and it would
                        still mean the same thing. Super cool!
                      </li>
                    </ul>
                  </li>
                </ul>
              </Typography>

              <Typography as='li'>
                <Bold>Before Proper Nouns:</Bold> "את" is used before proper
                nouns, like names of people or places, as shown here:
                <ul>
                  <li>
                    Example: אני אוהב את טל | I love Tal.
                    <br />
                    <Typography variant='caption'>
                      Hebrew Pronunciation: Ani ohev et Tal
                    </Typography>
                  </li>
                </ul>
              </Typography>
              <Typography as='li'>
                <Bold>Before Pronouns:</Bold> pronouns (like "you", "me", "him",
                they, etc) should also have "את" before them.
                <ul>
                  <li>
                    אני אוהב אותך | I love you.
                    <br />
                    <Typography variant='caption'>
                      Hebrew Pronunciation: Ani ohev otakh
                    </Typography>
                    <ul>
                      <li>
                        Notice how we didn't say "אני אוהב את אתה" (Ani ohev et
                        atah), we shorten it to "אני אוהב אותך" (Ani ohev
                        otakh). This is one of my favorite things about Hebrew,
                        when we combine words like this that make sense.
                      </li>
                    </ul>
                  </li>
                </ul>
              </Typography>
            </ol>
          </Typography>
          <Spacer />
          <Typography>
            <Bold>When Not To Use "את"</Bold>
            <Typography>
              To make sure we understand this, let's go over times when we
              should <Bold>not</Bold> use "את":
            </Typography>
            <ol>
              <Typography as='li'>
                אני אוהב כלב | I love a dog.
                <br />
                <Typography variant='caption'>
                  Hebrew Pronunciation: Ani ohev kiliv
                </Typography>
                <ul>
                  <li>
                    We don't use "את" here, because we are talking about{' '}
                    <Bold>a</Bold> dog, not <Bold>the</Bold> dog -- this makes
                    'a dog' an
                    <Bold> indefinite</Bold> object, so "את" should not be used.
                  </li>
                </ul>
              </Typography>
              <Typography as='li'>
                אני אוהבים הכלבים | I love the dogs.
                <br />
                <Typography variant='caption'>
                  Hebrew Pronunciation: Ani ohev'im haKiliv'im
                </Typography>
                <ul>
                  <li>
                    This one can be a bit confusing, because it is "the ___",
                    which usually uses "את". However, if we take a close look,
                    we are referring to a group of dogs, not a specific dog.
                    Since it is a group, it is an <Bold>indefinite</Bold>{' '}
                    object, so "את" should not be used.
                  </li>
                </ul>
              </Typography>
            </ol>
          </Typography>
          <Spacer />
          <Typography>
            That's all there is to it! Here are some resources if you want to do
            some more research on this:
            <ul>
              <Typography as='li' color='foregroundDimmed2'>
                Video:{' '}
                <LinkTo href='https://www.youtube.com/watch?v=HD5wQ1f6iu4'>
                  https://www.youtube.com/watch?v=HD5wQ1f6iu4
                </LinkTo>
              </Typography>
              <Typography as='li' color='foregroundDimmed2'>
                Article:{' '}
                <LinkTo href='https://www.thekefar.com/what-is-et-in-hebrew-and-how-do-we-use-it/'>
                  What is את and how do we use it?
                </LinkTo>
              </Typography>
            </ul>
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
