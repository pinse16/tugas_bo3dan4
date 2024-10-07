class Sensor {
    constructor(nama, lokasi) {
        this.nama = nama;
        this.lokasi = lokasi;
        this._status = "Mati";
    }

    aktifkan() {
        this._status = "Aktif";
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan`;
    }

    matikan() {
        this._status = "Mati";
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah dimatikan`;
    }

    status() {
        return `Sensor ${this.nama} di lokasi ${this.lokasi} statusnya ${this._status}`;
    }
}

class SensorLaut extends Sensor {
    constructor(nama, lokasi, kedalaman) {
        super(nama, lokasi);
        this.kedalaman = kedalaman;
    }

    aktifkan() {
        this._status = "Aktif";
        return `Sensor Laut ${this.nama} di lokasi ${this.lokasi} dengan kedalaman ${this.kedalaman} meter telah diaktifkan`;
    }
}

const sensorLautA = new Sensor("Laut A", "Kawasan A");
console.log(sensorLautA.aktifkan()); 
console.log(sensorLautA.status());
console.log(sensorLautA.matikan());

const sensorLautB = new SensorLaut("Laut B", "Samudra Pasifik", 500);
console.log(sensorLautB.aktifkan()); 
console.log(sensorLautB.status());

