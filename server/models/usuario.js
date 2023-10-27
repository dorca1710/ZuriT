import mongoose from 'mongoose';

// Importa el esquema de mongoose
const Schema = mongoose.Schema;

// Define el esquema del usuario
const usuarioSchema = new Schema({
rut: {
    type: String,
    unique: true, // Asegura que el Rut sea único
    required: [true, 'Rut obligatorio']
},
nombre: {
    type: String,
    required: [true, 'Nombre obligatorio']
    },
    apellidos: String,
    fechaNacimiento: Date,
    direccion: String,
    telefono: String,
    ciudad: String,
email: {
    type: String,
    unique: true, // Asegura que el email sea único
    required: [true, 'Email obligatorio']
    },
fecha: {
    type: Date,
    default: Date.now
    },
activo: {
    type: Boolean,
    default: true
    }
});



// Crear el modelo de usuario
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Exportar el modelo de usuario
export default Usuario;
