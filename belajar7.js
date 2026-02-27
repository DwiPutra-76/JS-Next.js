//TEMPLATES LITERALS
const nama = "Andi";
const umur = 20;
const perkenalan = `Halo, saya ${nama}, umur saya adalah ${umur} tahun. `;
console.log(perkenalan);

//Expression
const a = 7;
const b = 10;
console.log(`Hasil penjumlahan: ${a + b}`);

//Multiline String
const bio = `Nama: Siti
Umur: 20
Asal: Surabaya`;
console.log(bio);

//HTML fragments
// const title = "Belajar JS";
// const content = "Template Literals itu keren!";
// const html = `
// <div>
// <h1>${title}</h1>
// <p>${content}</p>
// </div>
// `

//DEFAULT PARAMETRS
function greet(nama = "Guest") {
    console.log(`Halo, ${nama}`);
}
greet();
greet("Andi");

function hitungLuas(panjang = 1, lebar = 1) {
    return panjang * lebar;
}
console.log(hitungLuas());
console.log(hitungLuas(5));
console.log(hitungLuas(5, 10));

//Dengan expression
function tambah(a, b = a) {
    return a + b;
}
console.log(tambah(5));
console.log(tambah(5, 3));