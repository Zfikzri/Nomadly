/**
 * Design tokens aligned with md/DESIGN (1).md and Home_UI.png
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#151C27',
    textSecondary: '#45464C',
    textMuted: '#6B7280',
    background: '#FFFFFF',
    surface: '#F9F9FF',
    surfaceLowest: '#FFFFFF',
    surfaceContainerLow: '#F0F3FF',
    surfaceContainer: '#E7EEFE',
    backgroundElement: '#F0F3FF',
    backgroundSelected: '#E0E8F8',
    primary: '#000000',
    secondary: '#0050D6',
    secondaryContainer: '#326BF3',
    skyTop: '#D8EEFF',
    skyBottom: '#9BCDF8',
    photoOverlay: '#4B9FEA',
    accentGreen: '#22C55E',
    accentRose: '#F43F5E',
    accentPurple: '#A855F7',
    border: '#E2E8F0',
  },
  dark: {
    text: '#FFFFFF',
    textSecondary: '#B0B4BA',
    textMuted: '#94A3B8',
    background: '#0F172A',
    surface: '#1E293B',
    surfaceLowest: '#1E293B',
    surfaceContainerLow: '#1E293B',
    surfaceContainer: '#334155',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    primary: '#FFFFFF',
    secondary: '#3B82F6',
    secondaryContainer: '#2563EB',
    skyTop: '#1E293B',
    skyBottom: '#0F172A',
    photoOverlay: '#1E3A8A',
    accentGreen: '#22C55E',
    accentRose: '#F43F5E',
    accentPurple: '#A855F7',
    border: '#334155',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
