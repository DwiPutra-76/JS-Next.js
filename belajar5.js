//SPREAD OPERATOR
//Menyebarkan isi Array
const angka = [1, 2, 3];
console.log(...angka);

//Menggabungkan Array
const buah1 = ["Apel", "Jeruk"];
const buah2 = ["Durian", "Nangka"];

const semuaBuah = [...buah1, ...buah2];
console.log(semuaBuah);

//Menyalin Array
const warnaAsli = ["Merah", "Biru"];
const warnaSalinan = [...warnaAsli];
warnaSalinan.push("Hijau");
console.log(warnaAsli);
console.log(warnaSalinan);

//Spread pada object
const user = {
    nama: "Ilham",
    umur: 25
};

const userBaru = {
    ...user,
    pekerjaan: "Programmer"
};

console.log(userBaru);

//Spread pada Function Arguments
function tambah (a, b, c) {
    return a + b + c;
};

const bilangan = [1, 2, 3];
console.log(tambah(...angka));

//REST PARAMETER
//Menangkap banyak argumen dalam function
function jumlahkan(...angka) {
    let total = 0;
    for (let nilai of angka) {
        total += nilai;
    }
    return total;
};

console.log(jumlahkan(1, 2, 3));
console.log(jumlahkan(1, 2, 3, 4));

//rest parameter harus di akhir
function cekData(nama, ...hobi) {
    console.log("Nama: " + nama);
    console.log("Hobi: " + hobi);
};
cetakData("Ilham", "Ngoding", "Mancing", "Main Game")

//Pada destructuring
//Array Desrtructuring
const Angka = [1, 2, 3, 4, 5];
const [pertama, kedua, ...sisanya] = Angka;

console.log(pertama);
console.log(kedua);
console.log(sisanya);

//Obj destructuring
const pengguna = {
    nama: "Andi",
    umur: 17,
    kota: "Surakakrta"
};
const {nama, ...infoLain} = pengguna;
console.log(nama);
console.log(infoLain);