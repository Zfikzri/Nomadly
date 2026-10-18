import { SymbolView } from 'expo-symbols';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { SuggestedQuestion } from '../types';

type SuggestedQuestionsBarProps = {
  questions: SuggestedQuestion[];
  onSelectQuestion: (question: SuggestedQuestion) => void;
};

export function SuggestedQuestionsBar({
  questions,
  onSelectQuestion,
}: SuggestedQuestionsBarProps) {
  return (
    <View style={styles.container}>
      {/* Header bar */}
      <View style={styles.headerRow}>
        <Text style={styles.titleText}>REKOMENDASI PERTANYAAN</Text>
        <Text style={styles.swipeHintText}>Geser untuk opsi lain</Text>
      </View>

      {/* Horizontal scrolling chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollList}>
        {questions.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            onPress={() => onSelectQuestion(item)}
            style={styles.chip}>
            {item.iconName ? (
              <SymbolView
                name={item.iconName}
                size={14}
                tintColor={item.iconColor || '#0284C7'}
                weight="medium"
              />
            ) : null}
            <Text style={styles.chipText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#334155',
  },
  swipeHintText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#0284C7',
  },
  scrollList: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  chipText: {
    fontSize: 12.5,
    fontWeight: '500',
    color: '#0F172A',
  },
});
