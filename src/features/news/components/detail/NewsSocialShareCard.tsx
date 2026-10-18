import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { SocialAction } from '../../types/detail';

type NewsSocialShareCardProps = {
  title: string;
  joinCountText: string;
  actions: SocialAction[];
};

export function NewsSocialShareCard({
  title,
  joinCountText,
  actions,
}: NewsSocialShareCardProps) {
  const { isZh } = useLanguage();
  const [saved, setSaved] = useState(false);

  const handleActionPress = (action: SocialAction) => {
    if (action.id === 'act-1') {
      setSaved((prev) => !prev);
    }
  };

  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.joinCountText}>{joinCountText}</Text>
      </View>

      {/* 3 Action Buttons Grid */}
      <View style={styles.actionsRow}>
        {actions.map((act) => {
          const isSavedAction = act.id === 'act-1';
          const savedLabel = isZh ? '已收藏' : 'Saved';
          const label = isSavedAction && saved ? savedLabel : act.label;

          return (
            <Pressable
              key={act.id}
              style={({ pressed }) => [
                styles.actionButton,
                { backgroundColor: act.bgColor },
                pressed && styles.buttonPressed,
              ]}
              onPress={() => handleActionPress(act)}>
              {act.icon === 'bookmark' && (
                <SymbolView
                  name={{
                    ios: saved ? 'bookmark.fill' : 'bookmark',
                    android: saved ? 'bookmark' : 'bookmark_border',
                    web: 'bookmark',
                  }}
                  size={16}
                  tintColor={act.tintColor}
                />
              )}
              {act.icon === 'share' && (
                <SymbolView
                  name={{
                    ios: 'square.and.arrow.up',
                    android: 'share',
                    web: 'share',
                  }}
                  size={16}
                  tintColor={act.tintColor}
                />
              )}
              {act.icon === 'chat' && (
                <SymbolView
                  name={{
                    ios: 'bubble.left.and.bubble.right.fill',
                    android: 'forum',
                    web: 'forum',
                  }}
                  size={16}
                  tintColor={act.tintColor}
                />
              )}

              <Text style={[styles.actionLabel, { color: act.tintColor }]}>{label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  joinCountText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 14,
    gap: 6,
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '700',
  },
});
