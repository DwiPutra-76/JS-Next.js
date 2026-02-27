//ARRAY
let buah = ["Nanas", "Durian", "Mangga"];
console.log(buah);

//new array
let angka = new Array(1, 2, 3, 4, 5);
console.log(angka);

//Mengakses data array
let hewan = ["Kucing", "Anjing", "Kelinci"];
console.log(hewan[0]);
console.log(hewan[1]);
console.log(hewan[2]);

//Mengubah data
let binatang = ["Kucing", "Anjing", "Kelinci"];
binatang[1] = "Burung";
console.log(binatang);
console.log(binatang.length);

//MENTHOD PADA ARRAY
//push()
buah.push("Mangga");
console.log(buah)

//pop
buah.pop();
console.log(buah);

//shift()
buah.shift();
console.log(buah);

//unshift()
buah.unshift("Strawberry");
console.log(buah);

//forEach()
buah.forEach(function(item, inex) {
    console.log(index, item);
});
//atau
buah.forEach((item, index) => console.log(index, item));

//map()
let angkaBaru = angka.map(function(x) {
    return x * 2;
});
console.log(angkaBaru);

//filter()
let angkaGanjil = angka.filter(function(x) {
    return x % 2 == 0
});
console.log(angkaGanjil);

//contoh
let siswa = ["Ilham", "Andi", "Anggi", "Siti"];
siswa.push("Reyhan");
siswa.pop();

siswa.forEach(function(nama) {
    console.log(nama);
});

//OBJECT
//object literal
let mahasiswa = {
    nama: "Ilham",
    umur: "16",
    jurusan: "RPL"
}
console.log(mahasiswa);

//new object()
let Siswa = new Object();
Siswa.nama = "Andi";
Siswa.umur = "17";
Siswa.kelas = "11 IPS";
console.log(Siswa);

//Dot notation
console.log(mahasiswa.nama);
console.log(Siswa.umur);

//bracket notation
console.log(mahasiswa["jurusan"]);
console.log(Siswa["kelas"]);

//menambah property
mahasiswa.alamat = "Surabaya";
console.log(mahasiswa);

//mengubah
mahasiswa.umur = 21;
console.log(mahasiswa);

//menghapus prop
delete mahasiswa.jurusan;
console.log(mahasiswa);

//object di dalam object
let mobil = {
    merk: "Hyundai",
    model: "Palisade",
    mesin: {
        kapasitas: "2.199cc",
        bahanBakar: "Bensin"
    }
}
console.log(mobil.mesin.kapasitas);

//looping object
for (let key in mahasiswa) {
    console.log(key + " : " + mahasiswa[key]);
}