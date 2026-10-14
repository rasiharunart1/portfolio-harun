/**
 * ==============================================================================
 * KONFIGURASI PORTOFOLIO REKAYASA - HARUN AR RASYID
 * ==============================================================================
 * Pusat konfigurasi terpadu untuk portofolio editorial Harun Ar Rasyid.
 * Berisi identitas profil, matriks keahlian, katalog 25 studi kasus rekayasa,
 * dan dataset offline 43 repositori GitHub terverifikasi.
 * ==============================================================================
 */

const SITE_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. IDENTITAS & PROFIL PENGEMBANG
  // --------------------------------------------------------------------------
  profile: {
    name: "Harun Ar Rasyid",
    shortName: "Harun",
    role: "IoT, Computer Vision & Embedded Systems Engineer",
    tagline: "Menghubungkan Sensor Fisik, Edge AI & Cloud Data Pipeline",
    location: "Banyumas, Jawa Tengah, Indonesia",
    locationShort: "Banyumas, ID",
    statusBadge: "Terbuka untuk Kolaborasi Proyek & Karier",
    availability: "Tersedia untuk Kontrak Rekayasa & Riset",
    photo: "assets/images/profile/profil.webp",
    headlineMain: "Mewujudkan ide jadi",
    headlineAccent: "sistem nyata.",
    lead: "Insinyur sistem fisik dan perangkat lunak asal Banyumas, Jawa Tengah. Berfokus merancang arsitektur terintegrasi: dari perancangan firmware mikrokontroler (ESP32/STM32/RPi), inferensi Computer Vision berlatensi rendah (YOLOv8/OpenCV), hingga web dashboard monitoring waktu nyata.",
    aboutHeading: "Dari keping silikon hingga arsitektur cloud terukur.",
    aboutP1: "Saya memandang hardware dan software bukan sebagai dua entitas terpisah, melainkan satu kesatuan arsitektur yang saling menguatkan. Berawal dari skematik elektronika dan jalur sinyal analog, berlanjut ke firmware berdaya rendah, hingga mengalir menjadi analitik cloud yang intuitif bagi pengguna akhir.",
    aboutP2: "Spesialisasi saya mencakup perancangan node sensor otonom, transmisi telemetri nirkabel berdaya hemat (LoRa/MQTT/RF), penerapan model deep learning edge AI untuk visi komputer di lingkungan lapangan nyata, serta pembangunan antarmuka pemantauan full-stack berbasis Laravel dan Next.js.",
    aboutP3: "Telah membuktikan keandalan rekayasa di berbagai ranah: otomasi smart home mandiri lokal dan telemetri PLTS hybrid di TW Smarthome, pemantauan analitik lalu lintas CCTV dan okupansi gedung di Dinkominfo Kab. Banyumas, inovasi kotak paket COD surya berlisensi HKI (COBOX), hingga riset deteksi benih ikan dan akuisisi FFT audio di Telkom University Purwokerto.",
    metrics: [
      { count: "25+", label: "Studi Kasus Rekayasa" },
      { count: "40+", label: "Repositori GitHub Publik" },
      { count: "100%", label: "Hardware → Cloud Terpadu" }
    ],
    experience: [
      {
        company: "TW Smarthome",
        role: "IoT Programmer",
        period: "Agu 2022 — Sekarang",
        location: "Purwokerto, Banyumas",
        description: "Mengembangkan arsitektur smart home mandiri (local server-first) tanpa ketergantungan cloud pihak ketiga menggunakan MQTT broker lokal. Mengimplementasikan komunikasi nirkabel dua arah RF 433MHz berbiaya hemat serta modul telemetri monitoring real-time untuk PLTS hybrid bertenaga surya menggunakan HTTPClient."
      },
      {
        company: "Dinkominfo Kabupaten Banyumas",
        role: "Computer Vision & Web Developer (Magang)",
        period: "Jun 2025 — Agu 2025",
        location: "Purwokerto, Banyumas",
        description: "Membangun sistem pemantauan lalu lintas cerdas (Vehicle Counter) berbasis OpenCV & YOLO dari kamera CCTV persimpangan jalan kota, sistem penghitung kapasitas okupansi auditorium (Person Counter), serta konfigurasi dan kustomisasi platform Moodle LMS untuk pelatihan Aparatur Sipil Negara (ASN)."
      },
      {
        company: "Telkom University Purwokerto",
        role: "IoT Programmer & Periset Sistem",
        period: "Agu 2024 — Mar 2026",
        location: "Purwokerto, Banyumas",
        description: "Merancang sistem penghitung benih ikan otomatis berbasis Raspberry Pi 5 dan YOLO dengan GUI desktop Python. Mengembangkan perangkat telemetri ESP32 untuk monitoring audio FFT dan berkas WAV via Laravel/MQTT, sistem timbangan Solvia Machine Cocobase (Innovilage) dengan Next.js, serta otomasi dehumidifikasi pengering kopi."
      }
    ],
    education: [
      {
        institution: "Telkom University Purwokerto",
        degree: "S1 Teknik Informatika (Bachelor of Informatics Engineering)",
        period: "2022 — 2026",
        location: "Purwokerto, Banyumas",
        description: "Fokus keilmuan pada Sistem Tertanam (Embedded Systems), Kecerdasan Buatan (Artificial Intelligence / Computer Vision), dan Rekayasa Perangkat Lunak Terdistribusi."
      },
      {
        institution: "SMKN 2 Purwokerto",
        degree: "Teknik Elektronika Audio Video",
        period: "2019 — 2022",
        location: "Purwokerto, Banyumas",
        description: "Fondasi mendalam pada perancangan sirkuit elektronika analog/digital, pengolahan sinyal audio frekuensi, instrumentasi sensorik, dan penyolderan PCB presisi."
      }
    ]
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
    address: "Desa Kalicupak Lor, Kec. Kalibagor, Kab. Banyumas, Jawa Tengah 53191",
    githubUrl: "https://github.com/rasiharunart1",
    githubOwner: "rasiharunart1",
    linkedinUrl: "https://www.linkedin.com/in/harunart",
    instagramUrl: "https://instagram.com/rasiharunart",
    resumeUrl: "HARUN AR RASYID-resume (5).pdf"
  },

  // --------------------------------------------------------------------------
  // 3. MATRIKS KEAHLIAN TEKNIS
  // --------------------------------------------------------------------------
  skills: [
    {
      category: "Firmware & Mikrokontroler",
      icon: "⌘",
      items: [
        { name: "ESP32 / ESP32-C3 / CAM", level: "Expert" },
        { name: "FreeRTOS & Multi-Tasking", level: "Advanced" },
        { name: "Embedded C / C++", level: "Advanced" },
        { name: "STM32 & Bare-Metal", level: "Intermediate" },
        { name: "Arduino Uno / Nano", level: "Expert" },
        { name: "Raspberry Pi 5 / Linux Edge", level: "Advanced" }
      ]
    },
    {
      category: "Protokol Komunikasi & IoT",
      icon: "☊",
      items: [
        { name: "MQTT Broker (EMQX/HiveMQ/Mosquitto)", level: "Expert" },
        { name: "LoRa / LoRaWAN (Ebyte E220)", level: "Advanced" },
        { name: "RS485 & Modbus RTU", level: "Advanced" },
        { name: "RF 433 MHz Bidirectional", level: "Advanced" },
        { name: "HTTP / REST API & WebSockets", level: "Advanced" },
        { name: "I2C, SPI, UART, DMA Buffers", level: "Expert" }
      ]
    },
    {
      category: "Computer Vision & Edge AI",
      icon: "◉",
      items: [
        { name: "Python 3 & NumPy", level: "Expert" },
        { name: "YOLOv8 Object Detection", level: "Advanced" },
        { name: "OpenCV Computer Vision", level: "Advanced" },
        { name: "PyTorch & Deep Learning", level: "Intermediate" },
        { name: "Centroid & DeepSORT Tracking", level: "Advanced" },
        { name: "Desktop GUI (Tkinter/PyQt)", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Web Terintegrasi",
      icon: "▦",
      items: [
        { name: "PHP & Laravel Framework", level: "Advanced" },
        { name: "Next.js & React", level: "Advanced" },
        { name: "PostgreSQL & MySQL Database", level: "Advanced" },
        { name: "JavaScript / TypeScript", level: "Advanced" },
        { name: "Tailwind CSS & Semantic UI", level: "Advanced" },
        { name: "Moodle LMS Architecture", level: "Advanced" }
      ]
    },
    {
      category: "Perangkat Keras, Alat & Instrumentasi",
      icon: "⚡",
      items: [
        { name: "Desain PCB & Skematik (KiCAD/EasyEDA)", level: "Advanced" },
        { name: "PlatformIO & Git/GitHub", level: "Expert" },
        { name: "PZEM-004T & Modul Akuisisi Daya", level: "Expert" },
        { name: "Sensor Kalibrasi (pH, Turbiditas, IMU)", level: "Advanced" },
        { name: "Enclosure Proteksi IP65 & Panel Rak", level: "Advanced" },
        { name: "Analisis Frekuensi Spektrum FFT", level: "Advanced" }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 4. PROYEK UNGGULAN (FEATURED PROJECTS - 8 SISTEM)
  // --------------------------------------------------------------------------
  featuredIds: ["cobox", "irrigation", "fall", "cocobase", "fish", "vehicle", "socket", "tracker"],

  // --------------------------------------------------------------------------
  // 5. ARSIP LENGKAP 25 STUDI KASUS REKAYASA
  // --------------------------------------------------------------------------
  caseStudies: [
    {
      id: "cobox",
      name: "COBOX — Kotak Paket COD Mandiri Berenergi Surya",
      category: "IoT & Embedded",
      visual: "cobox",
      summary: "Kotak penerima paket COD otomatis bertenaga surya 50Wp dengan RFID, barcode scanner, dan penguncian mandiri berlisensi HKI.",
      description: "Inovasi PKM-KC 2024 yang resmi terdaftar sebagai Hak Kekayaan Intelektual (HKI 2024). Sistem mengintegrasikan mikrokontroler ESP32, Arduino Nano, RFID scanner, barcode scanner, dan solenoid lock dengan catu daya mandiri panel surya 50Wp untuk keamanan transaksi barang COD saat penerima tidak di rumah.",
      role: "Lead Hardware & Firmware Engineer",
      status: "Terdaftar HKI & Uji Lapangan",
      tech: ["ESP32", "Arduino Nano", "RFID Scanner", "Barcode Scanner", "Panel Surya 50Wp", "Paten HKI"],
      points: [
        "Otomasi mekanisme penguncian solenoid berbasis kode resi barcode dan kartu RFID",
        "Catu daya mandiri berbasis sel surya 50Wp dengan manajemen baterai ramah lingkungan",
        "Terdaftar resmi dalam pangkalan data Hak Kekayaan Intelektual (HKI) Kemenkumham RI 2024"
      ],
      source: "Resume / PKM-KC / HKI",
      link: "https://github.com/rasiharunart1",
      demo: "https://www.instagram.com/cobox.paketin/reel/C-9jVMoy5Lv/",
      alias: ["cobox", "pkm", "hki"]
    },
    {
      id: "home",
      name: "Smart Home Digital Twin 3D",
      category: "IoT & Embedded",
      visual: "home",
      summary: "Digital twin rumah pintar interaktif berbasis Three.js WebGL yang tersinkronisasi dua arah dengan mikrokontroler ESP32 via MQTT.",
      description: "Lapisan visualisasi 3D real-time untuk pemantauan rumah terhubung. Memetakan denah ruangan, status sensor lingkungan (suhu, cahaya, keberadaan), dan aktuator saklar ke dalam antarmuka WebGL yang responsif dan tersinkronisasi instan via broker MQTT.",
      role: "IoT & Creative Developer",
      status: "Prototipe Teruji",
      tech: ["Three.js", "WebGL", "JavaScript", "MQTT", "ESP32", "FreeRTOS"],
      points: [
        "Representasi grafis 3D denah ruangan dan status aktuator secara interaktif",
        "Sinkronisasi telemetri hardware dua arah dengan latensi sub-detik melalui MQTT",
        "Scene WebGL ringan dioptimalkan untuk rendering efisien di perangkat mobile"
      ],
      source: "Portofolio Rekayasa",
      link: "https://github.com/rasiharunart1/smarthome",
      demo: "",
      alias: ["home", "digitaltwin", "threejs"]
    },
    {
      id: "banana",
      name: "BananaSense — Klasifikasi Kematangan Pisang AI",
      category: "AI & Computer Vision",
      visual: "banana",
      summary: "Klasifikasi tingkat kematangan pisang otomatis berbasis citra ESP32-CAM, inferensi model YOLO, dan dashboard Laravel.",
      description: "Sistem inspeksi mutu agrikultur cerdas untuk memisahkan pisang mentah, matang, dan lewat matang. Kamera ESP32-CAM mengirimkan citra via MQTT/HTTP ke server backend Python untuk inferensi YOLO, dan hasilnya dicatat pada database PostgreSQL dengan antarmuka web monitoring Laravel.",
      role: "Computer Vision & Backend Developer",
      status: "Sistem Riset Aktif",
      tech: ["ESP32-CAM", "YOLOv8", "Python", "OpenCV", "Laravel", "PostgreSQL", "MQTT"],
      points: [
        "Akuisisi citra terprogram dari sensor optik ESP32-CAM berdaya hemat",
        "Pipeline inferensi visi komputer YOLO dengan akurasi pengenalan tinggi",
        "Integrasi dashboard Laravel untuk pelaporan batch panen dan riwayat kualitas"
      ],
      source: "Portofolio Rekayasa",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["banana", "bananasense", "yolo"]
    },
    {
      id: "lora",
      name: "LoRa PIR Security Network Multi-Node",
      category: "IoT & Embedded",
      visual: "lora",
      summary: "Jaringan sensor keamanan 5-node ESP32-C3 PIR nirkabel jarak jauh berbasis radio Ebyte E220 terhubung ke satu gateway pusat.",
      description: "Arsitektur pengawasan perimeter nirkabel tanpa ketergantungan sinyal WiFi atau seluler. Memanfaatkan transmisi modul radio LoRa Ebyte E220 pada frekuensi sub-GHz untuk menjangkau titik-titik sensor PIR bertenaga baterai yang tersebar luas dengan mekanisme pencegahan tabrakan paket (collision avoidance).",
      role: "Embedded Systems Engineer",
      status: "Uji Lapangan Terpasang",
      tech: ["ESP32-C3", "LoRa E220", "UART", "Sensor PIR", "C++", "Low Power"],
      points: [
        "Topologi star 5 node sensor gerak PIR mandiri dan 1 gateway koordinator",
        "Penanganan identitas node unik dan transmisi paket bebas tabrakan di frekuensi bersama",
        "Manajemen daya efisien dengan mode deep sleep untuk masa pakai baterai berbulan-bulan"
      ],
      source: "Portofolio / Proyek Lapangan",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["lora", "pir", "e220"]
    },
    {
      id: "energy",
      name: "Pemantauan Energi 3-Phase Real-Time",
      category: "IoT & Embedded",
      visual: "energy",
      summary: "Sistem telemetri kelistrikan industri 3 fasa menggunakan sensor PZEM, ESP32-C3, MQTT broker, dan dashboard Laravel.",
      description: "Memantau parameter kritis jaringan listrik tiga fasa (tegangan R-S-T, arus beban, faktor daya cos φ, frekuensi, dan akumulasi kWh) secara presisi tinggi. Data dikirimkan secara berkala via MQTT ke backend Laravel untuk deteksi beban timpang dan analisis efisiensi daya.",
      role: "IoT Hardware & Backend Developer",
      status: "Implementasi Terverifikasi",
      tech: ["ESP32-C3", "PZEM-004T", "MQTT", "Laravel", "PostgreSQL", "WebSocket"],
      points: [
        "Pengukuran real-time tegangan, arus, daya aktif, dan faktor daya per fasa",
        "Pipeline pengiriman telemetri berlatensi rendah ke database relasional PostgreSQL",
        "Visualisasi grafik beban dinamis dan sistem peringatan otomatis bila terjadi overload"
      ],
      source: "Portofolio Rekayasa",
      link: "https://github.com/rasiharunart1/mdpower",
      demo: "",
      alias: ["energy", "3phase", "pzem"]
    },
    {
      id: "irrigation",
      name: "Smart Irrigation System v4.1 — Dual-MCU",
      category: "IoT & Embedded",
      visual: "irrigation",
      summary: "Otomasi irigasi dual-kontroller (Arduino Uno + ESP32) dengan bot Telegram, penjadwalan RTC, captive portal, dan ThingSpeak.",
      description: "Sistem manajemen pengairan otomatis komprehensif untuk lahan pertanian. Memadukan keandalan I/O analog Arduino Uno dengan kemampuan jaringan ESP32. Menyediakan 3 mode operasi: kendali jarak jauh manual via Telegram Bot, otomasi jadwal jam presisi dengan RTC DS3231, dan penyiraman mandiri berbasis batas ambang sensor kelembaban/pH tanah.",
      role: "Lead Embedded Firmware Developer",
      status: "Firmware Production Ready",
      tech: ["ESP32", "Arduino Uno", "FreeRTOS", "UART Bridge", "DS3231 RTC", "Telegram Bot", "ThingSpeak", "C++"],
      points: [
        "Arsitektur dual-MCU dengan protokol komunikasi serial UART yang tahan noise",
        "Tiga mode kontrol adaptif: manual Telegram, jadwal harian RTC, dan sensor cerdas",
        "Captive portal Wi-Fi mandiri dengan penyimpanan konfigurasi credentials di NVS"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1/nhiot",
      demo: "",
      alias: ["irrigation", "telegram", "rtc"]
    },
    {
      id: "fall",
      name: "Fall Detector ESP32 — Deteksi Jatuh Real-Time Lansia",
      category: "IoT & Embedded",
      visual: "fall",
      summary: "Perangkat wearable deteksi jatuh 4-arah berbasis IMU MPU6050, sensor denyut nadi MAX30100, FreeRTOS, dan Firebase RTDB.",
      description: "Sistem keselamatan darurat untuk pemantauan lansia dan pekerja berisiko tinggi. Algoritma deteksi jatuh mengklasifikasikan akselerasi ke 4 arah dengan filter konfirmasi 1.5 detik guna meniadakan alarm palsu (false alarm). Didukung penjadwalan multi-tasking FreeRTOS dengan Core 0 memproses sensor dan Core 1 menangani sinkronisasi cloud.",
      role: "Embedded Firmware Developer",
      status: "Validasi Algoritma Selesai",
      tech: ["ESP32", "MPU6050 IMU", "MAX30100", "DS18B20", "FreeRTOS Mutex", "Firebase RTDB"],
      points: [
        "Klasifikasi jatuh 4-arah dengan filter konfirmasi timer 1500ms anti-false positive",
        "Arsitektur dual-core FreeRTOS dengan perlindungan I2C Mutex untuk isolasi sensor",
        "Filter sinyal EMA untuk akurasi denyut jantung/SpO2 serta telemetri Firebase instan"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1/nhiot",
      demo: "",
      alias: ["fall", "falldetector", "mpu6050"]
    },
    {
      id: "smartmeter",
      name: "SmartMeter PZEM-004T Portabel",
      category: "IoT & Embedded",
      visual: "smartmeter",
      summary: "Alat ukur daya listrik portabel dengan visualisasi LCD anti-flicker dan sinkronisasi cloud Firebase RTDB.",
      description: "Unit pengukur parameter kelistrikan yang ringkas dan mandiri. Menampilkan data tegangan, arus, daya, energi kWh, dan frekuensi secara langsung di layar LCD 20x4 I2C dengan teknik peremajaan dirty-flag untuk mencegah kedipan tampilan, serta menyinkronkan data berkala ke Firebase saat terhubung ke internet.",
      role: "Firmware & Hardware Engineer",
      status: "Unit Siap Pakai",
      tech: ["ESP32", "PZEM-004T", "UART", "LCD 20x4 I2C", "Firebase RTDB", "Captive Portal", "NVS Flash"],
      points: [
        "Pengukuran parameter listrik 6-in-1 berstandar industri dengan koneksi UART terisolasi",
        "Antarmuka web captive portal untuk konfigurasi kredensial jaringan tanpa komputer",
        "Manajemen tampilan LCD non-blocking berbasis state machine dirty-flag"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1/mdpower-iot",
      demo: "",
      alias: ["smartmeter", "pzem", "lcd"]
    },
    {
      id: "socket",
      name: "Smart Socket IoT — Dual Channel Power Cutoff",
      category: "IoT & Embedded",
      visual: "socket",
      summary: "Stop kontak pintar dua kanal independen dengan proteksi otomatis beban lebih, suhu ekstrem, dan kebocoran gas.",
      description: "Perangkat proteksi instalasi listrik rumah tangga cerdas. Setiap kanal stop kontak dilengkapi sensor PZEM independen untuk mengukur konsumsi energi, sensor gas/asap MQ-2, dan sensor suhu DS18B20. Jika terdeteksi lonjakan arus, panas berlebih, atau asap, relay pemutus seketika mengamankan aliran daya secara otonom.",
      role: "Lead Hardware & IoT Developer",
      status: "Produksi Generasi Ke-2",
      tech: ["ESP32", "PZEM-004T Dual", "Sensor MQ-2", "DS18B20", "Relay Proteksi", "Laravel", "HiveMQ MQTT"],
      points: [
        "Dua kanal soket mandiri dengan pengukuran daya dan kendali relay terpisah",
        "Mekanisme proteksi multi-ancaman: overcurrent, overpower, overheat, dan asap MQ-2",
        "Evolusi arsitektur backend generasi kedua menggunakan HiveMQ TLS dan worker Laravel"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1/smartsocketlaravel",
      demo: "",
      alias: ["socket", "smartsocket", "mq2"]
    },
    {
      id: "powerunit",
      name: "Power Monitoring Unit Lapangan",
      category: "IoT & Embedded",
      visual: "powerunit",
      summary: "Unit telemetri daya industri dalam boks berpelindung dengan konektor aviasi dan pengiriman data REST HTTP ke Laravel.",
      description: "Perangkat keras pemantau daya tugas berat yang dirancang untuk instalasi kabinet panel distribusi listrik. Memanfaatkan mikrokontroler ESP32 dan modul PZEM dengan konektor soket penerbangan GX16 anti-getaran, mengalirkan data konsumsi daya berkala ke server analitik Laravel.",
      role: "Hardware Packaging & Firmware Engineer",
      status: "Implementasi Lapangan",
      tech: ["ESP32", "PZEM-004T", "HTTP REST Client", "Laravel API", "Konektor Aviasi GX16", "Boks Industri"],
      points: [
        "Desain mekanikal tangguh dengan konektor aviasi GX16 untuk lingkungan getaran tinggi",
        "Transmisi telemetri hemat kuota menggunakan paket payload JSON terkompresi",
        "Pencatatan riwayat beban terukur untuk audit efisiensi konsumsi daya gedung"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1/mdpower-monitoring",
      demo: "",
      alias: ["powerunit", "gx16", "enclosure"]
    },
    {
      id: "tracker",
      name: "RF Antenna Auto Tracker v2.3",
      category: "IoT & Embedded",
      visual: "tracker",
      summary: "Pelacak sinyal radio otomatis 2-sumbu dengan pemindai spiral RSSI menggunakan RTL-SDR, servo presisi, dan GUI Python.",
      description: "Sistem pelacakan antena terarah azimuth-elevation otomatis untuk mengunci sinyal RF terkuat secara otonom. Mengombinasikan perangkat lunak radio terdefinisi (RTL-SDR) pada komputer host dengan driver servo PCA9685 yang dikontrol mikrokontroler. Dilengkapi GUI pemantau spektrum frekuensi real-time.",
      role: "Systems & Control Engineer",
      status: "Versi 2.3 Teruji",
      tech: ["ESP32", "Python", "RTL-SDR", "PCA9685 I2C", "Servo MG996R", "Tkinter GUI", "Matplotlib"],
      points: [
        "Algoritma pemindaian spiral terarah dengan konfirmasi kunci sinyal 3 pembacaan berturut-turut",
        "Visualisasi spektrum daya frekuensi radio (FFT) real-time menggunakan pustaka Python",
        "State machine robust dengan kendali manual darurat dan tampilan diagnostik OLED"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["tracker", "rtlsdr", "servo"]
    },
    {
      id: "keyguard",
      name: "KeyGuard — Smart Brankas v2.3",
      category: "IoT & Embedded",
      visual: "keyguard",
      summary: "Brankas cerdas terhubung dengan akses keypad PIN, reed switch, timbangan bobot HX711, alarm getar, dan sinkronisasi Firebase.",
      description: "Sistem brankas berkeamanan tinggi dengan verifikasi multi-sensor. Memverifikasi kode PIN 6-digit dengan perlindungan lockout otomatis setelah 3 kesalahan, sensor reed switch untuk posisi pintu, load cell HX711 untuk memantau keberadaan isi brankas, serta sensor getar SW-420 untuk mendeteksi upaya pembongkaran paksa.",
      role: "Embedded Security Engineer",
      status: "Versi 2.3 Operasional",
      tech: ["ESP32", "Matrix Keypad 4x4", "Load Cell HX711", "Reed Switch", "Sensor Getar", "Firebase RTDB", "NVS Flash"],
      points: [
        "Logika state machine pintu dan kunci solenoid 5 keadaan untuk mencegah deadlock",
        "Deteksi perubahan bobot barang simpanan secara langsung menggunakan load cell HX711",
        "Penyimpanan konfigurasi offline di NVS memori non-volatile dan log keamanan di Firebase"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["keyguard", "brankas", "hx711"]
    },
    {
      id: "sena",
      name: "SENA Smart Garden v2 — Fuzzy Logic Mamdani",
      category: "IoT & Embedded",
      visual: "sena",
      summary: "Sistem irigasi cerdas mandiri luar jaringan bertenaga logika fuzzy Mamdani dengan telemetri HTTPS ke Laravel.",
      description: "Pengatur penyiraman presisi untuk tanaman hias dan hidroponik bernilai tinggi. Menerapkan inferensi logika fuzzy Mamdani 9 aturan berdasarkan input kelembaban tanah dan tingkat kemasaman pH tanah untuk menentukan durasi buka katup air secara akurat tanpa membuat tanaman busuk akar.",
      role: "Algorithm & Embedded Developer",
      status: "Implementasi Lapangan",
      tech: ["ESP32", "Fuzzy Logic Mamdani", "Sensor pH Tanah", "Capacitive Moisture", "DHT22", "Laravel REST API"],
      points: [
        "Evaluasi 9 kaidah fuzzy Mamdani langsung di mikroprosesor tanpa butuh server eksternal",
        "Filter trimmed-mean pembacaan sensor pH tanah untuk meredam derau fluktuasi medan listrik",
        "Penyajian telemetri pada web dashboard Laravel via protokol aman HTTPS"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1/smartgarden",
      demo: "",
      alias: ["sena", "fuzzy", "garden"]
    },
    {
      id: "radiator",
      name: "Radiator Bus Monitor & Level Pendingin Mesin",
      category: "IoT & Embedded",
      visual: "radiator",
      summary: "Sistem pemantau suhu air radiator dan level tabung reservoir armada bus dengan sistem peringatan 3 tingkat dan web lokal.",
      description: "Perangkat proteksi dini mesin bus antar-kota terhadap risiko overheating fatal. Dilengkapi sensor temperatur industri DS18B20 berkepala stainless tahan tekanan dan sensor ketinggian cairan non-kontak XKC-Y25 pada tabung reservoir radiator, menyediakan antarmuka web lokal 192.168.4.1 untuk kru montir.",
      role: "Automotive IoT Developer",
      status: "Uji Coba Armada Transportasi",
      tech: ["ESP32", "Sensor Level XKC-Y25", "DS18B20 Stainless", "LCD 16x2 I2C", "Wi-Fi SoftAP", "AJAX Polling"],
      points: [
        "Logika peringatan bertingkat: Normal (Hijau), Waspada (Kuning), Bahaya Kritis (Merah + Buzzer)",
        "Dashboard web lokal tanpa internet di IP 192.168.4.1 memudahkan pengecekan saat servis armada",
        "Batas ambang alarm dapat dikalibrasi sesuai tipe mesin bus dan disimpan permanen di NVS"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["radiator", "bus", "coolant"]
    },
    {
      id: "water",
      name: "Water Quality Monitor & Kalibrasi Probe Sensor",
      category: "IoT & Embedded",
      visual: "water",
      summary: "Perancangan boks IP65 terintegrasi dan prosedur kalibrasi 2 titik untuk sensor pH, kekeruhan turbiditas, dan suhu air.",
      description: "Paket instrumentasi pemantauan kualitas perairan terbuka dan kolam budidaya ikan. Menekankan aspek keandalan jangka panjang melalui boks berstandar proteksi IP65 tahan cuaca, routing kabel sensor kedap air, serta panduan kalibrasi larutan penyangga buffer pH 4.0 dan 7.0 secara akurat.",
      role: "Hardware Packaging & Calibration Specialist",
      status: "Desain Perakitan Terverifikasi",
      tech: ["Sensor pH Analog", "Sensor Turbidity", "DS18B20 Waterproof", "Enclosure IP65", "Regulasi Daya DC-DC"],
      points: [
        "Prosedur kalibrasi probe pH dua titik terkompensasi suhu larutan secara otomatis",
        "Baseline referensi kekeruhan air terverifikasi dengan cairan kalibrasi terstandar",
        "Penataan letak komponen dalam boks IP65 dengan proteksi interferensi elektromagnetik"
      ],
      source: "Dokumentasi NH IoT",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["water", "turbidity", "ph"]
    },
    {
      id: "cocobase",
      name: "Cocobase — Solvia IoT Weight Logger (Innovilage)",
      category: "Web & Software",
      visual: "cocobase",
      summary: "Platform ekosistem komoditas gula kelapa berbasis Next.js terintegrasi kontroler IoT ESP32 untuk logging timbangan serabut kelapa.",
      description: "Solusi rekayasa digital pada program pemberdayaan masyarakat nasional Innovilage. Membangun perangkat keras akuisisi beban timbangan presisi berbasis load cell HX711 pada mesin pengolah sabut kelapa Solvia, terhubung secara real-time ke web platform interaktif berbasis Next.js untuk pendataan kapasitas produksi petani.",
      role: "Full-Stack IoT & Web Developer",
      status: "Implementasi Program Innovilage",
      tech: ["Next.js", "ESP32", "Load Cell HX711", "Node.js", "REST API", "Tailwind CSS"],
      points: [
        "Pengembangan antarmuka web modern ramah pengguna untuk petani dan administrator koperasi",
        "Integrasi perangkat keras timbangan digital dengan transmisi data nirkabel otomatis",
        "Pelacakan produktivitas harian dan analitik data komoditas serabut kelapa secara transparan"
      ],
      source: "Resume / Telkom University / Innovilage",
      link: "https://github.com/rasiharunart1/cocobase-main",
      demo: "",
      alias: ["cocobase", "solvia", "innovilage"]
    },
    {
      id: "fish",
      name: "AI Fish Counting — Penghitung Bibit Ikan (Raspberry Pi 5)",
      category: "AI & Computer Vision",
      visual: "fish",
      summary: "Deteksi dan penghitungan populasi bibit ikan secara otomatis dan cepat berbasis YOLO pada Raspberry Pi 5 dengan GUI desktop Python.",
      description: "Inovasi otomasi pembenihan ikan air tawar di Telkom University Purwokerto. Menggantikan proses penghitungan manual bibit ikan yang memakan waktu dan berisiko membuat ikan stres. Menggunakan kamera berkecepatan tinggi yang diproses model deteksi objek YOLO terakselerasi pada Raspberry Pi 5 dengan tampilan grafis desktop interaktif.",
      role: "Computer Vision & Embedded Programmer",
      status: "Implementasi Laboratorium & Lapangan",
      tech: ["Raspberry Pi 5", "YOLOv8", "OpenCV", "Python Desktop GUI", "Tkinter", "Edge AI"],
      points: [
        "Pipeline komputasi edge berlatensi rendah dioptimalkan pada arsitektur prosesor Raspberry Pi 5",
        "Model deteksi objek YOLO yang dilatih khusus mengenali siluet bibit ikan yang berenang lincah",
        "Aplikasi desktop GUI intuitif untuk pemantau live feed kamera dan pencatatan total kuantitas bibit"
      ],
      source: "Resume / Telkom University Purwokerto",
      link: "https://github.com/rasiharunart1/gurameh-counter",
      demo: "https://www.youtube.com/watch?v=_iWeQHDD3XY",
      alias: ["fish", "gurameh", "rpi5"]
    },
    {
      id: "vehicle",
      name: "Vehicle Counter CCTV Traffic Banyumas — Dinkominfo",
      category: "AI & Computer Vision",
      visual: "vehicle",
      summary: "Analisis volume lalu lintas perkotaan cerdas dari rekaman kamera CCTV Dinas Kominfo Banyumas berbasis OpenCV & YOLO.",
      description: "Dikembangkan selama program magang di Dinas Komunikasi dan Informatika Kabupaten Banyumas. Menganalisis arus lalu lintas persimpangan jalan utama dari aliran video CCTV kota secara real-time, mengidentifikasi jenis kendaraan (sepeda motor, mobil, bus, truk), dan menghitung akumulasi volume untuk rekayasa lalu lintas.",
      role: "Computer Vision Developer (Magang)",
      status: "Implementasi Dinas Pemkab Banyumas",
      tech: ["Python", "OpenCV", "YOLOv8", "RTSP Video Stream", "Smart City Analytics"],
      points: [
        "Deteksi multi-kategori kendaraan dari feed kamera CCTV publik dengan kondisi pencahayaan dinamis",
        "Pelacakan lintasan kendaraan berbasis centroid tracking untuk klasifikasi arah pergerakan jalan",
        "Menyediakan data telemetri volume kendaraan untuk perumusan kebijakan tata kelola transportasi"
      ],
      source: "Resume / Dinkominfo Kab. Banyumas",
      link: "https://github.com/rasiharunart1/smart_traffic_banyumas",
      demo: "",
      alias: ["vehicle", "traffic", "banyumas"]
    },
    {
      id: "auditorium",
      name: "Realtime Person Counter Auditorium — Dinkominfo",
      category: "AI & Computer Vision",
      visual: "auditorium",
      summary: "Sistem cerdas pemantau kapasitas dan jumlah orang di ruang rapat/auditorium Pemkab Banyumas berbasis rekaman CCTV.",
      description: "Memantau tingkat okupansi dan kepadatan ruang pertemuan serta auditorium pemerintah secara non-kontak. Memanfaatkan algoritma deteksi manusia berbasis deep learning untuk menghitung orang yang hadir tanpa membutuhkan sensor gerak fisik tambahan di setiap pintu masuk.",
      role: "Computer Vision Developer (Magang)",
      status: "Sistem Aktif Pemkab",
      tech: ["Python", "YOLO", "OpenCV", "Deep Learning", "CCTV Analytics"],
      points: [
        "Penghitungan jumlah orang yang berada di dalam area ruang rapat secara berkelanjutan",
        "Estimasi persentase kapasitas kursi terisi untuk kenyamanan dan protokol keselamatan gedung",
        "Integrasi pemrosesan langsung dari infrastruktur kamera pengawas CCTV yang sudah ada"
      ],
      source: "Resume / Dinkominfo Kab. Banyumas",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["auditorium", "personcounter", "occupancy"]
    },
    {
      id: "moodle",
      name: "Moodle LMS Pelatihan ASN Kabupaten Banyumas",
      category: "Web & Software",
      visual: "browser",
      summary: "Kustomisasi dan deployment platform Learning Management System (LMS) Moodle untuk pelatihan online aparatur sipil negara.",
      description: "Membangun dan mengkustomisasi lingkungan pembelajaran digital terpadu bagi pegawai pemerintah di lingkungan Pemerintah Kabupaten Banyumas. Menyesuaikan modul kurikulum, evaluasi kompetensi, pelaporan hasil pelatihan, dan tata letak antarmuka agar mudah diakses oleh seluruh ASN lintas dinas.",
      role: "Web & LMS Developer (Magang)",
      status: "Platform Produksi Aktif",
      tech: ["Moodle LMS", "PHP", "MySQL", "Linux Debian", "E-Learning", "Apache"],
      points: [
        "Penyusunan arsitektur LMS terstruktur untuk pelatihan online berkelanjutan ASN Banyumas",
        "Konfigurasi manajemen peran instruktur, bank soal ujian, dan sertifikat otomatis digital",
        "Optimasi performa database MySQL untuk menangani akses bersamaan ratusan peserta ujian"
      ],
      source: "Resume / Dinkominfo Kab. Banyumas",
      link: "https://github.com/rasiharunart1",
      demo: "",
      alias: ["moodle", "lms", "asn"]
    },
    {
      id: "fft",
      name: "Pemantau Audio FFT & Peringatan Anomali — Telkom University",
      category: "IoT & Embedded",
      visual: "fft",
      summary: "Perangkat akuisisi sinyal audio ESP32 dengan transformasi FFT, pengumpulan berkas WAV, dan dashboard Laravel.",
      description: "Riset sistem telemetri akustik di Telkom University Purwokerto. Mikrokontroler ESP32 melakukan sampling frekuensi audio microphone analog, menghitung spektrum FFT (Fast Fourier Transform), dan mengirimkan parameter numerik serta potongan berkas WAV ke backend Laravel via protokol HTTPClient dan MQTT untuk deteksi anomali bunyi.",
      role: "IoT & Web Developer",
      status: "Riset Teruji & Beroperasi",
      tech: ["ESP32", "Fast Fourier Transform (FFT)", "Laravel", "MQTT", "HTTPClient", "Audio Processing"],
      points: [
        "Ekstraksi parameter spektrum audio dan transformasi matematis FFT di mikrokontroler",
        "Transmisi ganda: data numerik instan via MQTT dan unggahan berkas rekaman WAV via HTTP",
        "Visualisasi spektrum frekuensi interaktif di web dashboard dengan indikator peringatan kebisingan"
      ],
      source: "Resume / Telkom University Purwokerto",
      link: "https://github.com/rasiharunart1/noisemonweb",
      demo: "https://www.instagram.com/p/CG4tYpXnVzW/",
      alias: ["fft", "audio", "noisemon"]
    },
    {
      id: "coffee",
      name: "Sistem Dehumidifikasi Ruang Pengering Kopi",
      category: "IoT & Embedded",
      visual: "coffee",
      summary: "Otomasi kontrol suhu dan kelembapan ruang pengering kopi berbasis ESP32 dengan web dashboard kendali jarak jauh.",
      description: "Membantu petani kopi meningkatkan konsistensi mutu biji hasil panen. Mikrokontroler ESP32 memantau sensor suhu dan kelembaban udara (RH) di dalam rumah kaca pengering, serta secara otonom mengaktifkan kipas exhaust dan dehumidifier untuk menjaga kelembaban optimal selama proses pengeringan.",
      role: "IoT Firmware & Web Developer",
      status: "Uji Lapangan Petani Kopi",
      tech: ["ESP32", "Sensor DHT22", "Relay Actuator", "Web Dashboard", "Remote Control", "Data Logging"],
      points: [
        "Pemantauan kondisi mikroklimat ruang penjemuran kopi secara berkelanjutan 24 jam",
        "Logika kendali otomatis aktuator dehumidifier saat kelembaban udara melebihi batas aman",
        "Pencatatan kurva riwayat pengeringan biji kopi untuk audit kualitas pascapanen"
      ],
      source: "Resume / Telkom University Purwokerto",
      link: "https://github.com/rasiharunart1",
      demo: "https://www.youtube.com/shorts/KLD5msSkhDU",
      alias: ["coffee", "kopi", "dehumidifier"]
    },
    {
      id: "solar",
      name: "Monitoring PLTS Hybrid Mandiri — TW Smarthome",
      category: "IoT & Embedded",
      visual: "solar",
      summary: "Pipeline pemantauan instalasi pembangkit listrik tenaga surya (PLTS) hybrid dengan telemetri ESP32 dan HTTPClient.",
      description: "Dikembangkan di TW Smarthome untuk memantau performa sistem PLTS hybrid mandiri. Mengakuisisi data produksi energi dari solar charge controller dan inverter, menghitung status pengisian baterai (State of Charge), dan mentransmisikan data ke sistem pemantau tanpa bergantung pada server pihak ketiga.",
      role: "IoT Programmer",
      status: "Produksi Berkelanjutan",
      tech: ["ESP32", "HTTPClient", "Panel Surya Hybrid", "Baterai Telemetri", "C++", "TW Smarthome"],
      points: [
        "Akuisisi data telemetri pembangkit listrik surya hybrid secara real-time dari modul hardware",
        "Pengiriman metrik tegangan panel, daya inverter, dan arus pengisian baterai via HTTPClient",
        "Mendukung efisiensi pengelolaan cadangan daya mandiri pada ekosistem smart home"
      ],
      source: "Resume / TW Smarthome",
      link: "https://github.com/rasiharunart1/TWIoT",
      demo: "",
      alias: ["solar", "plts", "hybrid"]
    },
    {
      id: "rf433",
      name: "RF 433 MHz Bidirectional Smart Home Link — TW Smarthome",
      category: "IoT & Embedded",
      visual: "rf433",
      summary: "Komunikasi nirkabel dua arah RF 433 MHz berbiaya terjangkau untuk otomasi smart home mandiri berbasis MQTT lokal.",
      description: "Inovasi konektivitas smart home yang beroperasi mandiri (local server-first) tanpa ketergantungan koneksi internet publik. Mengintegrasikan modul radio RF 433 MHz untuk komunikasi perangkat saklar dan sensor hemat daya dengan gateway broker MQTT lokal demi latensi super rendah dan privasi tinggi.",
      role: "IoT Programmer",
      status: "Produksi Berkelanjutan",
      tech: ["RF 433 MHz", "ESP32", "MQTT Lokal", "Local Server First", "Embedded C++"],
      points: [
        "Transmisi data dua arah andal antara aktuator dan controller menggunakan gelombang RF 433 MHz",
        "Operasional mandiri dalam jaringan lokal rumah tanpa risiko terputus akibat gangguan internet luar",
        "Alternatif perangkat keras berbiaya efisien yang tahan terhadap dinding tebal bangunan"
      ],
      source: "Resume / TW Smarthome",
      link: "https://github.com/rasiharunart1/smarthome",
      demo: "",
      alias: ["rf433", "rf", "localfirst"]
    },
    {
      id: "mbaurekso",
      name: "Mbaurekso Curug — AI Person Counter & Deteksi AOI",
      category: "AI & Computer Vision",
      visual: "mbaurekso",
      summary: "Aplikasi Python deteksi & penghitung pengunjung wisata air terjun berbasis YOLO & OpenCV dengan zona batas AOI.",
      description: "Aplikasi pemantauan kerumunan dan okupansi pengunjung di destinasi wisata alam Curug Mbaurekso. Menggunakan deteksi manusia YOLO dan zona pengawasan khusus (Area of Interest / AOI) untuk mendeteksi potensi kepadatan berbahaya di dekat aliran air deras secara otomatis dan menyajikan alarm peringatan visual.",
      role: "Computer Vision Developer",
      status: "Repositori Publik & Operasional",
      tech: ["Python", "YOLO", "OpenCV", "Tkinter GUI", "MySQL Database", "CCTV Stream"],
      points: [
        "Penghitungan okupansi real-time di dalam poligon zona batas khusus (Area of Interest / AOI)",
        "Sistem peringatan otomatis batas kerumunan dan pencatatan log riwayat ke database MySQL",
        "Mendukung input video dari kamera USB langsung, tangkapan layar, maupun aliran RTSP jaringan"
      ],
      source: "Public GitHub Repository",
      link: "https://github.com/rasiharunart1/Mbaurekso_curug",
      demo: "",
      alias: ["mbaurekso", "curug", "aoi"]
    }
  ],

  // --------------------------------------------------------------------------
  // 6. REPOSITORI GITHUB TERVERIFIKASI (DATASET OFFLINE FALLBACK - 43 REPOS)
  // --------------------------------------------------------------------------
  fallbackRepositories: [
  {
    "name": "alchalimiSIM",
    "description": "Modul aplikasi web manajemen administrasi SIM Alchalimi.",
    "html_url": "https://github.com/rasiharunart1/alchalimiSIM",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-03-02T18:49:45Z"
  },
  {
    "name": "ams",
    "description": "Repositori publik dan dokumentasi teknis oleh @rasiharunart1.",
    "html_url": "https://github.com/rasiharunart1/ams",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-07-29T14:18:00Z"
  },
  {
    "name": "be-cocobase-main",
    "description": "Backend API RESTful untuk platform monitoring timbangan IoT Solvia Cocobase.",
    "html_url": "https://github.com/rasiharunart1/be-cocobase-main",
    "language": "JavaScript",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-04-02T03:29:56Z"
  },
  {
    "name": "BralinkIoT",
    "description": "Firmware C++ mikrokontroler untuk integrasi modul sensor IoT Bralink.",
    "html_url": "https://github.com/rasiharunart1/BralinkIoT",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-08-21T08:49:37Z"
  },
  {
    "name": "cerdas-cermat",
    "description": "Aplikasi kuis interaktif real-time berbasis JavaScript.",
    "html_url": "https://github.com/rasiharunart1/cerdas-cermat",
    "language": "JavaScript",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-08-13T11:09:17Z"
  },
  {
    "name": "cocobase-main",
    "description": "Frontend web platform ekosistem gula kelapa Solvia Cocobase (Program Innovilage).",
    "html_url": "https://github.com/rasiharunart1/cocobase-main",
    "language": "TypeScript",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-01-21T06:49:53Z"
  },
  {
    "name": "cocobase-ui",
    "description": "Komponen antarmuka pengguna Next.js untuk dashboard penimbangan Cocobase.",
    "html_url": "https://github.com/rasiharunart1/cocobase-ui",
    "language": "TypeScript",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-04-02T03:40:45Z"
  },
  {
    "name": "finance_management",
    "description": "Aplikasi web pengelolaan pencatatan arus kas & keuangan berbasis Blade.",
    "html_url": "https://github.com/rasiharunart1/finance_management",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-08-04T15:09:34Z"
  },
  {
    "name": "github-codex",
    "description": "Eksperimen integrasi alat bantu pengembangan kode otomatis GitHub Codex.",
    "html_url": "https://github.com/rasiharunart1/github-codex",
    "language": "TypeScript",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-03-09T12:12:35Z"
  },
  {
    "name": "gurameh-counter",
    "description": "Penghitung populasi bibit ikan gurameh otomatis berbasis Raspberry Pi 5 & YOLO.",
    "html_url": "https://github.com/rasiharunart1/gurameh-counter",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-11-26T13:00:27Z"
  },
  {
    "name": "harunarrasyid",
    "description": "Repositori utama workspace portofolio dan manajemen proyek engineering.",
    "html_url": "https://github.com/rasiharunart1/harunarrasyid",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-10-07T14:26:16Z"
  },
  {
    "name": "laravel_Mqtt",
    "description": "Integrasi broker MQTT real-time ke dalam arsitektur backend framework Laravel.",
    "html_url": "https://github.com/rasiharunart1/laravel_Mqtt",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-10-17T15:08:45Z"
  },
  {
    "name": "Mbaurekso_curug",
    "description": "Sistem deteksi & penghitung orang area wisata air terjun berbasis YOLO & OpenCV dengan zona AOI.",
    "html_url": "https://github.com/rasiharunart1/Mbaurekso_curug",
    "language": "Python",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-11-03T11:52:28Z"
  },
  {
    "name": "mdpower",
    "description": "Sistem telemetri pemantauan daya listrik dan analisis beban terhubung.",
    "html_url": "https://github.com/rasiharunart1/mdpower",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-08-07T13:20:42Z"
  },
  {
    "name": "mdpower-iot",
    "description": "Firmware ESP32 modul pengukur arus & tegangan PZEM-004T.",
    "html_url": "https://github.com/rasiharunart1/mdpower-iot",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-08-14T01:55:21Z"
  },
  {
    "name": "mdpower-monitoring",
    "description": "Dashboard visualisasi konsumsi energi listrik secara real-time.",
    "html_url": "https://github.com/rasiharunart1/mdpower-monitoring",
    "language": "HTML",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-09-09T08:54:02Z"
  },
  {
    "name": "mdpower-skripsi",
    "description": "Implementasi sistem pemantauan daya listrik untuk penelitian tugas akhir.",
    "html_url": "https://github.com/rasiharunart1/mdpower-skripsi",
    "language": "HTML",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-03-05T11:32:19Z"
  },
  {
    "name": "model",
    "description": "Repositori publik dan dokumentasi teknis oleh @rasiharunart1.",
    "html_url": "https://github.com/rasiharunart1/model",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-12-28T17:03:29Z"
  },
  {
    "name": "modeltflite",
    "description": "Repositori publik dan dokumentasi teknis oleh @rasiharunart1.",
    "html_url": "https://github.com/rasiharunart1/modeltflite",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-12-28T17:04:25Z"
  },
  {
    "name": "nhiot",
    "description": "Dokumentasi dan repositori firmware sistem embedded & IoT industri NH IoT.",
    "html_url": "https://github.com/rasiharunart1/nhiot",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-05-13T13:18:41Z"
  },
  {
    "name": "NHPHONE",
    "description": "Web interface simulasi kontrol perangkat telemetri seluler NH.",
    "html_url": "https://github.com/rasiharunart1/NHPHONE",
    "language": "HTML",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-03-28T01:57:59Z"
  },
  {
    "name": "noisemomtelU",
    "description": "Repositori layanan web & analitik audio noise Telkom University.",
    "html_url": "https://github.com/rasiharunart1/noisemomtelU",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-02-04T09:14:41Z"
  },
  {
    "name": "noisemon",
    "description": "Sistem pemantauan kebisingan & analisis FFT audio berbasis ESP32 dan web dashboard.",
    "html_url": "https://github.com/rasiharunart1/noisemon",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-12-28T04:46:23Z"
  },
  {
    "name": "noisemoniot",
    "description": "Firmware ESP32 akuisisi data audio FFT dan streaming telemetri via MQTT.",
    "html_url": "https://github.com/rasiharunart1/noisemoniot",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-03-22T23:51:49Z"
  },
  {
    "name": "noisemontelkom",
    "description": "Arsitektur monitoring audio FFT Telkom University Purwokerto.",
    "html_url": "https://github.com/rasiharunart1/noisemontelkom",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-01-27T11:36:16Z"
  },
  {
    "name": "noisemonweb",
    "description": "Web dashboard Laravel untuk visualisasi spektrum audio FFT & sistem peringatan anomali.",
    "html_url": "https://github.com/rasiharunart1/noisemonweb",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-01-27T11:45:29Z"
  },
  {
    "name": "portfolio-harun",
    "description": "Repositori kode sumber portofolio personal rekayasa Harun Ar Rasyid.",
    "html_url": "https://github.com/rasiharunart1/portfolio-harun",
    "language": "JavaScript",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-10-07T14:25:25Z"
  },
  {
    "name": "pptskripsiharun",
    "description": "Bahan tayang presentasi sidang skripsi rekayasa sistem fisik.",
    "html_url": "https://github.com/rasiharunart1/pptskripsiharun",
    "language": "HTML",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-06-30T16:17:30Z"
  },
  {
    "name": "rasiharunar",
    "description": "Halaman web profil publik dan tautan sosial media personal.",
    "html_url": "https://github.com/rasiharunart1/rasiharunar",
    "language": "HTML",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-04-01T06:11:36Z"
  },
  {
    "name": "scripting",
    "description": "Kumpulan script otomasi pengujian perangkat IoT dan pipeline data.",
    "html_url": "https://github.com/rasiharunart1/scripting",
    "language": "HTML",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-06-28T17:47:54Z"
  },
  {
    "name": "SIM-ALCHALIMI",
    "description": "Sistem Informasi Manajemen pesantren berbasis Laravel & MySQL.",
    "html_url": "https://github.com/rasiharunart1/SIM-ALCHALIMI",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-01-13T08:44:51Z"
  },
  {
    "name": "Sistem-Pemberi-Rekomendasi",
    "description": "Notebook implementasi algoritma sistem rekomendasi berbasis machine learning.",
    "html_url": "https://github.com/rasiharunart1/Sistem-Pemberi-Rekomendasi",
    "language": "Jupyter Notebook",
    "stargazers_count": 1,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-11-05T19:09:18Z"
  },
  {
    "name": "smart-massage",
    "description": "Prototipe sistem kendali kursi pijat otomatis dengan mikrokontroler.",
    "html_url": "https://github.com/rasiharunart1/smart-massage",
    "language": "HTML",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-06-18T12:39:01Z"
  },
  {
    "name": "smartgarden",
    "description": "Web dashboard monitoring & kontrol kelembaban tanah SENA Smart Garden.",
    "html_url": "https://github.com/rasiharunart1/smartgarden",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-06-02T14:06:52Z"
  },
  {
    "name": "smarthome",
    "description": "Arsitektur kontrol smart home lokal tanpa cloud pihak ketiga berbasis MQTT & ESP32.",
    "html_url": "https://github.com/rasiharunart1/smarthome",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-12-26T23:47:43Z"
  },
  {
    "name": "smartsocketlaravel",
    "description": "Dashboard kendali & logging daya Smart Socket IoT berbasis Laravel & MQTT.",
    "html_url": "https://github.com/rasiharunart1/smartsocketlaravel",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-10-08T12:36:14Z"
  },
  {
    "name": "smarttraffic",
    "description": "Repositori publik dan dokumentasi teknis oleh @rasiharunart1.",
    "html_url": "https://github.com/rasiharunart1/smarttraffic",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-11-23T09:25:19Z"
  },
  {
    "name": "SmartTraficBanyumas_Vehicle_counter",
    "description": "Penghitung kendaraan otomatis real-time dari video CCTV lalu lintas perkotaan.",
    "html_url": "https://github.com/rasiharunart1/SmartTraficBanyumas_Vehicle_counter",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-08-12T06:35:02Z"
  },
  {
    "name": "smart_traffic_banyumas",
    "description": "Analisis volume lalu lintas kendaraan CCTV kota Banyumas berbasis OpenCV & YOLO.",
    "html_url": "https://github.com/rasiharunart1/smart_traffic_banyumas",
    "language": "Python",
    "stargazers_count": 1,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-08-12T08:24:13Z"
  },
  {
    "name": "TWIoT",
    "description": "Firmware embedded C++ otomasi nirkabel dan telemetri perangkat TW Smarthome.",
    "html_url": "https://github.com/rasiharunart1/TWIoT",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-11-20T13:28:39Z"
  },
  {
    "name": "vehicleCounter",
    "description": "Pipeline Computer Vision deteksi & penghitung kendaraan real-time berbasis Python.",
    "html_url": "https://github.com/rasiharunart1/vehicleCounter",
    "language": "Python",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-11-23T11:24:39Z"
  },
  {
    "name": "wms",
    "description": "Repositori publik dan dokumentasi teknis oleh @rasiharunart1.",
    "html_url": "https://github.com/rasiharunart1/wms",
    "language": "Blade",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2026-08-01T01:48:22Z"
  },
  {
    "name": "yell",
    "description": "Eksperimen script utilitas pengembangan sistem nirkabel.",
    "html_url": "https://github.com/rasiharunart1/yell",
    "language": "C++",
    "stargazers_count": 0,
    "fork": false,
    "topics": [],
    "pushed_at": "2025-08-07T06:59:24Z"
  }
]
};

// Ekspor untuk browser dan module
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_CONFIG };
}
