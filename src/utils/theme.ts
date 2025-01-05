// Theme management utilities
export type Theme = 'light' | 'dark';

export function getInitialTheme(): Theme {
  // Check localStorage
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Theme;
  }

  // Check system preference
  // if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //   return 'dark';
  // }

  return 'light';
}

export function setTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  localStorage.setItem('theme', theme);
}
