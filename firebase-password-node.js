const { initializeApp } = require('firebase/app');
const { getAuth, updatePassword, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyCB_ldvHJpDsKQoYm2eB_wtY0-gsk3fkYQ",
  authDomain: "cashflow-app-b64d8.firebaseapp.com",
  projectId: "cashflow-app-b64d8",
  storageBucket: "cashflow-app-b64d8.firebasestorage.app",
  messagingSenderId: "214147949609",
  appId: "1:214147949609:web:af02daa9690e74a172a838",
  measurementId: "G-6L0V3N85VV"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para cambiar la contraseña
async function cambiarContraseña(email, contraseñaActual, nuevaContraseña) {
    try {
        // Primero, reautenticar al usuario
        const credencial = await signInWithEmailAndPassword(auth, email, contraseñaActual);
        const usuario = credencial.user;

        // Cambiar la contraseña
        await updatePassword(usuario, nuevaContraseña);
        console.log('Contraseña actualizada exitosamente');
    } catch (error) {
        console.error('Error al cambiar la contraseña:', error.message);
        throw error;
    }
}

// Ejemplo de uso de la función cambiarContraseña
// Reemplaza estos valores con credenciales reales para probar
// cambiarContraseña('usuario@example.com', 'contraseñaActual', 'nuevaContraseña')
//   .then(() => console.log('Cambio de contraseña completado'))
//   .catch((error) => console.error('Error:', error));