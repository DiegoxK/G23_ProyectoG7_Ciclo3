import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productosSchema = Schema({
    img: { type: String, required: [true, "Enlace de imagen obligatorio"] },
    tipoProducto:String,
    nombre: { type: String, required: [true, "Nombre obligatorio"] },
    stock:Number,
    precio: { type: Number, required: [true, "El precio es obligatorio"] },
    caracteristica: { type: String, required: [true, "Caracteristica obligatoria"] },
});

// Convertir a modelo

const productos = mongoose.model("Producto", productosSchema);
export default productos;