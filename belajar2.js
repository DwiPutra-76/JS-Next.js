//OPERATOR
//Aritmatika
let a = 10;
let b = 3;
console.log(a + b); 
console.log(a % b); 
console.log(a ** b);

//Perbandingan
console.log(5 == '5');
console.log(5 === '5');
console.log(5 !== 5);

//Logika
let x = true;
let y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false

//Penugasan
let angka = 10;
angka += 5; // angka = angka + 5
console.log(angka); // 15

//Typeof
//untuk mengecek tipe data
console.log(typeof "Hello");   // string
console.log(typeof 123);       // number
console.log(typeof true);      // boolean
console.log(typeof {});        // object

//Ternary
//format: kondisi ? nilaiJikaTrue : nilaiJikaFalse
let umur = 18;
let status = umur >= 17 ? "Dewasa" : "Anak-anak";
console.log(status);

//PERCAB IF-ELSE
let age = 20;
if (age >= 18) {
    console.log("Kamu wes gerang");
}

let nilai = 80;
if (nilai >= 70) {
    console.log("Lulus!");
}

let nilaiUj = 85;
if (nilaiUj >= 90) {
    console.log('Nilai A');
} else if (nilaiUj >=80) {
    console.log("Nilai B");
} else if (nilaiUj >= 70) {
    console.log('Nilai C');
} else {
    console.log("Nilai D")
}

//PERCAB SWITCH
let hari = 3;
let namaHari;

switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  default:
    namaHari = "Hari tidak valid";
}
console.log(namaHari);

//FOR LOOP
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

//WHILE LOOP
let i = 1;

while (i <= 5) {
  console.log("Angka " + i);
  i++;
}

//DO-WHILE LOOP
let j = 1;

do {
  console.log("Nomor " + j);
  j++;
} while (j <= 5);

//BREAK & CONTINUE
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Lewati iterasi saat i = 3
  }
  console.log(i);
}
// Output: 1, 2, 4, 5