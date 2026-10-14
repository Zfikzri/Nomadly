import type {
  CustomsCashNewsItem,
  EtiasNewsItem,
  FxAlertNewsItem,
  NewsCategory,
  PreClearanceNewsItem,
  TouristFeeNewsItem,
} from '../types';

export const MOCK_NEWS_CATEGORIES: NewsCategory[] = [
  { id: 'all', label: 'Semua' },
  { id: 'japan', label: 'Jepang' },
  { id: 'europe', label: 'Eropa' },
  { id: 'singapore', label: 'Singapura' },
  { id: 'thailand', label: 'Thailand' },
];

export const MOCK_FX_ALERT_NEWS: FxAlertNewsItem = {
  id: 'news-fx-jpy',
  badgeText: 'FX ALERT KRUSIAL',
  timeAgo: '12m lalu',
  title:
    'Yen Melemah ke Titik Terendah 3 Bulan: Kesempatan Tukar Valuta & Belanja Hemat di Jepang',
  summary:
    'Dampak langsung: Penghematan hingga 14% untuk reservasi hotel di Tokyo dan belanja barang elektronik di Akihabara jika menukar valuta pekan ini.',
  categoryTag: 'Valuta & Finansial',
  readTime: '1 mnt baca',
};

export const MOCK_PRE_CLEARANCE_NEWS: PreClearanceNewsItem = {
  id: 'news-preclearance-haneda',
  imageUrl:
    'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80',
  regionTag: 'Jepang',
  badgeText: 'Auto-terjemah',
  translationCredit: 'Terjemahan resmi Badan Imigrasi Tokyo',
  title: 'Kebijakan Bebas Visa Baru & Sistem Pre-Clearance Bandara Haneda 2026',
  summary:
    'Wisatawan dari negara ASEAN terpilih dapat memproses biometrik pra-keberangkatan untuk memangkas waktu antrean imigrasi kedatangan hingga 40 menit.',
  categoryTag: 'Regulasi Visa',
  timeAgo: '1 jam lalu',
  readTime: '3 mnt baca',
};

export const MOCK_ETIAS_NEWS: EtiasNewsItem = {
  id: 'news-etias-eropa',
  regionTag: 'Zona Schengen',
  categoryTag: 'Regulasi Visa',
  timeAgo: '3 jam lalu',
  title:
    'Regulasi ETIAS Eropa Resmi Diterapkan: Biaya €7 & Dokumen Keuangan yang Diwajibkan',
  summary:
    'Sistem Otorisasi Perjalanan Elektronik mewajibkan bukti saldo minimum harian dan asuransi perjalanan dengan perlindungan medis minimum €30.000.',
  guideLinkText: 'Cek panduan pengajuan >',
  readTime: '4 mnt baca',
};

export const MOCK_CUSTOMS_CASH_NEWS: CustomsCashNewsItem = {
  id: 'news-customs-changi',
  regionTag: 'Singapura',
  categoryTag: 'Pajak & Bea Cukai',
  timeAgo: '5 jam lalu',
  title:
    'Aturan Bea Cukai & Batas Pembayaran Cash Bebas Deklarasi di Changi Airport',
  summary:
    'Otoritas Imigrasi ICA memperketat kewajiban pelaporan formulir NP303 untuk uang tunai fisik di atas SGD 20.000. Simak tata cara pengisian online.',
  tipText:
    'Gunakan e-Wallet multi-currency untuk menghindari kewajiban deklarasi tunai',
  sourceText: 'Sumber: Singapore Customs',
  readTime: '2 mnt baca',
};

export const MOCK_TOURIST_FEE_NEWS: TouristFeeNewsItem = {
  id: 'news-tourist-fee-thai',
  regionTag: 'Thailand',
  categoryTag: 'Pajak & Bea Cukai',
  timeAgo: '1 hari lalu',
  title: 'Thailand Memberlakukan Kembali Skema Biaya Masuk Turis 300 Baht',
  summary:
    'Kementerian Pariwisata dan Olahraga Thailand menetapkan pungutan 300 Baht (~Rp 135.000) untuk dana kompensasi & asuransi wisatawan asing.',
  bannerImageUrl:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  bannerTitle: 'Biaya otomatis di tiket pesawat',
  bannerSubtitle: 'Berlaku untuk seluruh penerbangan komersial',
  updateInfo: 'Pembaruan Efektif Q1 2025',
  readTime: '2 mnt baca',
};
