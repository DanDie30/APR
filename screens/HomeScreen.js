import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './DetailsScreen'
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import * as ImagePicker from 'expo-image-picker';

const Tab = createBottomTabNavigator();

const AppTabs = ( {navigation} ) => {



  const pastScreen = () => {
    // Lógica de autenticación aquí
    // Puedes utilizar AsyncStorage o cualquier otro método de almacenamiento
    // para guardar la información del usuario autenticado
    navigation.navigate('Details'); // Navegar a la pantalla principal después del inicio de sesión
  };

  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(''); // Estado para almacenar el título de la imagen seleccionada
  
  const pickImage = async () => {

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [50, 90],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImageTitle(result.assets[0]?.filename || 'Foto Importada');
      setImage(result.assets[0]?.uri);
    }
  };
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    
    <View style={styles.container} >

      
    <View style={styles.logoContainer}>
      <Image source={require('../assets/newspaper.png')}></Image>
      </View>
      <View >

      <Text style={styles.textHeader}>
        Generador de Informes
      </Text>
         </View>

    

     


         <View style={styles.formContainer}>
      <Text style={styles.label}>Titulo del Reporte </Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder='Ingrese titulo del reporte' />
      <View style={styles.adjImg}>
      <Button title="Escoger imagen" onPress={pickImage} color={'#000'} />
        {imageTitle !== '' && <Text style={styles.importImage}>{imageTitle}</Text>}
      </View>
     
      <Text style={styles.label}>Descripción</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder='Ingrese descripción'  />
      <Button title="Generar reporte"   color={'#000'}  />

    </View>
          
             </View>


    
  );
};

const styles = StyleSheet.create({
  adjImg:{
flexDirection: 'row',
alignItems: 'center',
gap: 10,

marginBottom: 10,
  },
  importImage:{
marginBottom: 0,
justifyContent: 'center',
alignItems: 'center'
  },
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f7fafc'

},
logoContainer:{
  marginBottom: 40,

},
textHeader:{
textAlign: 'center',
fontSize: 22,
fontWeight: 'bold',
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
camera: {
  flex: 1,
},
buttonContainer: {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: 'transparent',
  margin: 64,
},
button: {
  flex: 1,
  alignSelf: 'flex-end',
  alignItems: 'center',
},
text: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
},



})

export default AppTabs;
