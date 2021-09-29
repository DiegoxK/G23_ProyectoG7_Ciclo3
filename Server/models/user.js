import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
  capacidadDeAdopcion: { type: Boolean, default: true },
  nombre: { type: String, required: [true, "Nombre Obligatorio"] },
  apellido: { type: String, required: [true, "Apellido Obligatorio"] },
  telefono: Number,
  tipoDeCasa: String,
  mascota: { type: Boolean, default: false },
  edadMascota: Number,
  castrada: Boolean,
  correoElectronico: { type: String, required: [true, "Correo Obligatorio"] },
  contraseña: { type: String, required: [true, "Correo Obligatorio"] },
});

// Convertir a modelo

const usuario = mongoose.model("Usuario", usuarioSchema);
export default usuario;
