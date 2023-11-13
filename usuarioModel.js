const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: String,
  dataNascimento: Date,
  telefone: String,
  email: String,
  senha: String,
  saldoPontos: Number,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
