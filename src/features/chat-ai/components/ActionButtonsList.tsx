import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { AIActionItem } from '../types';

type ActionButtonsListProps = {
  actions: AIActionItem[];
  onActionPress?: (action: AIActionItem) => void;
};

export function ActionButtonsList({
  actions,
  onActionPress,
}: ActionButtonsListProps) {
  return (
    <View style={styles.container}>
      {actions.map((act) => (
        <Pressable
          key={act.id}
          onPress={() => onActionPress?.(act)}
          style={({ pressed }) => [styles.actionButton, pressed && styles.buttonPressed]}>
          <SymbolView
            name={act.iconName}
            size={14}
            tintColor="#0F172A"
            weight="medium"
          />
          <Text style={styles.actionLabel}>{act.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 6,
  },
  actionButton: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  buttonPressed: {
    opacity: 0.7,
    backgroundColor: '#E2E8F0',
  },
  actionLabel: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#0F172A',
  },
});
