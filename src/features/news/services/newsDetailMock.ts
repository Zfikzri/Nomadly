import type { NewsDetailData } from '../types/detail';

export const MOCK_NEWS_DETAILS: Record<string, NewsDetailData> = {
  'news-1': {
    id: 'news-1',
    countryCode: 'JP',
    countryName: 'Jepang',
    flagEmoji: '🇯🇵',
    categoryTag: 'Valuta & Regulasi Perjalanan',
    timeAgo: '12 Menit Lalu',
    readTime: '4 Mnt Baca',
    translationBadgeText: 'Terjemahan AI (ID)',
    title:
      'Kebijakan Bebas Visa Baru & Rekomendasi Mitigasi Keuangan di Tengah Tren Melemahnya Yen (JPY)',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      caption: 'Tokyo & Osaka Port of Entry Updates',
    },
    aiKeyPoints: {
      title: 'Poin Kunci AI',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: 'Akurat 99%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: 'Bebas visa kunjungan singkat',
          text: ' berlaku efektif mulai kuartal ini bagi pemegang e-paspor tanpa biaya biometrik tambahan.',
        },
        {
          id: 'p-2',
          dotColor: '#EF4444',
          boldPrefix: 'Nilai tukar JPY/IDR menyentuh Rp 105,42.',
          text: ' Indikator kuantitatif menunjukkan kemungkinan rebound teknikal dalam 14 hari ke depan.',
        },
        {
          id: 'p-3',
          dotColor: '#10B981',
          boldPrefix: 'Rekomendasi Tindakan:',
          text: ' Kunci kurs multi-currency wallet sekarang atau konversi 60% alokasi akomodasi hotel sebelum akhir pekan.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Dampak terhadap Wisatawan Mancanegara',
        paragraphs: [
          'Kementerian Luar Negeri Jepang secara resmi memperluas kerangka kerja bebas visa untuk turis mandiri asal Asia Tenggara, termasuk Indonesia, asalkan telah memiliki paspor elektronik yang terverifikasi. Pelonggaran ini dirancang untuk memulihkan arus belanja di kota sekunder seperti Kanazawa, Fukuoka, dan Sendai.',
          'Bagi pelancong dengan rencana perjalanan musim semi dan gugur, kebijakan ini memangkas waktu pengajuan dokumen fisik hingga 10 hari kerja. Kendati demikian, pendaftaran pre-clearance digital via portal Visit Japan Web tetap wajib diselesaikan paling lambat 72 jam sebelum ketibaan di bandara Narita atau Haneda.',
        ],
        callout: {
          type: 'regulation',
          title: 'Catatan Regulasi Penting',
          text: 'Bebas visa berlaku maksimal 15 hari kalender tanpa izin perpanjangan lokal.',
        },
      },
      {
        id: 'sec-2',
        sectionNumberTitle: '2. Aturan Transaksi Non-Tunai di Tokyo & Kyoto',
        paragraphs: [
          'Di tengah pelemahan Yen yang berkepanjangan, toko retail dan department store terkemuka di Shinjuku, Ginza, dan Kawaramachi mulai menerapkan standardisasi sistem kartu non-tunai multi-skema. Sejumlah gerai memberikan insentif diskon 5% tambahan untuk pembayaran direct contactless debit kartu global.',
          'Namun demikian, pelancong disarankan tetap menyiapkan sebagian dana tunai fisik. Kuil tradisional di Kyoto, kedai ramen independen, dan tiket mesin stasiun metro regional di luar jaringan Pasmo/Suica kerap hanya menerima pecahan koin atau lembaran Yen tunai.',
        ],
        image: {
          url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1000&q=80',
          caption: 'Debit Card & Japanese Yen Coins',
        },
      },
      {
        id: 'sec-3',
        sectionNumberTitle: '3. Tips Kartu Debit & Penarikan ATM Bebas Biaya',
        paragraphs: [
          'Gunakan mesin ATM yang berlokasi di jaringan minimarket 7-Eleven (Seven Bank) atau Lawson (Lawson Bank). Keduanya memiliki kompatibilitas tinggi terhadap jaringan kartu internasional dengan pilihan mata uang penagihan JPY lokal tanpa DCC (Dynamic Currency Conversion) yang merugikan.',
        ],
        callout: {
          type: 'strategy',
          title: 'Strategi Alokasi Valas Ideal',
          text: 'Simpan 70% saldo pada dompet digital multijurusan untuk transaksi contactless, 20% dalam bentuk tunai Yen cadangan, dan pertahankan 10% saldo fleksibel guna mengantisipasi fluktuasi mendadak.',
        },
      },
    ],
    socialShare: {
      title: 'Bagikan & Diskusi',
      joinCountText: '42 Pelancong Bergabung',
      actions: [
        {
          id: 'act-1',
          label: 'Simpan',
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
          label: 'Forum JPY',
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
    countryName: 'Uni Eropa',
    flagEmoji: '🇪🇺',
    categoryTag: 'Suku Bunga & Moneter',
    timeAgo: '35 Menit Lalu',
    readTime: '3 Mnt Baca',
    translationBadgeText: 'Terjemahan AI (ID)',
    title:
      'Suku Bunga ECB Turun: Peluang Kunci Kurs EUR untuk Liburan Musim Panas 2026',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
      caption: 'European Central Bank & Paris Updates',
    },
    aiKeyPoints: {
      title: 'Poin Kunci AI',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: 'Akurat 96%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: 'Pemotongan 25 bps suku bunga',
          text: ' menekan penguatan EUR terhadap mata uang berkembang dalam jangka pendek.',
        },
        {
          id: 'p-2',
          dotColor: '#10B981',
          boldPrefix: 'Rekomendasi Valas:',
          text: ' Lakukan DCA bertahap untuk tabungan perjalanan Eropa sebelum kuartal 3.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Implikasi bagi Pelancong Internasional',
        paragraphs: [
          'Keputusan dewan gubernur ECB melonggarkan kebijakan moneter memberikan angin segar bagi wisatawan yang merencanakan perjalanan melintasi Zona Schengen.',
        ],
        callout: {
          type: 'regulation',
          title: 'Pemberitahuan ETIAS',
          text: 'Sistem otorisasi perjalanan elektronik ETIAS mulai diwajibkan secara bertahap pada akhir tahun.',
        },
      },
    ],
    socialShare: {
      title: 'Bagikan & Diskusi',
      joinCountText: '18 Pelancong Bergabung',
      actions: [
        {
          id: 'act-1',
          label: 'Simpan',
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
          label: 'Forum EUR',
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
    timeAgo: '2 Jam Lalu',
    readTime: '5 Mnt Baca',
    translationBadgeText: 'Terjemahan AI (ID)',
    title:
      'Thailand Resmi Rilis Visa DTV 5 Tahun untuk Digital Nomad & Remote Worker',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
      caption: 'Bangkok & Chiang Mai Nomad Hub',
    },
    aiKeyPoints: {
      title: 'Poin Kunci AI',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: 'Akurat 98%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: 'Masa tinggal 180 hari per kunjungan',
          text: ' dengan opsi perpanjangan satu kali per kedatangan.',
        },
        {
          id: 'p-2',
          dotColor: '#10B981',
          boldPrefix: 'Syarat Saldo Minimal:',
          text: ' Bukti rekening 500.000 THB (sekitar Rp 220 juta) selama proses pengajuan.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Ketentuan Visa DTV (Destination Thailand Visa)',
        paragraphs: [
          'Inisiatif ini ditujukan untuk pekerja jarak jauh profesional, peserta muay thai, dan penggemar kuliner yang ingin tinggal jangka panjang di Thailand tanpa visa kerja tradisional.',
        ],
      },
    ],
    socialShare: {
      title: 'Bagikan & Diskusi',
      joinCountText: '65 Pelancong Bergabung',
      actions: [
        {
          id: 'act-1',
          label: 'Simpan',
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
          label: 'Forum THB',
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
    countryName: 'Singapura',
    flagEmoji: '🇸🇬',
    categoryTag: 'Bea Cukai & Finansial',
    timeAgo: '4 Jam Lalu',
    readTime: '3 Mnt Baca',
    translationBadgeText: 'Terjemahan AI (ID)',
    title:
      'Integrasi QRIS Lintas Negara Siap Dipakai Penuh di Singapura & Malaysia',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      caption: 'Marina Bay Financial Centre Updates',
    },
    aiKeyPoints: {
      title: 'Poin Kunci AI',
      subtitle: 'Orb Intelligence Briefing',
      accuracyBadge: 'Akurat 99%',
      points: [
        {
          id: 'p-1',
          dotColor: '#2563EB',
          boldPrefix: 'Bebas biaya konversi ganda',
          text: ' saat scan barcode NETS atau DuitNow langsung via perbankan nasional Indonesia.',
        },
      ],
    },
    sections: [
      {
        id: 'sec-1',
        sectionNumberTitle: '1. Manfaat Pembayaran Digital Borderless',
        paragraphs: [
          'Pelancong kini cukup menggunakan aplikasi m-banking terdaftar untuk bertransaksi di gerai retail, hawker center, dan transportasi tertentu tanpa perlu menukarkan uang tunai fisik secara berlebih.',
        ],
      },
    ],
    socialShare: {
      title: 'Bagikan & Diskusi',
      joinCountText: '33 Pelancong Bergabung',
      actions: [
        {
          id: 'act-1',
          label: 'Simpan',
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
          label: 'Forum SGD',
          icon: 'chat',
          bgColor: '#EDFAF4',
          tintColor: '#059669',
        },
      ],
    },
  },
};

export function getNewsDetail(id: string): NewsDetailData {
  return MOCK_NEWS_DETAILS[id] || MOCK_NEWS_DETAILS['news-1'];
}
