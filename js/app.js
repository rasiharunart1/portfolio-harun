/**
 * ==============================================================================
 * LOGIKA APLIKASI PORTOFOLIO - HARUN AR RASYID
 * ==============================================================================
 * Mengelola rendering kartu studi kasus, visualisasi blueprint arsitektur SVG,
 * sinkronisasi dinamis repositori GitHub dengan fallback offline 43 repositori,
 * pencarian & filter live, modal dialog aksesibel, dan interaksi UI.
 * ==============================================================================
 */

(function () {
  'use strict';

  // Pastikan konfigurasi tersedia
  const config = window.SITE_CONFIG || {};
  const caseStudies = config.caseStudies || [];
  const fallbackRepos = config.fallbackRepositories || [];
  const GH_OWNER = config.contact ? config.contact.githubOwner : 'rasiharunart1';
  const GH_STORAGE_KEY = 'harun_gh_repos_cache_v2';

  let currentCategory = 'All';
  let activeModalProject = null;
  let previousActiveElement = null;

  let verifiedRepos = [];
  let isRepoVerified = false;
  let repoDataSource = 'Menunggu verifikasi';

  // ----------------------------------------------------------------------------
  // 1. ENGINE ILUSTRASI BLUEPRINT VEKTOR SVG (25 STUDI KASUS)
  // ----------------------------------------------------------------------------
  function getProjectSvg(id) {
    const wrap = (content, bg = '#f0f0eb') =>
      `<svg viewBox="0 0 600 400" role="img" aria-label="Blueprint Rekayasa ${id}" preserveAspectRatio="xMidYMid meet">
        <rect width="600" height="400" fill="${bg}" />
        <defs>
          <pattern id="grid_${id}" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000000" stroke-width="0.5" stroke-opacity="0.04" />
          </pattern>
          <filter id="shadow_${id}" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" flood-opacity="0.08" />
          </filter>
        </defs>
        <rect width="600" height="400" fill="url(#grid_${id})" />
        ${content}
      </svg>`;

    // COBOX
    if (id === 'cobox') {
      return wrap(`
        <rect x="70" y="60" width="460" height="280" rx="16" fill="#ffffff" filter="url(#shadow_cobox)"/>
        <!-- Panel Surya Atap -->
        <rect x="130" y="30" width="340" height="40" rx="6" fill="#1e2c3a" stroke="#ef593d" stroke-width="2"/>
        <line x1="180" y1="30" x2="180" y2="70" stroke="#4a6572" stroke-width="1.5"/>
        <line x1="240" y1="30" x2="240" y2="70" stroke="#4a6572" stroke-width="1.5"/>
        <line x1="300" y1="30" x2="300" y2="70" stroke="#4a6572" stroke-width="1.5"/>
        <line x1="360" y1="30" x2="360" y2="70" stroke="#4a6572" stroke-width="1.5"/>
        <line x1="420" y1="30" x2="420" y2="70" stroke="#4a6572" stroke-width="1.5"/>
        <text x="300" y="24" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#ef593d">SOLAR 50Wp ENERGY</text>
        <!-- Pintu Kotak & Solenoid Lock -->
        <rect x="100" y="90" width="220" height="220" rx="10" fill="#f8f9fa" stroke="#dcded7" stroke-width="2"/>
        <rect x="130" y="120" width="160" height="40" rx="6" fill="#1b2324"/>
        <text x="210" y="145" text-anchor="middle" font-family="monospace" font-size="13" font-weight="bold" fill="#68a98e">COBOX V2.4</text>
        <circle cx="210" cy="200" r="24" fill="#ef593d" fill-opacity="0.15" stroke="#ef593d" stroke-width="2"/>
        <text x="210" y="205" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#ef593d">LOCKED</text>
        <rect x="195" y="240" width="30" height="8" rx="2" fill="#70716b"/>
        <!-- Scanner Barcode & RFID Module -->
        <rect x="350" y="100" width="150" height="90" rx="8" fill="#f4f6f4" stroke="#dcded7"/>
        <text x="365" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#171816">RFID RC522</text>
        <rect x="365" y="135" width="120" height="12" rx="3" fill="#68a98e" fill-opacity="0.3"/>
        <text x="370" y="145" font-family="monospace" font-size="9" fill="#24513b">AUTH CARD OK</text>
        <!-- Barcode Beam -->
        <rect x="350" y="210" width="150" height="90" rx="8" fill="#171816"/>
        <line x1="365" y1="230" x2="365" y2="280" stroke="#ef593d" stroke-width="3"/>
        <line x1="375" y1="230" x2="375" y2="280" stroke="#ffffff" stroke-width="2"/>
        <line x1="382" y1="230" x2="382" y2="280" stroke="#ffffff" stroke-width="4"/>
        <line x1="392" y1="230" x2="392" y2="280" stroke="#ffffff" stroke-width="1.5"/>
        <line x1="400" y1="230" x2="400" y2="280" stroke="#ffffff" stroke-width="3"/>
        <line x1="410" y1="230" x2="410" y2="280" stroke="#ffffff" stroke-width="2"/>
        <line x1="420" y1="230" x2="420" y2="280" stroke="#ef593d" stroke-width="3"/>
        <line x1="350" y1="255" x2="500" y2="255" stroke="#ef593d" stroke-width="2" stroke-dasharray="4 2"/>
        <text x="425" y="295" text-anchor="middle" font-family="monospace" font-size="9" fill="#ffdace">BARCODE READ</text>
      `, '#f5ece7');
    }

    // HOME DIGITAL TWIN
    if (id === 'home') {
      return wrap(`
        <circle cx="300" cy="200" r="170" fill="#e8eae4" />
        <g transform="translate(60, 45)">
          <path d="M55 151 L254 39 L468 148 L269 265 Z" fill="#2c3533" />
          <path d="M55 151 L55 247 L269 366 L269 265 Z" fill="#4d5a55" />
          <path d="M269 265 L468 148 L468 249 L269 366 Z" fill="#1d2624" />
          <!-- Kamar Ruangan -->
          <path d="M102 157 L251 71 L406 158 L256 248 Z" fill="#8ea295" />
          <path d="M162 181 L247 131 L323 174 L237 223 Z" fill="#dce6dc" />
          <line x1="252" y1="71" x2="251" y2="248" stroke="#26352e" stroke-width="2.5" opacity="0.6"/>
          <line x1="102" y1="157" x2="256" y2="248" stroke="#26352e" stroke-width="2.5" opacity="0.6"/>
          <!-- Status Node Lampu -->
          <circle cx="237" cy="180" r="11" fill="#ef593d" />
          <circle cx="237" cy="180" r="18" fill="none" stroke="#ef593d" stroke-width="2" stroke-dasharray="3 3"/>
          <circle cx="340" cy="185" r="9" fill="#f8ca81" />
          <circle cx="168" cy="159" r="8" fill="#68a98e" />
        </g>
        <rect x="36" y="32" rx="10" width="170" height="58" fill="#ffffff" filter="url(#shadow_home)"/>
        <circle cx="56" cy="61" r="5" fill="#68a98e" />
        <text x="70" y="55" font-size="12" font-family="sans-serif" font-weight="bold" fill="#171816">TWIN ONLINE</text>
        <text x="70" y="73" font-size="10" font-family="monospace" fill="#70716b">MQTT SYNC: 18ms</text>
      `, '#edf0ea');
    }

    // BANANASENSE
    if (id === 'banana') {
      return wrap(`
        <rect x="65" y="45" width="470" height="310" rx="16" fill="#171e1c"/>
        <rect x="80" y="60" width="440" height="280" rx="10" fill="#24322a"/>
        <!-- Siluet Pisang -->
        <path d="M190 170 C190 280 370 300 400 160 C360 220 270 250 190 170 Z" fill="#eed754" stroke="#d9bd2b" stroke-width="5"/>
        <path d="M210 185 C255 245 345 240 380 175" fill="none" stroke="#fff5aa" stroke-width="6" stroke-linecap="round"/>
        <!-- YOLO Bounding Box -->
        <rect x="160" y="130" width="265" height="180" rx="4" fill="none" stroke="#68a98e" stroke-width="2.5" stroke-dasharray="8 6"/>
        <rect x="160" y="105" width="195" height="26" rx="4" fill="#68a98e"/>
        <text x="170" y="122" fill="#172e22" font-family="monospace" font-size="11" font-weight="bold">BANANA: RIPE (96.4%)</text>
        <text x="100" y="90" font-size="11" fill="#aed9b1" font-family="monospace">ESP32-CAM → INFERENCE</text>
        <text x="400" y="325" font-size="11" fill="#ffdace" font-family="monospace">LARAVEL LOG</text>
      `, '#e6ebd8');
    }

    // LORA PIR
    if (id === 'lora') {
      return wrap(`
        <circle cx="300" cy="205" r="160" fill="#e0eee9"/>
        <!-- Garis Penghubung Nirkabel -->
        <g stroke="#65a398" stroke-width="2" stroke-dasharray="6 6">
          <line x1="300" y1="205" x2="160" y2="105"/>
          <line x1="300" y1="205" x2="440" y2="95"/>
          <line x1="300" y1="205" x2="470" y2="305"/>
          <line x1="300" y1="205" x2="135" y2="310"/>
          <line x1="300" y1="205" x2="315" y2="345"/>
        </g>
        <!-- Node Sensor PIR -->
        <g fill="#ffffff" stroke="#37786b" stroke-width="3">
          <circle cx="160" cy="105" r="24"/>
          <circle cx="440" cy="95" r="24"/>
          <circle cx="470" cy="305" r="24"/>
          <circle cx="135" cy="310" r="24"/>
          <circle cx="315" cy="345" r="24"/>
        </g>
        <g fill="#ef593d">
          <circle cx="160" cy="105" r="7"/>
          <circle cx="440" cy="95" r="7"/>
          <circle cx="470" cy="305" r="7"/>
          <circle cx="135" cy="310" r="7"/>
          <circle cx="315" cy="345" r="7"/>
        </g>
        <!-- Gateway Tengah -->
        <circle cx="300" cy="205" r="54" fill="#203d38"/>
        <text x="300" y="202" text-anchor="middle" font-size="13" fill="#ffffff" font-weight="bold" font-family="sans-serif">GATEWAY</text>
        <text x="300" y="222" text-anchor="middle" font-size="10" fill="#8ed8b2" font-family="monospace">LoRa E220</text>
        <text x="160" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#37786b" font-family="monospace">NODE #1</text>
        <text x="440" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#37786b" font-family="monospace">NODE #2</text>
        <text x="470" y="345" text-anchor="middle" font-size="10" font-weight="bold" fill="#37786b" font-family="monospace">NODE #3</text>
        <text x="135" y="350" text-anchor="middle" font-size="10" font-weight="bold" fill="#37786b" font-family="monospace">NODE #4</text>
      `, '#e2f0eb');
    }

    // 3-PHASE ENERGY MONITORING
    if (id === 'energy') {
      return wrap(`
        <rect x="70" y="50" width="460" height="300" rx="14" fill="#ffffff" filter="url(#shadow_energy)"/>
        <!-- Header Meter -->
        <rect x="70" y="50" width="460" height="50" rx="14" fill="#1b2324"/>
        <circle cx="100" cy="75" r="5" fill="#ef593d"/>
        <circle cx="116" cy="75" r="5" fill="#f8ca81"/>
        <circle cx="132" cy="75" r="5" fill="#68a98e"/>
        <text x="160" y="80" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">3-PHASE TELEMETRY // R-S-T</text>
        <!-- 3 Fase Panel -->
        <rect x="95" y="120" width="125" height="85" rx="8" fill="#fdf2ee" stroke="#f3bba8"/>
        <text x="110" y="145" font-size="11" font-weight="bold" fill="#ef593d" font-family="sans-serif">FASE R</text>
        <text x="110" y="175" font-size="20" font-weight="bold" fill="#171816" font-family="monospace">224 V</text>
        <text x="110" y="193" font-size="10" fill="#70716b" font-family="monospace">14.2 A · 3.1 kW</text>

        <rect x="238" y="120" width="125" height="85" rx="8" fill="#fdf9ee" stroke="#f2de99"/>
        <text x="253" y="145" font-size="11" font-weight="bold" fill="#cca025" font-family="sans-serif">FASE S</text>
        <text x="253" y="175" font-size="20" font-weight="bold" fill="#171816" font-family="monospace">221 V</text>
        <text x="253" y="193" font-size="10" fill="#70716b" font-family="monospace">12.8 A · 2.8 kW</text>

        <rect x="380" y="120" width="125" height="85" rx="8" fill="#eef7f2" stroke="#b4e0ca"/>
        <text x="395" y="145" font-size="11" font-weight="bold" fill="#428a67" font-family="sans-serif">FASE T</text>
        <text x="395" y="175" font-size="20" font-weight="bold" fill="#171816" font-family="monospace">226 V</text>
        <text x="395" y="193" font-size="10" fill="#70716b" font-family="monospace">15.1 A · 3.4 kW</text>

        <!-- Gelombang Sinus Listrik -->
        <path d="M95 285 Q130 230 165 285 T235 285 T305 285 T375 285 T445 285 T505 285" fill="none" stroke="#ef593d" stroke-width="2.5"/>
        <path d="M95 285 Q120 330 155 285 T225 285 T295 285 T365 285 T435 285 T505 285" fill="none" stroke="#cca025" stroke-width="2" stroke-dasharray="4 2"/>
        <path d="M95 285 Q140 250 175 285 T245 285 T315 285 T385 285 T455 285 T505 285" fill="none" stroke="#428a67" stroke-width="2"/>
        <text x="100" y="330" font-size="10" font-family="monospace" fill="#70716b">FREQUENCY: 50.02 Hz · COS PHI: 0.96</text>
      `, '#f7ede6');
    }

    // SMART IRRIGATION
    if (id === 'irrigation') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_irrigation)"/>
        <!-- Dual MCU Diagram -->
        <rect x="100" y="85" width="160" height="120" rx="8" fill="#203d38"/>
        <text x="180" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">ESP32 GATEWAY</text>
        <text x="180" y="135" text-anchor="middle" font-family="monospace" font-size="10" fill="#8ed8b2">FreeRTOS · Telegram</text>
        <text x="180" y="155" text-anchor="middle" font-family="monospace" font-size="10" fill="#ffdace">ThingSpeak Telemetry</text>
        <rect x="130" y="170" width="100" height="20" rx="4" fill="#356158"/>
        <text x="180" y="184" text-anchor="middle" font-family="monospace" font-size="9" fill="#ffffff">WiFi SoftAP NVS</text>

        <!-- Bus Serial UART Bridge -->
        <path d="M260 145 L340 145" stroke="#ef593d" stroke-width="3" stroke-dasharray="4 3"/>
        <text x="300" y="135" text-anchor="middle" font-family="monospace" font-size="9" font-weight="bold" fill="#ef593d">UART RX/TX</text>

        <rect x="340" y="85" width="150" height="120" rx="8" fill="#1b2324"/>
        <text x="415" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">ARDUINO UNO</text>
        <text x="415" y="135" text-anchor="middle" font-family="monospace" font-size="10" fill="#f8ca81">RTC DS3231 Timer</text>
        <text x="415" y="155" text-anchor="middle" font-family="monospace" font-size="10" fill="#68a98e">Soil Moisture / pH</text>
        <rect x="365" y="170" width="100" height="20" rx="4" fill="#2d3839"/>
        <text x="415" y="184" text-anchor="middle" font-family="monospace" font-size="9" fill="#ffffff">Relay Valve Driver</text>

        <!-- Saluran Air & Valve -->
        <rect x="100" y="240" width="390" height="75" rx="10" fill="#f2f8f4" stroke="#cbe2d5"/>
        <circle cx="130" cy="277" r="16" fill="#4d9b77"/>
        <path d="M125 277 L130 283 L138 272" stroke="#ffffff" stroke-width="2.5" fill="none"/>
        <text x="160" y="272" font-family="sans-serif" font-size="12" font-weight="bold" fill="#171816">AUTOMATION MODE: SMART SCHEDULE</text>
        <text x="160" y="292" font-family="monospace" font-size="10" fill="#68a98e">VALVE: OPEN (15 MIN) · SOIL MOISTURE: 38%</text>
      `, '#eaf4ee');
    }

    // FALL DETECTOR ESP32
    if (id === 'fall') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="16" fill="#171816"/>
        <circle cx="160" cy="180" r="65" fill="#242826" stroke="#ef593d" stroke-width="2"/>
        <!-- Vektor Akselerasi 4-Arah -->
        <line x1="160" y1="180" x2="160" y2="130" stroke="#ef593d" stroke-width="3"/>
        <line x1="160" y1="180" x2="205" y2="180" stroke="#ef593d" stroke-width="3"/>
        <line x1="160" y1="180" x2="160" y2="230" stroke="#4a504d" stroke-width="2"/>
        <line x1="160" y1="180" x2="115" y2="180" stroke="#4a504d" stroke-width="2"/>
        <circle cx="160" cy="180" r="8" fill="#ffdace"/>
        <text x="160" y="265" text-anchor="middle" font-family="monospace" font-size="10" fill="#ef593d">MPU6050 4-AXIS</text>

        <!-- Jantung & Sinyal PPG -->
        <rect x="260" y="90" width="230" height="100" rx="10" fill="#202322"/>
        <path d="M280 145 L310 145 L320 120 L330 170 L340 135 L350 150 L370 145 L400 145 L410 120 L420 170 L430 135 L440 150 L470 145" fill="none" stroke="#68a98e" stroke-width="2.5"/>
        <text x="280" y="115" font-family="sans-serif" font-size="11" font-weight="bold" fill="#68a98e">MAX30100 · 76 BPM</text>
        <text x="410" y="115" font-family="monospace" font-size="10" fill="#ffdace">SpO2 98%</text>

        <!-- Timer Konfirmasi Anti False Alarm -->
        <rect x="260" y="210" width="230" height="85" rx="10" fill="#2a1f1d" stroke="#ef593d"/>
        <text x="280" y="235" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffdace">FALL CONFIRMATION</text>
        <text x="280" y="255" font-family="monospace" font-size="11" fill="#ef593d">TIMER: 1500ms FILTER OK</text>
        <text x="280" y="275" font-family="monospace" font-size="10" fill="#a5a8a2">DUAL-CORE FREERTOS DISPATCH</text>
      `, '#212423');
    }

    // SMARTMETER PZEM-004T
    if (id === 'smartmeter') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_smartmeter)"/>
        <!-- Layar LCD 20x4 I2C -->
        <rect x="110" y="85" width="380" height="150" rx="8" fill="#1e3a2f" stroke="#0f211a" stroke-width="4"/>
        <text x="130" y="120" font-family="monospace" font-size="15" font-weight="bold" fill="#8ed8b2">V: 228.4V   I: 2.45A</text>
        <text x="130" y="150" font-family="monospace" font-size="15" font-weight="bold" fill="#8ed8b2">P: 542.8W   F: 50.1Hz</text>
        <text x="130" y="180" font-family="monospace" font-size="15" font-weight="bold" fill="#8ed8b2">E: 14.82kWh PF: 0.97</text>
        <text x="130" y="210" font-family="monospace" font-size="12" fill="#ef593d">DIRTY-FLAG ANTI-FLICKER</text>
        <!-- Kontrol Bawah -->
        <rect x="110" y="255" width="180" height="55" rx="8" fill="#f5f6f4" stroke="#dcded7"/>
        <text x="125" y="278" font-family="sans-serif" font-size="11" font-weight="bold" fill="#171816">CAPTIVE PORTAL</text>
        <text x="125" y="295" font-family="monospace" font-size="9" fill="#70716b">192.168.4.1 WiFi Setup</text>
        <rect x="310" y="255" width="180" height="55" rx="8" fill="#fdf2ee" stroke="#f4cebf"/>
        <text x="325" y="278" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ef593d">FIREBASE RTDB</text>
        <text x="325" y="295" font-family="monospace" font-size="9" fill="#70716b">Persistent NVS Sync</text>
      `, '#f0f3ee');
    }

    // SMART SOCKET IOT
    if (id === 'socket') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_socket)"/>
        <!-- Dua Kanal Stop Kontak -->
        <rect x="105" y="90" width="180" height="180" rx="12" fill="#f8f9fa" stroke="#dcded7" stroke-width="2"/>
        <circle cx="195" cy="150" r="38" fill="#ffffff" stroke="#ef593d" stroke-width="3"/>
        <circle cx="180" cy="150" r="6" fill="#171816"/>
        <circle cx="210" cy="150" r="6" fill="#171816"/>
        <text x="195" y="215" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#171816">CH-1: AKTIF</text>
        <text x="195" y="235" text-anchor="middle" font-family="monospace" font-size="10" fill="#68a98e">PZEM: 380W · 28°C</text>

        <rect x="315" y="90" width="180" height="180" rx="12" fill="#f8f9fa" stroke="#dcded7" stroke-width="2"/>
        <circle cx="405" cy="150" r="38" fill="#ffffff" stroke="#70716b" stroke-width="3"/>
        <circle cx="390" cy="150" r="6" fill="#70716b"/>
        <circle cx="420" cy="150" r="6" fill="#70716b"/>
        <text x="405" y="215" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#70716b">CH-2: PROTECTED</text>
        <text x="405" y="235" text-anchor="middle" font-family="monospace" font-size="10" fill="#ef593d">OVERHEAT CUTOFF</text>

        <rect x="105" y="285" width="390" height="35" rx="6" fill="#1b2324"/>
        <text x="300" y="307" text-anchor="middle" font-family="monospace" font-size="11" fill="#ffdace">PROTEKSI: ARUS LEBIH + SENSOR ASAP MQ-2 + HIVEMQ TLS</text>
      `, '#f7f0eb');
    }

    // POWER MONITORING UNIT
    if (id === 'powerunit') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#20221f" filter="url(#shadow_powerunit)"/>
        <!-- Panel Enclosure Industri -->
        <rect x="100" y="85" width="400" height="230" rx="10" fill="#2b2d29" stroke="#ef593d" stroke-width="2"/>
        <circle cx="130" cy="115" r="8" fill="#ef593d"/>
        <text x="150" y="120" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">ENCLOSURE LAPANGAN // PZEM-004T</text>
        <!-- Konektor Aviasi GX16 -->
        <circle cx="160" cy="190" r="30" fill="#171816" stroke="#9a9b95" stroke-width="3"/>
        <circle cx="160" cy="190" r="6" fill="#ffdace"/>
        <circle cx="150" cy="180" r="4" fill="#9a9b95"/>
        <circle cx="170" cy="180" r="4" fill="#9a9b95"/>
        <circle cx="150" cy="200" r="4" fill="#9a9b95"/>
        <circle cx="170" cy="200" r="4" fill="#9a9b95"/>
        <text x="160" y="240" text-anchor="middle" font-family="monospace" font-size="10" fill="#ffdace">GX16 AVIATION</text>

        <rect x="230" y="150" width="240" height="120" rx="8" fill="#171816"/>
        <text x="250" y="180" font-family="monospace" font-size="12" font-weight="bold" fill="#68a98e">HTTP POST → LARAVEL</text>
        <text x="250" y="205" font-family="monospace" font-size="10" fill="#ffffff">Payload: { v:222.1, i:5.8 }</text>
        <text x="250" y="230" font-family="monospace" font-size="10" fill="#ffffff">Interval: 5000ms KeepAlive</text>
        <text x="250" y="250" font-family="monospace" font-size="10" fill="#ef593d">Rugged Vibration Proof</text>
      `, '#2c2e2a');
    }

    // RF TRACKER
    if (id === 'tracker') {
      return wrap(`
        <circle cx="300" cy="200" r="160" fill="#1c2624" />
        <circle cx="300" cy="200" r="130" fill="none" stroke="#3d5a54" stroke-width="1.5"/>
        <circle cx="300" cy="200" r="90" fill="none" stroke="#3d5a54" stroke-width="1.5"/>
        <circle cx="300" cy="200" r="45" fill="none" stroke="#3d5a54" stroke-width="1.5"/>
        <line x1="140" y1="200" x2="460" y2="200" stroke="#3d5a54" stroke-width="2"/>
        <line x1="300" y1="40" x2="300" y2="360" stroke="#3d5a54" stroke-width="2"/>
        <!-- Sektor Kunci Sinyal Spiral -->
        <path d="M300 200 L415 105 A150 150 0 0 0 300 50 Z" fill="#68a98e" fill-opacity="0.35"/>
        <line x1="300" y1="200" x2="415" y2="105" stroke="#8ed8b2" stroke-width="3"/>
        <circle cx="365" cy="145" r="10" fill="#ef593d"/>
        <circle cx="365" cy="145" r="18" fill="none" stroke="#ef593d" stroke-width="2"/>
        <rect x="35" y="30" width="165" height="58" rx="8" fill="#ffffff" filter="url(#shadow_tracker)"/>
        <text x="50" y="52" font-family="sans-serif" font-size="12" font-weight="bold" fill="#171816">SIGNAL LOCKED</text>
        <text x="50" y="72" font-size="10" font-family="monospace" fill="#ef593d">RTL-SDR RSSI: -48dBm</text>
      `, '#e2ece7');
    }

    // KEYGUARD
    if (id === 'keyguard') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_keyguard)"/>
        <!-- Brankas Baja -->
        <rect x="95" y="85" width="220" height="230" rx="12" fill="#2c302e" stroke="#171816" stroke-width="3"/>
        <circle cx="205" cy="200" r="50" fill="#3a403d" stroke="#ef593d" stroke-width="3"/>
        <!-- Roda Kunci Brankas -->
        <line x1="205" y1="160" x2="205" y2="240" stroke="#ffffff" stroke-width="3"/>
        <line x1="165" y1="200" x2="245" y2="200" stroke="#ffffff" stroke-width="3"/>
        <circle cx="205" cy="200" r="15" fill="#ef593d"/>
        <!-- Keypad 4x4 -->
        <rect x="340" y="85" width="165" height="150" rx="8" fill="#f4f5f2" stroke="#dcded7"/>
        <text x="355" y="110" font-family="sans-serif" font-size="11" font-weight="bold" fill="#171816">PIN 6-DIGIT</text>
        <rect x="355" y="125" width="135" height="22" rx="4" fill="#171816"/>
        <text x="422" y="140" text-anchor="middle" font-family="monospace" font-size="13" font-weight="bold" fill="#68a98e">* * * * * *</text>
        <!-- Load Cell HX711 & Getar -->
        <rect x="340" y="245" width="165" height="70" rx="8" fill="#fef1ed" stroke="#f4cebf"/>
        <text x="355" y="268" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ef593d">LOAD CELL HX711</text>
        <text x="355" y="288" font-family="monospace" font-size="10" fill="#70716b">Bobot: 12.45 kg</text>
        <text x="355" y="303" font-family="monospace" font-size="9" fill="#ef593d">Anti-Pry SW-420 Active</text>
      `, '#f5ece7');
    }

    // SENA SMART GARDEN
    if (id === 'sena') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_sena)"/>
        <!-- Kurva Fuzzy Mamdani -->
        <rect x="100" y="85" width="240" height="140" rx="8" fill="#f7fbf8" stroke="#d5e8dc"/>
        <text x="115" y="110" font-family="sans-serif" font-size="11" font-weight="bold" fill="#20533c">LOGIKA FUZZY MAMDANI</text>
        <path d="M120 200 L160 140 L200 200" fill="none" stroke="#ef593d" stroke-width="2"/>
        <path d="M180 200 L220 140 L260 200" fill="none" stroke="#68a98e" stroke-width="2"/>
        <path d="M240 200 L280 140 L320 200" fill="none" stroke="#cca025" stroke-width="2"/>
        <text x="135" y="215" font-family="monospace" font-size="9" fill="#ef593d">Kering</text>
        <text x="205" y="215" font-family="monospace" font-size="9" fill="#68a98e">Lembab</text>
        <text x="270" y="215" font-family="monospace" font-size="9" fill="#cca025">Basah</text>
        <!-- Sensor pH & Kelembaban -->
        <rect x="360" y="85" width="140" height="140" rx="8" fill="#1b2324"/>
        <text x="375" y="115" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">SOIL pH</text>
        <text x="375" y="145" font-family="monospace" font-size="24" font-weight="bold" fill="#68a98e">6.8</text>
        <text x="375" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">MOISTURE</text>
        <text x="375" y="205" font-family="monospace" font-size="24" font-weight="bold" fill="#ffdace">64%</text>

        <rect x="100" y="240" width="400" height="70" rx="8" fill="#f4f6f4"/>
        <text x="120" y="265" font-family="sans-serif" font-size="11" font-weight="bold" fill="#171816">KEPUTUSAN PENYIRAMAN OTOMATIS</text>
        <text x="120" y="285" font-family="monospace" font-size="11" fill="#ef593d">Durasi Katup: 45 detik (Fuzzy Defuzzification Sentroid)</text>
      `, '#edf5ef');
    }

    // RADIATOR BUS MONITOR
    if (id === 'radiator') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_radiator)"/>
        <!-- Siluet Tabung Reservoir Radiator -->
        <rect x="110" y="90" width="130" height="200" rx="16" fill="#f0f2ee" stroke="#b0b5aa" stroke-width="2"/>
        <rect x="120" y="160" width="110" height="120" rx="10" fill="#68a98e" fill-opacity="0.4"/>
        <!-- Sensor Ketinggian Cairan Non-Kontak XKC-Y25 -->
        <rect x="95" y="140" width="20" height="30" rx="4" fill="#ef593d"/>
        <text x="80" y="130" font-family="monospace" font-size="9" fill="#ef593d">XKC-Y25</text>
        <line x1="120" y1="160" x2="230" y2="160" stroke="#256447" stroke-width="2" stroke-dasharray="4 2"/>
        <text x="175" y="220" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#1b4733">COOLANT OK</text>
        <!-- Peringatan Suhu Mesin Bus -->
        <rect x="270" y="90" width="230" height="95" rx="10" fill="#1b2324"/>
        <text x="290" y="120" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">TEMPERATUR MESIN</text>
        <text x="290" y="155" font-family="monospace" font-size="28" font-weight="bold" fill="#f8ca81">88.4 °C</text>
        <text x="420" y="155" font-family="monospace" font-size="11" fill="#68a98e">NORMAL</text>

        <rect x="270" y="200" width="230" height="90" rx="10" fill="#fdf2ee" stroke="#f2c8b9"/>
        <text x="290" y="225" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ef593d">SISTEM PERINGATAN 3-TIER</text>
        <text x="290" y="245" font-family="monospace" font-size="10" fill="#171816">Hijau &lt; 92°C | Kuning 92-98°C</text>
        <text x="290" y="265" font-family="monospace" font-size="10" font-weight="bold" fill="#ef593d">Merah &gt; 98°C (Alarm Montir Bus)</text>
      `, '#f5ece7');
    }

    // WATER QUALITY MONITOR
    if (id === 'water') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_water)"/>
        <!-- Probe Sensor Air -->
        <rect x="110" y="90" width="110" height="150" rx="10" fill="#203d38"/>
        <rect x="150" y="240" width="30" height="60" rx="4" fill="#70716b"/>
        <circle cx="165" cy="300" r="10" fill="#ef593d"/>
        <text x="165" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">pH PROBE</text>
        <text x="165" y="160" text-anchor="middle" font-family="monospace" font-size="18" font-weight="bold" fill="#8ed8b2">7.24</text>
        <text x="165" y="185" text-anchor="middle" font-family="monospace" font-size="10" fill="#ffdace">2-Pt Calib</text>

        <rect x="245" y="90" width="250" height="100" rx="10" fill="#eef7f4" stroke="#c2e5d7"/>
        <text x="265" y="120" font-family="sans-serif" font-size="12" font-weight="bold" fill="#235c46">TURBIDITY SENSOR</text>
        <text x="265" y="150" font-family="monospace" font-size="22" font-weight="bold" fill="#171816">12.8 NTU</text>
        <text x="265" y="172" font-family="monospace" font-size="10" fill="#68a98e">Air Jernih Terstandarisasi</text>

        <rect x="245" y="205" width="250" height="85" rx="10" fill="#f4f5f2"/>
        <text x="265" y="235" font-family="sans-serif" font-size="11" font-weight="bold" fill="#171816">PROTEKSI ENCLOSURE IP65</text>
        <text x="265" y="255" font-family="monospace" font-size="10" fill="#70716b">Waterproof Gland PG7 / DS18B20</text>
        <text x="265" y="272" font-family="monospace" font-size="10" fill="#ef593d">Kompensasi Temperatur Otomatis</text>
      `, '#eaf4f0');
    }

    // COCOBASE (SOLVIA WEIGHT LOGGER)
    if (id === 'cocobase') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_cocobase)"/>
        <!-- Dashboard Browser Window -->
        <rect x="70" y="55" width="460" height="42" rx="14" fill="#20221f"/>
        <circle cx="95" cy="76" r="4" fill="#ef593d"/>
        <circle cx="110" cy="76" r="4" fill="#f8ca81"/>
        <circle cx="125" cy="76" r="4" fill="#68a98e"/>
        <text x="150" y="80" font-family="monospace" font-size="11" fill="#ffffff">solvia-cocobase.innovilage.id</text>

        <rect x="95" y="115" width="190" height="100" rx="8" fill="#eef7f1" stroke="#c0e5cd"/>
        <text x="110" y="140" font-family="sans-serif" font-size="11" font-weight="bold" fill="#26633d">TIMBANGAN SERABUT</text>
        <text x="110" y="175" font-family="monospace" font-size="28" font-weight="bold" fill="#171816">42.50 kg</text>
        <text x="110" y="195" font-family="monospace" font-size="10" fill="#68a98e">ESP32 HX711 Sync</text>

        <rect x="300" y="115" width="200" height="100" rx="8" fill="#f8f9fa" stroke="#dcded7"/>
        <text x="315" y="140" font-family="sans-serif" font-size="11" font-weight="bold" fill="#171816">KAPASITAS PRODUKSI</text>
        <path d="M315 195 L340 180 L365 185 L390 165 L415 170 L440 150 L475 140" fill="none" stroke="#ef593d" stroke-width="2.5"/>
        <text x="315" y="205" font-family="monospace" font-size="9" fill="#70716b">1.28 Ton Bulan Ini</text>

        <rect x="95" y="230" width="405" height="85" rx="8" fill="#1b2324"/>
        <text x="115" y="260" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">EKOSISTEM GULA KELAPA DIGITAL (INNOVILAGE)</text>
        <text x="115" y="285" font-family="monospace" font-size="10" fill="#ffdace">Next.js Frontend · RESTful Backend API · Transparansi Petani</text>
      `, '#edf5ef');
    }

    // AI FISH COUNTING (RASPBERRY PI 5)
    if (id === 'fish') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#171e1c"/>
        <rect x="85" y="70" width="430" height="260" rx="8" fill="#202d28"/>
        <!-- Siluet Bibit Ikan Berenang -->
        <g fill="#437d68">
          <ellipse cx="180" cy="140" rx="28" ry="12"/>
          <polygon points="152,140 138,130 138,150"/>
          <ellipse cx="320" cy="180" rx="26" ry="11"/>
          <polygon points="294,180 280,170 280,190"/>
          <ellipse cx="230" cy="240" rx="24" ry="10"/>
          <polygon points="206,240 194,232 194,248"/>
          <ellipse cx="400" cy="220" rx="30" ry="13"/>
          <polygon points="370,220 355,208 355,232"/>
        </g>
        <!-- Bounding Box YOLO Ikan -->
        <rect x="135" y="115" width="85" height="45" rx="3" fill="none" stroke="#68a98e" stroke-width="2"/>
        <rect x="275" y="155" width="80" height="45" rx="3" fill="none" stroke="#68a98e" stroke-width="2"/>
        <rect x="350" y="195" width="90" height="48" rx="3" fill="none" stroke="#ef593d" stroke-width="2"/>
        <!-- Counter Box -->
        <rect x="95" y="80" width="180" height="28" rx="4" fill="#ef593d"/>
        <text x="105" y="99" font-family="monospace" font-size="12" font-weight="bold" fill="#ffffff">POPULASI: 384 EKOR</text>
        <text x="350" y="95" font-family="monospace" font-size="11" fill="#8ed8b2">RPi 5 · 45 FPS EDGE</text>
        <text x="100" y="310" font-family="monospace" font-size="10" fill="#ffdace">Telkom University Purwokerto · Python Tkinter GUI</text>
      `, '#1d2723');
    }

    // VEHICLE COUNTER BANYUMAS
    if (id === 'vehicle') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#1b2324"/>
        <rect x="85" y="70" width="430" height="260" rx="8" fill="#24383a"/>
        <!-- Garis Jalan Raya CCTV -->
        <path d="M140 330 L260 70 M340 70 L460 330" stroke="#48696b" stroke-width="3" stroke-dasharray="10 8"/>
        <!-- Kotak Deteksi Mobil & Motor -->
        <rect x="170" y="190" width="90" height="70" rx="4" fill="none" stroke="#ef593d" stroke-width="2.5"/>
        <rect x="170" y="172" width="75" height="18" rx="2" fill="#ef593d"/>
        <text x="175" y="185" font-family="monospace" font-size="9" font-weight="bold" fill="#ffffff">CAR #42</text>

        <rect x="310" y="150" width="60" height="50" rx="4" fill="none" stroke="#68a98e" stroke-width="2"/>
        <rect x="310" y="135" width="65" height="15" rx="2" fill="#68a98e"/>
        <text x="315" y="146" font-family="monospace" font-size="8" font-weight="bold" fill="#171816">MOTOR #88</text>

        <!-- Garis Batas Virtual Hitung -->
        <line x1="120" y1="240" x2="480" y2="240" stroke="#f8ca81" stroke-width="2" stroke-dasharray="5 3"/>
        <text x="400" y="235" font-family="monospace" font-size="9" fill="#f8ca81">COUNT LINE</text>

        <rect x="95" y="80" width="220" height="26" rx="4" fill="#141a1a"/>
        <text x="105" y="97" font-family="monospace" font-size="11" font-weight="bold" fill="#8ed8b2">DINKOMINFO BANYUMAS</text>
        <text x="100" y="315" font-family="monospace" font-size="10" fill="#ffdace">OpenCV + YOLO Centroid Tracking · Video CCTV Perkotaan</text>
      `, '#1d2a2c');
    }

    // AUDITORIUM PERSON COUNTER
    if (id === 'auditorium') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#1a201e"/>
        <rect x="85" y="70" width="430" height="260" rx="8" fill="#24332e"/>
        <!-- Siluet Orang di Auditorium -->
        <g fill="#4d6f62">
          <circle cx="150" cy="140" r="14"/>
          <path d="M132 165 C132 155 168 155 168 165 L168 210 L132 210 Z"/>
          <circle cx="250" cy="130" r="14"/>
          <path d="M232 155 C232 145 268 145 268 155 L268 200 L232 200 Z"/>
          <circle cx="350" cy="150" r="14"/>
          <path d="M332 175 C332 165 368 165 368 175 L368 220 L332 220 Z"/>
        </g>
        <rect x="125" y="120" width="50" height="95" rx="3" fill="none" stroke="#68a98e" stroke-width="2"/>
        <rect x="225" y="110" width="50" height="95" rx="3" fill="none" stroke="#68a98e" stroke-width="2"/>
        <rect x="325" y="130" width="50" height="95" rx="3" fill="none" stroke="#68a98e" stroke-width="2"/>

        <rect x="95" y="80" width="220" height="26" rx="4" fill="#203d38"/>
        <text x="105" y="97" font-family="monospace" font-size="11" font-weight="bold" fill="#ffffff">AUDITORIUM OKUPANSI: 68%</text>
        <text x="100" y="315" font-family="monospace" font-size="10" fill="#ffdace">Deteksi Kapasitas Gedung Dinkominfo Pemkab Banyumas</text>
      `, '#1d2623');
    }

    // MOODLE LMS ASN
    if (id === 'moodle') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_moodle)"/>
        <!-- Window Browser LMS Moodle -->
        <rect x="70" y="55" width="460" height="44" rx="14" fill="#1b2324"/>
        <circle cx="95" cy="77" r="4" fill="#ef593d"/>
        <circle cx="110" cy="77" r="4" fill="#f8ca81"/>
        <circle cx="125" cy="77" r="4" fill="#68a98e"/>
        <text x="150" y="82" font-family="monospace" font-size="11" fill="#ffffff">lms-asn.banyumaskab.go.id</text>

        <rect x="95" y="115" width="310" height="85" rx="8" fill="#f8f9f7" stroke="#dcded7"/>
        <text x="115" y="140" font-family="sans-serif" font-size="12" font-weight="bold" fill="#171816">PELATIHAN KOMPETENSI ASN BANYUMAS</text>
        <rect x="115" y="155" width="240" height="10" rx="5" fill="#e2e4dd"/>
        <rect x="115" y="155" width="180" height="10" rx="5" fill="#68a98e"/>
        <text x="115" y="182" font-family="monospace" font-size="10" fill="#70716b">Progres Modul: 75% Selesai</text>

        <!-- Lencana Sertifikat Digital -->
        <rect x="420" y="115" width="80" height="85" rx="8" fill="#fef4ed" stroke="#f4cebf"/>
        <circle cx="460" cy="150" r="18" fill="#ef593d"/>
        <text x="460" y="155" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">★</text>
        <text x="460" y="185" text-anchor="middle" font-family="monospace" font-size="8" fill="#ef593d">CERTIFIED</text>

        <rect x="95" y="215" width="405" height="100" rx="8" fill="#20221f"/>
        <text x="115" y="245" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">ARSITEKTUR DEPLOYMENT MOODLE & MYSQL</text>
        <text x="115" y="270" font-family="monospace" font-size="10" fill="#ffdace">Manajemen Peserta ASN · Bank Soal Interaktif · Optimasi Server</text>
        <text x="115" y="290" font-family="monospace" font-size="10" fill="#8ed8b2">Magang Dinkominfo Kabupaten Banyumas</text>
      `, '#edf0eb');
    }

    // AUDIO FFT
    if (id === 'fft') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#1b2324"/>
        <text x="95" y="85" font-family="monospace" font-size="12" font-weight="bold" fill="#68a98e">AUDIO SPECTRUM FFT // ESP32</text>
        <!-- Grafik Spektrum Frekuensi Batang -->
        <g fill="#ef593d">
          <rect x="100" y="220" width="14" height="60" rx="2"/>
          <rect x="122" y="190" width="14" height="90" rx="2"/>
          <rect x="144" y="150" width="14" height="130" rx="2"/>
          <rect x="166" y="120" width="14" height="160" rx="2" fill="#ffdace"/>
          <rect x="188" y="160" width="14" height="120" rx="2"/>
          <rect x="210" y="180" width="14" height="100" rx="2"/>
          <rect x="232" y="210" width="14" height="70" rx="2"/>
          <rect x="254" y="230" width="14" height="50" rx="2"/>
          <rect x="276" y="170" width="14" height="110" rx="2"/>
          <rect x="298" y="130" width="14" height="150" rx="2" fill="#ffdace"/>
          <rect x="320" y="170" width="14" height="110" rx="2"/>
          <rect x="342" y="220" width="14" height="60" rx="2"/>
          <rect x="364" y="240" width="14" height="40" rx="2"/>
          <rect x="386" y="210" width="14" height="70" rx="2"/>
          <rect x="408" y="190" width="14" height="90" rx="2"/>
          <rect x="430" y="230" width="14" height="50" rx="2"/>
          <rect x="452" y="250" width="14" height="30" rx="2"/>
        </g>
        <line x1="95" y1="285" x2="480" y2="285" stroke="#70716b" stroke-width="1.5"/>
        <text x="100" y="315" font-family="monospace" font-size="10" fill="#ffffff">Sampling 44.1kHz · HTTPClient WAV Chunk Upload · Laravel Backend</text>
      `, '#192021');
    }

    // COFFEE DEHUMIDIFIER
    if (id === 'coffee') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_coffee)"/>
        <!-- Ruang Pengering Biji Kopi -->
        <rect x="95" y="85" width="220" height="180" rx="10" fill="#f8f4ee" stroke="#dec9b3" stroke-width="2"/>
        <text x="110" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#693d18">RUANG PENGERING KOPI</text>
        <circle cx="150" cy="180" r="16" fill="#693d18"/>
        <circle cx="190" cy="190" r="14" fill="#875326"/>
        <circle cx="230" cy="175" r="15" fill="#693d18"/>
        <text x="110" y="245" font-family="monospace" font-size="10" fill="#70716b">Sensor DHT22: 32°C · RH 58%</text>

        <!-- Kipas Dehumidifier Aktif -->
        <rect x="330" y="85" width="175" height="180" rx="10" fill="#20221f"/>
        <circle cx="417" cy="155" r="42" fill="#2b2d2a" stroke="#68a98e" stroke-width="3"/>
        <path d="M417 125 L417 185 M387 155 L447 155" stroke="#68a98e" stroke-width="3"/>
        <text x="417" y="225" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#68a98e">DEHUMIDIFIER: ON</text>
        <text x="417" y="245" text-anchor="middle" font-family="monospace" font-size="9" fill="#ffdace">Otomasi Batas Kritis RH</text>

        <rect x="95" y="280" width="410" height="40" rx="6" fill="#f5ece7"/>
        <text x="300" y="305" text-anchor="middle" font-family="monospace" font-size="11" fill="#ef593d">ESP32 Firmware · Dashboard Monitoring Suhu Jarak Jauh</text>
      `, '#f7f2ed');
    }

    // SOLAR PLTS HYBRID
    if (id === 'solar') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_solar)"/>
        <!-- Panel Surya & Inverter PLTS Hybrid -->
        <rect x="95" y="85" width="180" height="110" rx="8" fill="#1b2b3a"/>
        <line x1="140" y1="85" x2="140" y2="195" stroke="#4a6f8a" stroke-width="2"/>
        <line x1="185" y1="85" x2="185" y2="195" stroke="#4a6f8a" stroke-width="2"/>
        <line x1="230" y1="85" x2="230" y2="195" stroke="#4a6f8a" stroke-width="2"/>
        <text x="185" y="145" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#f8ca81">PLTS 1200Wp</text>

        <!-- Baterai Bank & State of Charge -->
        <rect x="295" y="85" width="205" height="110" rx="8" fill="#f8f9fa" stroke="#dcded7"/>
        <text x="315" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#171816">BATERAI LIFEPO4</text>
        <rect x="315" y="130" width="140" height="24" rx="4" fill="#20221f"/>
        <rect x="315" y="130" width="118" height="24" rx="4" fill="#68a98e"/>
        <text x="385" y="147" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#ffffff">84% SOC</text>
        <text x="315" y="180" font-family="monospace" font-size="10" fill="#70716b">Tegangan: 53.2V · 25A</text>

        <rect x="95" y="215" width="405" height="100" rx="8" fill="#20221f"/>
        <text x="115" y="245" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">TELEMETRI HYBRID MANDIRI // TW SMARTHOME</text>
        <text x="115" y="270" font-family="monospace" font-size="10" fill="#ffdace">ESP32 HTTPClient Pipeline · Inverter Modbus Telemetry</text>
        <text x="115" y="290" font-family="monospace" font-size="10" fill="#8ed8b2">Tanpa Ketergantungan Server Pihak Ketiga</text>
      `, '#edf2f5');
    }

    // RF 433MHZ SMART HOME
    if (id === 'rf433') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#ffffff" filter="url(#shadow_rf433)"/>
        <!-- Radio Gelombang RF 433MHz -->
        <circle cx="180" cy="180" r="32" fill="#ef593d"/>
        <text x="180" y="185" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">TX/RX</text>
        <path d="M180 120 A60 60 0 0 1 240 180" fill="none" stroke="#ef593d" stroke-width="3" stroke-linecap="round"/>
        <path d="M180 90 A90 90 0 0 1 270 180" fill="none" stroke="#ef593d" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M180 60 A120 120 0 0 1 300 180" fill="none" stroke="#ef593d" stroke-width="2" stroke-linecap="round"/>

        <rect x="310" y="90" width="190" height="180" rx="10" fill="#1b2324"/>
        <text x="330" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">LOCAL MQTT SERVER</text>
        <text x="330" y="155" font-family="monospace" font-size="11" fill="#68a98e">433 MHz RF Bridge</text>
        <text x="330" y="185" font-family="monospace" font-size="10" fill="#ffffff">Sub-GHz Penetrasi Tembok</text>
        <text x="330" y="215" font-family="monospace" font-size="10" fill="#ffdace">Zero Internet Dependency</text>
        <text x="330" y="245" font-family="monospace" font-size="10" fill="#ef593d">TW Smarthome Architecture</text>
      `, '#f7ede6');
    }

    // MBAUREKSO CURUG
    if (id === 'mbaurekso') {
      return wrap(`
        <rect x="70" y="55" width="460" height="290" rx="14" fill="#1b2324"/>
        <rect x="85" y="70" width="430" height="260" rx="8" fill="#253835"/>
        <!-- Siluet Air Terjun & Batuan -->
        <path d="M85 330 L160 160 L240 220 L320 110 L400 200 L515 130 L515 330 Z" fill="#39524e"/>
        <path d="M220 110 L260 110 L280 330 L200 330 Z" fill="#8ed8b2" opacity="0.6"/>
        <!-- Zona Batas AOI (Area of Interest) -->
        <polygon points="180,180 320,180 350,300 150,300" fill="#ef593d" fill-opacity="0.2" stroke="#ef593d" stroke-width="2.5" stroke-dasharray="6 4"/>
        <text x="250" y="172" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#ef593d">AOI DANGER ZONE</text>
        <circle cx="240" cy="230" r="10" fill="#ffdace"/>
        <circle cx="280" cy="250" r="10" fill="#ffdace"/>

        <rect x="95" y="80" width="180" height="26" rx="4" fill="#141a18"/>
        <text x="105" y="97" font-family="monospace" font-size="11" font-weight="bold" fill="#68a98e">CURUG MBAUREKSO</text>
        <text x="100" y="315" font-family="monospace" font-size="10" fill="#ffffff">YOLOv8 + OpenCV · Zona Pengawasan Wisata Air</text>
      `, '#1c2825');
    }

    // DEFAULT FALLBACK BLUEPRINT
    return wrap(`
      <rect x="80" y="60" width="440" height="280" rx="14" fill="#ffffff" filter="url(#shadow_default)"/>
      <rect x="80" y="60" width="440" height="42" rx="14" fill="#20221f"/>
      <circle cx="105" cy="81" r="4" fill="#ef593d"/>
      <circle cx="120" cy="81" r="4" fill="#f8ca81"/>
      <circle cx="135" cy="81" r="4" fill="#68a98e"/>
      <text x="160" y="86" font-family="monospace" font-size="11" fill="#ffffff">SYSTEM ARCHITECTURE // ${escapeHtml(id.toUpperCase())}</text>
      <rect x="110" y="130" width="160" height="160" rx="8" fill="#f4f5f2"/>
      <rect x="310" y="130" width="180" height="160" rx="8" fill="#f4f5f2"/>
      <path d="M270 210 L310 210" stroke="#ef593d" stroke-width="3" stroke-dasharray="4 2"/>
      <text x="190" y="215" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#171816">HARDWARE</text>
      <text x="400" y="215" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#171816">SOFTWARE</text>
    `, '#ecefe9');
  }

  // ----------------------------------------------------------------------------
  // 2. HELPER FUNGSI UTILITY
  // ----------------------------------------------------------------------------
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || 'Disalin ke clipboard!');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMsg || 'Disalin ke clipboard!');
    } catch (_) {
      showToast('Gagal menyalin otomatis.');
    }
    document.body.removeChild(ta);
  }

  // ----------------------------------------------------------------------------
  // 3. RENDERING PROYEK UNGGULAN (SELECTED WORK - 8 PROYEK)
  // ----------------------------------------------------------------------------
  function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featuredIds = config.featuredIds || ['cobox', 'irrigation', 'fall', 'cocobase', 'fish', 'vehicle', 'socket', 'tracker'];
    const featuredProjects = featuredIds
      .map(id => caseStudies.find(c => c.id === id))
      .filter(Boolean);

    grid.innerHTML = featuredProjects.map(p => {
      const tags = (p.tech || []).slice(0, 3).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
      const codeLink = p.link ? `<a href="${escapeHtml(p.link)}" class="card-action-btn" target="_blank" rel="noopener noreferrer">Kode Sumber ↗</a>` : '';
      const demoLink = p.demo ? `<a href="${escapeHtml(p.demo)}" class="card-action-btn" target="_blank" rel="noopener noreferrer">Demo / Video ↗</a>` : '';

      return `
        <article class="work-card">
          <div class="work-cover" onclick="window.HarunApp.openModal('${p.id}')" role="button" tabindex="0" aria-label="Lihat detail ${escapeHtml(p.name)}">
            ${getProjectSvg(p.id)}
          </div>
          <div class="work-tags">
            <span class="tag dark">${escapeHtml(p.category)}</span>
            ${tags}
          </div>
          <div class="work-card-title">
            <h3>${escapeHtml(p.name)}</h3>
          </div>
          <p>${escapeHtml(p.summary)}</p>
          <div class="work-card-actions">
            <button type="button" class="card-action-btn primary" onclick="window.HarunApp.openModal('${p.id}')">
              Lihat Detail <span>↗</span>
            </button>
            ${codeLink}
            ${demoLink}
          </div>
        </article>
      `;
    }).join('');
  }

  // ----------------------------------------------------------------------------
  // 4. RENDERING ARSIP 25 STUDI KASUS REKAYASA & FILTERING
  // ----------------------------------------------------------------------------
  function renderArchive() {
    const list = document.getElementById('archiveList');
    const countEl = document.getElementById('archiveCount');
    if (!list) return;

    const q = (document.getElementById('projectSearch')?.value || '').toLowerCase().trim();

    const filtered = caseStudies.filter(p => {
      const matchCategory = currentCategory === 'All' || p.category.toLowerCase() === currentCategory.toLowerCase();
      if (!matchCategory) return false;
      if (!q) return true;

      const haystack = [
        p.name,
        p.summary,
        p.description,
        p.role,
        p.status,
        ...(p.tech || []),
        ...(p.alias || [])
      ].join(' ').toLowerCase();

      return haystack.includes(q);
    });

    if (countEl) {
      countEl.textContent = `Menampilkan ${filtered.length} dari ${caseStudies.length} studi kasus rekayasa`;
    }

    if (!filtered.length) {
      list.innerHTML = `<div class="archive-empty">Tidak ada studi kasus yang cocok dengan kriteria pencarian "<strong>${escapeHtml(q)}</strong>".</div>`;
      return;
    }

    list.innerHTML = filtered.map((p, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      return `
        <div class="archive-row" onclick="window.HarunApp.openModal('${p.id}')" role="button" tabindex="0" aria-label="Lihat detail ${escapeHtml(p.name)}">
          <span class="archive-n">${num}</span>
          <div class="archive-name">
            <strong>${escapeHtml(p.name)}</strong>
            <small>${escapeHtml(p.category)} · ${escapeHtml(p.status)}</small>
          </div>
          <div class="archive-desc">${escapeHtml(p.summary)}</div>
          <div class="archive-role">${escapeHtml(p.role)}</div>
          <div class="row-actions">
            <span class="arrow-button" aria-hidden="true">↗</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // ----------------------------------------------------------------------------
  // 5. DETAIL MODAL DIALOG SISTEM (AKSESIBEL & RESPONSIF)
  // ----------------------------------------------------------------------------
  function openModal(id) {
    const project = caseStudies.find(p => p.id === id);
    if (!project) return;

    previousActiveElement = document.activeElement;
    activeModalProject = project;

    const dialog = document.getElementById('projectDialog');
    if (!dialog) return;

    // Injeksi data
    document.getElementById('modalCategory').textContent = project.category.toUpperCase();
    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalSummary').textContent = project.summary;
    document.getElementById('modalVisual').innerHTML = getProjectSvg(project.id);

    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalStatus').textContent = project.status;
    document.getElementById('modalSource').textContent = project.source || 'Portofolio Rekayasa';

    document.getElementById('modalDescription').textContent = project.description;

    const pointsList = document.getElementById('modalPoints');
    pointsList.innerHTML = (project.points || []).map(pt => `<li>${escapeHtml(pt)}</li>`).join('');

    const techList = document.getElementById('modalTech');
    techList.innerHTML = (project.tech || []).map(t => `<span class="tag dark">${escapeHtml(t)}</span>`).join('');

    const actions = document.getElementById('modalActions');
    let actionButtons = '';
    if (project.link) {
      actionButtons += `<a href="${escapeHtml(project.link)}" class="primary-btn" target="_blank" rel="noopener noreferrer">Buka Kode Sumber GitHub ↗</a>`;
    }
    if (project.demo) {
      actionButtons += `<a href="${escapeHtml(project.demo)}" class="secondary-btn" target="_blank" rel="noopener noreferrer">Tinjau Demo / Video ↗</a>`;
    }
    actions.innerHTML = actionButtons || '<span style="font-size:12px;color:#70716b">Dokumentasi teknis internal terverifikasi.</span>';

    dialog.classList.add('active');
    document.body.classList.add('modal-open');

    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    const dialog = document.getElementById('projectDialog');
    if (!dialog) return;

    dialog.classList.remove('active');
    document.body.classList.remove('modal-open');
    activeModalProject = null;

    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  // ----------------------------------------------------------------------------
  // 6. GITHUB REPOSITORI DINAMIS & OFFLINE FALLBACK (43 REPOSITORI)
  // ----------------------------------------------------------------------------
  function setSyncStatus(msg, state = '') {
    const led = document.getElementById('syncLed');
    const text = document.getElementById('syncText');
    if (text) text.textContent = msg;
    if (led) {
      led.className = 'sync-indicator ' + state;
    }
  }

  function populateLanguagesDropdown(repos) {
    const select = document.getElementById('repoLanguage');
    if (!select) return;

    const languages = [...new Set(repos.map(r => r.language).filter(Boolean))].sort();
    select.innerHTML = '<option value="">Semua Bahasa</option>' +
      languages.map(lang => `<option value="${escapeHtml(lang)}">${escapeHtml(lang)}</option>`).join('');
  }

  function applyRepositories(rows, source) {
    verifiedRepos = rows;
    isRepoVerified = true;
    repoDataSource = source;

    // Simpan snapshot di localStorage
    try {
      localStorage.setItem(GH_STORAGE_KEY, JSON.stringify({
        repos: verifiedRepos,
        time: Date.now()
      }));
    } catch (_) {}

    populateLanguagesDropdown(verifiedRepos);

    const exportBtn = document.getElementById('repoExport');
    const exportCsvBtn = document.getElementById('repoExportCSV');
    if (exportBtn) exportBtn.disabled = false;
    if (exportCsvBtn) exportCsvBtn.disabled = false;

    const footnote = document.getElementById('repoFootnote');
    if (footnote) {
      footnote.textContent = `${verifiedRepos.length} repositori publik terverifikasi · Sumber: ${source}`;
    }

    renderRepos();
  }

  function renderRepos() {
    const grid = document.getElementById('repoGrid');
    const countEl = document.getElementById('repoCount');
    const sourceNoteEl = document.getElementById('repoSourceNote');
    if (!grid) return;

    const q = (document.getElementById('repoSearch')?.value || '').toLowerCase().trim();
    const lang = document.getElementById('repoLanguage')?.value || '';
    const includeForks = document.getElementById('includeForks')?.checked ?? true;
    const sort = document.getElementById('repoSort')?.value || 'recent';

    let list = verifiedRepos.filter(r => {
      if (lang && r.language !== lang) return false;
      if (!includeForks && r.fork) return false;
      if (!q) return true;

      const searchable = [
        r.name,
        r.description || '',
        r.language || '',
        ...(r.topics || [])
      ].join(' ').toLowerCase();

      return searchable.includes(q);
    });

    if (sort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'stars') {
      list.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0) || a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => new Date(b.pushed_at || b.updated_at || 0) - new Date(a.pushed_at || a.updated_at || 0));
    }

    if (countEl) {
      countEl.textContent = `${list.length} / ${verifiedRepos.length} repositori`;
    }
    if (sourceNoteEl) {
      sourceNoteEl.textContent = ` · ${repoDataSource}`;
    }

    if (!list.length) {
      grid.innerHTML = '<div class="archive-empty">Tidak ada repositori yang cocok dengan kata kunci atau filter yang dipilih.</div>';
      return;
    }

    grid.innerHTML = list.map(r => {
      const displayName = escapeHtml(r.name.replace(/[-_]+/g, ' '));
      const desc = escapeHtml(r.description || 'Repositori publik dan dokumentasi teknis oleh @rasiharunart1.');
      const langName = escapeHtml(r.language || 'Embedded C++');
      const stars = Number(r.stargazers_count) || 0;
      const url = escapeHtml(r.html_url || `https://github.com/${GH_OWNER}/${r.name}`);

      const dateStr = r.pushed_at || r.updated_at;
      const formattedDate = dateStr ? new Date(dateStr).toLocaleDateString('id-ID', { year: 'numeric', month: 'short' }) : '';

      const topics = (r.topics || []).slice(0, 3).map(tp => `<span class="mini-topic">${escapeHtml(tp)}</span>`).join('');

      return `
        <article class="repo-card">
          <div class="repo-card-head">
            <span class="repo-glyph" aria-hidden="true">⌘</span>
            <small>${r.fork ? 'FORK' : 'SOURCE'}</small>
          </div>
          <div>
            <h3>${displayName}</h3>
            <p>${desc}</p>
          </div>
          ${topics ? `<div class="repo-topics">${topics}</div>` : ''}
          <div class="repo-foot">
            <span><i class="lang-dot"></i>${langName}</span>
            <span>★ ${stars}</span>
            ${formattedDate ? `<span>${escapeHtml(formattedDate)}</span>` : ''}
          </div>
          <div class="repo-links">
            <a href="${url}" target="_blank" rel="noopener noreferrer">Buka Repositori ↗</a>
            <a href="${url}#readme" target="_blank" rel="noopener noreferrer">README ↗</a>
          </div>
        </article>
      `;
    }).join('');
  }

  async function fetchGitHubRepos() {
    const btn = document.getElementById('syncBtn');
    if (btn) {
      btn.disabled = true;
      btn.textContent = '↻ Memeriksa GitHub...';
    }

    setSyncStatus('Menghubungkan ke GitHub REST API (100 per halaman)...', '');

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      const url = `https://api.github.com/users/${GH_OWNER}/repos?type=owner&per_page=100&sort=updated`;
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: 'application/vnd.github+json' }
      });
      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error(`GitHub HTTP ${res.status}`);
      }

      const rows = await res.json();
      if (!Array.isArray(rows) || rows.length === 0) {
        throw new Error('Format repositori tidak valid');
      }

      applyRepositories(rows, 'Live GitHub API');
      setSyncStatus(`${rows.length} repositori publik aktif berhasil disinkronkan langsung dari GitHub`, 'ready');
      showToast('Repositori GitHub berhasil diperbarui langsung!');
    } catch (err) {
      // Coba pulihkan dari localStorage
      try {
        const cached = JSON.parse(localStorage.getItem(GH_STORAGE_KEY) || 'null');
        if (cached && Array.isArray(cached.repos) && cached.repos.length > 0) {
          applyRepositories(cached.repos, 'Snapshot Cache Lokal');
          setSyncStatus(`Offline: Memuat ${cached.repos.length} repositori dari cache tersimpan`, 'ready');
          return;
        }
      } catch (_) {}

      // Fallback offline dataset (43 repositori terverifikasi)
      applyRepositories(fallbackRepos, 'Dataset Terverifikasi (Offline Fallback)');
      setSyncStatus(`Mode Mandiri: Menampilkan ${fallbackRepos.length} repositori publik terverifikasi @${GH_OWNER}`, 'ready');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = '↻ Sinkronkan GitHub';
      }
    }
  }

  // Ekspor & Impor File
  function exportFile(filename, mime, content) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    showToast(`Berkas ${filename} berhasil diunduh!`);
  }

  function exportJSON() {
    exportFile('rasiharunart1_github_repos.json', 'application/json;charset=utf-8', JSON.stringify(verifiedRepos, null, 2));
  }

  function exportCSV() {
    const fields = ['name', 'description', 'language', 'html_url', 'stargazers_count', 'fork', 'pushed_at'];
    const csvContent = fields.join(',') + '\r\n' +
      verifiedRepos.map(r => fields.map(f => `"${String(r[f] || '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
    exportFile('rasiharunart1_github_repos.csv', 'text/csv;charset=utf-8', csvContent);
  }

  // ----------------------------------------------------------------------------
  // 7. INISIALISASI EVENT LISTENERS
  // ----------------------------------------------------------------------------
  function initEvents() {
    // Navigasi Mobile Drawer
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
      });

      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Filter Kategori Kasus
    const filterContainer = document.getElementById('filters');
    if (filterContainer) {
      filterContainer.addEventListener('click', e => {
        const btn = e.target.closest('.filter');
        if (!btn) return;
        filterContainer.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'All';
        renderArchive();
      });
    }

    // Pencarian Studi Kasus
    const projectSearch = document.getElementById('projectSearch');
    if (projectSearch) {
      projectSearch.addEventListener('input', () => {
        renderArchive();
      });
    }

    // Filter & Urutan Repositori GitHub
    ['repoSearch', 'repoLanguage', 'repoSort', 'includeForks'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener(id === 'repoSearch' ? 'input' : 'change', renderRepos);
      }
    });

    // Tombol Sinkronisasi GitHub
    const syncBtn = document.getElementById('syncBtn');
    if (syncBtn) {
      syncBtn.addEventListener('click', fetchGitHubRepos);
    }

    // Ekspor Data Repositori
    const exportJsonBtn = document.getElementById('repoExport');
    if (exportJsonBtn) exportJsonBtn.addEventListener('click', exportJSON);

    const exportCsvBtn = document.getElementById('repoExportCSV');
    if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportCSV);

    // Impor Data Repositori
    const importInput = document.getElementById('repoImport');
    if (importInput) {
      importInput.addEventListener('change', async e => {
        const file = e.target.files[0];
        if (!file) return;
        try {
          const raw = JSON.parse(await file.text());
          const rows = Array.isArray(raw) ? raw : (raw.repositories || raw.repos || raw.items || []);
          if (!rows.length) throw new Error('Data repositori kosong');
          applyRepositories(rows, 'Berkas Impor Manual');
          setSyncStatus(`${rows.length} repositori berhasil diimpor manual`, 'ready');
          showToast('Repositori berhasil diimpor!');
        } catch (err) {
          setSyncStatus('Impor gagal: ' + err.message, 'error');
          showToast('Gagal mengimpor berkas JSON: ' + err.message);
        } finally {
          e.target.value = '';
        }
      });
    }

    // Salin Email
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = config.contact ? config.contact.email : '2211102080@ittelkom-pwt.ac.id';
        copyTextToClipboard(email, 'Alamat email Harun disalin ke clipboard!');
      });
    }

    // Modal Tutup Events
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    const dialog = document.getElementById('projectDialog');
    if (dialog) {
      dialog.addEventListener('click', e => {
        if (e.target === dialog) closeModal();
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && activeModalProject) {
        closeModal();
      }
    });

    // Update Tahun Footer
    const yearSpan = document.getElementById('footerYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // ----------------------------------------------------------------------------
  // 8. BOOTSTRAP INITIALIZATION
  // ----------------------------------------------------------------------------
  function init() {
    renderFeatured();
    renderArchive();
    initEvents();
    fetchGitHubRepos();
  }

  // Ekspos API ke jendela global
  window.HarunApp = {
    openModal,
    closeModal,
    copyEmail: () => {
      const email = config.contact ? config.contact.email : '2211102080@ittelkom-pwt.ac.id';
      copyTextToClipboard(email, 'Email Harun disalin ke clipboard!');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
