import type { IconWeight } from './iconComponentProps'

export interface ButtonComponentProps {
  content: string
  icon?: any
  buttonType: ButtonComponentType
  disable: boolean
  iconWeight?: IconWeight
  colorIcon: string
  iconPosition: PositionIcon
  iconSize?: number
  sizeButton?: SizeButton
}

export type ButtonComponentType = 'success' | 'error' | 'warning' | 'info' | 'base' | 'custom'
export type PositionIcon = 'after' | 'before'
export type SizeButton = 'full' | 'middle' | 'quarter' | 'auto' | 'fit'
