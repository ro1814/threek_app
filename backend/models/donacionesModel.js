import mongoose from 'mongoose'

const sponsorSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    donacionAReto: [
      {
        nombre: { type: String, required: true },
        cantidad: { type: Number, required: true },
        precio: { type: Number, required: true },
        reto: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Reto',
        },
      },
    ],
    infoDonVisitante: {
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      segApellido: { type: String },
      email: { type: String, required: true },  
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    }
  },
  {
    timestamps: true,
  }
)

const Sponsor = mongoose.model('Sponsor', sponsorSchema)

export default Sponsor