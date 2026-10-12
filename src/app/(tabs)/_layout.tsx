import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0050D6',
        tabBarInactiveTintColor: '#6B7280',
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
      }}>
      {/* 1. Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView
              name={
                focused
                  ? { ios: 'house.fill', android: 'home', web: 'home' }
                  : { ios: 'house', android: 'home', web: 'home' }
              }
              size={22}
              tintColor={color}
            />
          ),
        }}
      />

      {/* 2. Planner */}
      <Tabs.Screen
        name="planner"
        options={{
          title: 'Planner',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'creditcard', android: 'calendar_today', web: 'calendar_today' }}
              size={22}
              tintColor={color}
            />
          ),
        }}
      />

      {/* 3. Nomadly AI (Center Floating Button) */}
      <Tabs.Screen
        name="nomadly-ai"
        options={{
          title: 'Nomadly AI',
          tabBarLabel: ({ color }) => (
            <Text style={[styles.tabLabel, { color: '#0050D6', fontWeight: '700' }]}>
              Nomadly AI
            </Text>
          ),
          tabBarIcon: () => (
            <View style={styles.centerAiButton}>
              <SymbolView
                name={{ ios: 'cpu.fill', android: 'smart_toy', web: 'smart_toy' }}
                size={24}
                tintColor="#FFFFFF"
              />
            </View>
          ),
        }}
      />

      {/* 4. Rates */}
      <Tabs.Screen
        name="rates"
        options={{
          title: 'Rates',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'arrow.triangle.2.circlepath', android: 'sync', web: 'sync' }}
              size={22}
              tintColor={color}
            />
          ),
        }}
      />

      {/* 5. Chat */}
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'bubble.left.and.bubble.right', android: 'chat', web: 'chat' }}
              size={22}
              tintColor={color}
            />
          ),
        }}
      />

      {/* Hidden legacy routes */}
      <Tabs.Screen
        name="orb-ai"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: Platform.select({ ios: 24, default: 16 }),
    left: 20,
    right: 20,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    paddingBottom: 8,
    paddingTop: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },
  centerAiButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -16, // Elevates the button slightly above the tab bar
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
});
