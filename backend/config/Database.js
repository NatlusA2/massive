const express = require ('express');

const mysql = require ('mysql2');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "opets_db",

});

module.exports = db;