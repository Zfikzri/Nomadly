export type NewsCategoryId = 'all' | 'japan' | 'europe' | 'singapore' | 'thailand';

export type NewsCategory = {
  id: NewsCategoryId;
  label: string;
};

export type FxAlertNewsItem = {
  id: string;
  badgeText: string;
  timeAgo: string;
  title: string;
  summary: string;
  categoryTag: string;
  readTime: string;
};

export type PreClearanceNewsItem = {
  id: string;
  imageUrl: string;
  regionTag: string;
  badgeText: string;
  translationCredit: string;
  title: string;
  summary: string;
  categoryTag: string;
  timeAgo: string;
  readTime: string;
};

export type EtiasNewsItem = {
  id: string;
  regionTag: string;
  categoryTag: string;
  timeAgo: string;
  title: string;
  summary: string;
  guideLinkText: string;
  readTime: string;
};

export type CustomsCashNewsItem = {
  id: string;
  regionTag: string;
  categoryTag: string;
  timeAgo: string;
  title: string;
  summary: string;
  tipText: string;
  sourceText: string;
  readTime: string;
};

export type TouristFeeNewsItem = {
  id: string;
  regionTag: string;
  categoryTag: string;
  timeAgo: string;
  title: string;
  summary: string;
  bannerImageUrl: string;
  bannerTitle: string;
  bannerSubtitle: string;
  updateInfo: string;
  readTime: string;
};
