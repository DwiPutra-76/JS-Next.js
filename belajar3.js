//FUNCTION DECLARATION
function sayHello() {
    console.log("Halo, Dunia!");
};

sayHello();

//dengan parameter
function greet(nama) {
    console.log("Halo " + nama + "!");
};
greet("Ilham");
greet("Siti");

//dengan return value
function tambah(a, b) {
    return a + b;
};

let hasil = tambah(5, 3);
console.log(hasil);

function kurang(a, b) {
    return a - b;
}
let hasilkurang = kurang(5, 3);
console.log(hasilkurang);

//Expression
const kali = function(a, b) {
    return a * b;
};

console.log(kali(4, 5));

//ARROW FUNCTION
const hello = () => {
    console.log("Halo, Dunia ");
};

//parameter
const sapa = (nama) => {
    console.log("Halo " + nama + "!");
};
sapa("Ilham");

//Satu parameter
const nyapa = nama => {
    console.log("Halo" + nama);
}
nyapa("Andi");

//return otomatis
const kurang = (a, b) => a + b;
console.log(kurang(20, 10));

//mengembalikan Object
const buatUser = (nama, umur) => {
    nama: nama;
    umur:umur;
}
console.log(buatUser("Anggi", 20));