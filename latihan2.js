class kapal {
    constructor(nama, jenis, kecepatan, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `nama kapal : ${this.nama} <br>
                jenis : ${this.jenis} <br>
                kecepatan : ${this.kecepatan} knot <br>
                kapasitas : ${this.kapasitas} orang <br>
                panjang : ${this.panjang} meter <br>
                lebar : ${this.lebar} meter`;
    }
}

class kapalPesiar extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, fasilitas) {
        super(nama, 'Kapal Pesiar', kecepatan, kapasitas, panjang, lebar);
        this.fasilitas = fasilitas;
    }

    infoKapal() {
        return super.infoKapal() + `<br>Fasilitas: ${this.fasilitas.join(', ')}`;
    }
}

class kapalPerang extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, persenjataan) {
        super(nama, 'Kapal Perang', kecepatan, kapasitas, panjang, lebar);
        this.persenjataan = persenjataan;
    }

    infoKapal() {
        return super.infoKapal() + `<br>Persenjataan: ${this.persenjataan.join(', ')}`;
    }
}

class kapalSelam extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, kedalamanMaksimum) {
        super(nama, 'Kapal Selam', kecepatan, kapasitas, panjang, lebar);
        this.kedalamanMaksimum = kedalamanMaksimum;
    }

    infoKapal() {
        return super.infoKapal() + `<br>Kedalaman Maksimum: ${this.kedalamanMaksimum} meter`;
    }
}

class kapalPenumpang extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, rute) {
        super(nama, 'Kapal Penumpang', kecepatan, kapasitas, panjang, lebar);
        this.rute = rute;
    }

    infoKapal() {
        return super.infoKapal() + `<br>Rute: ${this.rute}`;
    }
}

class kapalKargo extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, jenisMuatan) {
        super(nama, 'Kapal Kargo', kecepatan, kapasitas, panjang, lebar);
        this.jenisMuatan = jenisMuatan;
    }

    infoKapal() {
        return super.infoKapal() + `<br>Jenis Muatan: ${this.jenisMuatan}`;
    }
}

class kapalLayar extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, bahanLayar) {
        super(nama, 'Kapal Layar', kecepatan, kapasitas, panjang, lebar);
        this.bahanLayar = bahanLayar;
    }

    infoKapal() {
        return super.infoKapal() + `<br>Bahan Layar: ${this.bahanLayar}`;
    }
}

const u47 = new kapalSelam("U-47", 20, 40, 67, 7, 230);
const queenMary = new kapalPenumpang("Queen Mary 2", 25, 2700, 345, 41, "London - New York");
const everGiven = new kapalKargo("Ever Given", 22, 200, 400, 59, "Kontainer");
const clipper = new kapalLayar("Cutty Sark", 17, 35, 85, 11, "Kapas");

document.getElementById("pinse").innerHTML = `
<h2>Informasi Kapal Selam</h2>
<p>${u47.infoKapal()}</p>
<h2>Informasi Kapal Penumpang</h2>
<p>${queenMary.infoKapal()}</p>
<h2>Informasi Kapal Kargo</h2>
<p>${everGiven.infoKapal()}</p>
<h2>Informasi Kapal Layar</h2>
<p>${clipper.infoKapal()}</p>`;