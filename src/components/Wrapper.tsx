import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * ? A component for adding a wrapper around pages/parts of pages to give consistent padding and max width
 * * Avoid using className if possible as it makes things less consistent. However, anything in className will override the variant
 * *
 * @param paddingX - Add the shared padding to the sides of the wrapper (true by defualt)
 * @param paddingY - Add the shared padding to the top and bottom of the wrapper
 * @param maxWidth - Add the max width to the wrapper (true by default)
 * @param children - The elements within the wrapper
 * @param as - The HTML element to render as. Default is 'div'. If you make it main, it will automatically add the role of main
 * @param className - For adding custom styles when absolutely neccessary
 * @returns The Wrapper component as the semantic HTML element with given styles
 */

export type WrapperProps = {
  paddingX?: boolean
  paddingY?: boolean
  children: React.ReactNode
  maxWidth?: boolean
  as?: 'main' | 'div' | 'nav'
  className?: string
}

export default function Wrapper({
  paddingX = true,
  paddingY,
  maxWidth = true,
  children,
  as = 'div',
  className,
}: WrapperProps) {
  const As = as ?? 'div'
  return (
    <As
      role={clsx(As === 'main' && 'main')}
      className={twMerge(
        'relative mx-auto w-full',
        paddingX && 'px-spacing',
        paddingY && 'py-spacing',
        maxWidth && 'max-w-8xl',
        className
      )}
    >
      {children}
    </As>
  )
}
