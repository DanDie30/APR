// Ejemplo de pantalla de inicio de sesión
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [nombre, setName] = useState('');
  const [clave, setClave] = useState('');


  const handleLogin = async () => {
  
     // Lógica de autenticación exitosa
     // Puedes utilizar AsyncStorage o cualquier otro método de almacenamiento
     // para guardar la información del usuario autenticado
     navigation.navigate('MainApp', { screen: 'Home' });

  };

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
<Image source={require('../assets/favicon.png')} />
        </View>
        <View>
<Text style={styles.header}>APR Proyecto</Text>

<Text style={styles.subHeader}> Inicio de Sesión</Text>

        </View>

        <View style={styles.formContainer}>
      <Text style={styles.label}>ID: </Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setName} placeholder='Ingrese ID' />
      <Text style={styles.label}>Clave:</Text>
      <TextInput style={styles.input} value={clave} onChangeText={setClave} placeholder='Ingrese Clave' secureTextEntry />
      <Button title="Login" onPress={handleLogin} color={'#000'} />
    </View>
            </View>

  );
};

const styles = StyleSheet.create({
    header:{
textAlign: 'center',
fontSize: 30,
margin: 15,
fontWeight: 'bold'
    },
    subHeader:{
        margin: 6,
        fontSize: 20,
        textAlign: 'center'
    },
    logoContainer:{
marginBottom: 20,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7fafc'
    },

    formContainer:{
        width: '100%',
        maxWidth: 350,
        padding: 20,


    },
    label:{
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
      padding: 5,
      marginBottom: 10,
      borderRadius: 5,  
    },
})

export default LoginScreen;
