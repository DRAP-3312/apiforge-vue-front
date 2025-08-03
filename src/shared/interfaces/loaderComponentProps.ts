export interface LoaderComponentProps {
  typeLoader: LoaderType
  bgLoader: string
  colorLoader: string
}

export type LoaderType = 'circle' | 'bar'
