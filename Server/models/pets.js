import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mascotasSchema = Schema({
  img_mascota: { type: String, required: [true, "Imagen Obligatoria"]  },
  nombre: { type: String, required: [true, "Nombre Obligatorio"] },
  edadMascota: { type: Number, required:[true,"La Edad es obligatoria"] },
  descripcion: { type: String, required: [true, "Descripción Obligatoria"] },
});

// Convertir a modelo

const mascotas = mongoose.model("Mascota", mascotasSchema);
export default mascotas;