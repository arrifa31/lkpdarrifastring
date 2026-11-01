function hitungKasir() {
    let hargaInput = document.getElementById('harga').value;
    let jumlahInput = document.getElementById('jumlah').value;

    // Konversi dari String ke Number
    let harga = Number(hargaInput);
    let jumlah = Number(jumlahInput);

    let total = harga * jumlah;

    document.getElementById('hasilKasir').innerText = "Total Belanja = Rp " + total.toLocaleString('id-ID');
}

// Logika Tantangan (Hitung Rata-Rata Nilai)
function hitungRataRata() {
    let tugas = Number(document.getElementById('tugas').value);
    let uts = Number(document.getElementById('uts').value);
    let uas = Number(document.getElementById('uas').value);

    let rataRata = (tugas + uts + uas) / 3;

    document.getElementById('hasilRataRata').innerText = "Rata-Rata Nilai = " + rataRata.toFixed(2);
}