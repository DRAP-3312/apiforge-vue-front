import { ref, computed, watch, onMounted } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const THEME_STORAGE_KEY = 'apiforge-theme'

const theme = ref<Theme>('system')
const systemPrefersDark = ref(false)
let isInitialized = false

export function useTheme() {
  const isDark = computed(() => {
    if (theme.value === 'system') {
      return systemPrefersDark.value
    }
    return theme.value === 'dark'
  })

  const currentTheme = computed(() => theme.value)

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    applyTheme()
  }

  const toggleTheme = () => {
    if (theme.value === 'light') {
      setTheme('dark')
    } else if (theme.value === 'dark') {
      setTheme('light')
    } else {
      setTheme(systemPrefersDark.value ? 'light' : 'dark')
    }
  }

  const applyTheme = () => {
    const root = document.documentElement

    if (isDark.value) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const initTheme = () => {
    if (isInitialized) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemPrefersDark.value = mediaQuery.matches

    mediaQuery.addEventListener('change', (e) => {
      systemPrefersDark.value = e.matches
      if (theme.value === 'system') {
        applyTheme()
      }
    })

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme.value = savedTheme
    }

    applyTheme()
    isInitialized = true
  }

  watch([isDark], applyTheme, { immediate: true })

  if (typeof window !== 'undefined' && !isInitialized) {
    initTheme()
  }

  onMounted(() => {
    initTheme()
  })

  return {
    theme: currentTheme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme,
    logoType: computed(() =>
      theme.value === 'dark' ? 'api_forge_logo.png' : 'api_forge_logo-nobg.png',
    ),
  }
}
