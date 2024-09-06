import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
type TypographyProps = {
  children: React.ReactNode
  className?: string
  as?: TypographyAs
  variant?: TypographyVariant
  color?: TypographyColor
  size?: TypographySize
  fontWeight?: TypographyFontWeight
} & React.HTMLAttributes<HTMLElement>

/**
 * @param children - The text to display
 * @param className - Additional classes to add. Will override everything in variant
 * @param variant - The variant of the typography. **Default is 'body1'**
 * @param as - The HTML element to render as. **Default is whatever element default variant **
 * @param color - The color of the text
 * @param size - The size of the text
 * @param fontWeight - The weight of the text
 * @returns The Typography component as selected HTML element with given styles
 */
export default function Typography({
  children,
  className,
  as,
  variant = 'body1',
  color,
  size,
  fontWeight,
  ...props
}: TypographyProps) {
  const variantData = useMemo(() => {
    const _variantData = createVariantData({
      variant,
      size,
      fontWeight,
      color,
    })

    if (className)
      _variantData.className = twMerge(_variantData.className, className)

    return _variantData
  }, [variant, size, fontWeight, color, className])
  const As = as ?? variantData.defaultAs

  return (
    <As {...props} className={variantData.className}>
      {children}
    </As>
  )
}

type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'body1'
  | 'body2'
  | 'label'
  | 'caption'

type TypographyAs =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | 'li'

type TypographyColor = keyof typeof colorMap

type TypographyFontWeight = keyof typeof fontWeightMap

type TypographySize = keyof typeof sizeMap

const colorMap = {
  foreground: 'text-foreground',
  foregroundDimmed1: 'text-foreground-dimmed1',
  foregroundDimmed2: 'text-foreground-dimmed2',
  foregroundDimmed3: 'text-foreground-dimmed3',
  foregroundDimmed4: 'text-foreground-dimmed4',
  foregroundGrad: 'background-foreground-grad',
  primary: 'text-primary',
  white: 'text-white',
  primaryForeground: 'text-primary-foreground',
}

const fontWeightMap = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
}

const sizeMap = {
  'none': '',
  'xxs': 'text-xxs',
  'xs': 'text-xs',
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl 5xl:text-2xl',
  '2xl': 'text-2xl 5xl:text-3xl',
  '3xl': 'text-2xl sm:text-3xl 2xl:text-4xl',
  '4xl': 'text-3xl sm:text-4xl xl:text-5xl',
  '5xl': 'text-5xl 2xl:text-6xl 2xl:leading-tight',
  '6xl': 'text-5xl sm:text-6xl 2xl:text-7xl 2xl:leading-tight',
}

const createVariantData = ({
  variant,
  size,
  fontWeight,
  color,
}: {
  variant: TypographyVariant
  size?: TypographySize
  fontWeight?: TypographyFontWeight
  color?: TypographyColor
}) => {
  const variantMap: {
    [K in TypographyVariant]: { className: string; defaultAs: TypographyAs }
  } = {
    heading1: {
      className: `${sizeMap[size ?? '6xl']} ${fontWeightMap[fontWeight ?? 'extrabold']} ${colorMap[color ?? 'foregroundGrad']}`,
      defaultAs: 'h1',
    },
    heading2: {
      className: `${sizeMap[size ?? '3xl']} ${fontWeightMap[fontWeight ?? 'extrabold']} ${colorMap[color ?? 'foregroundGrad']} `,
      defaultAs: 'h2',
    },
    heading3: {
      className: `${sizeMap[size ?? '2xl']} ${fontWeightMap[fontWeight ?? 'extrabold']} ${colorMap[color ?? 'foregroundGrad']}`,
      defaultAs: 'h3',
    },
    heading4: {
      className: `${sizeMap[size ?? 'xl']} ${fontWeightMap[fontWeight ?? 'extrabold']} ${colorMap[color ?? 'foregroundGrad']}`,
      defaultAs: 'h4',
    },
    heading5: {
      className: `${sizeMap[size ?? 'lg']} ${fontWeightMap[fontWeight ?? 'extrabold']} ${colorMap[color ?? 'foregroundGrad']}`,
      defaultAs: 'h5',
    },
    heading6: {
      className: `${sizeMap[size ?? 'base']} ${fontWeightMap[fontWeight ?? 'semibold']} ${colorMap[color ?? 'foregroundGrad']}`,
      defaultAs: 'h6',
    },
    body1: {
      className: `${sizeMap[size ?? 'base']} ${fontWeightMap[fontWeight ?? 'normal']} ${colorMap[color ?? 'foregroundDimmed1']}`,
      defaultAs: 'p',
    },
    body2: {
      className: `${sizeMap[size ?? 'lg']} ${fontWeightMap[fontWeight ?? 'normal']} ${colorMap[color ?? 'foregroundDimmed1']}`,
      defaultAs: 'p',
    },
    caption: {
      className: `${sizeMap[size ?? 'sm']} ${fontWeightMap[fontWeight ?? 'normal']} ${colorMap[color ?? 'foregroundDimmed3']}`,
      defaultAs: 'span',
    },
    label: {
      className: `${sizeMap[size ?? 'sm']} ${fontWeightMap[fontWeight ?? 'semibold']} ${colorMap[color ?? 'foreground']}`,
      defaultAs: 'label',
    },
  }
  return {
    className: variantMap[variant].className,
    defaultAs: variantMap[variant].defaultAs,
  }
}
