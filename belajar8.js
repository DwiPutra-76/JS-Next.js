//MODULE (IMPORT & EXPORT)
//named export
export function tambah(a, b) {
    return a + b;
};
export function kurang(a, b) {
    return a - b;
}

//default export
export default function greet(nama) {
    console.log(`Halo, ${nama}`);
};