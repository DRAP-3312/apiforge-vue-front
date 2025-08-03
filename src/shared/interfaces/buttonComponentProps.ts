import type { IconWeight } from './iconComponentProps'

export interface ButtonComponentProps {
  content: string
  icon?: any
  buttonType: ButtonComponentType
  disable: boolean
  iconWeight?: IconWeight
  colorIcon: string
}

export type ButtonComponentType = 'success' | 'error' | 'warning' | 'info' | 'base' | 'custom'
