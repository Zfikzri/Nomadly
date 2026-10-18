import { Tabs } from 'expo-router';

import { FloatingTabBar } from '@/components/navigation';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      {/* 1. Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      {/* 2. Planner */}
      <Tabs.Screen
        name="planner"
        options={{
          title: 'Planner',
        }}
      />

      {/* 3. Noma AI (Center Floating Button) */}
      <Tabs.Screen
        name="nomadly-ai"
        options={{
          title: 'Noma AI',
        }}
      />

      {/* 4. Rates */}
      <Tabs.Screen
        name="rates"
        options={{
          title: 'Rates',
        }}
      />

      {/* 5. Chat */}
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
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
