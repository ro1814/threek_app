import mongoose from 'mongoose'

const retoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    deporte: {
        type: String,
        required: true
    },
    causa: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: String,
        required: true
    },
    objetivoRec: {
        type: Number,
        required: true
    },
    recaudado: {
        type: Number,
        required: true
    },
    imagen: { 
        type: String,
        required: true
    },
    videoURL: {
        type: String,
    },
    socialMedia:{
        twitter: String,
        facebook: String,
        instagram: String,

    }
}, {
    timestamp: true
})

const Reto = mongoose.model('Reto', retoSchema)

export default Reto 