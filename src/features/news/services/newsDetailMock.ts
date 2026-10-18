import type { NewsDetailData } from '../types/detail';

export const MOCK_NEWS_DETAILS_EN: Record<string, NewsDetailData> = {
  'news-1': {
    id: 'news-1',
    countryCode: 'JP',
    countryName: 'Japan',
    flagEmoji: '🇯🇵',
    categoryTag: 'Forex & Travel Regulations',
    timeAgo: '12 Minutes Ago',
    readTime: '4 Min Read',
    translationBadgeText: 'AI Translation (EN)',
    title:
      'New Visa-Free Policy & Financial Mitigation Strategies Amid JPY Currency Trend',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      caption: 'Tokyo & Osaka Port of Entry Updates',
    },
    aiKeyPoints: {
      title: 'AI Key Points',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: '99% Accurate',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: 'Short-stay visa exemption',
          text: ' takes effect this quarter for eligible e-passport holders with zero biometric surcharges.',
        },
        {
          id: 'p-2',
          dotColor: '#EF4444',
          boldPrefix: 'JPY exchange rate reached competitive lows.',
          text: ' Quantitative indicators project potential technical rebound within 14 trading days.',
        },
        {
          id: 'p-3',
          dotColor: '#10B981',
          boldPrefix: 'Actionable Advice:',
          text: ' Lock multi-currency wallet rates today or convert 60% of planned lodging funds before the weekend.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Impact on International Travelers',
        paragraphs: [
          'Japan Ministry of Foreign Affairs officially broadens visa exemption frameworks for independent travelers with verified electronic passports. This initiative promotes regional tourism spending across secondary hubs like Kanazawa, Fukuoka, and Sendai.',
          'For travelers planning spring and autumn itineraries, processing lead times are reduced by up to 10 business days. Note that digital pre-clearance on Visit Japan Web remains mandatory at least 72 hours prior to arrival at Narita or Haneda.',
        ],
        callout: {
          type: 'regulation',
          title: 'Critical Regulation Note',
          text: 'Visa-free stays are strictly capped at 15 calendar days without local extension permissions.',
        },
      },
      {
        id: 'sec-2',
        sectionNumberTitle: '2. Cashless Transaction Guidelines in Tokyo & Kyoto',
        paragraphs: [
          'Major retail outlets and department stores across Shinjuku, Ginza, and Kawaramachi now accept standardized global contactless payment methods, often providing an additional 5% discount for international debit cards.',
          'However, travelers should retain emergency physical cash. Heritage temples in Kyoto, neighborhood ramen shops, and regional ticketing kiosks outside Pasmo/Suica networks frequently operate on cash only.',
        ],
        image: {
          url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1000&q=80',
          caption: 'Debit Card & Japanese Yen Coins',
        },
      },
      {
        id: 'sec-3',
        sectionNumberTitle: '3. Debit Card & Zero-Fee ATM Recommendations',
        paragraphs: [
          'Utilize ATMs at 7-Eleven (Seven Bank) or Lawson (Lawson Bank). Both offer broad international card acceptance with native JPY settlement options, preventing costly Dynamic Currency Conversion (DCC).',
        ],
        callout: {
          type: 'strategy',
          title: 'Recommended Currency Allocation',
          text: 'Allocate 70% of funds to digital multi-currency wallets for contactless taps, 20% in physical Yen cash reserves, and 10% flexible buffer.',
        },
      },
    ],
    socialShare: {
      title: 'Share & Discussion',
      joinCountText: '42 Travelers Joined',
      actions: [
        {
          id: 'act-1',
          label: 'Save',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: 'Travel Buddy',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: 'JPY Forum',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
  'news-2': {
    id: 'news-2',
    countryCode: 'EU',
    countryName: 'European Union',
    flagEmoji: '🇪🇺',
    categoryTag: 'Monetary Policy & Rates',
    timeAgo: '35 Minutes Ago',
    readTime: '3 Min Read',
    translationBadgeText: 'AI Translation (EN)',
    title:
      'ECB Interest Rate Cuts: Opportunity to Lock EUR Exchange Rates for Summer 2026',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
      caption: 'European Central Bank & Paris Updates',
    },
    aiKeyPoints: {
      title: 'AI Key Points',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: '96% Accurate',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: '25 bps rate cut',
          text: ' eases EUR strength against emerging currencies over the short-to-medium term.',
        },
        {
          id: 'p-2',
          dotColor: '#10B981',
          boldPrefix: 'Forex Recommendation:',
          text: ' Use dollar-cost averaging into your European travel savings before Q3 peak travel.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Implications for International Visitors',
        paragraphs: [
          'The European Central Bank decision to loosen monetary conditions provides a favorable buffer for travelers planning cross-border Schengen itineraries.',
        ],
        callout: {
          type: 'regulation',
          title: 'ETIAS Notice',
          text: 'The ETIAS electronic travel authorization framework becomes progressively mandatory toward year end.',
        },
      },
    ],
    socialShare: {
      title: 'Share & Discussion',
      joinCountText: '18 Travelers Joined',
      actions: [
        {
          id: 'act-1',
          label: 'Save',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: 'Travel Buddy',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: 'EUR Forum',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
  'news-3': {
    id: 'news-3',
    countryCode: 'TH',
    countryName: 'Thailand',
    flagEmoji: '🇹🇭',
    categoryTag: 'Visa & Digital Nomad',
    timeAgo: '2 Hours Ago',
    readTime: '5 Min Read',
    translationBadgeText: 'AI Translation (EN)',
    title:
      'Thailand Officially Launches 5-Year DTV Visa for Digital Nomads & Remote Workers',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
      caption: 'Bangkok & Chiang Mai Nomad Hub',
    },
    aiKeyPoints: {
      title: 'AI Key Points',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: '98% Accurate',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: '180-day stay per entry',
          text: ' with option for one in-country extension per arrival.',
        },
        {
          id: 'p-2',
          dotColor: '#10B981',
          boldPrefix: 'Minimum Financial Requirement:',
          text: ' Proof of funds equivalent to 500,000 THB (~$14,000) during application.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Destination Thailand Visa (DTV) Guidelines',
        paragraphs: [
          'Targeting remote digital nomads, Muay Thai trainees, and cultural culinary learners seeking extended legal residency without traditional employment visas.',
        ],
      },
    ],
    socialShare: {
      title: 'Share & Discussion',
      joinCountText: '65 Travelers Joined',
      actions: [
        {
          id: 'act-1',
          label: 'Save',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: 'Travel Buddy',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: 'THB Forum',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
  'news-4': {
    id: 'news-4',
    countryCode: 'SG',
    countryName: 'Singapore',
    flagEmoji: '🇸🇬',
    categoryTag: 'Customs & Finance',
    timeAgo: '4 Hours Ago',
    readTime: '3 Min Read',
    translationBadgeText: 'AI Translation (EN)',
    title:
      'Cross-Border Digital Payment QR Integration Rolled Out Across Singapore & Malaysia',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      caption: 'Marina Bay Financial Centre Updates',
    },
    aiKeyPoints: {
      title: 'AI Key Points',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: '99% Accurate',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: 'Zero double-conversion fees',
          text: ' when scanning NETS or DuitNow merchant codes with compatible digital wallets.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Advantages of Borderless Digital Payments',
        paragraphs: [
          'Travelers can seamlessly pay at hawker centers, retail shops, and select transit points with local currency real-time settlement without carrying excess cash.',
        ],
      },
    ],
    socialShare: {
      title: 'Share & Discussion',
      joinCountText: '33 Travelers Joined',
      actions: [
        {
          id: 'act-1',
          label: 'Save',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: 'Travel Buddy',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: 'SGD Forum',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
};

export const MOCK_NEWS_DETAILS_ZH: Record<string, NewsDetailData> = {
  'news-1': {
    id: 'news-1',
    countryCode: 'JP',
    countryName: '日本',
    flagEmoji: '🇯🇵',
    categoryTag: '外汇与出入境法规',
    timeAgo: '12分钟前',
    readTime: '4分钟阅读',
    translationBadgeText: 'AI 智能翻译 (中文)',
    title:
      '最新免签政策与日元(JPY)贬值趋势下的旅行资金应对方案',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      caption: '东京与大阪口岸入境最新通报',
    },
    aiKeyPoints: {
      title: 'AI 核心速览',
      subtitle: 'Orb 智能情报简报',
      accuracyBadge: '准确率 99%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: '短期观光免签',
          text: ' 自本季度起对符合条件的电子护照持有人生效，无需额外采集生物信息。',
        },
        {
          id: 'p-2',
          dotColor: '#EF4444',
          boldPrefix: '日元对国际主流货币处于有利区间。',
          text: ' 量化指标显示未来14个交易日内可能存在技术性反弹。',
        },
        {
          id: 'p-3',
          dotColor: '#10B981',
          boldPrefix: '行动建议：',
          text: ' 立即在多币种电子钱包锁定汇率，或在本周末前兑换60%的酒店住宿预算。',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. 对国际旅行者的直接影响',
        paragraphs: [
          '日本外务省正式扩大针对国际自由行游客的免签框架。该举措旨在促进金泽、福冈和仙台等二线旅游城市的消费复苏。',
          '对于春季及秋季出行的旅客，材料审核周期最多可缩短10个工作日。请注意，在抵达成田或羽田机场前72小时，仍需通过 Visit Japan Web 完成数字化预审申报。',
        ],
        callout: {
          type: 'regulation',
          title: '重要法规须知',
          text: '免签入境最长停留期限为15个自然日，不可在当地办理延期。',
        },
      },
      {
        id: 'sec-2',
        sectionNumberTitle: '2. 东京与京都非现金移动支付规范',
        paragraphs: [
          '新宿、银座与河原町各大商场已全面普及非现金支付，部分百货对国际信用卡感应支付提供额外5%购物折扣。',
          '然而，游客仍需随身携带适量日元现金。京都部分古寺神社、地道拉面小馆及部分私铁售票机通常仅支持纸币或硬币。',
        ],
        image: {
          url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1000&q=80',
          caption: '银行借记卡与日元硬币',
        },
      },
      {
        id: 'sec-3',
        sectionNumberTitle: '3. 借记卡与免手续费 ATM 取现贴士',
        paragraphs: [
          '优先使用 7-Eleven (Seven Bank) 或罗森 (Lawson Bank) 门店内 ATM 机。两者对国际银行卡兼容度极高，选择当地货币 JPY 结算可规避高额 DCC 动态货币转换费。',
        ],
        callout: {
          type: 'strategy',
          title: '理想外汇资产配置',
          text: '建议将70%预算存于多币种电子账户用于日常刷卡，20%兑换为日元现金随身备用，保留10%灵活应对突发汇率波动。',
        },
      },
    ],
    socialShare: {
      title: '分享与讨论',
      joinCountText: '42 位旅行者已参与',
      actions: [
        {
          id: 'act-1',
          label: '收藏',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: '结伴同游',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: '日元交流群',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
  'news-2': {
    id: 'news-2',
    countryCode: 'EU',
    countryName: '欧盟',
    flagEmoji: '🇪🇺',
    categoryTag: '货币政策与汇率',
    timeAgo: '35分钟前',
    readTime: '3分钟阅读',
    translationBadgeText: 'AI 智能翻译 (中文)',
    title:
      '欧洲央行降息预期：锁定2026夏季欧洲游欧元汇率的最佳时机',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
      caption: '欧洲央行与巴黎前沿通报',
    },
    aiKeyPoints: {
      title: 'AI 核心速览',
      subtitle: 'Orb 智能情报简报',
      accuracyBadge: '准确率 96%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: '降息25个基点',
          text: ' 在中短期内减缓欧元对新兴市场货币的强势升值势头。',
        },
        {
          id: 'p-2',
          dotColor: '#10B981',
          boldPrefix: '换汇建议：',
          text: ' 在第三季度出行高峰来临前，分批次定投换汇储备欧洲游资金。',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. 对国际旅行者的影响',
        paragraphs: [
          '欧洲央行放宽货币政策的举措，为计划在申根区跨国旅行的游客提供了更友好的预算窗口。',
        ],
        callout: {
          type: 'regulation',
          title: 'ETIAS 提示',
          text: 'ETIAS 电子旅行授权系统将在年末分阶段进入强制执行。',
        },
      },
    ],
    socialShare: {
      title: '分享与讨论',
      joinCountText: '18 位旅行者已参与',
      actions: [
        {
          id: 'act-1',
          label: '收藏',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: '结伴同游',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: '欧元交流群',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
  'news-3': {
    id: 'news-3',
    countryCode: 'TH',
    countryName: '泰国',
    flagEmoji: '🇹🇭',
    categoryTag: '签证与数字游民',
    timeAgo: '2小时前',
    readTime: '5分钟阅读',
    translationBadgeText: 'AI 智能翻译 (中文)',
    title:
      '泰国正式发布面向数字游民与远程办公者的5年期 DTV 签证',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
      caption: '曼谷与清迈数字游民枢纽',
    },
    aiKeyPoints: {
      title: 'AI 核心速览',
      subtitle: 'Orb 智能情报简报',
      accuracyBadge: '准确率 98%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: '单次入境停留180天',
          text: ' 且每次抵达后可在境内申请一次延期。',
        },
        {
          id: 'p-2',
          dotColor: '#10B981',
          boldPrefix: '最低资金门槛：',
          text: ' 申请期间须出示不低于50万泰铢（约1.4万美元）的银行存款证明。',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. DTV 签证核心细则',
        paragraphs: [
          '该签证专门针对远程技术人员、泰拳研习者以及文化深度体验者，无需办理传统繁复的工作签证即可长期合法居留。',
        ],
      },
    ],
    socialShare: {
      title: '分享与讨论',
      joinCountText: '65 位旅行者已参与',
      actions: [
        {
          id: 'act-1',
          label: '收藏',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: '结伴同游',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: '泰铢交流群',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
  'news-4': {
    id: 'news-4',
    countryCode: 'SG',
    countryName: '新加坡',
    flagEmoji: '🇸🇬',
    categoryTag: '海关税务与支付',
    timeAgo: '4小时前',
    readTime: '3分钟阅读',
    translationBadgeText: 'AI 智能翻译 (中文)',
    title:
      '跨国移动扫码支付全面覆盖新加坡与马来西亚商户',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      caption: '滨海湾金融中心前沿通报',
    },
    aiKeyPoints: {
      title: 'AI 核心速览',
      subtitle: 'Orb 智能情报简报',
      accuracyBadge: '准确率 99%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: '零二次换汇损耗',
          text: ' 使用支持的电子钱包扫描 NETS 或 DuitNow 二维码直接结算。',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. 无界数字支付优势',
        paragraphs: [
          '游客可在熟食中心小贩、百货商超及部分交通枢纽轻松扫码付款，实时以最优汇率结算，无需携带过多零钱。',
        ],
      },
    ],
    socialShare: {
      title: '分享与讨论',
      joinCountText: '33 位旅行者已参与',
      actions: [
        {
          id: 'act-1',
          label: '收藏',
          icon: 'bookmark',
          bgColor: '#EEF4FF',
          tintColor: '#2563EB',
        },
        {
          id: 'act-2',
          label: '结伴同游',
          icon: 'share',
          bgColor: '#F5F0FF',
          tintColor: '#9333EA',
        },
        {
          id: 'act-3',
          label: '新币交流群',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
};

export const MOCK_NEWS_DETAILS = MOCK_NEWS_DETAILS_EN;

export function getNewsDetail(id: string, isZh: boolean = false): NewsDetailData {
  const catalog = isZh ? MOCK_NEWS_DETAILS_ZH : MOCK_NEWS_DETAILS_EN;
  return catalog[id] || catalog['news-1'];
}
