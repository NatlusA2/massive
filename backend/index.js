
const express = require('express');
const axios = require('axios');
// const router = require('./routes/users.js')
const cors = require('cors');
const db = require('./config/database.js');
const mysql = require ('mysql2');
const app = express();
// app.use('/users', router)

const port = 5000
app.use(express.json())
app.use(cors())

app.get("/penitipan", (req, res) => {
    const q = "SELECT * FROM penitipan";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});


app.post("/create", (req, res,) => {
    const nama_penitipan = req.body.nama_penitipan;
    const nama_pemilik = req.body.nama_pemilik;
    const alamat = req.body.alamat;
    const no_hp = req.body.no_hp;
    const pelayanan = req.body.pelayanan;

    db.query(
        "INSERT INTO penitipan (nama_penitipan, nama_pemilik, alamat, no_hp, pelayanan) VALUES (?,?,?,?,?)",
        [nama_penitipan, nama_pemilik, alamat, no_hp, pelayanan],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("berhasil menambah penitipan");
            }
        }
    );

});

 app.get("/penitipandetail/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM penitipan WHERE id = ?", id, (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
 });

 app.put("/penitipan/:id",  (req, res) => {
    const penitipanid = req.params.id;
    const q = "UPDATE penitipan SET `nama_penitipan`= ?, `nama_pemilik`= ?, `alamat`= ?, `no_hp`= ?, `pelayanan`= ? WHERE id =  ?";
    const values = [
        req.body.nama_penitipan,
        req.body.nama_pemilik,
        req.body.alamat,
        req.body.no_hp,
        req.body.pelayanan,
    ];

    db.query(q, [...values, penitipanid], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
 });

 app.delete("/penitipan/:id", (req, res) => {
    const penitipanid = req.params.id;
    const q = " DELETE FROM penitipan WHERE id = ? ";

    db.query(q, [penitipanid], (err, data) => {
        if(err) return res.send(err);
        return res.json(data);
    });

 });

app.listen(5000, ()=> console.log('server sedang berjalan diport 5000'));

