export const useAssets = () => {
  const getLogoUrl = (filename: string) => {
    return new URL(`../assets/logo/${filename}`, import.meta.url).href
  }

  const getImageUrl = (path: string) => {
    return new URL(`../assets/${path}`, import.meta.url).href
  }

  return {
    getLogoUrl,
    getImageUrl,
  }
}
