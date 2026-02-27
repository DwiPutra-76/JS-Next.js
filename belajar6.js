//DESTRUCTURING & RESTRUCTURING
//DESTRUCTURING
//Skip Item di Array
const angka = [1, 2, 3, 4];
const [pertama, , ketiga] = angka;
console.log(pertama);
console.log(ketiga);

//Mengganti variabel saat destructuring
const user = {
    nama: "Anggi",
    umur: 20
};
const {nama: namaLengkap, umur: usia} = user;
console.log(namaLengkap);
console.log(usia);

//RESTRUCTURING
const nama = "Ilham";
const umur = 16;
const pengguna = { nama, umur };
console.log(pengguna);

//Ke array
const angka1 = 1;
const angka2 = 2;
const angka3 = 3;

const bilangan = [angka1, angka2, angka3];
console.log(bilangan);