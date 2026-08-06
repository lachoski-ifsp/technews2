
// ============================================
// db.js — Conexão com o MySQL
// ============================================

const mysql = require('mysql2');
require('dotenv').config();

// Criar a conexão com o banco de dados
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

// Tentar conectar
connection.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar no MySQL:', erro.message);
        return;
    }
    console.log('✅ Conectado ao MySQL com sucesso!');
});

// Exportar para usar em outros arquivos
module.exports = connection;