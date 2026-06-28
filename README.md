# 🌐 Panduan Manajemen Website Portfolio & Asset

Dokumentasi ini dibuat untuk membantu Anda mengelola isi konten, foto (asset), informasi kontak, dan proyek pada website portfolio Anda secara mudah melalui file konfigurasi `.env`, tanpa perlu menyentuh atau mengubah kode HTML/CSS/JS secara langsung.

---

## 📂 Struktur Folder Website
Struktur folder diatur sedemikian rupa agar pengelolaan aset gambar menjadi rapi dan terorganisir:

```text
portfolioweb/
├── assets/
│   └── images/
│       ├── logos/       # Tempat menyimpan gambar logo website/brand Anda
│       │   └── .gitkeep
│       ├── profile/     # Tempat menyimpan foto profil Anda
│       │   └── .gitkeep
│       └── projects/    # Tempat menyimpan gambar screenshot / cover dari proyek
│           └── .gitkeep
├── css/
│   └── style.css        # Desain layout dan tema Glassmorphism responsif
├── js/
│   ├── config.js        # Script loader otomatis file .env (Client-side parser)
│   └── app.js           # Controller utama pengisi data dinamis pada halaman
├── .env                 # File aktif untuk semua konfigurasi data & aset Anda ⚠️
├── .env.example         # Template cadangan konfigurasi
├── README.md            # Dokumentasi panduan manajemen (File ini)
└── index.html           # Struktur layout utama website
```

---

## 🛠️ Cara Mengelola Konten Melalui File `.env`

File `.env` di direktori utama adalah pusat pengaturan website Anda. Anda dapat membukanya menggunakan text editor (VS Code, Notepad, dll) dan merubah isinya.

### 1. Mengubah Data Profil & Kontak
Ubah baris-baris berikut di `.env` sesuai informasi Anda:
```env
# --- INFORMASI UMUM ---
SITE_NAME="Nama Lengkap Anda"
SITE_TITLE="Portfolio | Nama Anda"
SITE_ROLE="Pekerjaan / Keahlian Anda (misal: UI/UX Designer & Web Developer)"
SITE_BIO="Tulis perkenalan singkat tentang diri Anda di sini."

# --- INFORMASI KONTAK ---
CONTACT_EMAIL="emailanda@gmail.com"
CONTACT_PHONE="+628123456789"
CONTACT_WHATSAPP="https://wa.me/628123456789"    # Format link WA lengkap
CONTACT_LOCATION="Kota, Negara"
```

### 2. Menghubungkan Media Sosial
Anda dapat memasukkan tautan (URL) media sosial Anda. Jika suatu media sosial tidak diisi (atau nilainya dikosongkan), tombol media sosial tersebut secara otomatis akan disembunyikan dari tampilan web.
```env
CONTACT_GITHUB="https://github.com/username-anda"
CONTACT_LINKEDIN="https://linkedin.com/in/username-anda"
CONTACT_INSTAGRAM="https://instagram.com/username-anda"
```

---

## 📸 Panduan Manajemen & Mapping Foto (Assets)

Untuk memasukkan foto Anda ke dalam website:
1. Pindahkan file foto/gambar Anda ke folder yang sesuai di dalam `assets/images/`.
2. Buka `.env` dan masukkan path/nama file gambar tersebut pada variabel yang bersangkutan.

### 1. Pengaturan Foto Utama
```env
IMAGE_LOGO="assets/images/logos/logo.png"       # Gambar logo di pojok kiri atas
IMAGE_HERO_BG="assets/images/hero-bg.jpg"      # Gambar latar belakang halaman depan
IMAGE_PROFILE="assets/images/profile/profil.png"  # Foto profil Anda di bagian Tentang
```

### 2. Tips & Rekomendasi Format Foto
Agar website memuat dengan cepat dan tampak profesional, ikuti rekomendasi berikut:
* **Foto Profil (`IMAGE_PROFILE`)**:
  * Rekomendasi Rasio: **1:1 (Persegi/Square)**.
  * Ukuran Optimal: `400px x 400px` hingga `800px x 800px`.
  * Format: `.jpg`, `.jpeg`, atau `.png` (gunakan `.png` transparan jika ingin latar belakang menyatu).
* **Cover Proyek (`PROJECT_X_IMAGE`)**:
  * Rekomendasi Rasio: **16:9 (Landscape)**.
  * Ukuran Optimal: `800px x 450px`.
  * Format: `.jpg` atau `.webp` (ukuran file terkompresi lebih baik).
* **Background Hero (`IMAGE_HERO_BG`)**:
  * Gunakan gambar pemandangan, abstrak, atau pola gelap berukuran besar (`1920px x 1080px`).
  * Jika dikosongkan, bagian hero akan menggunakan warna solid gelap bergradasi yang sudah disediakan oleh sistem CSS.

---

## 💼 Mengelola Proyek Portfolio

Anda dapat menampilkan proyek Anda secara dinamis dengan mengedit blok data proyek di `.env`. Struktur proyek didesain dari indeks `1` hingga `N`.

### Contoh Konfigurasi Proyek:
```env
# Proyek 1
PROJECT_1_ACTIVE="true"                              # Set ke "false" untuk menyembunyikan proyek ini
PROJECT_1_CAT="Computer Vision • IoT"                # Kategori proyek
PROJECT_1_STATUS="active"                            # Status proyek ("active" atau "completed")
PROJECT_1_TITLE="Sistem IoT Pemantau Buzzer"        # Judul proyek
PROJECT_1_DESC="Deskripsi singkat mengenai proyek..."
PROJECT_1_TAGS="ESP32, PHP, Chart.js"               # Tag/teknologi (pisahkan dengan koma)
PROJECT_1_IMAGE="assets/images/projects/proyek1.jpg" # Foto/Gambar proyek (Opsional)
PROJECT_1_VIDEO="https://www.youtube.com/watch?v=.." # Video YouTube (Opsional - menggantikan Foto)
PROJECT_1_GITHUB="https://github.com/user/proyek"   # Tautan repositori GitHub (Opsional)
PROJECT_1_DEMO="https://link-demo.com"               # Tautan live demo / case study (Opsional)
```

> [!NOTE]
> **Fitur Video YouTube**: Jika Anda mengisi `PROJECT_X_VIDEO` dengan tautan video YouTube (bisa berupa link share biasa dari HP/Browser), website akan otomatis menyematkan (embed) video tersebut dalam bentuk player interaktif menggantikan foto sampul proyek.

Untuk menambah proyek baru, cukup salin format di atas dan ganti angkanya (misal: `PROJECT_4_ACTIVE`, `PROJECT_4_TITLE`, dst). Script akan otomatis membacanya secara berurutan.

---

## 🚀 Cara Menjalankan Website Secara Lokal

Karena browser menerapkan kebijakan keamanan (CORS) yang ketat, browser akan memblokir pembacaan file `.env` jika Anda membuka file `index.html` hanya dengan **klik ganda (double-click)** langsung dari file manager (menggunakan protokol `file://`).

Agar perubahan di `.env` terbaca secara real-time di browser, Anda perlu menjalankannya menggunakan **Local Web Server**:

### Opsi 1: Menggunakan VS Code Extension (Sangat Direkomendasikan)
1. Pasang extension **Live Server** di VS Code Anda.
2. Klik kanan pada `index.html`, lalu pilih **"Open with Live Server"**.

### Opsi 2: Menggunakan Python (Tanpa Install Apapun)
Jika komputer Anda sudah terinstall Python, buka terminal/cmd di folder project ini lalu jalankan:
```bash
python -m http.server 8000
```
Lalu buka browser Anda di alamat: `http://localhost:8000`

### Opsi 3: Menggunakan NodeJS (NPM)
Buka terminal di folder project ini lalu jalankan:
```bash
npx http-server
```
Atau jalankan server development apapun yang Anda sukai.

> [!NOTE]
> Jika Anda terpaksa membuka website langsung tanpa server (mengklik ganda file `index.html`), website akan secara otomatis mendeteksi masalah tersebut dan menggunakan **data default/cadangan** (fallback) agar website tetap bisa berjalan dengan cantik di browser Anda.
