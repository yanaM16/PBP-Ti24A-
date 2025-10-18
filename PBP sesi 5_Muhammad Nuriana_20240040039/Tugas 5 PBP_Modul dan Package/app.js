const readline = require("readline");
const { tambah, kurang, kali, bagi } = require("./modul/operasi/modulOperasi");
const { bulatkanKeAtas, bulatkanKeBawah, bulatkanStandar } = require("./modul/pembulatan/modulPembulatan");
const { bilanganAcak } = require("./modul/acak/modulAcak");
const { garis, validasiAngka } = require("./modul/pembantu/modulPembantu");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

garis();
console.log(" Program Operasi Bilangan");
garis();
console.log("1. Operasi Matematika (+, -, x, ÷)");
console.log("2. Pembulatan Bilangan");
console.log("3. Bilangan Acak");
console.log("4. Keluar");
garis();

rl.question("Pilih menu (1-4): ", (pilihan) => {
  if (pilihan === "1") {
    rl.question("Masukkan bilangan pertama: ", (a) => {
      rl.question("Masukkan bilangan kedua: ", (b) => {
        const x = parseFloat(a);
        const y = parseFloat(b);
        if (validasiAngka(x) && validasiAngka(y)) {
          console.log(`\nHasil Penjumlahan: ${tambah(x, y)}`);
          console.log(`Hasil Pengurangan: ${kurang(x, y)}`);
          console.log(`Hasil Perkalian: ${kali(x, y)}`);
          console.log(`Hasil Pembagian: ${bagi(x, y)}`);
        } else {
          console.log("\n Input harus berupa angka!");
        }
        rl.close();
      });
    });
  }

  else if (pilihan === "2") {
    rl.question("Masukkan bilangan desimal: ", (angka) => {
      const n = parseFloat(angka);
      if (validasiAngka(n)) {
        console.log(`\nBulat ke atas: ${bulatkanKeAtas(n)}`);
        console.log(`Bulat ke bawah: ${bulatkanKeBawah(n)}`);
        console.log(`Bulat standar: ${bulatkanStandar(n)}`);
      } else {
        console.log("\n Input tidak valid!");
      }
      rl.close();
    });
  }

  else if (pilihan === "3") {
    rl.question("Masukkan batas bawah: ", (min) => {
      rl.question("Masukkan batas atas: ", (max) => {
        const a = parseInt(min);
        const b = parseInt(max);
        if (validasiAngka(a) && validasiAngka(b)) {
          console.log(`\n Bilangan acak antara ${a} dan ${b}: ${bilanganAcak(a, b)}`);
        } else {
          console.log("\n Input harus angka!");
        }
        rl.close();
      });
    });
  }

  else if (pilihan === "4") {
    console.log("\n Terima kasih telah menggunakan program ini!");
    rl.close();
  }

  else {
    console.log("\n Pilihan tidak valid!");
    rl.close();
  }
});
