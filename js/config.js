/**
 * ==============================================================================
 * KONFIGURASI PORTOFOLIO - HARUN AR RASYID
 * ==============================================================================
 * File ini merupakan pusat pengaturan seluruh konten website.
 * Anda dapat memperbarui data kontak (email, WhatsApp, telepon), media sosial,
 * biodata, domisili, riwayat karier, hingga daftar proyek langsung dari file ini
 * tanpa perlu mengubah kode HTML maupun CSS.
 * ==============================================================================
 */

const SITE_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. PROFIL & IDENTITAS PENGEMBANG
  // --------------------------------------------------------------------------
  profile: {
    name: "Harun Ar Rasyid",
    shortName: "HARUN.AR",
    role: "Engineer IoT & Computer Vision",
    idCode: "",
    fieldDossierCode: "Profil Rekayasa // HR-01",
    location: "Banyumas, Jawa Tengah, Indonesia",
    locationShort: "Banyumas, ID",
    statusBadge: "Terbuka untuk Kolaborasi & Proyek",
    availability: "Tersedia untuk Kontrak Proyek & Karier",
    headlineMain: "Sistem Fisik.",
    headlineOutline: "Otak Perangkat Lunak.",
    bio: "Mahasiswa S1 Teknik Informatika Telkom University Purwokerto & IoT Programmer di TW Smarthome. Berfokus merancang sistem terintegrasi: perangkat keras embedded, model Computer Vision edge AI, serta antarmuka web monitoring real-time.",
    aboutP1: "Saya memiliki minat dan dedikasi mendalam pada pemrograman Computer Vision, Internet of Things (IoT), sistem embedded mikrokontroler, serta antarmuka web interaktif yang menyajikan data lapangan secara intuitif.",
    aboutP2: "Bagi saya, perangkat keras dan perangkat lunak adalah kesatuan arsitektur yang saling menguatkan. Dari perancangan sirkuit mikrokontroler (ESP32, STM32, Arduino Nano), pemrosesan visi komputer cerdas (YOLOv8 & OpenCV), hingga integrasi backend dan cloud (Laravel, Next.js, MQTT, WebSockets) — seluruhnya dioptimasi demi latensi rendah dan keandalan data.",
    aboutP3: "Telah membuktikan kemampuan melalui implementasi nyata: pemantauan lalu lintas CCTV dan penghitung orang di Dinkominfo Kab. Banyumas, otomatisasi smart home lokal dan monitoring PLTS di TW Smarthome, inovasi kotak paket COD mandiri berenergi surya berlisensi HKI (COBOX), hingga riset deteksi ikan dan pengering kopi di Telkom University Purwokerto.",
    education: [
      {
        institution: "Telkom University Purwokerto",
        degree: "S1 Teknik Informatika (Bachelor of Informatics Engineering)",
        period: "Jun 2022 — Sekarang (Est. Apr 2026)",
        location: "Purwokerto, Banyumas"
      },
      {
        institution: "SMKN 2 Purwokerto",
        degree: "Teknik Elektronika Audio Video",
        period: "Jun 2019 — Jun 2022",
        location: "Purwokerto, Banyumas"
      }
    ],
    experience: [
      {
        company: "TW Smarthome",
        role: "IoT Programmer",
        period: "Agu 2022 — Sekarang",
        location: "Purwokerto",
        description: "Mengembangkan sistem IoT smart home yang beroperasi mandiri tanpa server cloud pihak ketiga (local server-first) menggunakan MQTT. Mengimplementasikan komunikasi dua arah RF 433MHz yang hemat biaya serta sistem pemantauan real-time untuk PLTS hybrid bertenaga surya menggunakan HTTPClient."
      },
      {
        company: "Dinkominfo Kabupaten Banyumas",
        role: "Internship / Pengembang Sistem & Computer Vision",
        period: "Jun 2025 — Agu 2025",
        location: "Purwokerto, Banyumas",
        description: "Membangun sistem pemantauan lalu lintas cerdas (Vehicle Counter) berbasis OpenCV & YOLO dari rekaman CCTV kota Banyumas, sistem penghitung kapasitas auditorium (Person Counter), serta konfigurasi platform Moodle LMS untuk pelatihan aparatur sipil negara (ASN)."
      },
      {
        company: "Telkom University Purwokerto",
        role: "IoT Programmer & Periset Sistem",
        period: "Agu 2024 — Mar 2026",
        location: "Purwokerto, Banyumas",
        description: "Merancang sistem penghitung ikan otomatis berbasis Raspberry Pi 5 dan YOLO dengan GUI desktop Python. Mengembangkan perangkat telemetri ESP32 untuk monitoring audio FFT dan berkas WAV via Laravel/MQTT, sistem timbangan Solvia Machine Cocobase (Innovilage) dengan Next.js, serta otomasi dehumidifikasi pengering kopi."
      }
    ],
    avatars: {
      cyber: "assets/images/profile/character.webp",
      real: "assets/images/profile/profil.webp"
    }
  },

  // --------------------------------------------------------------------------
  // 2. KONTAK & SALURAN KOMUNIKASI
  // --------------------------------------------------------------------------
  contact: {
    email: "2211102080@ittelkom-pwt.ac.id",
    secondaryEmail: "harunarrasyid2025@gmail.com",
    phone: "089518548563",
    phoneFormatted: "+62 895-1854-8563",
    whatsappNumber: "6289518548563",
    whatsappUrl: "https://wa.me/6289518548563",
    address: "Desa Kalicupak Lor, RT 03 RW 02, Kec. Kalibagor, Kab. Banyumas, Jawa Tengah, Indonesia",
    headline: "Mari berkolaborasi membangun sistem fisik yang andal.",
    description: "Sedang membutuhkan solusi Computer Vision, firmware mikrokontroler (ESP32/STM32/Raspberry Pi), integrasi sensor lapangan, atau web dashboard monitoring? Pintu diskusi terbuka untuk konsultasi teknis, pengerjaan proyek, riset, maupun peluang karier."
  },

  // --------------------------------------------------------------------------
  // 3. TAUTAN & MEDIA SOSIAL
  // --------------------------------------------------------------------------
  links: {
    github: "https://github.com/rasiharunart1",
    linkedin: "https://www.linkedin.com/in/harunart",
    instagram: "https://instagram.com/rasiharunart",
    resume: "HARUN AR RASYID-resume (5).pdf",
    youtube: "https://www.youtube.com/@rasiharunart1"
  },

  // --------------------------------------------------------------------------
  // 4. METRIK & STATISTIK UTAMA
  // --------------------------------------------------------------------------
  metrics: [
    { count: "16+", label: "Proyek Teruji" },
    { count: "Hardware &rarr; Web", label: "Solusi Terpadu" },
    { count: "Banyumas", label: "Jawa Tengah, ID" }
  ],

  // --------------------------------------------------------------------------
  // 5. KATALOG SISTEM & PROYEK REKAYASA (16 PROYEK)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "p01",
      code: "P-01",
      title: "COBOX — Kotak Paket COD Mandiri Berenergi Surya (HKI & PKM-KC)",
      category: "embedded",
      catLabel: "Inovasi / HKI / IoT",
      summary: "Inovasi penerima paket COD otomatis bertenaga surya 50Wp dengan RFID, pemindai barcode, dan penguncian mandiri.",
      details: "Inovasi PKM-KC 2024 yang telah resmi terdaftar sebagai Hak Kekayaan Intelektual (HKI 2024). Mengintegrasikan mikrokontroler ESP32, Arduino Nano, RFID scanner, barcode scanner, dan solenoid lock dengan catu daya mandiri panel surya 50Wp untuk keamanan transaksi barang COD saat penerima sedang bepergian.",
      tags: ["ESP32", "Arduino Nano", "RFID Scanner", "Barcode", "Panel Surya 50Wp", "Paten HKI"],
      role: "Lead Hardware & Firmware Engineer",
      status: "Terdaftar HKI & Uji Lapangan",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: "https://www.instagram.com/cobox.paketin/reel/C-9jVMoy5Lv/",
      demo: null
    },
    {
      id: "p02",
      code: "P-02",
      title: "Sistem Penghitung Ikan IoT (Fish Counter) — Telkom University",
      category: "cv",
      catLabel: "Computer Vision / IoT",
      summary: "Deteksi dan penghitungan benih ikan real-time berbasis Raspberry Pi 5 dan YOLO terintegrasi GUI desktop Python.",
      details: "Dirancang dan dikembangkan untuk menghitung populasi bibit ikan secara otomatis dan cepat tanpa kontak fisik. Mengintegrasikan model deteksi objek YOLO yang dioptimalkan pada Raspberry Pi 5 dengan antarmuka desktop Python untuk live streaming, visualisasi grafis, dan pencatatan telemetri secara real-time.",
      tags: ["Raspberry Pi 5", "YOLO", "OpenCV", "Python Desktop GUI", "Edge AI"],
      role: "IoT & Computer Vision Programmer",
      status: "Implementasi Lapangan",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: "https://www.youtube.com/watch?v=_iWeQHDD3XY",
      demo: null
    },
    {
      id: "p03",
      code: "P-03",
      title: "Vehicle Counter CCTV Traffic Banyumas — Dinkominfo Kab. Banyumas",
      category: "cv",
      catLabel: "Computer Vision / Smart City",
      summary: "Sistem pemantauan lalu lintas cerdas memanfaatkan OpenCV dan YOLO untuk deteksi dan penghitungan kendaraan via CCTV.",
      details: "Sistem monitoring volume lalu lintas cerdas berbasis rekaman CCTV kota Banyumas. Memanfaatkan teknologi OpenCV dan YOLO untuk mendeteksi serta menghitung kendaraan secara real-time, mendukung analitik kemacetan dan pengambilan kebijakan transportasi tata kota yang terukur.",
      tags: ["OpenCV", "YOLO", "Python", "Smart City", "CCTV Analytics"],
      role: "Computer Vision Developer (Magang)",
      status: "Implementasi Dinas (Banyumas)",
      year: "2025",
      github: "https://github.com/rasiharunart1",
      video: null,
      demo: null
    },
    {
      id: "p04",
      code: "P-04",
      title: "Realtime Person Counter Auditorium — Dinkominfo Kab. Banyumas",
      category: "cv",
      catLabel: "Computer Vision / Analytics",
      summary: "Sistem cerdas deteksi dan penghitungan jumlah orang di ruang rapat/auditorium secara real-time dari rekaman CCTV.",
      details: "Dikembangkan untuk memantau kapasitas dan okupansi ruang rapat serta gedung serbaguna Pemkab Banyumas secara otomatis. Memanfaatkan model deteksi orang berbasis deep learning dan OpenCV untuk menghitung kerumunan secara akurat tanpa memerlukan sensor gerak fisik tambahan.",
      tags: ["OpenCV", "YOLO", "Python", "Deep Learning", "Auditorium Monitoring"],
      role: "Computer Vision Developer (Magang)",
      status: "Sistem Aktif Pemkab",
      year: "2025",
      github: "https://github.com/rasiharunart1",
      video: null,
      demo: null
    },
    {
      id: "p05",
      code: "P-05",
      title: "Pemantau Audio FFT & Sistem Peringatan — Telkom University",
      category: "iot",
      catLabel: "IoT / Audio Analysis",
      summary: "Perangkat ESP32 perekam data FFT dan audio WAV dengan dashboard web Laravel via protokol HTTPClient & MQTT.",
      details: "Mengembangkan perangkat keras IoT dan antarmuka web berbasis framework Laravel untuk pemantauan spektrum FFT dan sistem peringatan anomali audio. Mengakuisisi data numerik FFT serta berkas audio WAV secara langsung dari ESP32 menggunakan protokol multi-saluran HTTPClient dan MQTT broker.",
      tags: ["ESP32", "FFT Audio", "Laravel Framework", "MQTT", "HTTPClient"],
      role: "IoT & Web Programmer",
      status: "Sistem Aktif & Teruji",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: "https://www.instagram.com/p/CG4tYpXnVzW/",
      demo: null
    },
    {
      id: "p06",
      code: "P-06",
      title: "Smart Home Mandiri Lokal & Monitoring PLTS Hybrid — TW Smarthome",
      category: "iot",
      catLabel: "IoT / Smart Home / Solar",
      summary: "Otomatisasi smart home mandiri tanpa server cloud pihak ketiga berbasis MQTT, RF 433MHz, dan monitoring PLTS.",
      details: "Membangun sistem otomasi smart home lokal (local-first) yang berjalan cepat tanpa ketergantungan cloud pihak ketiga menggunakan MQTT broker lokal. Dilengkapi komunikasi nirkabel dua arah RF 433MHz hemat biaya serta modul telemetri monitoring real-time untuk PLTS hybrid bertenaga surya menggunakan HTTPClient.",
      tags: ["ESP32", "MQTT Broker Lokal", "RF 433MHz", "PLTS Hybrid", "HTTPClient"],
      role: "IoT Programmer",
      status: "Produksi Berkelanjutan",
      year: "2022 - Sekarang",
      github: "https://github.com/rasiharunart1",
      video: null,
      demo: null
    },
    {
      id: "p07",
      code: "P-07",
      title: "Solvia Machine Cocobase Weight Logger — Innovilage Project",
      category: "fullstack",
      catLabel: "Full-Stack IoT / Timbangan",
      summary: "Perangkat IoT timbangan presisi berbasis ESP32 dan antarmuka web Next.js untuk logging produksi serabut kelapa.",
      details: "Proyek pemberdayaan masyarakat Innovilage. Mengembangkan perangkat keras akuisisi data beban timbangan (load cell HX711) pada mesin Solvia Cocobase dan membangun web interface modern berbasis Next.js untuk monitoring produktivitas penimbangan serabut kelapa secara real-time.",
      tags: ["ESP32", "Next.js", "Load Cell HX711", "Web Interface", "Innovilage"],
      role: "IoT Hardware & Web Developer",
      status: "Implementasi Innovilage",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: null,
      demo: null
    },
    {
      id: "p08",
      code: "P-08",
      title: "Sistem Dehumidifikasi Ruang Pengering Kopi — Telkom University",
      category: "iot",
      catLabel: "IoT / Pertanian Presisi",
      summary: "Otomasi kontrol suhu dan kelembapan ruang pengering kopi berbasis ESP32 dengan web dashboard kendali jarak jauh.",
      details: "Merancang sistem otomasi pengering kopi berbasis ESP32 untuk pemantauan real-time suhu dan kelembapan udara. Terintegrasi dengan web dashboard interaktif untuk mendukung remote control aktuator dehumidifier, pemantauan status proses, dan logging riwayat data pengeringan biji kopi.",
      tags: ["ESP32", "DHT Sensor", "Web Dashboard", "Remote Control", "Data Logging"],
      role: "IoT Firmware & Web Developer",
      status: "Uji Lapangan Petani Kopi",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: "https://www.youtube.com/shorts/KLD5msSkhDU",
      demo: null
    },
    {
      id: "p09",
      code: "P-09",
      title: "Moodle LMS untuk ASN Kabupaten Banyumas — Dinkominfo Banyumas",
      category: "fullstack",
      catLabel: "Full-Stack Web / E-Learning",
      summary: "Platform Learning Management System (LMS) berbasis Moodle untuk pelatihan online dan pengembangan kompetensi ASN.",
      details: "Membangun dan mengkustomisasi platform LMS berbasis Moodle untuk memfasilitasi pelatihan daring, peningkatan kapasitas, dan pembinaan profesional berkelanjutan bagi Aparatur Sipil Negara (ASN) di Kabupaten Banyumas, mewujudkan tata kelola pemerintahan yang modern dan kompeten.",
      tags: ["Moodle LMS", "PHP", "MySQL", "E-Learning", "Pemerintahan"],
      role: "Web & LMS Developer (Magang)",
      status: "Platform Aktif Pemkab",
      year: "2025",
      github: "https://github.com/rasiharunart1",
      video: null,
      demo: null
    },
    {
      id: "p10",
      code: "P-10",
      title: "Smart Irrigation System v4.1 — Irigasi Pertanian Cerdas",
      category: "iot",
      catLabel: "IoT / Pertanian Cerdas",
      summary: "Irigasi cerdas dual-MCU (Arduino Uno + ESP32) dengan bot Telegram, jadwal RTC, captive portal, dan ThingSpeak.",
      details: "Sistem irigasi 3-mode: manual via Telegram bot, otomatis jadwal RTC DS3231, dan otomatis sensor pH/kelembaban tanah. Fitur penyimpanan konfigurasi WiFi di NVS serta captive portal untuk setup mandiri tanpa flash ulang firmware.",
      tags: ["ESP32", "Arduino Uno", "Telegram Bot", "ThingSpeak", "FreeRTOS", "C++"],
      role: "Lead Embedded Firmware Developer",
      status: "Firmware Production",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: null,
      demo: null
    },
    {
      id: "p11",
      code: "P-11",
      title: "Fall Detector ESP32 — Deteksi Jatuh Real-Time Lansia",
      category: "embedded",
      catLabel: "Embedded / Kesehatan Medis",
      summary: "Sistem deteksi jatuh 4-arah real-time berbasis IMU MPU6050, sensor MAX30100, FreeRTOS, dan Firebase RTDB.",
      details: "Mendeteksi jatuh ke 4 arah dengan filter konfirmasi timer 1500ms mencegah alarm palsu. Arsitektur multi-tasking FreeRTOS memisahkan pembacaan sensor detak jantung/SpO2 di Core 0 dan transmisi Firebase di Core 1 dengan pengamanan I2C mutex.",
      tags: ["ESP32", "MPU6050", "MAX30100", "FreeRTOS Mutex", "Firebase RTDB"],
      role: "Embedded Firmware Developer",
      status: "Firmware Production",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: null,
      demo: null
    },
    {
      id: "p12",
      code: "P-12",
      title: "Cattle Respiration & Panting Score Detection (YOLOv8 & OpenCV)",
      category: "cv",
      catLabel: "Computer Vision / Peternakan",
      summary: "Pelacakan pernapasan sapi perah dan panting score berbasis sub-pixel motion tracking dan YOLOv8.",
      details: "Mendeteksi pergerakan dinding dada dan perut sapi untuk menghitung frekuensi pernapasan (RR) dan indikator stres panas (heat stress) secara non-kontak tanpa menyentuh ternak, dilengkapi peringatan dini otomatis.",
      tags: ["YOLOv8", "OpenCV", "Python", "Edge AI", "FastAPI"],
      role: "Lead Computer Vision Engineer",
      status: "Unit Riset & Validasi Lapangan",
      year: "2024",
      github: "https://github.com/rasiharunart1/Cattle-Respiration-Panting-Score-Detection-",
      video: "https://www.youtube.com/watch?v=F3x9T33D98A",
      demo: null
    },
    {
      id: "p13",
      code: "P-13",
      title: "Real-Time Edge Fire & Flame Detection (OpenCV & Python)",
      category: "cv",
      catLabel: "Edge AI / Keselamatan",
      summary: "Deteksi api dan asap berlatensi rendah (<250ms) menggunakan model visi terkuantisasi pada kamera edge.",
      details: "Mendeteksi api terbuka secara instan menggantikan sensor panas konvensional. Mengombinasikan heuristik ruang warna dan inferensi model ringan untuk meminimalkan salah deteksi akibat lampu ambient.",
      tags: ["Edge AI", "OpenCV", "Python", "MQTT", "Low-Latency"],
      role: "Embedded AI Developer",
      status: "Prototipe Teruji",
      year: "2024",
      github: "https://github.com/rasiharunart1/Deteksi-Api-Realtime",
      video: "https://www.youtube.com/watch?v=0h5l1Yx_o8Y",
      demo: null
    },
    {
      id: "p14",
      code: "P-14",
      title: "Poultry Activity & Cluster Monitoring (Optical Flow)",
      category: "cv",
      catLabel: "Computer Vision / Unggas",
      summary: "Analisis kepadatan, pengelompokan (clustering), dan indeks keaktifan ayam broiler berbasis optical flow.",
      details: "Mengevaluasi distribusi populasi ayam broiler dari kamera atas kandang menggunakan optical flow dan density heatmap untuk mendeteksi area sirkulasi udara bermasalah dan indikasi dini wabah penyakit.",
      tags: ["Computer Vision", "Optical Flow", "PyTorch", "Python", "Heatmap"],
      role: "Computer Vision Specialist",
      status: "Uji Coba Kandang",
      year: "2024",
      github: "https://github.com/rasiharunart1/Poultry-Activity-Index-and-Cluster-Monitoring",
      video: null,
      demo: null
    },
    {
      id: "p15",
      code: "P-15",
      title: "Non-Invasive Cattle Weight Estimation (Regresi Visi Komputer)",
      category: "cv",
      catLabel: "AgriTech / Computer Vision",
      summary: "Estimasi bobot sapi non-kontak melalui regresi kontur tubuh dan keypoint detection dari rekaman samping.",
      details: "Mengukur lingkar dada, panjang badan, dan tinggi gumba sapi secara otomatis menggunakan model regresi visi komputer tanpa menimbulkan stres pada ternak dibanding timbangan konvensional.",
      tags: ["YOLOv8", "Regression Model", "OpenCV", "AgriTech", "Python"],
      role: "Machine Learning Engineer",
      status: "Riset Komparasi Bobot",
      year: "2024",
      github: "https://github.com/rasiharunart1",
      video: "https://www.instagram.com/reel/DCq6f15S3Z-/",
      demo: null
    },
    {
      id: "p16",
      code: "P-16",
      title: "Smart Waste Sorter & Segregation Robot (ESP32 & OpenCV)",
      category: "embedded",
      catLabel: "Robotika & Visi Komputer",
      summary: "Stasiun pemilah sampah mandiri berbasis kamera pengenal objek, sensor induktif, dan aktuator pemilah.",
      details: "Memilah material sampah (logam, organik, anorganik/plastik) secara otomatis menggunakan klasifikasi citra cepat yang disinkronkan dengan penggerak servo motor serta pencatatan log volume berkala.",
      tags: ["ESP32", "Python", "OpenCV", "Robotika", "Servo Motor"],
      role: "Hardware & Firmware Engineer",
      status: "Prototipe Uji Coba",
      year: "2023",
      github: "https://github.com/rasiharunart1/Smart-Trash-Sorter",
      video: null,
      demo: null
    }
  ]
};

// --------------------------------------------------------------------------
// HELPER & SINKRONISASI .ENV DINAMIS
// --------------------------------------------------------------------------
const PortfolioConfig = {
  data: SITE_CONFIG,

  get(path, fallback = "") {
    if (!path) return fallback;
    const parts = path.split('.');
    let curr = this.data;
    for (const p of parts) {
      if (curr && typeof curr === 'object' && p in curr) {
        curr = curr[p];
      } else {
        return fallback;
      }
    }
    return curr !== undefined ? curr : fallback;
  },

  async loadEnv() {
    if (typeof window === 'undefined' || window.location.protocol === 'file:') {
      return this.data;
    }
    try {
      const res = await fetch('.env');
      if (!res.ok) return this.data;
      const text = await res.text();
      const lines = text.split(/\r?\n/);
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx === -1) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);

        if (key === 'CONTACT_EMAIL') this.data.contact.email = val;
        if (key === 'CONTACT_PHONE') {
          this.data.contact.phone = val;
          this.data.contact.phoneFormatted = val;
        }
        if (key === 'CONTACT_WHATSAPP') {
          this.data.contact.whatsappUrl = val;
          this.data.contact.whatsappNumber = val.replace(/\D/g, '');
        }
        if (key === 'CONTACT_GITHUB') this.data.links.github = val;
        if (key === 'CONTACT_LINKEDIN') this.data.links.linkedin = val;
        if (key === 'CONTACT_INSTAGRAM') this.data.links.instagram = val;
        if (key === 'LINK_DOWNLOAD_CV') this.data.links.resume = val;
        if (key === 'SITE_NAME') this.data.profile.name = val;
        if (key === 'SITE_ROLE') this.data.profile.role = val;
        if (key === 'SITE_BIO') this.data.profile.bio = val;
        if (key === 'CONTACT_LOCATION') this.data.profile.location = val;
      }
      return this.data;
    } catch (e) {
      return this.data;
    }
  }
};

if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
  window.PortfolioConfig = PortfolioConfig;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_CONFIG, PortfolioConfig };
}
