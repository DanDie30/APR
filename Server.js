const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const app = express();
const port = 3000;

// Configuración de Firebase
const serviceAccount = require("./aprproject-96f12-firebase-adminsdk-i0i18-386b43283b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://aprproject-96f12.firebaseio.com', // Reemplaza con la URL de tu base de datos
});

const db = admin.firestore();

app.use(bodyParser.json());

// Ruta para manejar la autenticación
app.post('/login', async (req, res) => {
  const { nombre, clave } = req.body;

  try {
    // Lógica de autenticación con Firestore
    const userRef = db.collection('usuario').doc(nombre);
    const snapshot = await userRef.get();

    if (snapshot.exists) {
      const user = snapshot.data();

      // Verifica las credenciales
      if (user.clave === clave) {
        res.json({ success: true, message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error de autenticación:', error.message);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
