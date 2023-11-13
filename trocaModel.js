const mongoose = require('mongoose');
const geojson = require('mongoose-geojson-schema');

const trocaSchema = new mongoose.Schema({
  id: int, 
  nome: String,
  endereco: String,
  horario: String,
  coordenadas: mongoose.Schema.Types.Point,
});

const troca = mongoose.model('troca', trocaSchema);

module.exports = troca;
