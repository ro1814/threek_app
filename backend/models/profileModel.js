import mongoose from 'mongoose'
 
const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    primApellido: {
        type: String,
        required: true
    },
    segApellido: {type: String},
    genero: {
        type: String,
        required: true
    },
    fecNac: {
        type: Date,
        required: true,
        trim: true
    },
    dni: {
        type: String,
        required: true
    },
    direccion: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    }
},{
    timestamp: true
}
    )

    const Profile = mongoose.model('Profile', profileSchema)
    export default Profile