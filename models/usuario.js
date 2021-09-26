import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    capacidadDeAdopcion:{ type: Boolean, default: false },
    nombre:{ type: String, required: [true, 'Nombre Obligatorio'] },
    apellido:{ type: String, required: [true, 'Apellido Obligatorio'] },
    telefono:number,
    tipoDeCasa: String,
    mascota: { type: Boolean, default: false },
    edadMascota: number,
    castrada:{ type: Boolean, default: false },
    correoElectronico: { type: String, required: [true, 'Correo Obligatorio'] },
    Contraseña: { type: String, required: [true, 'Correo Obligatorio'] }
});

// Convertir a modelo

const usuario = mongoose.model('usuario', usuarioSchema);
export default usuario;