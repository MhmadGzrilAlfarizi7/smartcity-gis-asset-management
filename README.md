# 🏙️ Smart City GIS: Manajemen Aset & Infrastruktur Perkotaan

> **Tugas Praktikum & Implementasi Kuliah Tamu Informatika Seri 3**  
> **Tema:** *Career and Competition in Industry Era with GIS*  
> **Konsep Kunci:** $\text{Data Spasial (Lokasi)} + \text{Data Atribut (Informasi)} \implies \text{Pengambilan Keputusan Berbasis Peta}$

---

## 📖 1. Latar Belakang & Pemahaman Materi

Dalam era industri modern dan pembangunan kota cerdas (*Smart City*), pengelolaan fasilitas umum (seperti gardu listrik PLN, pipa distribusi air PDAM, lampu jalan, dan fasilitas publik) tidak lagi efektif jika hanya dicatat dalam tabel spreadsheet biasa.

Teknologi **GIS (Geographic Information System)** menggabungkan dua unsur utama:
1. **Data Spasial:** Informasi posisi geografis (garis lintang/latitude dan bujur/longitude) di atas peta bumi.
2. **Data Atribut:** Informasi deskriptif objek (kode aset, kondisi kesehatan aset, tahun pengadaan, jadwal perawatan).

Aplikasi ini mendemonstrasikan bagaimana seorang **GIS Developer / Analyst** pemula membangun sistem pemetaan digital berbasis web (*WebGIS*) untuk memantau aset kota secara *real-time*.

---

## 🎯 2. Fitur Aplikasi

* 🗺️ **Peta Interaktif Digital:** Menampilkan peta jalan wilayah kota menggunakan pustaka *Leaflet.js* dan *OpenStreetMap*.
* 📍 **Penanda Lokasi (Markers) Berwarna:**
  * 🟢 **Hijau:** Aset dalam kondisi normal/baik.
  * 🔴 **Merah:** Aset kritis yang membutuhkan perbaikan segera.
* 🔍 **Filter Kategori Aset:** Memfilter tampilan titik di peta berdasarkan kategori (*Jaringan Listrik*, *Pipa Air PDAM*, *Fasilitas Publik*, atau *Semua Aset*).
* 📋 **Panel Detail Atribut Aset:** Menampilkan rincian data aset (kode, koordinat, kondisi, tahun pengadaan, keterangan teknis) ketika marker diklik.
* 📊 **Ringkasan Statistik Otomatis:** Menghitung jumlah total aset, aset berkondisi baik, dan aset yang butuh servis secara otomatis.

---

## 🛠️ 3. Struktur Berkas Proyek

```text
smartcity-gis-asset-management/
├── index.html     # Halaman utama (struktur layout sidebar & kontainer peta)
├── style.css      # Desain tampilan sederhana, bersih, dan mudah dipahami
├── app.js         # Logika JavaScript: inisialisasi Leaflet, data aset, perulangan marker & filter
└── README.md      # Laporan dokumentasi tugas kuliah
```

---

## 💻 4. Teknologi yang Digunakan

* **HTML5:** Struktur dokumen web sederhana.
* **CSS3:** Tata letak fleksibel (*Flexbox*) dan pewarnaan antarmuka.
* **JavaScript (Vanilla JS):** Pengolahan array objek, manipulasi DOM, dan event interaksi klik.
* **Leaflet.js (v1.9.4):** Pustaka geospasial *open-source* ringan standar industri.
* **OpenStreetMap Tile:** Peta dasar kartografi terbuka.

---

## 🚀 5. Cara Menjalankan Aplikasi

Aplikasi ini dibuat murni menggunakan teknologi web standar (*Client-side*), sehingga **tidak membutuhkan instalasi server yang rumit**:

1. Buka folder proyek di File Explorer:
   ```
   C:\Users\user\Documents\.gemini\antigravity\scratch\smartcity-gis-asset-management
   ```
2. **Klik dua kali (*double click*)** pada file `index.html`.
3. Peta dan dashboard aset kota cerdas akan langsung terbuka di browser Anda (Google Chrome / Microsoft Edge).

---

## 👨‍💻 6. Refleksi Pembelajaran Mahasiswa

Sebagai mahasiswa IT, proyek ini memberikan pengalaman langsung bahwa keterampilan web development (HTML, CSS, JavaScript) dapat langsung diterapkan pada industri teknologi geospasial. Memahami cara mengaitkan titik koordinat dengan data atribut membuka peluang karir di bidang *Smart City Management*, *Asset & Infrastructure Monitoring*, dan *Data Analytics*.
