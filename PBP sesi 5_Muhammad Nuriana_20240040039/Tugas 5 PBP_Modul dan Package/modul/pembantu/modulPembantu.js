function garis() {
    console.log("-----------------");
}

function validasiAngka(nilai) {
    return !isNaN(nilai);
}

module.exports = { garis, validasiAngka };