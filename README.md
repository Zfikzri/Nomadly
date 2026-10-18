# Nomadly 🌍

Nomadly is a modern mobile application built for digital nomads, expats, and global travelers. Built with **Expo SDK 57**, **React Native 0.86**, **React 19**, and **Expo Router**, Nomadly provides an all-in-one hub for trip budgeting, real-time currency conversions, community networking, travel alerts, and an intelligent AI travel companion.

---

## ✨ Features

### 1. 🏠 Home Dashboard
- **Personalized Header**: Dynamic greeting with native high-performance sky gradient background.
- **Nomad Profile Card**: Quick glance at user credentials, nationality, verified badge, and quick profile edit access.
- **Curated Feeds**: Instant previews of active community travel itineraries, trending travel discounts, and critical destination news.

### 2. ✈️ Smart Trip Planner & Budget Calculator
- **AI-Powered Estimates**: Instant travel budget estimations based on destination, trip duration, and preferred spending tier.
- **Daily Cost Breakdown**: Granular estimation for accommodation, dining, local transit, and entertainment.
- **Smart Recommendations**: Tailored tips and budgeting strategies for your selected destination.

### 3. 🤖 Noma AI Travel Assistant
- **Contextual Nomad Guide**: Instant AI assistance for discovering local hotspots, coworking cafes, and hidden gems.
- **Zero-Fee ATM Locator**: Recommendations for international bank-friendly and zero-surcharge ATMs abroad.
- **Visual Recommendations**: Interactive store cards, photo showcases, and quick prompt chips for seamless inquiry.

### 4. 💱 Currency Exchange & Remittance Hub
- **Live Rate Converter**: Real-time currency conversions with instant swap and precision formatting.
- **Custom Currency Watchlist**: Track preferred foreign exchange pairs with 24h change indicators.
- **Remittance Comparison**: Side-by-side comparison of international money transfer providers, fee structures, transfer speeds, and exchange rates.

### 5. 💬 Nomad Community & Messaging
- **Direct & Group Chats**: Connect 1-on-1 with fellow travelers or join location-based community group chats.
- **Travel Companion Profiles**: View public nomad profiles, shared travel interests, and contact links.
- **Community Travel Hubs**: Explore peer-created travel plans, staying members lists, and itinerary details.

### 6. 📰 Local News & Regulations
- **Essential Country Alerts**: Up-to-date travel notices covering customs rules, ETIAS / visa updates, currency regulations, and tourist taxes.
- **AI Key Takeaways**: Quick bullet summaries highlighting actionable insights for every article.

### 7. 🏷️ Promos & Travel Discounts
- **Exclusive Travel Deals**: Discounts on SIM cards, regional rail passes, tourist attractions, and transport.
- **Deal Breakdown**: Comprehensive terms, partner details, and AI-suggested promo redemption advice.

### 8. 🔐 Authentication & Onboarding
- **Multi-step Onboarding**: Smooth introductory carousel explaining core app capabilities.
- **Multilingual Support (i18n)**: Seamless in-app language switching between English (`en`) and Chinese (`zh`).
- **Complete Auth Flow**: Login, signup, social authentication, gender/country selector modals, and profile completion.

---

## 🛠️ Tech Stack

- **Framework**: [Expo SDK 57](https://expo.dev) (Continuous Native Generation)
- **Core**: [React Native 0.86](https://reactnative.dev) & [React 19](https://react.dev)
- **Routing**: [Expo Router v57](https://docs.expo.dev/router/introduction/) (File-based navigation with typed routes)
- **Styling**: [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS 3.4) & Custom Design Tokens
- **Animations & UI**:
  - `react-native-reanimated` 4
  - `react-native-gesture-handler`
  - `react-native-screens` & `react-native-safe-area-context`
  - `expo-symbols` (SF Symbols on iOS with native cross-platform fallbacks)
  - `expo-glass-effect` & `expo-image`
- **Language & Type Safety**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Internationalization**: Lightweight custom `LanguageContext` supporting English and Chinese

---

## 📁 Project Structure

Nomadly follows a **Feature-Driven Architecture** to keep business domains modular, scalable, and easy to maintain:

```text
Nomadly/
├── assets/                     # App icons, splash screens, tab icons, and static images
├── src/
│   ├── app/                    # Expo Router file-based route definitions
│   │   ├── (tabs)/             # Bottom navigation tabs
│   │   │   ├── _layout.tsx     # Custom FloatingTabBar configuration
│   │   │   ├── index.tsx       # Home tab route
│   │   │   ├── planner.tsx     # Trip planner tab route
│   │   │   ├── nomadly-ai.tsx  # Noma AI assistant tab route
│   │   │   ├── rates.tsx       # Currency exchange rates tab route
│   │   │   └── chat.tsx        # Chat & messaging tab route
│   │   ├── community/          # Community hub details [id].tsx
│   │   ├── news/               # News article details [id].tsx
│   │   ├── promo/              # Promo details [id].tsx
│   │   ├── user-profile/       # Public traveler profiles [id].tsx
│   │   ├── login.tsx           # Authentication routes
│   │   ├── register.tsx
│   │   ├── onboarding.tsx      # Welcome walkthrough route
│   │   ├── _layout.tsx         # App root layout (Providers, Theme, Stack)
│   │   └── +not-found.tsx      # 404 fallback screen
│   │
│   ├── features/               # Domain-driven feature modules
│   │   ├── auth/               # Login, registration, modals, auth services
│   │   ├── chat/               # Direct & group chat screens and components
│   │   ├── chat-ai/            # Noma AI assistant, suggested prompts, store cards
│   │   ├── community/          # Community travel hubs and member lists
│   │   ├── home/               # Home screen, hero headers, summary cards
│   │   ├── news/               # Local news feeds, filter chips, article details
│   │   ├── onboarding/         # Onboarding carousel, slides, and pagination
│   │   ├── planner/            # Budget calculation, AI estimation, selectors
│   │   ├── profile/            # Profile screens, edit form, avatar uploaders
│   │   ├── promos/             # Discount promotions and partner cards
│   │   └── rates/              # Currency converter, watchlist, remittance cards
│   │
│   ├── components/             # Reusable UI & Layout primitives
│   │   ├── common/             # Shared elements (e.g., LanguagePillSwitcher)
│   │   ├── layout/             # ScreenContainer, ScreenWrapper, Header
│   │   ├── navigation/         # FloatingTabBar custom bottom navigation
│   │   └── ui/                 # Design system components (ThemedText, Button, etc.)
│   │
│   ├── constants/              # Global theme tokens (Colors, Typography, Spacing)
│   ├── hooks/                  # Global hooks (useTheme, useColorScheme)
│   ├── i18n/                   # Internationalization provider and translations (EN, ZH)
│   ├── services/               # Base networking client (api.ts)
│   ├── types/                  # Shared global TypeScript definitions
│   └── utils/                  # Utility functions and formatters
│
├── app.json                    # Expo application configuration & plugins
├── package.json                # Dependencies and npm scripts
├── tailwind.config.js          # NativeWind / Tailwind styling configuration
└── tsconfig.json               # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.x or v20.x recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- Mobile testing environment:
  - **Expo Go** app on your physical iOS or Android device, OR
  - **Android Studio** (for Android Emulator), OR
  - **Xcode** (macOS only, for iOS Simulator)

### 1. Installation

Clone the repository and install project dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/Nomadly.git
cd Nomadly

# Install dependencies
npm install
```

> **Note**: When installing new native dependencies, always use `npx expo install <package-name>` to ensure compatibility with Expo SDK 57.

### 2. Running the Development Server

Start the Expo bundler:

```bash
npx expo start
```

From the terminal menu:
- Press `a` to launch in an **Android Emulator**.
- Press `i` to launch in an **iOS Simulator** (macOS).
- Press `w` to open in a **Web Browser**.
- Scan the printed QR code using the **Expo Go** app (Android) or **Camera app** (iOS).

Alternative npm scripts:

```bash
# Start directly on Android
npm run android

# Start directly on iOS
npm run ios

# Start directly on Web
npm run web
```

### 3. Code Quality & Type Checking

Run TypeScript type check and linter before submitting commits:

```bash
# TypeScript compiler verification (no output emitted)
npx tsc --noEmit

# ESLint for Expo & React Native
npm run lint
```

---

## 🏗️ Building with EAS (Expo Application Services)

The app is preconfigured for EAS Cloud Builds:

```bash
# Install EAS CLI globally if needed
npm install -g eas-cli

# Log in to your Expo account
eas login

# Build development build for Android
eas build --profile development --platform android

# Build production release
eas build --profile production --platform all
```

---

## 🧭 Development Guidelines

1. **Routing in `src/app/`**:
   - Keep route files lightweight. A route file should primarily import and render its respective screen component from `src/features/<feature>/screens/`.
2. **Feature Isolation in `src/features/`**:
   - Encapsulate components, hooks, services/mock data, and TypeScript types inside their relevant feature directory.
3. **Styling with NativeWind**:
   - Use Tailwind utility classes via `className` for styling. Use `src/constants/theme.ts` for dynamic theme values (dark/light mode).
4. **Platform Compatibility**:
   - Always verify that UI components render cleanly across Android, iOS, and Web. Avoid native-only assumptions without proper platform checks (`Platform.OS`).

---

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.
