import type {
  CustomsCashNewsItem,
  EtiasNewsItem,
  FxAlertNewsItem,
  NewsCategory,
  PreClearanceNewsItem,
  TouristFeeNewsItem,
} from '../types';

export const MOCK_NEWS_CATEGORIES: NewsCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'japan', label: 'Japan' },
  { id: 'europe', label: 'Europe' },
  { id: 'singapore', label: 'Singapore' },
  { id: 'thailand', label: 'Thailand' },
];

export const MOCK_NEWS_CATEGORIES_ZH: NewsCategory[] = [
  { id: 'all', label: '全部' },
  { id: 'japan', label: '日本' },
  { id: 'europe', label: '欧洲' },
  { id: 'singapore', label: '新加坡' },
  { id: 'thailand', label: '泰国' },
];

export const MOCK_FX_ALERT_NEWS: FxAlertNewsItem = {
  id: 'news-fx-jpy',
  badgeText: 'CRITICAL FX ALERT',
  timeAgo: '12m ago',
  title:
    'Yen Weakens to 3-Month Low: Prime Opportunity for Currency Exchange & Travel Savings in Japan',
  summary:
    'Direct impact: Save up to 14% on Tokyo hotel bookings and Akihabara electronics purchases when exchanging currency this week.',
  categoryTag: 'Forex & Finance',
  readTime: '1 min read',
};

export const MOCK_FX_ALERT_NEWS_ZH: FxAlertNewsItem = {
  id: 'news-fx-jpy',
  badgeText: '汇率关键提醒',
  timeAgo: '12分钟前',
  title:
    '日元贬至3个月新低：在日本兑换外汇与购物省钱的绝佳窗口',
  summary:
    '直接影响：本周锁定汇率，预订东京酒店及秋叶原电子数码产品最高可节省14%。',
  categoryTag: '外汇与理财',
  readTime: '1分钟阅读',
};

export const MOCK_PRE_CLEARANCE_NEWS: PreClearanceNewsItem = {
  id: 'news-preclearance-haneda',
  imageUrl:
    'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80',
  regionTag: 'Japan',
  badgeText: 'Auto-Translate',
  translationCredit: 'Official Translation by Tokyo Immigration Bureau',
  title: 'New Visa-Free Policy & Haneda Airport Pre-Clearance Fast-Track 2026',
  summary:
    'Eligible ASEAN and international travelers can complete pre-departure biometric clearance to cut arrival immigration queues by up to 40 minutes.',
  categoryTag: 'Visa Regulations',
  timeAgo: '1h ago',
  readTime: '3 min read',
};

export const MOCK_PRE_CLEARANCE_NEWS_ZH: PreClearanceNewsItem = {
  id: 'news-preclearance-haneda',
  imageUrl:
    'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80',
  regionTag: '日本',
  badgeText: '自动翻译',
  translationCredit: '东京出入境管理局官方翻译',
  title: '2026年最新免签政策与羽田机场预先核验快速通道',
  summary:
    '符合条件的国际旅客可在出发前完成生物信息采集，将抵达入境排队时间缩减高达40分钟。',
  categoryTag: '签证法规',
  timeAgo: '1小时前',
  readTime: '3分钟阅读',
};

export const MOCK_ETIAS_NEWS: EtiasNewsItem = {
  id: 'news-etias-eropa',
  regionTag: 'Schengen Zone',
  categoryTag: 'Visa Regulations',
  timeAgo: '3h ago',
  title:
    'European ETIAS Entry System Implemented: €7 Fee & Mandatory Financial Documentation',
  summary:
    'The Electronic Travel Authorization System mandates minimum daily proof of funds and travel insurance with at least €30,000 medical coverage.',
  guideLinkText: 'Check application guide >',
  readTime: '4 min read',
};

export const MOCK_ETIAS_NEWS_ZH: EtiasNewsItem = {
  id: 'news-etias-eropa',
  regionTag: '申根区',
  categoryTag: '签证法规',
  timeAgo: '3小时前',
  title:
    '欧洲ETIAS旅行许可系统正式落地：7欧元规费与强制财务证明',
  summary:
    '电子旅行授权系统要求提供每日最低资金证明，以及保额不低于30,000欧元的境外医疗旅游保险。',
  guideLinkText: '查看申请指南 >',
  readTime: '4分钟阅读',
};

export const MOCK_CUSTOMS_CASH_NEWS: CustomsCashNewsItem = {
  id: 'news-customs-changi',
  regionTag: 'Singapore',
  categoryTag: 'Tax & Customs',
  timeAgo: '5h ago',
  title:
    'Customs Regulations & Cash Declaration Threshold at Changi Airport',
  summary:
    'ICA border authorities mandate NP303 reporting for physical cash exceeding SGD 20,000. Review online submission guidelines.',
  tipText:
    'Use multi-currency e-wallets to avoid physical currency declaration thresholds',
  sourceText: 'Source: Singapore Customs',
  readTime: '2 min read',
};

export const MOCK_CUSTOMS_CASH_NEWS_ZH: CustomsCashNewsItem = {
  id: 'news-customs-changi',
  regionTag: '新加坡',
  categoryTag: '海关税务',
  timeAgo: '5小时前',
  title:
    '樟宜机场海关现金入境申报门槛与最新规定',
  summary:
    '新加坡移民与关卡局(ICA)规定携带超过20,000新元现金须填写NP303申报表。了解线上提交流程。',
  tipText:
    '建议使用多币种电子钱包，避免大额实体现金申报要求',
  sourceText: '来源：新加坡海关',
  readTime: '2分钟阅读',
};

export const MOCK_TOURIST_FEE_NEWS: TouristFeeNewsItem = {
  id: 'news-tourist-fee-thai',
  regionTag: 'Thailand',
  categoryTag: 'Tax & Customs',
  timeAgo: '1d ago',
  title: 'Thailand Reintroduces 300 Baht Tourism Entry Fee Scheme',
  summary:
    'Ministry of Tourism and Sports establishes 300 Baht (~$9) fee for tourist compensation funds and comprehensive visitor insurance.',
  bannerImageUrl:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  bannerTitle: 'Automatic fee on flight tickets',
  bannerSubtitle: 'Applies to all incoming commercial flights',
  updateInfo: 'Effective Q1 2025',
  readTime: '2 min read',
};

export const MOCK_TOURIST_FEE_NEWS_ZH: TouristFeeNewsItem = {
  id: 'news-tourist-fee-thai',
  regionTag: '泰国',
  categoryTag: '海关税务',
  timeAgo: '1天前',
  title: '泰国重新启动300泰铢外国游客入境费方案',
  summary:
    '泰国旅游与体育部规定收取300泰铢（约合9美元）规费，用于外国游客医疗保险与补偿专项基金。',
  bannerImageUrl:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  bannerTitle: '机票直接自动包含',
  bannerSubtitle: '适用于所有国际商业商业航班',
  updateInfo: '2025年第一季度生效',
  readTime: '2分钟阅读',
};

export function getLocalizedNewsCatalog(isZh: boolean = false) {
  return {
    categories: isZh ? MOCK_NEWS_CATEGORIES_ZH : MOCK_NEWS_CATEGORIES,
    fxAlertNews: isZh ? MOCK_FX_ALERT_NEWS_ZH : MOCK_FX_ALERT_NEWS,
    preClearanceNews: isZh ? MOCK_PRE_CLEARANCE_NEWS_ZH : MOCK_PRE_CLEARANCE_NEWS,
    etiasNews: isZh ? MOCK_ETIAS_NEWS_ZH : MOCK_ETIAS_NEWS,
    customsCashNews: isZh ? MOCK_CUSTOMS_CASH_NEWS_ZH : MOCK_CUSTOMS_CASH_NEWS,
    touristFeeNews: isZh ? MOCK_TOURIST_FEE_NEWS_ZH : MOCK_TOURIST_FEE_NEWS,
  };
}
