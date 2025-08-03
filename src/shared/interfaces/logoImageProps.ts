export interface LogoImageProps {
  alt: string
  size: SizeLogoImg
  logoType: LogoType
}

export type SizeLogoImg = 'sm' | 'md' | 'lg' | 'native'
export type LogoType = 'bg-on' | 'bg-off'
