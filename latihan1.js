const orang = {
    nama : "Vinsa",
    alamat : "Bekasi",
    usia : 19,
    jk : "laki-laki"
}

console.log(orang.nama)
console.log(orang.alamat)
console.log(orang.usia)
console.log(orang.jk)

console.log(`Nama saya $(orang.nama) , saya berasal dari $(orang.alamat) , berjenis kelamin $(orang.jk), dan usia saya sekarang $(orang.usia)tahun`)

function mahasiswaSIK(nama, kelas, angkatan) {
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const fadli = new mahasiswaSIK("Fadli Kurnia", "b", "2023")
const nelita = new mahasiswaSIK("Nelita", "b", "2023")
const gapin = new mahasiswaSIK("Gapin", "b", "2023")

console