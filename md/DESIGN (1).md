---
name: Global Travel Finance Companion
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#45464c'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#575e70'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141b2b'
  on-primary-container: '#7d8497'
  inverse-primary: '#c0c6db'
  secondary: '#0050d6'
  on-secondary: '#ffffff'
  secondary-container: '#326bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f24'
  on-tertiary-container: '#0091a1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce2f7'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#141b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#98f0ff'
  tertiary-fixed-dim: '#41d9ed'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
  sky-top: '#D8EEFF'
  sky-bottom: '#9BCDF8'
  surface-glass: rgba(255, 255, 255, 0.88)
  photo-overlay: '#4B9FEA'
  orb-navy: '#0E1B4D'
  accent-purple: '#A855F7'
  accent-green: '#22C55E'
  accent-blue: '#3B82F6'
  accent-rose: '#F43F5E'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

# Design Specification: Noname (Global Travel Finance Companion)

## 1. Ringkasan Produk
* **Nama Produk:** Noname (Global Travel Finance Companion)
* **Kategori:** Global Travel Finance Companion (Fintech & Travel Utility)
* **Platform:** Mobile (iOS & Android)
* **Prinsip UI/UX Utama:** Bite-Sized Clarity

## 2. Design System & Style Guide
### 2.1 Palet Warna & Visual Token
- **Main Background**: Linear Gradient (180deg) #D8EEFF -> #9BCDF8 (Soft Sky Blue)
- **Hero / Header Accent**: Adaptive Gradient tone / Deep Indigo ke Sky Blue
- **Surface / Card Base**: Solid / Blur #FFFFFF / rgba(255, 255, 255, 0.88) + Blur 16px (Frosted glass)
- **Photo Card Overlay**: Linear Gradient (180deg) rgba(75, 159, 234, 0) -> #4B9FEA
- **Center Orb Button**: Radial Gradient #55E7FC -> #2B66FF -> #0E1B4D (Neon Cyan ke Deep Navy)
- **Teks & Tombol Primer**: Solid #111827
- **Teks Sekunder & Muted**: Solid #6B7280 / #4B5563
- **Icon / Accent Tokens**:
  - Icon All: #4485FD -> #2B66EE
  - Icon New Here: #C084FC -> #A855F7
  - Icon Online: #4ADE80 -> #22C55E
  - Icon Today: #60A5FA -> #3B82F6
  - Icon Favored: #FB7185 -> #F43F5E

### 2.2 Tipografi & Radius
- **Font Family**: Plus Jakarta Sans / Inter
- **Corner Radius**:
  - Profile Bar & Large Cards: 24px
  - Action Chips & Pill Badges: 999px
  - Floating AI Orb: Bulat penuh (Circle)
