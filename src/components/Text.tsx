import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  color?: 'gray-100' | 'gray-400'
}

export function Text({ size = 'md', children, asChild, color = 'gray-100' }: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp className={clsx(
      "font-sans",
      {
        'text-xs': size == 'sm',
        'text-sm': size == 'md',
        'text-md': size == 'lg',
      },
      {
        'text-gray-100': color == 'gray-100',
        'text-gray-400': color == 'gray-400'
      }
    )}
    >
      {children}
    </Comp>
  )
}