import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * ? A component for applying a gradient(glow) to the background of a page.
 * * Avoid using className if possible as it makes things less consistent. However, anything in className will override the variant
 * *
 * @param className - For adding custom styles when absolutely necessary
 * @param type - Determines the type of gradient(membershipTiers applies a different gradient than default, for example)

 * @returns The GlowBackground component as the semantic HTML element with given styles
 */

export interface GlowBackgroundProps {
  className?: string
  type?: 'default' | 'membershipTiers'
}

export default function GlowBackground({
  className,
  type = 'default',
}: GlowBackgroundProps) {
  const bgStyles = glowStylesMap[type]
  return (
    <div className={twMerge('absolute h-full w-full', bgStyles, className)} />
  )
}

const glowStylesMap: Record<'default' | 'membershipTiers', string> = {
  default: clsx(
    "bg-[url('/src/assets/svg/default-gradient-background.svg')] bg-[top_-5rem_right_50%] bg-[size:_70rem] bg-repeat opacity-50 md:opacity-100 md:bg-[top_-5rem_right_50%] md:bg-[size:120rem] md:bg-no-repeat"
  ),
  membershipTiers: clsx(
    'bg-[url(@assets/svg/tiers-gradient-background.svg)] [background-position:_top_-7rem_right_50%] [background-size:_80rem] opacity-50',
    'xl:opacity-100 xl:bg-no-repeat xl:[background-size:_135rem] xl:[background-position:_top_-15rem_right_50%]',
    '2xl:bg-no-repeat 2xl:bg-[size:145rem] 2xl:bg-[position:top_-15rem_right_50%]'
  ),
}
