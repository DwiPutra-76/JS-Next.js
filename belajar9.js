//IMPORT
//import dari named export
import greet, { tambah, kurang } from './belajar8.js';

console.log(tambah(5, 3));
console.log(kurang(5, 3));

greet("Budi");

//PROMISE
const janji = new Promise((resolve, reject) => {
    let sukses = true;
    if (sukses) {
        resolve("Berhasil!");
    } else {
        reject("Gagal!");
    }
});

janji
.then((hasil) => {
    console.log(hasil);
})
.catch((error) => {
    console.log(error);
});

//Kasus sederhana
function cekLogin(user) {
    return new Promise((resolve, reject) => {
        if (user == "admin") {
            resolve("Login Berhasil!");
        } else {
            reject("Login Gagal!")
        }
    });
}

cekLogin("admin")
.then((res) => console.log(res))
.catch((err) => console.log(err));

//setTimeout
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Selesai!");
        }, ms);
    });
}

delay(6000) .then((hasil) => {
    console.log(hasil);
});