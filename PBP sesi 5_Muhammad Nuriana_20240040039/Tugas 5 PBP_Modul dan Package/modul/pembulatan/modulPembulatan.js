function bulatkanKeAtas(angka) {
    return Math.ceil(angka);
}

function bulatkanKeBawah(angka) {
    return Math.floor(angka);
}

function bulatkanStandar(angka) {
    return Math.round(angka);
}

module.exports = { bulatkanKeAtas, bulatkanKeBawah, bulatkanStandar };