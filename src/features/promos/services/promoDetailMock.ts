import type { PromoDetailData } from '../types/detail';

export const MOCK_PROMO_DETAILS_EN: Record<string, PromoDetailData> = {
  'promo-1': {
    id: 'promo-1',
    hero: {
      badgeLeft: 'FLIGHT PROMO • LIMITED',
      badgeRight: '3 Days 14 Hours',
      routeSubtitle: 'CGK (Jakarta) -> BCN (Barcelona)',
      title: '35% Discount Flights\nto Barcelona',
      imageUrl:
        'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '$608',
      strikePrice: '$940',
      discountPill: 'Save 35%',
      usdEstimate: '≈ $608 USD (Guaranteed Rate)',
      savingsAmount: '$332 Savings',
      savingsBadge: 'Multi-Currency',
    },
    voucher: {
      sectionTitle: 'Exclusive Voucher Code',
      badgeText: 'One-Time Use',
      label: 'PROMO CODE',
      code: 'FLYCATALUNYA35',
    },
    orbAiAdvice: {
      title: 'Orb AI Recommendations',
      messagePrefix:
        'Book now before this promotional batch closes at midnight. Historical flight route pricing shows projected surge of ',
      highlightText: '+45%',
      messageSuffix: ' over the next two weeks.',
    },
    terms: {
      title: 'Flight Terms & Conditions',
      items: [
        {
          id: 'term-1',
          title: 'Official Partner Airlines',
          description: 'Qatar Airways & Emirates (1x Transit in Doha / Dubai).',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
        {
          id: 'term-2',
          title: 'Travel Window',
          description:
            'Nov 1, 2026 – Mar 31, 2027 (Holiday blackout dates apply).',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
        {
          id: 'term-3',
          title: 'Complimentary Baggage',
          description:
            '30 kg Checked Baggage + 7 kg Cabin Carry-On included.',
          iconName: {
            ios: 'bag.fill',
            android: 'luggage',
            web: 'luggage',
          },
        },
        {
          id: 'term-4',
          title: 'Flexible Reschedule Policy',
          description:
            '1x free administrative rescheduling up to 14 days before departure.',
          iconName: {
            ios: 'arrow.triangle.2.circlepath',
            android: 'sync',
            web: 'sync',
          },
        },
      ],
    },
    partners: {
      title: 'Partner Booking Channels',
      badgeText: 'Active Cashback',
      list: [
        {
          id: 'partner-1',
          name: 'Tiket.com',
          cashbackText: '+5% CB',
          cashbackColor: '#2563EB',
          iconBgColor: '#EEF2FF',
          iconColor: '#4F46E5',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
        {
          id: 'partner-2',
          name: 'Traveloka',
          cashbackText: '+5% CB',
          cashbackColor: '#2563EB',
          iconBgColor: '#E0F2FE',
          iconColor: '#0284C7',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
        {
          id: 'partner-3',
          name: 'Direct\nAirline',
          cashbackText: '+7% CB',
          cashbackColor: '#16A34A',
          iconBgColor: '#F0FDF4',
          iconColor: '#16A34A',
          iconName: {
            ios: 'globe',
            android: 'public',
            web: 'public',
          },
        },
      ],
    },
  },
  'promo-2': {
    id: 'promo-2',
    hero: {
      badgeLeft: 'TRAIN PASS • LIMITED',
      badgeRight: 'Instant E-Voucher',
      routeSubtitle: 'ALL JAPAN RAILS (Shinkansen & Express)',
      title: '15% Off JR Pass\nAll Routes Across Japan',
      imageUrl:
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '$345',
      strikePrice: '$410',
      discountPill: 'Save 15%',
      usdEstimate: '≈ $345 USD (Guaranteed Rate)',
      savingsAmount: '$65 Savings',
      savingsBadge: 'Special JPY Rate',
    },
    voucher: {
      sectionTitle: 'Exclusive Voucher Code',
      badgeText: 'One-Time Use',
      label: 'PROMO CODE',
      code: 'JAPANSPECIAL15',
    },
    orbAiAdvice: {
      title: 'Orb AI Recommendations',
      messagePrefix:
        'JPY currency trades at quarterly lows. Lock in your rail pass today to save up to ',
      highlightText: '+28%',
      messageSuffix: ' compared to on-arrival peak ticket pricing.',
    },
    terms: {
      title: 'Pass Terms & Conditions',
      items: [
        {
          id: 'term-1',
          title: 'Flexible Pass Activation',
          description:
            'Activate up to 90 days following voucher purchase date.',
          iconName: {
            ios: 'tram.fill',
            android: 'train',
            web: 'train',
          },
        },
        {
          id: 'term-2',
          title: 'Validity Duration',
          description:
            '7 consecutive days for all JR rail lines nationwide in Japan.',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
        {
          id: 'term-3',
          title: 'Complimentary Seat Reservation',
          description:
            'Reserve Shinkansen designated seats with zero surcharges at station kiosks.',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
      ],
    },
    partners: {
      title: 'Partner Booking Channels',
      badgeText: 'Active Cashback',
      list: [
        {
          id: 'partner-1',
          name: 'Klook',
          cashbackText: '+4% CB',
          cashbackColor: '#2563EB',
          iconBgColor: '#FFF7ED',
          iconColor: '#EA580C',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
        {
          id: 'partner-2',
          name: 'Traveloka',
          cashbackText: '+5% CB',
          cashbackColor: '#2563EB',
          iconBgColor: '#E0F2FE',
          iconColor: '#0284C7',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
      ],
    },
  },
  'promo-3': {
    id: 'promo-3',
    hero: {
      badgeLeft: 'SCENIC RAIL • LIMITED',
      badgeRight: '5 Days Left',
      routeSubtitle: 'ZERMATT -> ST. MORITZ (Switzerland)',
      title: 'Glacier Express 25% Off\nPanoramic Alpine Journey',
      imageUrl:
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '$245',
      strikePrice: '$325',
      discountPill: 'Save 25%',
      usdEstimate: '≈ $245 USD (Guaranteed Rate)',
      savingsAmount: '$80 Savings',
      savingsBadge: 'Multi-Currency',
    },
    voucher: {
      sectionTitle: 'Exclusive Voucher Code',
      badgeText: 'One-Time Use',
      label: 'PROMO CODE',
      code: 'ALPSPANORAMA25',
    },
    orbAiAdvice: {
      title: 'Orb AI Recommendations',
      messagePrefix:
        'Peak season in the Swiss Alps reaches 92% rail occupancy. Secure your panoramic coach seats now with ',
      highlightText: '+25%',
      messageSuffix: ' savings before allocation expires.',
    },
    terms: {
      title: 'Ticket Terms & Conditions',
      items: [
        {
          id: 'term-1',
          title: 'Panoramic Excellence Class',
          description:
            'Includes 3-course gourmet dining and local Swiss alpine wines.',
          iconName: {
            ios: 'tram.fill',
            android: 'train',
            web: 'train',
          },
        },
        {
          id: 'term-2',
          title: 'Validity Duration',
          description: 'Valid for one-way journey on specified departure date.',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
      ],
    },
    partners: {
      title: 'Partner Booking Channels',
      badgeText: 'Active Cashback',
      list: [
        {
          id: 'partner-1',
          name: 'Swiss Travel Pass',
          cashbackText: '+6% CB',
          cashbackColor: '#16A34A',
          iconBgColor: '#FEE2E2',
          iconColor: '#DC2626',
          iconName: {
            ios: 'globe',
            android: 'public',
            web: 'public',
          },
        },
        {
          id: 'partner-2',
          name: 'Tiket.com',
          cashbackText: '+5% CB',
          cashbackColor: '#2563EB',
          iconBgColor: '#EEF2FF',
          iconColor: '#4F46E5',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
      ],
    },
  },
  'promo-4': {
    id: 'promo-4',
    hero: {
      badgeLeft: 'NOMAD STAY • LIMITED',
      badgeRight: 'Special Cashback',
      routeSubtitle: 'CANGGU & UBUD, BALI',
      title: 'Monthly Villa Stay 40%\nCo-living Fiber High Speed',
      imageUrl:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '$410',
      strikePrice: '$680',
      discountPill: 'Save 40%',
      usdEstimate: '≈ $410 USD (Guaranteed Rate)',
      savingsAmount: '$270 Savings',
      savingsBadge: 'Nomad Special',
    },
    voucher: {
      sectionTitle: 'Exclusive Voucher Code',
      badgeText: 'One-Time Use',
      label: 'PROMO CODE',
      code: 'BALINOMAD40',
    },
    orbAiAdvice: {
      title: 'Orb AI Recommendations',
      messagePrefix:
        'Canggu villa occupancy rates are rising rapidly for next month. Lock your 30-day extended workstation stay now to save ',
      highlightText: '+40%',
      messageSuffix: ' and enjoy 24/7 dedicated coworking pass.',
    },
    terms: {
      title: 'Lease Terms & Conditions',
      items: [
        {
          id: 'term-1',
          title: 'Workstation Setup',
          description:
            'Dedicated 150 Mbps fiber wifi, ergonomic chair & automatic generator backup.',
          iconName: {
            ios: 'laptopcomputer',
            android: 'laptop',
            web: 'laptop',
          },
        },
        {
          id: 'term-2',
          title: 'Minimum Duration',
          description: 'Valid for a minimum booking length of 28 consecutive nights.',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
      ],
    },
    partners: {
      title: 'Partner Booking Channels',
      badgeText: 'Active Cashback',
      list: [
        {
          id: 'partner-1',
          name: 'Traveloka',
          cashbackText: '+5% CB',
          cashbackColor: '#2563EB',
          iconBgColor: '#E0F2FE',
          iconColor: '#0284C7',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
        {
          id: 'partner-2',
          name: 'Direct\nHost',
          cashbackText: '+7% CB',
          cashbackColor: '#16A34A',
          iconBgColor: '#F0FDF4',
          iconColor: '#16A34A',
          iconName: {
            ios: 'globe',
            android: 'public',
            web: 'public',
          },
        },
      ],
    },
  },
};

export const MOCK_PROMO_DETAILS_ZH: Record<string, PromoDetailData> = {
  'promo-1': {
    id: 'promo-1',
    hero: {
      badgeLeft: '特惠机票 • 限时限量',
      badgeRight: '剩余 3 天 14 小时',
      routeSubtitle: 'CGK (雅加达) -> BCN (巴塞罗那)',
      title: '巴塞罗那往返机票\n限时直降 35%',
      imageUrl:
        'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '¥4,280',
      strikePrice: '¥6,580',
      discountPill: '立省 35%',
      usdEstimate: '≈ $608 USD (锁定汇率)',
      savingsAmount: '立省 ¥2,300',
      savingsBadge: '多币种结算',
    },
    voucher: {
      sectionTitle: '专属兑换券码',
      badgeText: '限单次使用',
      label: '优惠代码',
      code: 'FLYCATALUNYA35',
    },
    orbAiAdvice: {
      title: 'Orb AI 智能建议',
      messagePrefix:
        '建议在今晚午夜特惠批次结束前出票。历史航线数据显示未来两周内同航线票价预计上涨 ',
      highlightText: '+45%',
      messageSuffix: '。',
    },
    terms: {
      title: '航班预订条款与细则',
      items: [
        {
          id: 'term-1',
          title: '官方合作航司',
          description: '卡塔尔航空 & 阿联酋航空（多哈/迪拜中转1次）。',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
        {
          id: 'term-2',
          title: '适用出行日期',
          description:
            '2026年11月1日 – 2027年3月31日（圣诞假期不适用）。',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
        {
          id: 'term-3',
          title: '免费行李额度',
          description:
            '包含30公斤托运行李及7公斤手提随身行李。',
          iconName: {
            ios: 'bag.fill',
            android: 'luggage',
            web: 'luggage',
          },
        },
        {
          id: 'term-4',
          title: '灵活改签政策',
          description:
            '航班起飞前14天享有1次免费免手续费改签服务。',
          iconName: {
            ios: 'arrow.triangle.2.circlepath',
            android: 'sync',
            web: 'sync',
          },
        },
      ],
    },
    partners: {
      title: '合作预订预留渠道',
      badgeText: '返现生效中',
      list: [
        {
          id: 'partner-1',
          name: 'Tiket.com',
          cashbackText: '+5% 返现',
          cashbackColor: '#2563EB',
          iconBgColor: '#EEF2FF',
          iconColor: '#4F46E5',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
        {
          id: 'partner-2',
          name: 'Traveloka',
          cashbackText: '+5% 返现',
          cashbackColor: '#2563EB',
          iconBgColor: '#E0F2FE',
          iconColor: '#0284C7',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
        {
          id: 'partner-3',
          name: '航司\n官网',
          cashbackText: '+7% 返现',
          cashbackColor: '#16A34A',
          iconBgColor: '#F0FDF4',
          iconColor: '#16A34A',
          iconName: {
            ios: 'globe',
            android: 'public',
            web: 'public',
          },
        },
      ],
    },
  },
  'promo-2': {
    id: 'promo-2',
    hero: {
      badgeLeft: '铁路通票 • 限时特惠',
      badgeRight: '即时电子凭证',
      routeSubtitle: '全日本新干线及特急列车通用',
      title: 'JR Pass 全日本通票\n立减 15% 专属特惠',
      imageUrl:
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '¥2,450',
      strikePrice: '¥2,880',
      discountPill: '立省 15%',
      usdEstimate: '≈ $345 USD (锁定汇率)',
      savingsAmount: '立省 ¥430',
      savingsBadge: '日元专享优汇',
    },
    voucher: {
      sectionTitle: '专属兑换券码',
      badgeText: '限单次使用',
      label: '优惠代码',
      code: 'JAPANSPECIAL15',
    },
    orbAiAdvice: {
      title: 'Orb AI 智能建议',
      messagePrefix:
        '当前日元汇率处于季度低位，提前锁定理财兑换全境铁路通票，相比旺季现场单程购票最高可节省 ',
      highlightText: '+28%',
      messageSuffix: '。',
    },
    terms: {
      title: '通票条款与细则',
      items: [
        {
          id: 'term-1',
          title: '灵活兑换激活',
          description:
            '自电子兑换券出票之日起90天内均可在日本境内车站兑换激活。',
          iconName: {
            ios: 'tram.fill',
            android: 'train',
            web: 'train',
          },
        },
        {
          id: 'term-2',
          title: '有效使用期限',
          description:
            '激活后连续7日内可在全日本 JR 铁路网络内不限次乘坐。',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
        {
          id: 'term-3',
          title: '免费预约指定席',
          description:
            '可在指定席售票机免费预约新干线指定席车票，无需补缴差价。',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
      ],
    },
    partners: {
      title: '合作预订预留渠道',
      badgeText: '返现生效中',
      list: [
        {
          id: 'partner-1',
          name: 'Klook',
          cashbackText: '+4% 返现',
          cashbackColor: '#2563EB',
          iconBgColor: '#FFF7ED',
          iconColor: '#EA580C',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
        {
          id: 'partner-2',
          name: 'Traveloka',
          cashbackText: '+5% 返现',
          cashbackColor: '#2563EB',
          iconBgColor: '#E0F2FE',
          iconColor: '#0284C7',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
      ],
    },
  },
  'promo-3': {
    id: 'promo-3',
    hero: {
      badgeLeft: '全景观光列车 • 特惠',
      badgeRight: '仅剩 5 天',
      routeSubtitle: '采尔马特 -> 圣莫里茨 (瑞士)',
      title: '冰川快车 25% 折扣\n穿越阿尔卑斯全景之旅',
      imageUrl:
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '¥1,750',
      strikePrice: '¥2,330',
      discountPill: '立省 25%',
      usdEstimate: '≈ $245 USD (锁定汇率)',
      savingsAmount: '立省 ¥580',
      savingsBadge: '多币种结算',
    },
    voucher: {
      sectionTitle: '专属兑换券码',
      badgeText: '限单次使用',
      label: '优惠代码',
      code: 'ALPSPANORAMA25',
    },
    orbAiAdvice: {
      title: 'Orb AI 智能建议',
      messagePrefix:
        '瑞士阿尔卑斯夏季旺季列车预订率达92%。建议立即提前锁定全景座舱车票，专享折扣 ',
      highlightText: '+25%',
      messageSuffix: '，避免旺季售罄。',
    },
    terms: {
      title: '车票条款与细则',
      items: [
        {
          id: 'term-1',
          title: '尊享全景车厢',
          description:
            '包含三道式阿尔卑斯特色午餐与当地精选佐餐葡萄酒。',
          iconName: {
            ios: 'tram.fill',
            android: 'train',
            web: 'train',
          },
        },
        {
          id: 'term-2',
          title: '行程有效性',
          description: '指定出行日期当日单程有效。',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
      ],
    },
    partners: {
      title: '合作预订预留渠道',
      badgeText: '返现生效中',
      list: [
        {
          id: 'partner-1',
          name: '瑞士通票',
          cashbackText: '+6% 返现',
          cashbackColor: '#16A34A',
          iconBgColor: '#FEE2E2',
          iconColor: '#DC2626',
          iconName: {
            ios: 'globe',
            android: 'public',
            web: 'public',
          },
        },
        {
          id: 'partner-2',
          name: 'Tiket.com',
          cashbackText: '+5% 返现',
          cashbackColor: '#2563EB',
          iconBgColor: '#EEF2FF',
          iconColor: '#4F46E5',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
      ],
    },
  },
  'promo-4': {
    id: 'promo-4',
    hero: {
      badgeLeft: '游民长住 • 限时特惠',
      badgeRight: '立赠返现红包',
      routeSubtitle: '巴厘岛 苍古 & 乌布',
      title: '长租独栋别墅立减 40%\n高速光纤办公共享空间',
      imageUrl:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: '¥2,920',
      strikePrice: '¥4,850',
      discountPill: '立省 40%',
      usdEstimate: '≈ $410 USD (锁定汇率)',
      savingsAmount: '立省 ¥1,930',
      savingsBadge: '游民专享礼遇',
    },
    voucher: {
      sectionTitle: '专属兑换券码',
      badgeText: '限单次使用',
      label: '优惠代码',
      code: 'BALINOMAD40',
    },
    orbAiAdvice: {
      title: 'Orb AI 智能建议',
      messagePrefix:
        '苍古及周边数字游民别墅入住率持续攀升。立即锁定月租工位长住，立省 ',
      highlightText: '+40%',
      messageSuffix: '，并获赠24小时全天候联合办公通行卡。',
    },
    terms: {
      title: '长租条款与细则',
      items: [
        {
          id: 'term-1',
          title: '完整工作配置',
          description:
            '独立专享 150 Mbps 高速光纤、人体工学椅与备用发电机电力保障。',
          iconName: {
            ios: 'laptopcomputer',
            android: 'laptop',
            web: 'laptop',
          },
        },
        {
          id: 'term-2',
          title: '最低租期要求',
          description: '适用于连续28晚或整月以上之预订入住。',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
      ],
    },
    partners: {
      title: '合作预订预留渠道',
      badgeText: '返现生效中',
      list: [
        {
          id: 'partner-1',
          name: 'Traveloka',
          cashbackText: '+5% 返现',
          cashbackColor: '#2563EB',
          iconBgColor: '#E0F2FE',
          iconColor: '#0284C7',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
        {
          id: 'partner-2',
          name: '房东\n直联',
          cashbackText: '+7% 返现',
          cashbackColor: '#16A34A',
          iconBgColor: '#F0FDF4',
          iconColor: '#16A34A',
          iconName: {
            ios: 'globe',
            android: 'public',
            web: 'public',
          },
        },
      ],
    },
  },
};

export const MOCK_PROMO_DETAILS = MOCK_PROMO_DETAILS_EN;

export function getPromoDetail(id: string, isZh: boolean = false): PromoDetailData {
  const catalog = isZh ? MOCK_PROMO_DETAILS_ZH : MOCK_PROMO_DETAILS_EN;
  return catalog[id] ?? catalog['promo-1'];
}
