//Buat Sebuah perulangan dengan Array yang menampilkan object type motors 
let motor = [
{merk: "honda", type: "beat", warna: "merah", tahun: 2010},
{merk: "honda", type: "vario", warna: "hitam", tahun: 2011},
{merk: "honda", type: "supra", warna: "biru", tahun: 2012},
{merk: "honda", type: "pcx", warna: "kuning", tahun: 2013},
{merk: "honda", type: "revo", warna: "hijau", tahun: 2014},
];
for (let i = 0; i < motor.length; i++) {
console.log(`motor ${motor[i].merk} ${motor[i].type} berwarna ${motor[i].warna} tahun ${motor[i].tahun}`);
}

///Buat Sebuah perulangan dengan yang menampilkan object rumah
let rumah = [
    {
        type: "rumah",
        harga: 100000000,
        luas: 100,
        kamar: 4,
        kamarmandi: 2,
        garasi: 1,
        alamat: "jl. abc no. 123",
        status: "terjual"
    },
    {
        type: "rumah",
        harga: 200000000,
        luas: 200,
        kamar: 5,
        kamarmandi: 3,
        garasi: 2,
        alamat: "jl. def no. 456",
        status: "terjual"
    },
    {
        type: "rumah",
        harga: 300000000,
        luas: 300,
        kamar: 6,
        kamarmandi: 4,
        garasi: 3,
        alamat: "jl. ghi no. 789",
        status: "belum terjual"
    },
    {
        type: "rumah",
        harga: 400000000,
        luas: 400,
        kamar: 7,
        kamarmandi: 5,
        garasi: 4,
        alamat: "jl. jkl no. 101112",
        status: "belum terjual"
    },
    {
        type: "rumah",
        harga: 500000000,
        luas: 500,
        kamar: 8,
        kamarmandi: 6,
        garasi: 5,
        alamat: "jl. mno no. 131415",
        status: "belum terjual"
    }
];
for (let i = 0; i < rumah.length; i++) {
    console.log(`Rumah ${rumah[i].type} dengan harga ${rumah[i].harga} dengan luas ${rumah[i].luas} dengan kamar ${rumah[i].kamar} dengan kamar mandi ${rumah[i].kamarmandi} dengan garasi ${rumah[i].garasi} dengan alamat ${rumah[i].alamat} dengan status ${rumah[i].status}`);
}