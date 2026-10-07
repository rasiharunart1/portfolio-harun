# Portfolio Projects — Harun Ar Rasyid (NH IoT)

> Engineer IoT & Pengembang Embedded System  
> Universitas Telkom Purwokerto · Banyumas, Jawa Tengah

Dokumen ini merangkum proyek yang pernah saya kerjakan di NH IoT. Penjelasannya dibuat ringkas supaya tetap mudah dipahami, tanpa menghilangkan detail teknis penting.

---

## 1. Smart Irrigation System v4.1

**Sistem irigasi pertanian cerdas** berbasis dual-microcontroller (Arduino Uno + ESP32) dengan tiga mode kontrol: manual via Telegram, otomatis berbasis jadwal RTC, dan otomatis berbasis kondisi sensor. Data telemetri dikirim ke ThingSpeak untuk visualisasi historis. Konfigurasi jaringan WiFi dan Telegram disimpan di NVS, dilengkapi captive portal untuk setup awal tanpa perlu upload ulang firmware.

- **Peran:** Pengembang firmware embedded (penuh)
- **Klien:** Mahasiswa skripsi (Juwita)
- **Status:** Selesai — firmware production

**Perangkat keras:**
- Arduino Uno (slave, kontrol relay & sensor)
- ESP32 (master, network & cloud)
- Sensor pH tanah (analog ADC)
- Sensor kelembaban tanah (Soil Moisture)
- Sensor suhu & kelembaban udara DHT22
- Sensor cahaya LDR
- Relay modul (kontrol pompa)
- RTC DS3231 (real-time clock, sinkronisasi via NTP)
- LCD 16×2 I2C

**Perangkat lunak & platform:**
- Arduino Framework (C++)
- FreeRTOS (task scheduling ESP32)
- UART Serial Bridge (Uno ↔ ESP32)
- Telegram Bot API
- ThingSpeak IoT Cloud
- NVS (Non-Volatile Storage) — NTP time sync fix
- Captive Portal WiFi setup

**Teknologi utama:** `ESP32` `Arduino Uno` `DHT22` `LDR` `Soil Moisture` `pH Sensor` `DS3231` `LCD I2C` `Relay` `Telegram Bot` `ThingSpeak` `NVS` `Captive Portal` `C++`

---

## 2. Fall Detector ESP32 

**Sistem deteksi jatuh real-time** untuk monitoring lansia menggunakan accelerometer IMU MPU6050. Mendeteksi jatuh ke 4 arah (depan, belakang, kiri, kanan) dengan mekanisme konfirmasi timer 1500ms untuk menghindari false positive. Data sensor dikirim ke Firebase RTDB setiap 5 detik. Firmware dirancang multi-task menggunakan FreeRTOS dengan pembagian core: MAX30100 di Core 0, sensor lain + Firebase di Core 1, dengan mutex guard untuk mencegah konflik bus I2C.

- **Peran:** Pengembang firmware embedded (penuh)
- **Klien:** Mahasiswa skripsi (Sachita)
- **Status:** Selesai — firmware production

**Perangkat keras:**
- ESP32 (dual core)
- MPU6050 (akselerometer + giroskop, I2C)
- MAX30100 (pulse oximeter + heart rate, I2C)
- DS18B20 (suhu tubuh, OneWire)

**Perangkat lunak & platform:**
- FreeRTOS — 4 task, 2 core (taskMAX30100, taskSensor, taskWiFi, taskFirebase)
- I2C Mutex (xSemaphoreCreateMutex) — mencegah bus conflict
- Firebase RTDB — HTTPS PUT/POST via WiFiClientSecure
- EMA Filter (α=0.4) — stabilisasi pembacaan HR & SpO2
- Signal timeout detection (1 detik)
- Fall confirmation timer (1500ms, timer-based pattern)

**Teknologi utama:** `ESP32` `MPU6050` `MAX30100` `DS18B20` `FreeRTOS` `I2C Mutex` `Firebase RTDB` `WiFiClientSecure` `EMA Filter` `C++`

---

## 3. SmartMeter PZEM-004T

**Unit monitoring daya listrik portabel** dengan tampilan LCD dan penyimpanan data ke Firebase RTDB. Dilengkapi captive portal berbasis WiFi AP+STA untuk setup awal tanpa perlu serial monitor. Konfigurasi WiFi, Firebase URL, dan threshold tersimpan di NVS sehingga tetap aktif setelah restart. Update LCD menggunakan dirty flag (tulis hanya jika berubah) untuk mencegah flicker.

- **Peran:** Pengembang firmware embedded (penuh)
- **Klien:** Juwita (Smart Socket project awal)
- **Status:** Selesai

**Perangkat keras:**
- ESP32
- PZEM-004T V3 (monitoring tegangan, arus, daya, energi, frekuensi, power factor)
- LCD 16×2 I2C

**Perangkat lunak & platform:**
- UART (Serial2) — komunikasi ESP32 ↔ PZEM-004T
- Firebase RTDB — HTTPS realtime update
- WiFi Captive Portal — AP+STA mode, WebServer konfigurasi
- NVS (Preferences) — simpan kredensial & konfigurasi
- WebServer lokal — set WiFi SSID, password, Firebase URL
- Non-blocking millis() — semua timer tanpa delay()
- Dirty flag pattern — push Firebase hanya saat ada perubahan

**Teknologi utama:** `ESP32` `PZEM-004T V3` `LCD I2C` `Firebase RTDB` `WiFiClientSecure` `Captive Portal` `NVS` `WebServer` `C++`

---

## 4. Smart Socket IoT (Dual Channel Power Monitor)

**Unit monitoring &amp; kontrol daya listrik 2 soket** berbasis ESP32 dengan 2 unit PZEM-004T terpisah per soket. Dilengkapi proteksi otomatis (overcurrent, overpower, overtemperature, smoke detection) dan integrasi ke platform Blynk IoT. Desain PCB dan enclosure custom box. Versi kedua (v2) dimigrasikan ke backend Laravel 13 dengan komunikasi MQTT HiveMQ Cloud (TLS 8883).

- **Peran:** Pengembang firmware embedded dan backend Laravel (integrasi MQTT)
- **Klien:** Juwita Wilda
- **Status:** v1 selesai (Blynk) · v2 dalam pengembangan (Laravel + MQTT)

**Perangkat keras:**
- ESP32
- 2× PZEM-004T V3 (monitoring per soket, UART terpisah)
- 2× Relay (kontrol soket)
- DS18B20 (suhu)
- MQ-2 (sensor asap)
- LCD 16×2 I2C
- PCB custom / dot matrix

**Perangkat lunak & platform (v1 — Blynk):**
- Blynk IoT — dashboard monitoring & kontrol relay
- Virtual pin mapping (V0–V18)
- Auto protection — cutoff relay saat melebihi threshold
- EMA filter suhu & asap

**Perangkat lunak & platform (v2 — Laravel):**
- Laravel 13 (PHP 8.3+) — backend utama
- HiveMQ Cloud — MQTT broker TLS port 8883
- MQTT Topics: `smartsocket/{uid}/telemetry`, `/command/switch`, `/alert`
- Laravel Artisan Command — daemon `mqtt:listen`
- Laravel Breeze (Blade) — autentikasi kustom
- Eloquent ORM — model Device, SocketChannel, TelemetryLog
- Vite — asset bundler

**Teknologi utama:** `ESP32` `PZEM-004T V3` `MQ-2` `DS18B20` `Relay` `LCD I2C` `Blynk IoT` `Laravel 13` `MQTT` `HiveMQ Cloud` `PHP 8.3` `MySQL` `Vite` `Blade` `C++`

---

## 5. Power Monitoring Unit 

**Unit monitoring konsumsi daya listrik** dengan PZEM-004T yang dikirimkan ke backend Laravel melalui HTTP REST API. Hardware menggunakan box Duradus dengan aviation plug untuk koneksi sensor yang rapi dan tahan lama. Supply dari klien (box + aviation plug), NH IoT mengerjakan PCB, firmware, dan assembly.

- **Peran:** Pengembang firmware embedded dan perakitan perangkat
- **Klien:** Maszeh
- **Nilai proyek:** Rp 550.000 (DP Rp 150.000)
- **Status:** Selesai

**Perangkat keras:**
- ESP32
- PZEM-004T (tegangan, arus, daya aktif, energi)
- Box Duradus (dari klien)
- Aviation plug (dari klien)
- PCB dot matrix

**Perangkat lunak & platform:**
- UART Serial — ESP32 ↔ PZEM-004T
- HTTP POST — kirim data ke server Laravel
- WiFi STA mode

**Teknologi utama:** `ESP32` `PZEM-004T` `Laravel (HTTP API)` `PCB Assembly` `Aviation Plug` `C++`

---

## 6. RF Antenna Auto Tracker v2.3

**Sistem pelacak antena otomatis** dua sumbu (YAW 0–180° dan PITCH 0–90°) yang dikendalikan oleh sinyal RSSI dari RTL-SDR via Python GUI dan Blynk Cloud. ESP32 melakukan scanning spiral dan auto-lock saat sinyal target ditemukan dengan konfirmasi 3× berturut-turut. Dilengkapi latching button untuk restart scan manual dan OLED display untuk status real-time. Python GUI menampilkan spektrum FFT real-time dari RTL-SDR dan mengirim RSSI ke Blynk.

- **Peran:** Pengembang firmware ESP32 dan antarmuka Python
- **Status:** Selesai — v2.3

**Perangkat keras (ESP32):**
- ESP32
- PCA9685 (PWM driver servo, I2C)
- SSD1306 OLED (status display, I2C)
- 2× Servo motor (YAW ch1, PITCH ch0)
- Latching button (GPIO 13, edge detect)

**Perangkat keras (SDR):**
- RTL-SDR USB dongle

**Perangkat lunak & platform (firmware ESP32):**
- Blynk IoT — V0 RSSI, V1 frekuensi, V4 threshold, V5 restart, V6 lock status
- PCA9685 driver — `setServoAngleSlow()` untuk gerakan halus
- Non-blocking millis() — scan step, OLED update 500ms
- Auto-lock dengan 3× confirm count
- State machine: SCANNING → LOCKED_AUTO / LOCKED_MANUAL → RESTART

**Perangkat lunak & platform (antarmuka Python):**
- tkinter — GUI framework
- matplotlib — real-time FFT spectrum plot
- pyrtlsdr / RTL-SDR library
- Threading — SDRWorker daemon thread (producer)
- Queue — `data_queue` thread-safe producer-consumer
- Blynk HTTP API — push RSSI (V0), pull threshold (V4)
- Simulated mode (numpy fake data) jika RTL-SDR tidak tersedia

**Teknologi utama:** `ESP32` `PCA9685` `SSD1306 OLED` `Servo` `Blynk IoT` `Python` `RTL-SDR` `tkinter` `matplotlib` `threading` `Queue` `C++`

---

## 7. Smart Brankas KeyGuard v2.3

**Brankas digital berbasis IoT** dengan proteksi PIN 6 digit, state machine 5 kondisi, dan sinkronisasi konfigurasi real-time dari Firebase. Solenoid lock dikendalikan relay LOW-active. Reed switch mendeteksi buka/tutup pintu untuk auto-lock otomatis. Load cell HX711 mendeteksi keberadaan kunci fisik di dalam brankas. Sensor getaran (vibration) memicu alert saat brankas diguncang. Semua konfigurasi (PIN, threshold, timeout) dapat diubah dari Firebase tanpa upload ulang firmware.

- **Peran:** Pengembang firmware embedded (penuh)
- **Klien:** Mahasiswa skripsi ("Ren")
- **Status:** Selesai — v2.3

**Perangkat keras:**
- ESP32
- Keypad 4×4 (GPIO matriks 8 pin)
- LCD 16×2 I2C (0x27)
- HX711 + Load Cell (deteksi kunci fisik)
- Solenoid lock + Relay (LOW-active)
- Reed Switch (deteksi pintu)
- Vibration sensor (INPUT_PULLUP)

**Perangkat lunak & platform:**
- State Machine — 5 state: LOCKED, ENTERING_PIN, UNLOCKED, DOOR_OPENED, TIMEOUT_LOCK
- Firebase RTDB — status, config, riwayat aktivitas
- NVS (Preferences) — simpan config & counter riwayat (persist setelah restart)
- EMA Filter adaptif (α=0.4/0.8) — stabilisasi load cell
- Dirty flag pattern — push Firebase hanya saat ada perubahan
- Non-blocking millis() — semua timer (countdown, blink LCD, heartbeat)
- LCD anti-flicker — tulis hanya jika konten berubah
- Re-init I2C setelah solenoid mati (noise mitigation)
- Brute force protection — blokir keypad setelah N kali salah
- NTP timestamp — semua riwayat dicatat dengan waktu WIB

**Teknologi utama:** `ESP32` `HX711` `Keypad 4×4` `LCD I2C` `Solenoid Relay` `Reed Switch` `Vibration Sensor` `Firebase RTDB` `NVS` `State Machine` `NTP` `C++`

---

## 8. SENA Smart Garden v2

**Sistem smart garden** dengan kontrol pompa irigasi berbasis Fuzzy Logic Mamdani lokal yang tetap berfungsi meskipun tanpa koneksi internet. Parameter fuzzy (threshold kelembaban & pH) dapat diperbarui real-time dari server. Mendukung 2 mode kontrol: AUTO (fuzzy logic) dan MANUAL (dashboard web). Telemetri dikirim via HTTPS REST API ke server Laravel setiap 2 detik; polling command server setiap 3 detik.

- **Peran:** Pengembang firmware embedded (penuh)
- **Klien:** SENA IoT Team
- **Status:** Selesai — v2

**Perangkat keras:**
- ESP32
- DHT22 (suhu & kelembaban udara)
- LDR (intensitas cahaya, ADC1)
- Soil Moisture sensor (kelembaban tanah, ADC1)
- pH sensor (analog, ADC1 — 21 sampel trimmed mean)
- LCD 20×4 I2C (PCF8574, 0x27)
- Relay (pompa air, LOW-active)

**Perangkat lunak & platform:**
- Fuzzy Logic Mamdani — 9 rule base (3 soil × 3 pH), defuzzifikasi weighted average
- EMA Filter adaptif — soil & LDR stabilization
- Trimmed Mean Filter pH — 21 sampel, buang 3 tertinggi & 3 terendah
- REST API HTTPS — POST telemetri, GET device-commands
- Mode switching AUTO/MANUAL — server override via response JSON
- Fuzzy config update — parameter dapat diperbarui dari server real-time
- LCD 20×4 center alignment — 3 layar bergantian non-blocking
- WiFi auto-reconnect non-blocking
- ADC1 only — menghindari konflik ADC2 dengan WiFi radio

**Teknologi utama:** `ESP32` `DHT22` `LDR` `Soil Moisture` `pH Sensor` `LCD 20×4 I2C` `Relay` `Fuzzy Logic Mamdani` `REST API HTTPS` `Laravel Backend` `WiFiClientSecure` `ArduinoJson` `C++`

---

## 9. Radiator Bus Monitor

**Sistem monitoring radiator bus** untuk memantau suhu air pendingin mesin dan level air reservoir secara real-time. Dilengkapi alarm 3 level (NORMAL/WASPADA/BAHAYA) dengan indikator LED 3 warna, buzzer BEEP-BEEP-BEEP non-blocking, dan blinking backlight LCD. Semua threshold dapat diubah melalui web dashboard lokal tanpa perlu upload ulang firmware — tersimpan di NVS. Dashboard web dapat diakses dari smartphone pengemudi via WiFi AP langsung tanpa router atau internet.

- **Peran:** Pengembang firmware embedded (penuh)
- **Klien:** NH IoT internal project
- **Status:** Selesai

**Perangkat keras:**
- ESP32
- XKC-Y25 (sensor level air non-contact, digital)
- DS18B20 (suhu air radiator, OneWire)
- LCD 20×4 I2C
- LED 3 warna (Merah/Kuning/Hijau — GPIO 16, 4, 15)
- Buzzer 2-pin (GPIO 33)

**Perangkat lunak & platform:**
- 3-level alarm logic — prioritas: air kosong > suhu kritis > suhu waspada > sensor error
- WiFi Access Point (WIFI_AP) — jaringan lokal tanpa router, IP statis 192.168.4.1
- WebServer HTTP — dashboard real-time + halaman setting threshold
- AJAX polling — JavaScript fetch `/data` setiap 1.5 detik, update DOM tanpa reload
- JSON API endpoint `/data` — status real-time untuk dashboard
- NVS (Preferences) — simpan threshold suhu & mode sensor, persist setelah restart
- Non-blocking millis() — 4 timer independen (sensor, LCD, buzzer beep, backlight blink)
- PROGMEM — HTML dashboard disimpan di flash memory (hemat RAM)
- Mode XKC-Y25 — NO/NC konfigurasi lewat halaman web

**Teknologi utama:** `ESP32` `XKC-Y25` `DS18B20` `LCD 20×4 I2C` `LED` `Buzzer` `WiFi AP` `WebServer` `AJAX` `JSON API` `NVS` `PROGMEM` `OneWire` `C++`

---

## 10. Water Quality Monitor (Kalibrasi & Assembly)

**Unit monitoring kualitas air** dengan 3 sensor dalam satu enclosure watertight. NH IoT mengerjakan kalibrasi 2 titik sensor pH (buffer pH 4 & pH 7), kalibrasi sensor NTU (turbiditas/kekeruhan), serta perakitan seluruh hardware dalam Box Duradus dengan koneksi aviation plug. Desain enclosure menempatkan semua port sensor di sisi bawah agar terlindung dari air hujan.

- **Peran:** Engineer kalibrasi sensor dan teknisi perakitan
- **Klien:** Mahasiswa skripsi
- **Status:** Proposal — Rp 600.000 (nego, di luar komponen)

**Perangkat keras:**
- ESP32 (firmware dikerjakan pihak lain)
- pH Sensor (analog)
- NTU Sensor / Turbidity Sensor (analog)
- DS18B20 (suhu air, OneWire)
- Box Duradus IP65
- PCB dot matrix
- Stepdown DC-DC converter (12V → 5V/3.3V)
- Aviation plug GX16 (4 port: PH, NTU, DS18B20, Adaptor)
- Adaptor 12V

**Lingkup kalibrasi:**
- pH 2-point calibration — buffer pH 4.0 & pH 7.0, hitung slope ADC → pH
- NTU baseline calibration — air RO/aquades sebagai referensi 0 NTU
- DS18B20 — verifikasi pembacaan suhu (no kalibrasi khusus diperlukan)

**Teknologi utama:** `ESP32` `pH Sensor` `NTU/Turbidity Sensor` `DS18B20` `Aviation Plug` `PCB Assembly` `Box Duradus IP65` `2-Point Calibration` `Stepdown DC-DC`

---

*Dokumen ini dibuat oleh Harun Ar Rasyid — NH IoT*  
*Banyumas, Jawa Tengah · Universitas Telkom Purwokerto (batch 2022)*
