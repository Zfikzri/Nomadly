# Nomadly Mobile App (Expo React Native)

Aplikasi mobile Nomadly dibangun dengan **Expo SDK 57**, **React Native 0.86**, dan **Expo Router**.

---

## 📁 Struktur Folder Project

Project ini menggunakan arsitektur **Feature-Driven** agar tim tidak bingung saat membuat halaman atau komponen baru:

```text
src/
├── app/                        # KHUSUS Route & Navigasi Expo Router (File-based Routing)
│   ├── (tabs)/                 # Route Group untuk Bottom Tab Navigation
│   │   ├── _layout.tsx         # Konfigurasi Bottom Tabs (Home, Explore)
│   │   ├── index.tsx           # Route Home -> render <HomeScreen /> dari features/home
│   │   └── explore.tsx         # Route Explore
│   ├── _layout.tsx             # Root Layout (Theme, SafeArea, Global Providers, Stack)
│   └── +not-found.tsx          # 404 Fallback screen
│
├── features/                   # Modul per fitur/domain bisnis
│   └── home/                   # Modul Home
│       ├── components/         # Komponen khusus Home (Header, Banner, Card, dll.)
│       ├── hooks/              # Hook khusus Home
│       ├── services/           # Fetch API / Mock data Home
│       ├── types/              # Type definition khusus Home
│       └── screens/            # HomeScreen.tsx (halaman utama yang di-import oleh route)
│
├── components/                 # Komponen umum / Shared UI
│   ├── ui/                     # Primitive design system (ThemedText, ThemedView, Button, Collapsible)
│   └── layout/                 # ScreenContainer, Header, ScreenWrapper
│
├── constants/                  # Design tokens & konfigurasi global
│   └── theme.ts                # Colors (Light/Dark), Spacing, Fonts
│
├── hooks/                      # Custom hooks global (useTheme, useColorScheme)
├── services/                   # Networking & client HTTP global
│   └── api.ts                  # Fetch client dasar
├── types/                      # TypeScript definitions global
│   └── index.ts                # Shared types
└── utils/                      # Helper functions (formatters, validation)
```

---

## 🧭 Panduan untuk Tim (Rule of Thumb)

| Mau buat apa? | Di mana lokasinya? | Contoh |
| :--- | :--- | :--- |
| **Page / Screen Route baru** | `src/app/` (tipis saja, import dari feature) | `src/app/detail/[id].tsx` |
| **Tampilan Halaman Utama** | `src/features/<feature>/screens/` | `src/features/home/screens/HomeScreen.tsx` |
| **Komponen khusus 1 Fitur** | `src/features/<feature>/components/` | `src/features/home/components/HomeHeroBanner.tsx` |
| **Komponen Reusable (UI Primitive)** | `src/components/ui/` | `src/components/ui/Button.tsx`, `ThemedText.tsx` |
| **Layout / Wrapper Layar** | `src/components/layout/` | `src/components/layout/ScreenContainer.tsx` |
| **API / Mock Data per Fitur** | `src/features/<feature>/services/` | `src/features/home/services/mockData.ts` |
| **Type Definition per Fitur** | `src/features/<feature>/types/` | `src/features/home/types/index.ts` |
| **Helper / Formatter global** | `src/utils/` | `src/utils/index.ts` |

---

## 🚀 Menjalankan Project

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Jalankan Typecheck
npx tsc --noEmit

# Jalankan Linter
npx expo lint
```
