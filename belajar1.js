console.log('Hello dari Node.js!');

// tipe data
let nama = 'Ilham Hama';
console.log(nama);

let umur = 16;
let tinggi = 175.5;
console.log(umur, tinggi);

let isOnline = true;
let isLogin = false;
console.log(isOnline, isLogin);

let alamat;
console.log(alamat);//undefined

let data = null;//null

let id = Symbol('id');//untuk membuat identifier yang unik

//BigInt
let angkaBesar = 1234567890123546788n;//untuk bilangan yang sangat besar, melebihi number
console.log(angkaBesar)

//object
let Mahasiswa = {
    Nama: 'Ilham Hama',
    umur: 25,
    universitas: "Institut Teknologi Bandung",
    jurusan: "Informatika"
}
console.log(Mahasiswa)

let buah = ["Apel", "Pisang", "Nanas"];
console.log(buah [1]);

function sapa() {
    console.log("Halo Semuanya!");
}

//VARIABEL

//var
var nama2 = "Ilham Hama";
console.log(nama2);

var x = 20;
var x = 30;
console.log(x);

//let
let age = 25;
console.log(age);

let y = 10;
y = 15; // boleh diubah
console.log(y);

// let y = 20; // error! tidak boleh deklarasi ulang
//contoh block-scoped atau hanya bisa dikenali di dalam block tempat dia dibuat
{
  let z = 100;
  console.log(z); // 100
}

console.log(z); // error: z is not defined


// const
const PI = 3.14;
console.log(PI);

//tidak boleh reassign
const nama3 = "Santrikoding";
nama3 = "Ilham Hama";
console.log(nama3);

//jika array dan object boleh
const angka = [1, 2, 3];
angka.push(4); // boleh
console.log(angka); // [1,2,3,4]

