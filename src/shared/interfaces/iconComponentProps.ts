import * as PhosphorIcons from '@phosphor-icons/vue'

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
export type PhosphorIconName = keyof typeof PhosphorIcons
export type IconName = Exclude<PhosphorIconName, string | number | symbol>
export type IconNameWithoutPrefix = IconName extends `Ph${infer Name}` ? Name : never

export interface IconComponentProps {
  name: IconNameWithoutPrefix
  size?: number | string
  color?: string
  weight?: IconWeight
}
