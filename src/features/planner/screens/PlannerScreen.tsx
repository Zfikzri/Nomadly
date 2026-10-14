import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  BudgetDistributionCard,
  BudgetInputSection,
  DestinationSelector,
  EstimateButton,
  MaxBudgetToggle,
  PlannerHeader,
  TripDurationSection,
} from '../components';
import { calculateAIEstimate } from '../services/mockData';
import type { AIEstimateResult, PlannerFormData } from '../types';

// Pure native sky gradient background slice array (#D8EEFF ke #BAE6FD)
const SKY_SLICE_COUNT = 24;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(216 + (186 - 216) * t);
  const g = Math.round(238 + (230 - 238) * t);
  const b = Math.round(255 + (253 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function PlannerScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  // Form State with sensible defaults matching UI Mockup
  const [formData, setFormData] = useState<PlannerFormData>({
    originCountry: 'Indonesia',
    destinationCountry: 'Jepang',
    destinationRegion: 'Tokyo, Kanto',
    nominalBudget: '10.000.000',
    durationDays: 9,
    dateRangeText: '15 Nov - 24 Nov 2026',
    maximizeBudget: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  // Hasil AI awalnya null, baru muncul ketika tombol ditekan
  const [estimateResult, setEstimateResult] = useState<AIEstimateResult | null>(null);

  const handleSwapCountries = () => {
    setFormData((prev) => {
      const updated = {
        ...prev,
        originCountry: prev.destinationCountry,
        destinationCountry: prev.originCountry,
      };
      if (estimateResult) {
        setEstimateResult(calculateAIEstimate(updated));
      }
      return updated;
    });
  };

  const handleToggleMaximizeBudget = (val: boolean) => {
    const nextFormData = { ...formData, maximizeBudget: val };
    setFormData(nextFormData);
    // Jika hasil estimasi sudah pernah dibuat, update reaktif
    if (estimateResult) {
      setEstimateResult(calculateAIEstimate(nextFormData));
    }
  };

  const handleEstimateWithAI = () => {
    setIsLoading(true);

    // Simulasi proses AI menganalisis rincian budget
    setTimeout(() => {
      const result = calculateAIEstimate(formData);
      setEstimateResult(result);
      setIsLoading(false);

      // Auto scroll ke bawah agar hasil distribusi terlihat jelas
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 150);
    }, 750);
  };

  return (
    <View style={styles.root} className="flex-1 bg-skyTop">
      {/* Sky Gradient Background */}
      <View style={styles.skyHeaderBackground} className="absolute inset-0" pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      <SafeAreaView edges={['top']} style={styles.safeArea} className="flex-1">
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          {/* 1. Header Section */}
          <PlannerHeader />

          {/* 2. Main Form Card */}
          <View style={styles.formCard} className="bg-white rounded-[28px] mx-4 mt-4 p-5 shadow-sm border border-slate-100">
            {/* Destinasi & Mata Uang dengan Auto Search & Kurs */}
            <DestinationSelector
              originCountry={formData.originCountry}
              destinationCountry={formData.destinationCountry}
              destinationRegion={formData.destinationRegion}
              onOriginChange={(val) => {
                const next = { ...formData, originCountry: val };
                setFormData(next);
                if (estimateResult) setEstimateResult(calculateAIEstimate(next));
              }}
              onDestinationChange={(val) => {
                const next = { ...formData, destinationCountry: val };
                setFormData(next);
                if (estimateResult) setEstimateResult(calculateAIEstimate(next));
              }}
              onRegionChange={(val) => setFormData((prev) => ({ ...prev, destinationRegion: val }))}
              onSwapCountries={handleSwapCountries}
            />

            {/* Modal Anggaran & Estimasi Daya Beli (Otomatis ganti saat negara berubah) */}
            <BudgetInputSection
              nominalBudget={formData.nominalBudget}
              destinationCountry={formData.destinationCountry}
              onBudgetChange={(val) => {
                const next = { ...formData, nominalBudget: val };
                setFormData(next);
                if (estimateResult) setEstimateResult(calculateAIEstimate(next));
              }}
            />

            {/* Durasi Perjalanan & Picker Tanggal */}
            <TripDurationSection
              durationDays={formData.durationDays}
              dateRangeText={formData.dateRangeText}
              onDurationChange={(days, dateText) => {
                const next = { ...formData, durationDays: days, dateRangeText: dateText };
                setFormData(next);
                if (estimateResult) setEstimateResult(calculateAIEstimate(next));
              }}
            />

            {/* Maksimalkan Budget Toggle */}
            <MaxBudgetToggle
              isEnabled={formData.maximizeBudget}
              onToggle={handleToggleMaximizeBudget}
            />

            {/* CTA Button dengan Linear Gradient #0F5BA3 ke #9BCDF8 */}
            <EstimateButton isLoading={isLoading} onPress={handleEstimateWithAI} />
          </View>

          {/* 3. AI Estimate Results Section (Hanya tampil setelah button ditekan) */}
          {estimateResult && (
            <View style={styles.resultContainer} className="mx-4 mt-5">
              <BudgetDistributionCard result={estimateResult} />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D8EEFF',
  },
  skyHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 130, // Space for floating bottom navigation bar
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  resultContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
});
