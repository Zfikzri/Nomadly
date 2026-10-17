import type { GroupDetailMessage, PersonalDetailMessage } from '../types';

export const MOCK_PERSONAL_CHAT_MESSAGES: PersonalDetailMessage[] = [
  {
    id: 'pm-1',
    sender: 'other',
    text: 'Halo Alex! Senang bisa terhubung. Kamu rencana sampai Tokyo tanggal berapa?',
    time: '10:14',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    autoTranslateLabel: 'Auto ID',
  },
  {
    id: 'pm-2',
    sender: 'me',
    text: 'Hai Kenji! Aku tiba tanggal 24 Oktober. Lagi cari rekomendasi konbini dan tempat tukar yen tanpa rate markup tinggi di sekitar Shinjuku.',
    time: '10:16',
    isReadReceipt: true,
  },
  {
    id: 'pm-3',
    sender: 'other',
    isVoiceNote: true,
    voiceDuration: '0:42',
    voiceTitle: 'Voice Note Tips',
    transcription:
      '“Lebih baik pakai Suica atau Pasmo digital di Apple Wallet / Google Wallet Alex. Untuk gate subway di Tokyo, tap IC Card responsnya instan tanpa antre, dan bisa top up langsung pakai kartu kamu.”',
    time: '10:24',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
];

export const MOCK_GROUP_CHAT_MESSAGES: GroupDetailMessage[] = [
  {
    id: 'gm-1',
    senderType: 'member',
    senderName: 'Kenji',
    countryCode: 'JP',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    senderBadge: {
      label: 'Local Host',
      bgColor: '#EDE9FE',
      textColor: '#8B5CF6',
    },
    text: 'Selamat datang di Shinjuku semuanya! 🍁 Buat yang mau beli Suica Card fisik di stasiun, mesinnya buka sampai jam 21:00 ya.',
    time: '10:14',
  },
  {
    id: 'gm-2',
    senderType: 'member',
    senderName: 'Sarah',
    countryCode: 'DE',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'Makasih Kenji! Aku baru landing di Narita. Naik Narita Express atau Keisei Skyliner yang lebih murah ya?',
    time: '10:18',
  },
  {
    id: 'gm-3',
    senderType: 'ai',
    time: '10:20',
    aiRecommendation: {
      title: 'Orb Travel AI',
      badge: 'Hemat Smart',
      tipsIntro: 'Saran Navigasi: Jika punya ',
      jrPassBold: 'JR Pass',
      jrPassText: ', Narita Express 100% gratis! Jika tidak, kombinasikan ',
      comboBold: 'Keisei Skyliner + Tokyo Subway Pass 72 Jam',
      comboText: ' untuk menghemat sekitar ',
      savingsRupiah: 'Rp 180.000',
      savingsYen: ' (¥1.700).',
      primaryActionText: 'Beli Tiket Terpadu',
      secondaryActionText: 'Cek Jadwal',
    },
  },
  {
    id: 'gm-4',
    senderType: 'member',
    senderName: 'Budi',
    countryCode: 'ID',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Ada yang mau bareng sewa pocket wifi unlimited atau mau split bill dinner ramen malam ini di Omoide Yokocho? 🍜',
    time: '10:22',
  },
  {
    id: 'gm-5',
    senderType: 'me',
    senderName: 'Kamu',
    text: 'Aku ikut Budi! Saldo JPY ku udah siap di dompet Noname 🚀',
    time: '10:25',
    statusReceipt: 'Terkirim',
  },
];
