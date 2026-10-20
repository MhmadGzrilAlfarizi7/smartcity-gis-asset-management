// =========================================================================
// Logika JavaScript Sederhana: Sistem Informasi Geografis (WebGIS)
// Dibuat ramah pemula, terstruktur, dan mudah dipelajari oleh mahasiswa
// =========================================================================

// -------------------------------------------------------------------------
// 1. DATA ASET KOTA CERDAS (Data Spasial + Data Atribut)
// -------------------------------------------------------------------------
// Setiap objek memiliki:
// - Data Spasial: lat (lintang) dan lng (bujur)
// - Data Atribut: id, nama, kategori, status, tahun, keterangan
const dataAset = [
    {
        id: "PLN-001",
        nama: "Gardu Listrik Distribusi Pusat",
        kategori: "Listrik",
        lat: -6.1754,
        lng: 106.8272,
        status: "Baik",
        tahun: 2021,
        keterangan: "Trafo beroperasi normal memasok listrik kawasan perkantoran."
    },
    {
        id: "PLN-002",
        nama: "Trafo Listrik Pembagi Barat",
        kategori: "Listrik",
        lat: -6.1785,
        lng: 106.8220,
        status: "Perlu Servis",
        tahun: 2018,
        keterangan: "Ditemukan penurunan tegangan berkala, perlu penggantian oli trafo."
    },
    {
        id: "PDAM-101",
        nama: "Katup Utama (Main Valve) Pipa Air Bersih",
        kategori: "Air PDAM",
        lat: -6.1720,
        lng: 106.8300,
        status: "Baik",
        tahun: 2022,
        keterangan: "Tekanan air 4.2 Bar, katup bekerja optimal."
    },
    {
        id: "PDAM-102",
        nama: "Pipa Distribusi Tekanan Tinggi",
        kategori: "Air PDAM",
        lat: -6.1810,
        lng: 106.8320,
        status: "Perlu Servis",
        tahun: 2017,
        keterangan: "Terdapat indikasi rembesan air bawah tanah pada sambungan pipa."
    },
    {
        id: "FAS-201",
        nama: "Puskesmas Kecamatan Siaga 24 Jam",
        kategori: "Fasilitas",
        lat: -6.1700,
        lng: 106.8240,
        status: "Baik",
        tahun: 2020,
        keterangan: "Fasilitas kesehatan masyarakat lengkap dengan genset cadangan."
    },
    {
        id: "FAS-202",
        nama: "Halte Transportasi Cerdas",
        kategori: "Fasilitas",
        lat: -6.1765,
        lng: 106.8340,
        status: "Baik",
        tahun: 2023,
        keterangan: "Dilengkapi layar jadwal armada busway real-time dan sensor CCTV."
    },
    {
        id: "PLN-003",
        nama: "Tiang Lampu Penerangan Jalan Pintar (PJU)",
        kategori: "Listrik",
        lat: -6.1730,
        lng: 106.8210,
        status: "Baik",
        tahun: 2023,
        keterangan: "Lampu LED hemat energi otomatis menyala saat gelap."
    },
    {
        id: "PDAM-103",
        nama: "Sensor Pengukur Kekeruhan Air PDAM",
        kategori: "Air PDAM",
        lat: -6.1830,
        lng: 106.8260,
        status: "Baik",
        tahun: 2022,
        keterangan: "Sensor digital mendeteksi kejernihan air secara otomatis."
    }
];

// -------------------------------------------------------------------------
// 2. INISIALISASI PETA DENGAN LEAFLET.JS
// -------------------------------------------------------------------------
// Tentukan koordinat tengah peta (Pusat Jakarta / Monas) dan tingkat zoom awal (15)
const map = L.map('map').setView([-6.1754, 106.8272], 15);

// Memuat lapisan peta gratis dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© Kontributor OpenStreetMap'
}).addTo(map);

// Wadah (LayerGroup) untuk menampung marker peta agar mudah dihapus/ditampilkan ulang saat difilter
const markerLayer = L.layerGroup().addTo(map);

// -------------------------------------------------------------------------
// 3. FUNGSI UNTUK MENAMPILKAN MARKER DI PETA
// -------------------------------------------------------------------------
function tampilkanMarker(kategoriYangDipilih) {
    // 1. Hapus semua marker yang ada sebelumnya
    markerLayer.clearLayers();

    // 2. Lakukan perulangan pada dataAset
    dataAset.forEach(aset => {
        // Cek apakah aset sesuai dengan kategori yang sedang difilter
        if (kategoriYangDipilih === 'Semua' || aset.kategori === kategoriYangDipilih) {
            
            // Tentukan warna marker: Hijau jika Baik, Merah jika Perlu Servis
            const warnaMarker = aset.status === 'Baik' ? '#16a34a' : '#dc2626';

            // Buat lingkaran marker di koordinat [lat, lng]
            const marker = L.circleMarker([aset.lat, aset.lng], {
                radius: 9,
                fillColor: warnaMarker,
                color: '#ffffff',       // Garis tepi putih
                weight: 2,
                opacity: 1,
                fillOpacity: 0.85
            });

            // Tambahkan popup kecil saat marker diklik di peta
            marker.bindPopup(`
                <div style="font-size: 13px;">
                    <strong>${aset.nama}</strong><br>
                    <span style="color: #64748b;">Kategori: ${aset.kategori}</span><br>
                    <span>Status: <strong style="color: ${warnaMarker};">${aset.status}</strong></span>
                </div>
            `);

            // Ketika marker diklik, tampilkan data lengkapnya ke panel sidebar
            marker.on('click', function() {
                tampilkanDetail(aset);
            });

            // Masukkan marker ke dalam peta
            marker.addTo(markerLayer);
        }
    });
}

// -------------------------------------------------------------------------
// 4. FUNGSI MENAMPILKAN DETAIL ASET DI PANEL SAMPING (SIDEBAR)
// -------------------------------------------------------------------------
function tampilkanDetail(aset) {
    // Sembunyikan teks placeholder dan munculkan box detail
    document.getElementById('placeholderText').style.display = 'none';
    document.getElementById('detailPanel').style.display = 'block';

    // Isi teks ke elemen HTML
    document.getElementById('detailNamaAset').innerText = aset.nama;
    document.getElementById('detailKode').innerText = aset.id;
    document.getElementById('detailKategori').innerText = aset.kategori;
    document.getElementById('detailKoordinat').innerText = `${aset.lat}, ${aset.lng}`;
    document.getElementById('detailTahun').innerText = aset.tahun;
    document.getElementById('detailKeterangan').innerText = aset.keterangan;

    // Format badge status kondisi
    const statusElem = document.getElementById('detailStatus');
    if (aset.status === 'Baik') {
        statusElem.innerHTML = `<span class="badge-status badge-baik">✅ Kondisi Baik</span>`;
    } else {
        statusElem.innerHTML = `<span class="badge-status badge-servis">⚠️ Perlu Servis Segera</span>`;
    }
}

// -------------------------------------------------------------------------
// 5. FUNGSI MENGHITUNG STATISTIK RINGKASAN
// -------------------------------------------------------------------------
function updateStatistik() {
    const total = dataAset.length;
    const baik = dataAset.filter(a => a.status === 'Baik').length;
    const perluServis = dataAset.filter(a => a.status === 'Perlu Servis').length;

    // Tampilkan angka ke HTML
    document.getElementById('totalAset').innerText = total;
    document.getElementById('totalBaik').innerText = baik;
    document.getElementById('totalPerluServis').innerText = perluServis;
}

// -------------------------------------------------------------------------
// 6. FUNGSI FILTER KATEGORI (Dipanggil saat tombol filter diklik)
// -------------------------------------------------------------------------
function filterAset(kategori) {
    // 1. Perbarui tampilan aktif pada tombol filter
    const buttons = document.querySelectorAll('.btn-filter');
    buttons.forEach(btn => {
        if (btn.innerText.includes(kategori) || (kategori === 'Semua' && btn.innerText.includes('Semua'))) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Tampilkan marker yang sesuai kategori
    tampilkanMarker(kategori);
}

// -------------------------------------------------------------------------
// 7. JALANKAN SAAT HALAMAN PERTAMA KALI DIBUKA
// -------------------------------------------------------------------------
window.onload = function() {
    updateStatistik();
    tampilkanMarker('Semua');
};
