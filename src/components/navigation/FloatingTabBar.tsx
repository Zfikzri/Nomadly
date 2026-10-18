import { Image } from 'expo-image';
import type { BottomTabBarProps } from 'expo-router/tabs';
import { SymbolView } from 'expo-symbols';
import { useEffect, useState } from 'react';
import { Keyboard, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';

type TabSymbol = {
  ios: string;
  android: string;
  web: string;
};

const TAB_SYMBOLS: Record<string, TabSymbol> = {
  index: { ios: 'house', android: 'home', web: 'home' },
  planner: { ios: 'wallet.pass', android: 'credit_card', web: 'credit_card' },
  rates: {
    ios: 'dollarsign.arrow.circlepath',
    android: 'currency_exchange',
    web: 'currency_exchange',
  },
  chat: {
    ios: 'bubble.left.and.bubble.right',
    android: 'chat',
    web: 'chat',
  },
};

export function FloatingTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { strings } = useLanguage();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setIsKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setIsKeyboardVisible(false)
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  if (isKeyboardVisible) {
    return null;
  }

  const getTabLabel = (routeName: string): string => {
    switch (routeName) {
      case 'index':
        return strings.tabs.home;
      case 'planner':
        return strings.tabs.planner;
      case 'nomadly-ai':
        return strings.tabs.nomaAi;
      case 'rates':
        return strings.tabs.rates;
      case 'chat':
        return strings.tabs.chat;
      default:
        return routeName;
    }
  };

  // Filter out hidden routes (e.g. orb-ai, explore)
  const visibleRoutes = state.routes.filter((route) => {
    const { options } = descriptors[route.key];
    return options.href !== null;
  });

  return (
    <View
      style={[
        styles.wrapper,
        {
          bottom: Platform.select({
            ios: insets.bottom > 0 ? insets.bottom + 6 : 18,
            default: 18,
          }),
        },
      ]}>
      <View style={styles.container}>
        {visibleRoutes.map((route) => {
          const isFocused = state.routes[state.index]?.key === route.key;
          const isCenterAi = route.name === 'nomadly-ai';
          const label = getTabLabel(route.name);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (isCenterAi) {
            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={label}
                onPress={onPress}
                onLongPress={onLongPress}
                style={({ pressed }) => [
                  styles.tabItem,
                  styles.centerTabItem,
                  pressed && styles.tabItemPressed,
                ]}>
                <View style={styles.centerButtonOuter}>
                  <Image
                    source={require('@/assets/images/navbar-ai-icon.png')}
                    style={styles.centerIconImage}
                    contentFit="contain"
                    priority="high"
                  />
                </View>
                <Text style={styles.centerLabel}>{label}</Text>
              </Pressable>
            );
          }

          const symbol = TAB_SYMBOLS[route.name];
          if (!symbol) return null;

          const activeColor = '#0050D6';
          const inactiveColor = '#334155';
          const color = isFocused ? activeColor : inactiveColor;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={label}
              onPress={onPress}
              onLongPress={onLongPress}
              style={({ pressed }) => [
                styles.tabItem,
                pressed && styles.tabItemPressed,
              ]}>
              <SymbolView
                name={symbol}
                size={22}
                tintColor={color}
                weight={isFocused ? 'bold' : 'medium'}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color, fontWeight: isFocused ? '700' : '600' },
                ]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 18,
    right: 18,
    alignItems: 'center',
    zIndex: 999,
  },
  container: {
    width: '100%',
    maxWidth: 420,
    height: 68,
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 10,
  },
  tabItem: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  tabItemPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
  tabLabel: {
    fontSize: 11,
    marginTop: 4,
    letterSpacing: -0.1,
  },
  centerTabItem: {
    justifyContent: 'flex-start',
  },
  centerButtonOuter: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 8,
  },
  centerIconImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  centerLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0050D6',
    marginTop: 3,
    letterSpacing: -0.1,
  },
});
