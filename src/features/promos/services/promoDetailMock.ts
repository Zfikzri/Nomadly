import type { PromoDetailData } from '../types/detail';

export const MOCK_PROMO_DETAILS: Record<string, PromoDetailData> = {
  'promo-1': {
    id: 'promo-1',
    hero: {
      badgeLeft: 'FLIGHT PROMO • TERBATAS',
      badgeRight: '3 Hari 14 Jam',
      routeSubtitle: 'CGK (Jakarta) -> BCN (Barcelona)',
      title: 'Diskon 35% Tiket\nPesawat Barcelona',
      imageUrl:
        'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: 'Rp9.620.000',
      strikePrice: 'Rp14.800.000',
      discountPill: 'Hemat 35%',
      usdEstimate: '≈ $608 USD (Kurs Terkunci)',
      savingsAmount: 'Rp 5.180.000',
      savingsBadge: 'Multi-Mata Uang',
    },
    voucher: {
      sectionTitle: 'Kode Voucher Eksklusif',
      badgeText: 'Satu Kali Pakai',
      label: 'KODE PROMO',
      code: 'FLYCATALUNYA35',
    },
    orbAiAdvice: {
      title: 'Saran Orb AI',
      messagePrefix:
        'Beli sekarang sebelum penutupan batch promo tengah malam ini. Estimasi lonjakan harga tiket rute ini mencapai ',
      highlightText: '+45%',
      messageSuffix: ' dalam 2 minggu ke depan.',
    },
    terms: {
      title: 'Syarat & Ketentuan Penerbangan',
      items: [
        {
          id: 'term-1',
          title: 'Maskapai Resmi Mitra',
          description: 'Qatar Airways & Emirates (Transit 1x di Doha / Dubai).',
          iconName: {
            ios: 'airplane',
            android: 'flight',
            web: 'flight',
          },
        },
        {
          id: 'term-2',
          title: 'Periode Terbang',
          description:
            '1 November 2026 – 31 Maret 2027 (Berlaku blackout date libur Natal).',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
        {
          id: 'term-3',
          title: 'Bagasi Gratis',
          description:
            '30 kg Bagasi Terdaftar + 7 kg Bagasi Kabin per penumpang.',
          iconName: {
            ios: 'bag.fill',
            android: 'luggage',
            web: 'luggage',
          },
        },
        {
          id: 'term-4',
          title: 'Kebijakan Reschedule Fleksibel',
          description:
            '1x reschedule gratis biaya administrasi hingga H-14 keberangkatan.',
          iconName: {
            ios: 'arrow.triangle.2.circlepath',
            android: 'sync',
            web: 'sync',
          },
        },
      ],
    },
    partners: {
      title: 'Kanal Reservasi Mitra',
      badgeText: 'Cashback Aktif',
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
          name: 'Direct\nMaskapai',
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
      badgeLeft: 'TRAIN PASS • TERBATAS',
      badgeRight: 'Instant E-Voucher',
      routeSubtitle: 'ALL JAPAN RAILS (Shinkansen & Express)',
      title: 'Promo JR Pass 15%\nSeluruh Rute Jepang',
      imageUrl:
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: 'Rp5.450.000',
      strikePrice: 'Rp6.420.000',
      discountPill: 'Hemat 15%',
      usdEstimate: '≈ $345 USD (Kurs Terkunci)',
      savingsAmount: 'Rp 970.000',
      savingsBadge: 'Kurs Spesial JPY',
    },
    voucher: {
      sectionTitle: 'Kode Voucher Eksklusif',
      badgeText: 'Satu Kali Pakai',
      label: 'KODE PROMO',
      code: 'JAPANSPECIAL15',
    },
    orbAiAdvice: {
      title: 'Saran Orb AI',
      messagePrefix:
        'Nilai tukar JPY saat ini berada pada titik terendah kuartal ini. Kunci harga pass Anda sekarang untuk menghemat hingga ',
      highlightText: '+28%',
      messageSuffix: ' dari tarif musim semi.',
    },
    terms: {
      title: 'Syarat & Ketentuan Pass',
      items: [
        {
          id: 'term-1',
          title: 'Aktivasi Pass Fleksibel',
          description:
            'Dapat diaktifkan hingga 90 hari setelah tanggal pembelian voucher.',
          iconName: {
            ios: 'tram.fill',
            android: 'train',
            web: 'train',
          },
        },
        {
          id: 'term-2',
          title: 'Masa Berlaku',
          description:
            '7 hari berturut-turut untuk seluruh jalur kereta JR se-Jepang.',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
        {
          id: 'term-3',
          title: 'Reservasi Kursi Gratis',
          description:
            'Bebas pesan nomor kursi Shinkansen tanpa biaya tambahan di mesin tiket.',
          iconName: {
            ios: 'ticket.fill',
            android: 'confirmation_number',
            web: 'confirmation_number',
          },
        },
      ],
    },
    partners: {
      title: 'Kanal Reservasi Mitra',
      badgeText: 'Cashback Aktif',
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
      badgeLeft: 'SCENIC RAIL • TERBATAS',
      badgeRight: '5 Hari Tersisa',
      routeSubtitle: 'ZERMATT -> ST. MORITZ (Switzerland)',
      title: 'Glacier Express 25% Off\nPanorama Pegunungan Alpen',
      imageUrl:
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: 'Rp3.850.000',
      strikePrice: 'Rp5.130.000',
      discountPill: 'Hemat 25%',
      usdEstimate: '≈ $245 USD (Kurs Terkunci)',
      savingsAmount: 'Rp 1.280.000',
      savingsBadge: 'Multi-Mata Uang',
    },
    voucher: {
      sectionTitle: 'Kode Voucher Eksklusif',
      badgeText: 'Satu Kali Pakai',
      label: 'KODE PROMO',
      code: 'ALPSPANORAMA25',
    },
    orbAiAdvice: {
      title: 'Saran Orb AI',
      messagePrefix:
        'Musim liburan musim panas di Swiss memiliki tingkat keterisian kereta 92%. Amankan tiket panoramic seat sekarang dengan potongan ',
      highlightText: '+25%',
      messageSuffix: ' sebelum habis.',
    },
    terms: {
      title: 'Syarat & Ketentuan Tiket',
      items: [
        {
          id: 'term-1',
          title: 'Panoramic Excellence Class',
          description:
            'Termasuk 3-course gourmet lunch dan wine lokal pegunungan Alpen.',
          iconName: {
            ios: 'tram.fill',
            android: 'train',
            web: 'train',
          },
        },
        {
          id: 'term-2',
          title: 'Masa Berlaku',
          description: 'Berlaku perjalanan satu arah pada tanggal yang dipilih.',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
      ],
    },
    partners: {
      title: 'Kanal Reservasi Mitra',
      badgeText: 'Cashback Aktif',
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
      badgeLeft: 'NOMAD STAY • TERBATAS',
      badgeRight: 'Cashback 200k',
      routeSubtitle: 'CANGGU & UBUD, BALI',
      title: 'Monthly Villa Stay 40%\nCo-living Fiber High Speed',
      imageUrl:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    },
    price: {
      currentPrice: 'Rp6.500.000',
      strikePrice: 'Rp10.830.000',
      discountPill: 'Hemat 40%',
      usdEstimate: '≈ $410 USD (Kurs Terkunci)',
      savingsAmount: 'Rp 4.330.000',
      savingsBadge: 'Nomad Special',
    },
    voucher: {
      sectionTitle: 'Kode Voucher Eksklusif',
      badgeText: 'Satu Kali Pakai',
      label: 'KODE PROMO',
      code: 'BALINOMAD40',
    },
    orbAiAdvice: {
      title: 'Saran Orb AI',
      messagePrefix:
        'Tingkat okupansi villa di area Canggu meningkat 30% untuk bulan depan. Kunci masa tinggal bulanan Anda sekarang untuk menghemat ',
      highlightText: '+40%',
      messageSuffix: ' dan gratis akses coworking 24 jam.',
    },
    terms: {
      title: 'Syarat & Ketentuan Sewa',
      items: [
        {
          id: 'term-1',
          title: 'Fasilitas Kerja Lengkap',
          description:
            'Wifi fiber optic 150 Mbps, kursi ergonomis, dan backup generator listrik.',
          iconName: {
            ios: 'laptopcomputer',
            android: 'laptop',
            web: 'laptop',
          },
        },
        {
          id: 'term-2',
          title: 'Durasi Minimum',
          description: 'Berlaku untuk masa sewa minimum 28 hari (1 bulan penuh).',
          iconName: {
            ios: 'calendar',
            android: 'calendar_today',
            web: 'calendar_today',
          },
        },
      ],
    },
    partners: {
      title: 'Kanal Reservasi Mitra',
      badgeText: 'Cashback Aktif',
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

export function getPromoDetail(id: string): PromoDetailData {
  return MOCK_PROMO_DETAILS[id] ?? MOCK_PROMO_DETAILS['promo-1'];
}
