const http = require('http');

// Data sesuai contoh tugas
var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

// Membuat server HTTP
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' || req.url === '/home') {
    // Tampilkan semua data
    res.end(JSON.stringify(motoGP, null, 2));

  } else if (req.url === '/country') {
    // Kelompokkan berdasarkan country
    const groupedByCountry = {};
    motoGP.forEach(item => {
        
      const country = item.winner.country;
      if (!groupedByCountry[country]) groupedByCountry[country] = [];
      groupedByCountry[country].push(item);
    });
    res.end(JSON.stringify(groupedByCountry, null, 2));

  } else if (req.url === '/name') {
    // Kelompokkan berdasarkan nama pemenang
    const groupedByName = {};
    motoGP.forEach(item => {

      const name = item.winner.firstName + ' ' + item.winner.lastName;
      if (!groupedByName[name]) groupedByName[name] = [];
      groupedByName[name].push(item);
    });
    res.end(JSON.stringify(groupedByName, null, 2));

  } else {
    // Jika URL tidak sesuai
    res.statusCode = 400;
    res.end(JSON.stringify({ message: 'Bad Request' }));
  }
});

// Jalankan server di port 8000
server.listen(8000, () => {
  console.log('Server berjalan di http://localhost:8000');
});
