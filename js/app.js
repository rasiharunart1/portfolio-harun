// Harun Ar Rasyid - Portfolio Engine
// Cyber-Industrial UI & 3D Mathematical Projection System

(function () {
  'use strict';

  // --- Complete Engineering Project Dataset (16 Systems) ---
  const DEFAULT_PROJECTS = [
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
  ];

  // Resolve projects list from SITE_CONFIG if defined, otherwise fallback to DEFAULT_PROJECTS
  function getProjects() {
    if (typeof window !== 'undefined' && window.SITE_CONFIG && Array.isArray(window.SITE_CONFIG.projects) && window.SITE_CONFIG.projects.length > 0) {
      return window.SITE_CONFIG.projects;
    }
    return DEFAULT_PROJECTS;
  }

  // --- Dynamic Grid & Archive Populator ---
  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const archive = document.getElementById('archiveTable');
    if (!grid || !archive) return;

    const list = getProjects();

    // Render featured cards (first 6)
    const featured = list.slice(0, 6);
    grid.innerHTML = featured.map(p => `
      <article class="project" data-id="${p.id}" data-category="${p.category}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Lihat detail proyek ${p.title}">
        <div class="project-top">
          <span class="project-code">${p.code} // ${p.year}</span>
          <span class="project-cat">${p.catLabel}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-arrow" aria-hidden="true">&rarr;</div>
      </article>
    `).join('');

    // Render archive list (all projects)
    archive.innerHTML = list.map((p, idx) => `
      <div class="archive-row" data-id="${p.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Buka proyek ${p.title}">
        <span class="ix">${String(idx + 1).padStart(2, '0')}</span>
        <span class="title-col">${p.title}</span>
        <span class="kind">${p.catLabel}</span>
        <span class="stack">${p.tags.slice(0, 3).join(' / ')}</span>
      </div>
    `).join('');

    // Attach click and enter key handlers
    const attachHandlers = (elements) => {
      elements.forEach(el => {
        const id = el.getAttribute('data-id');
        el.addEventListener('click', () => openModal(id));
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(id);
          }
        });
      });
    };

    attachHandlers(grid.querySelectorAll('.project'));
    attachHandlers(archive.querySelectorAll('.archive-row'));
  }

  // --- Category Filter System ---
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filters .filter');
    const projectCards = document.querySelectorAll('.projects .project');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // --- Interactive Modal Dialog ---
  let lastActiveElement = null;

  function openModal(projectId) {
    const project = getProjects().find(p => p.id === projectId);
    if (!project) return;

    lastActiveElement = document.activeElement;
    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const sub = document.getElementById('modalSub');
    const desc = document.getElementById('modalDesc');
    const tags = document.getElementById('modalTags');
    const meta = document.getElementById('modalMeta');
    const actions = document.getElementById('modalActions');

    title.textContent = project.title;
    sub.textContent = `${project.code} // ${project.catLabel}`;
    desc.textContent = project.details;

    tags.innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

    meta.innerHTML = `
      <div>
        <small>Kode Sistem</small>
        <strong>${project.code}</strong>
      </div>
      <div>
        <small>Peran &amp; Tanggung Jawab</small>
        <strong>${project.role}</strong>
      </div>
      <div>
        <small>Status Implementasi</small>
        <strong>${project.status}</strong>
      </div>
      <div>
        <small>Tahun Pembuatan</small>
        <strong>${project.year}</strong>
      </div>
      <div>
        <small>Kategori Bidang</small>
        <strong>${project.catLabel}</strong>
      </div>
    `;

    // Action buttons
    let actionButtons = '';
    if (project.github) {
      actionButtons += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn primary"><span>Lihat Repositori GitHub</span><span class="arr">&nearr;</span></a>`;
    }
    if (project.video) {
      actionButtons += `<a href="${project.video}" target="_blank" rel="noopener noreferrer" class="btn alt"><span>Tonton Video Demo</span><span class="arr">&nearr;</span></a>`;
    }
    if (project.demo) {
      actionButtons += `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn alt"><span>Buka Sistem / Demo</span><span class="arr">&nearr;</span></a>`;
    }
    if (!actionButtons) {
      actionButtons = `<span style="font-size: 12px; color: #888; font-family: var(--font-mono);">Arsitektur Khusus / Hak Cipta Tertutup</span>`;
    }
    actions.innerHTML = actionButtons;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    if (!modal || !modal.classList.contains('open')) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  function initModalEvents() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modalClose');
    if (!modal) return;

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // --- Avatar Switcher ---
  function initAvatarSwitch() {
    const btnCyber = document.getElementById('btnCyber');
    const btnReal = document.getElementById('btnReal');
    const img = document.getElementById('dossierImg');
    if (!btnCyber || !btnReal || !img) return;

    const getCyberAvatar = () => (window.SITE_CONFIG && window.SITE_CONFIG.profile && window.SITE_CONFIG.profile.avatars && window.SITE_CONFIG.profile.avatars.cyber) || 'assets/images/profile/character.webp';
    const getRealAvatar = () => (window.SITE_CONFIG && window.SITE_CONFIG.profile && window.SITE_CONFIG.profile.avatars && window.SITE_CONFIG.profile.avatars.real) || 'assets/images/profile/profil.webp';
    const getName = () => (window.SITE_CONFIG && window.SITE_CONFIG.profile && window.SITE_CONFIG.profile.name) || 'Harun Ar Rasyid';

    btnCyber.addEventListener('click', () => {
      btnCyber.classList.add('active');
      btnCyber.setAttribute('aria-pressed', 'true');
      btnReal.classList.remove('active');
      btnReal.setAttribute('aria-pressed', 'false');
      img.src = getCyberAvatar();
      img.alt = `${getName()} cyber illustration`;
    });

    btnReal.addEventListener('click', () => {
      btnReal.classList.add('active');
      btnReal.setAttribute('aria-pressed', 'true');
      btnCyber.classList.remove('active');
      btnCyber.setAttribute('aria-pressed', 'false');
      img.src = getRealAvatar();
      img.alt = `${getName()} photograph`;
    });
  }

  // --- 3D Mathematical Canvas Wireframe Engine ---
  function initCanvas3D() {
    const canvas = document.getElementById('scene');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animId = null;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth || canvas.parentElement.clientWidth;
      height = canvas.clientHeight || canvas.parentElement.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Golden ratio for Icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ];

    // Normalize vertices to unit sphere
    const icoVertices = rawVertices.map(v => {
      const len = Math.hypot(v[0], v[1], v[2]);
      return [v[0] / len, v[1] / len, v[2] / len];
    });

    // 30 Edges of Icosahedron
    const edges = [];
    for (let i = 0; i < icoVertices.length; i++) {
      for (let j = i + 1; j < icoVertices.length; j++) {
        const dx = icoVertices[i][0] - icoVertices[j][0];
        const dy = icoVertices[i][1] - icoVertices[j][1];
        const dz = icoVertices[i][2] - icoVertices[j][2];
        const dist = Math.hypot(dx, dy, dz);
        if (Math.abs(dist - 1.051) < 0.15) {
          edges.push([i, j]);
        }
      }
    }

    // Rings
    const ringSegments = 40;
    function makeRing(radius) {
      const pts = [];
      for (let i = 0; i < ringSegments; i++) {
        const theta = (i / ringSegments) * Math.PI * 2;
        pts.push([Math.cos(theta) * radius, 0, Math.sin(theta) * radius]);
      }
      return pts;
    }

    const ring1 = makeRing(1.4);
    const ring2 = makeRing(1.85);

    let angleX = 0.2;
    let angleY = 0;
    let targetAngleX = 0.2;
    let targetAngleY = 0;

    window.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / window.innerWidth) - 0.5;
      const ny = (e.clientY / window.innerHeight) - 0.5;
      targetAngleY = nx * 0.8;
      targetAngleX = ny * 0.5;
    }, { passive: true });

    function rotateX(p, a) {
      const cos = Math.cos(a), sin = Math.sin(a);
      return [p[0], p[1] * cos - p[2] * sin, p[1] * sin + p[2] * cos];
    }

    function rotateY(p, a) {
      const cos = Math.cos(a), sin = Math.sin(a);
      return [p[0] * cos + p[2] * sin, p[1], -p[0] * sin + p[2] * cos];
    }

    function rotateZ(p, a) {
      const cos = Math.cos(a), sin = Math.sin(a);
      return [p[0] * cos - p[1] * sin, p[0] * sin + p[1] * cos, p[2]];
    }

    function project(p, size, cx, cy) {
      const fov = 3.6;
      const z = p[2] + fov;
      const scale = size / z;
      return [p[0] * scale + cx, p[1] * scale + cy, p[2]];
    }

    let t = 0;

    function render() {
      t += 0.008;
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      const rotY = t * 0.7 + angleY;
      const rotX = Math.sin(t * 0.5) * 0.3 + angleX;

      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.62;
      const cy = height * 0.52;
      const baseSize = Math.min(width, height) * 0.72;

      // Project vertices
      const proj = icoVertices.map(v => {
        let p = rotateY(v, rotY);
        p = rotateX(p, rotX);
        return project(p, baseSize, cx, cy);
      });

      // Draw Icosahedron edges
      ctx.lineWidth = 1;
      for (const [i, j] of edges) {
        const p1 = proj[i];
        const p2 = proj[j];
        const avgZ = (p1[2] + p2[2]) / 2;
        const alpha = Math.max(0.12, Math.min(0.68, (avgZ + 1) * 0.35));

        ctx.strokeStyle = `rgba(240, 107, 78, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      }

      // Draw vertices
      for (const p of proj) {
        const alpha = Math.max(0.2, Math.min(0.9, (p[2] + 1) * 0.45));
        ctx.fillStyle = `rgba(243, 240, 232, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Ring 1 (tilted)
      const r1Proj = ring1.map(pt => {
        let p = rotateZ(pt, 0.4);
        p = rotateY(p, rotY * 0.5);
        p = rotateX(p, rotX * 0.6);
        return project(p, baseSize, cx, cy);
      });

      ctx.strokeStyle = 'rgba(184, 196, 255, 0.22)';
      ctx.beginPath();
      for (let i = 0; i < r1Proj.length; i++) {
        const pt = r1Proj[i];
        if (i === 0) ctx.moveTo(pt[0], pt[1]);
        else ctx.lineTo(pt[0], pt[1]);
      }
      ctx.closePath();
      ctx.stroke();

      // Draw Ring 2 (counter tilted)
      const r2Proj = ring2.map(pt => {
        let p = rotateZ(pt, -0.6);
        p = rotateY(p, -rotY * 0.35);
        p = rotateX(p, rotX * 0.8);
        return project(p, baseSize, cx, cy);
      });

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.beginPath();
      for (let i = 0; i < r2Proj.length; i++) {
        const pt = r2Proj[i];
        if (i === 0) ctx.moveTo(pt[0], pt[1]);
        else ctx.lineTo(pt[0], pt[1]);
      }
      ctx.closePath();
      ctx.stroke();

      animId = requestAnimationFrame(render);
    }

    render();
  }

  // --- Scrollspy & Progress Bar ---
  function initScrollspy() {
    const progress = document.getElementById('progress');
    const topbar = document.getElementById('topbar');
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const dockLinks = document.querySelectorAll('.mobile-dock a');

    function updateScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;

      if (progress) {
        progress.style.transform = `scaleX(${scrollPercent})`;
      }

      if (topbar) {
        if (scrollY > 40) {
          topbar.classList.add('scrolled');
        } else {
          topbar.classList.remove('scrolled');
        }
      }

      // Determine active section
      let currentSection = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSection = sec.getAttribute('id');
        }
      });

      if (!currentSection && scrollY < 200) {
        currentSection = 'hero';
      }

      const syncActive = (links) => {
        links.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSection}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      };

      syncActive(navLinks);
      syncActive(dockLinks);
    }

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
  }

  // --- 3D Card Tilt Interaction ---
  function initCardTilt() {
    const dossier = document.getElementById('dossier');
    const card = document.getElementById('dossierCard');
    if (!dossier || !card || window.innerWidth < 768) return;

    dossier.addEventListener('mousemove', (e) => {
      const rect = dossier.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -16;
      const ry = ((x / rect.width) - 0.5) * 16;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
    });

    dossier.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(-6deg) rotateX(2deg)';
    });
  }

  // --- Centralized Dynamic Content Config Binding ---
  function applyConfig(cfg) {
    if (!cfg) return;
    const profile = cfg.profile || {};
    const contact = cfg.contact || {};
    const links = cfg.links || {};

    // 1. Profile & Identity
    if (profile.name) {
      const brandName = document.getElementById('brandName');
      if (brandName) brandName.textContent = profile.name;
      const dossierName = document.getElementById('dossierName');
      if (dossierName) dossierName.textContent = profile.name;
      const footerAuthor = document.getElementById('footerAuthor');
      if (footerAuthor) footerAuthor.textContent = profile.name;
    }
    if (profile.shortName) {
      const brandMark = document.getElementById('brandMark');
      if (brandMark) brandMark.textContent = profile.shortName;
    }
    if (profile.statusBadge) {
      const topbarStatus = document.getElementById('topbarStatus');
      if (topbarStatus) topbarStatus.textContent = profile.statusBadge;
    }
    if (profile.role) {
      const dossierRole = document.getElementById('dossierRole');
      if (dossierRole) dossierRole.textContent = profile.role;
    }
    if (profile.idCode) {
      const dossierId = document.getElementById('dossierId');
      if (dossierId) dossierId.textContent = profile.idCode;
    }
    if (profile.fieldDossierCode) {
      const dossierTag = document.getElementById('dossierTag');
      if (dossierTag) dossierTag.textContent = profile.fieldDossierCode;
    }
    if (profile.headlineMain && profile.headlineOutline) {
      const heroHeadline = document.getElementById('heroHeadline');
      if (heroHeadline) {
        heroHeadline.innerHTML = `${profile.headlineMain}<br><span class="outline">${profile.headlineOutline}</span>`;
      }
    }
    if (profile.bio) {
      const heroLede = document.getElementById('heroLede');
      if (heroLede) heroLede.textContent = profile.bio;
    }

    // 2. Contact Information
    if (contact.email) {
      const btnEmail = document.getElementById('btnEmail');
      if (btnEmail) btnEmail.href = `mailto:${contact.email}`;
      const btnEmailText = document.getElementById('btnEmailText');
      if (btnEmailText) btnEmailText.textContent = contact.email;
    }
    if (contact.whatsappUrl || contact.whatsappNumber) {
      const btnWhatsapp = document.getElementById('btnWhatsapp');
      if (btnWhatsapp) {
        btnWhatsapp.href = contact.whatsappUrl || `https://wa.me/${contact.whatsappNumber}`;
      }
    }
    if (contact.headline) {
      const contactHeading = document.getElementById('contactHeading');
      if (contactHeading) contactHeading.textContent = contact.headline;
    }
    if (contact.description) {
      const contactDesc = document.getElementById('contactDesc');
      if (contactDesc) contactDesc.textContent = contact.description;
    }
    if (profile.location) {
      const contactBase = document.getElementById('contactBase');
      if (contactBase) contactBase.innerHTML = `Domisili: <b>${profile.location}</b>`;
    }
    if (profile.availability) {
      const contactStatus = document.getElementById('contactStatus');
      if (contactStatus) contactStatus.innerHTML = `Status: <b>${profile.availability}</b>`;
    }

    // 3. Social & External Links
    if (links.github) {
      const linkGithub = document.getElementById('linkGithub');
      if (linkGithub) linkGithub.href = links.github;
      const heroGithub = document.getElementById('heroGithub');
      if (heroGithub) heroGithub.href = links.github;
    }
    if (links.linkedin) {
      const linkLinkedin = document.getElementById('linkLinkedin');
      if (linkLinkedin) linkLinkedin.href = links.linkedin;
    }
    if (links.instagram) {
      const linkInstagram = document.getElementById('linkInstagram');
      if (linkInstagram) linkInstagram.href = links.instagram;
    }
    if (links.resume) {
      const linkResume = document.getElementById('linkResume');
      if (linkResume) linkResume.href = links.resume;
      const heroResume = document.getElementById('heroResume');
      if (heroResume) heroResume.href = links.resume;
    }
  }

  // --- Copy Email Button Handler ---
  function initCopyEmail() {
    const btn = document.getElementById('btnCopyEmail');
    const label = document.getElementById('copyBtnText');
    if (!btn) return;

    btn.addEventListener('click', async () => {
      const email = (window.SITE_CONFIG && window.SITE_CONFIG.contact && window.SITE_CONFIG.contact.email) || '2211102080@ittelkom-pwt.ac.id';
      try {
        await navigator.clipboard.writeText(email);
        if (label) {
          const orig = label.textContent;
          label.textContent = 'Email tersalin!';
          setTimeout(() => {
            label.textContent = orig;
          }, 2400);
        }
      } catch (err) {
        // Fallback for non-https or restricted clipboard
        const input = document.createElement('input');
        input.value = email;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        if (label) {
          label.textContent = 'Tersalin!';
          setTimeout(() => {
            label.textContent = 'Salin Email';
          }, 2400);
        }
      }
    });
  }

  // --- Intersection Observer for Scroll Reveals ---
  function initObserver() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));
  }

  // --- Current Year in Footer ---
  function initYear() {
    const yr = document.getElementById('year');
    if (yr) {
      yr.textContent = new Date().getFullYear();
    }
  }

  // --- Master Initialization ---
  document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initial config binding
    if (window.SITE_CONFIG) {
      applyConfig(window.SITE_CONFIG);
    }

    // 2. Optional: load .env overrides if hosted on HTTP server
    if (window.PortfolioConfig && typeof window.PortfolioConfig.loadEnv === 'function') {
      try {
        await window.PortfolioConfig.loadEnv();
        applyConfig(window.SITE_CONFIG);
      } catch (e) {
        // Ignore
      }
    }

    renderProjects();
    initFilters();
    initModalEvents();
    initAvatarSwitch();
    initCanvas3D();
    initScrollspy();
    initCardTilt();
    initCopyEmail();
    initObserver();
    initYear();
  });
})();
