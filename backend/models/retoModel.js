import mongoose from "mongoose"

const retoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    creador: {
      type: String,
      required: true,
    },
    selecDeporte: { 
      ciclismo: {type: String},
      running: {type: String},
      natacion: {type: String},
      senderismo: {type: String},
      escalada: {type: String}
    },
    selecCausa: {
      investigacion: { type: String},
      calVida: { type: String },
      monitorizacion: { type: String }
    },
    titulo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    fechaInicio: {
      type: String,
      required: true,
    },
    objetivoRec: {
      type: Number,
      required: true,
    },
    recaudado: {
      type: Number,
    },
    imagen: {
      type: String,
      required: true,
    },
    videoURL: {
      type: String,
    },
    socialMedia: {
      type: String,

    },
  },
  {
    timestamp: true,
  }
);

const Reto = mongoose.model('Reto', retoSchema);

export default Reto
