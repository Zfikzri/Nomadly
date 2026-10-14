export type CountryOption = {
  id: string;
  name: string;
  code: string;
  currency: string;
  currencySymbol: string;
  exchangeRateToIdr: number; // 1 unit currency = X IDR
  flag: string;
};

export type DestinationRegion = {
  id: string;
  name: string;
  countryCode: string;
};

export type BudgetItem = {
  id: string;
  category: string;
  subCategory: string;
  percentage: number;
  amountTargetCurrency: number;
  amountIdr: number;
  color: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
};

export type AIEstimateResult = {
  totalPercentage: number;
  durationDays: number;
  currencySymbol: string;
  currencyCode: string;
  totalBudgetTargetCurrency: number;
  items: BudgetItem[];
  savingsItem?: BudgetItem;
  aiTipTitle: string;
  aiTipDescription: string;
};

export type PlannerFormData = {
  originCountry: string;
  destinationCountry: string;
  destinationRegion: string;
  nominalBudget: string;
  durationDays: number;
  dateRangeText: string;
  maximizeBudget: boolean;
};
